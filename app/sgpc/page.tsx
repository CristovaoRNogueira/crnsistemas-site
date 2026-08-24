import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "SGPC — Sistema de Gestão Pública",
  description:
    "Plataforma SaaS desenvolvida para organizar processos, ações, pessoas e estruturas da administração pública em um único ambiente.",
};

const features = [
  {
    title: "Multi-organização",
    description:
      "Isolamento entre tenants, garantindo segurança e organização para múltiplos órgãos e entidades no mesmo ambiente SaaS.",
  },
  {
    title: "Estrutura Organizacional",
    description:
      "Mapeamento claro de departamentos e diretorias, permitindo delegar permissões e aprovações com base na hierarquia.",
  },
  {
    title: "Ações e Projetos",
    description:
      "Acompanhamento de ponta a ponta das ações públicas, garantindo que o planejamento estratégico seja executado e monitorado.",
  },
  {
    title: "Processos",
    description:
      "Gestão de fluxos de trabalho administrativos e operacionais da gestão pública, de forma digital e transparente.",
  },
  {
    title: "Usuários e Permissões",
    description:
      "Controle de acesso flexível baseado em papéis (roles), garantindo que cada usuário acesse apenas o que é pertinente à sua função.",
  },
  {
    title: "Segurança e Rastreabilidade",
    description:
      "Histórico completo de alterações e acessos, fundamental para auditoria e transparência no setor público.",
  },
];

export default function SGPCPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SGPC",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    provider: {
      "@type": "Organization",
      name: "CRN Sistemas",
      url: "https://crnsistemas.com.br",
    },
  };

  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--crn-black)] pt-32 pb-24 text-white">
        <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-6 inline-flex rounded-full bg-[var(--crn-yellow)]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--crn-yellow)] ring-1 ring-inset ring-[var(--crn-yellow)]/20">
              Sistema de Gestão Pública
            </span>
            <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
              SGPC
            </h1>
            <p className="mt-8 text-xl leading-8 text-slate-300">
              Uma plataforma SaaS desenvolvida para organizar processos, ações,
              pessoas e estruturas da administração pública em um único ambiente.
            </p>

            <ul className="mt-8 mx-auto flex max-w-2xl flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-slate-300 sm:text-base">
              <li className="flex items-center">
                <span className="mr-2 text-[var(--crn-yellow)]">✓</span> Multi-tenant isolado
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-[var(--crn-yellow)]">✓</span> Rastreabilidade total
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-[var(--crn-yellow)]">✓</span> Controle de permissões
              </li>
            </ul>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://sgpc.crnsistemas.com.br"
                className="rounded-xl bg-[var(--crn-yellow)] px-8 py-4 text-base font-semibold text-[var(--crn-black)] transition hover:bg-[var(--crn-yellow-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Acessar o sistema
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Problema / O que é */}
      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <SectionTitle
                title="Os desafios da gestão pública."
                description="Administrações públicas frequentemente enfrentam processos descentralizados, falta de comunicação entre secretarias e dificuldade de monitorar as ações em andamento."
              />
            </div>
            <div className="flex flex-col justify-center border-l border-[var(--crn-border)] pl-8 md:pl-16">
              <h3 className="text-2xl font-bold text-[var(--crn-black)] mb-4">
                O que é o SGPC?
              </h3>
              <p className="text-lg leading-8 text-[var(--crn-muted)]">
                O SGPC resolve a fragmentação através de um modelo SaaS multi-tenant.
                Cada organização ou prefeitura opera em seu próprio ambiente isolado,
                tendo gestão granular e autônoma sobre sua estrutura organizacional,
                usuários, permissões e processos, garantindo foco no que realmente importa: a execução.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Recursos */}
      <section className="bg-[var(--crn-surface)] py-24">
        <Container>
          <div className="mb-16 text-center">
            <SectionTitle
              align="center"
              eyebrow="Funcionalidades"
              title="Principais recursos"
            />
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-[var(--crn-border)] bg-white p-8"
              >
                <div className="mb-4 h-2 w-12 rounded-full bg-[var(--crn-yellow)]" />
                <h4 className="text-xl font-bold text-[var(--crn-black)]">
                  {feature.title}
                </h4>
                <p className="mt-4 leading-7 text-[var(--crn-muted)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefícios / Público */}
      <section className="bg-white py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle
              align="center"
              eyebrow="Para quem"
              title="Público-alvo"
              description="Desenvolvido para atender prefeituras, autarquias, câmaras municipais e secretarias que buscam modernizar sua gestão interna, unificando a estrutura e os processos em uma única ferramenta moderna e segura."
            />
          </div>
        </Container>
      </section>

      {/* CTA Final */}
      <CTA
        theme="dark"
        title="Pronto para modernizar a gestão pública?"
        primaryButtonText="Acessar SGPC"
        primaryButtonHref="https://sgpc.crnsistemas.com.br"
        secondaryButtonText="Falar com a equipe"
        secondaryButtonHref="/contato"
      />
    </>
  );
}
