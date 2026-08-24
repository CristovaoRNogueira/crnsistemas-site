#!/usr/bin/env bash

set -Eeuo pipefail

REMOTE_HOST="ubuntu@56.126.163.66"
SSH_KEY="$HOME/.ssh/lightsail-default.pem"
REMOTE_DIR="/opt/CRNSISTEMAS/site"

SITE_URL="https://crnsistemas.com.br"
SGPC_URL="https://sgpc.crnsistemas.com.br"
LOGO_URL="https://crnsistemas.com.br/brand/crn-sistemas-horizontal.png"

fail() {
  echo
  echo "ERRO: $1"
  exit 1
}

echo "=============================================="
echo " CRN Sistemas — Deploy do site institucional"
echo "=============================================="
echo

echo "==> Verificando projeto..."
cd "$(dirname "$0")/.."

[[ -f package.json ]] || fail "package.json não encontrado."
[[ -d app ]] || fail "Diretório app/ não encontrado."
[[ -d components ]] || fail "Diretório components/ não encontrado."

echo "==> Verificando Git..."
if [[ -n "$(git status --porcelain)" ]]; then
  fail "Working tree não está limpa. Faça commit/stash antes do deploy."
fi

echo "==> Verificando branch..."
BRANCH="$(git branch --show-current)"
[[ "$BRANCH" == "main" ]] || fail "Deploy permitido somente da branch main. Atual: $BRANCH"

echo "==> Verificando chave SSH..."
[[ -f "$SSH_KEY" ]] || fail "Chave SSH não encontrada: $SSH_KEY"
chmod 600 "$SSH_KEY"

echo "==> Verificando acesso ao servidor..."
ssh -o BatchMode=yes \
    -o ConnectTimeout=10 \
    -i "$SSH_KEY" \
    "$REMOTE_HOST" \
    'printf "SSH OK\n"' || fail "Não foi possível conectar ao Lightsail."

echo
echo "==> 1/5 — Lint"
npm run lint

echo
echo "==> 2/5 — Build"
npm run build

[[ -f out/index.html ]] || fail "out/index.html não foi gerado."
[[ -f out/robots.txt ]] || fail "out/robots.txt não foi gerado."
[[ -f out/sitemap.xml ]] || fail "out/sitemap.xml não foi gerado."
[[ -f out/brand/crn-sistemas-horizontal.png ]] || fail "Logo não foi gerada em out/brand/."

echo
echo "==> 3/5 — Publicando somente o site institucional"

rsync -az \
  --delete \
  --delay-updates \
  --exclude='.DS_Store' \
  --exclude='._*' \
  --no-perms \
  --no-owner \
  --no-group \
  -e "ssh -i $SSH_KEY" \
  out/ \
  "$REMOTE_HOST:$REMOTE_DIR/"

echo
echo "==> 4/5 — Ajustando permissões"

ssh -o BatchMode=yes \
    -i "$SSH_KEY" \
    "$REMOTE_HOST" <<'REMOTE'
set -Eeuo pipefail

sudo find /opt/CRNSISTEMAS/site \
  -type d \
  -exec chmod 755 {} \;

sudo find /opt/CRNSISTEMAS/site \
  -type f \
  -exec chmod 644 {} \;

test -f /opt/CRNSISTEMAS/site/index.html
test -f /opt/CRNSISTEMAS/site/robots.txt
test -f /opt/CRNSISTEMAS/site/sitemap.xml
test -f /opt/CRNSISTEMAS/site/brand/crn-sistemas-horizontal.png

if find /opt/CRNSISTEMAS/site \
  \( -name '.DS_Store' -o -name '._*' \) \
  -print -quit | grep -q .; then
  echo "Artefatos do macOS encontrados."
  exit 1
fi

echo "Arquivos críticos OK."
REMOTE

echo
echo "==> 5/5 — Validando site público"

curl -fsSI "$SITE_URL/" | grep -qE '^HTTP/[0-9.]+ 200' \
  || fail "Site principal não retornou HTTP 200."

curl -fsSI "$LOGO_URL" | grep -qE '^HTTP/[0-9.]+ 200' \
  || fail "Logo não está acessível."

curl -fsSI "$SITE_URL/robots.txt" | grep -qE '^HTTP/[0-9.]+ 200' \
  || fail "robots.txt não está acessível."

curl -fsSI "$SITE_URL/sitemap.xml" | grep -qE '^HTTP/[0-9.]+ 200' \
  || fail "sitemap.xml não está acessível."

curl -fsSI "$SGPC_URL/login" | grep -Eq '^HTTP/[0-9.]+ (200|302)' \
  || fail "SGPC não respondeu corretamente."

echo
echo "=============================================="
echo " DEPLOY CONCLUÍDO COM SUCESSO"
echo "=============================================="
echo
echo "Site:  $SITE_URL"
echo "SGPC:  $SGPC_URL"
echo
