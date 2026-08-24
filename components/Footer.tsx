import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-[var(--crn-border)] bg-[var(--crn-black)] text-white">
            <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 lg:px-8">
                <div className="md:col-span-2">
                    <Link href="/" className="mb-4 inline-block text-2xl font-extrabold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--crn-yellow)] rounded">
                        CRN<span className="text-[var(--crn-yellow)]">.</span>
                    </Link>

                    <p className="max-w-md text-sm leading-7 text-slate-300">
                        Tecnologia que transforma processos em resultados. Desenvolvimento
                        de sistemas, sites, infraestrutura e soluções digitais.
                    </p>
                </div>

                <div>
                    <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                        Empresa
                    </h2>

                    <div className="space-y-3 text-sm text-slate-300">
                        <Link className="block hover:text-white" href="/sobre">
                            Sobre
                        </Link>
                        <Link className="block hover:text-white" href="/servicos">
                            Serviços
                        </Link>
                        <Link className="block hover:text-white" href="/contato">
                            Contato
                        </Link>
                    </div>
                </div>

                <div>
                    <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                        Soluções
                    </h2>

                    <div className="space-y-3 text-sm text-slate-300">
                        <Link className="block hover:text-white" href="/sgpc">
                            SGPC
                        </Link>

                        <a
                            className="block hover:text-white"
                            href="https://sgpc.crnsistemas.com.br/login"
                        >
                            Acessar SGPC
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between lg:px-8">
                    <span>© 2026 CRN Sistemas. Todos os direitos reservados.</span>

                    <div className="flex gap-5">
                        <Link href="/privacidade" className="hover:text-white">
                            Política de Privacidade
                        </Link>

                        <Link href="/termos" className="hover:text-white">
                            Termos de Uso
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}