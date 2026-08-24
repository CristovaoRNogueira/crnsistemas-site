import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-[var(--crn-border)] bg-white/95 backdrop-blur">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
                <Link href="/" className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--crn-yellow)] rounded">
                    <Image
                        src="/brand/crn-sistemas-horizontal.png"
                        alt="CRN Sistemas"
                        width={180}
                        height={60}
                        className="h-10 w-auto"
                        priority
                    />
                </Link>

                <nav className="hidden items-center gap-8 md:flex">
                    <Link
                        href="/"
                        className="text-sm font-medium text-slate-700 transition hover:text-[var(--crn-yellow-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--crn-yellow)] rounded px-2 py-1"
                    >
                        Início
                    </Link>

                    <Link
                        href="/servicos"
                        className="text-sm font-medium text-slate-700 transition hover:text-[var(--crn-yellow-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--crn-yellow)] rounded px-2 py-1"
                    >
                        Serviços
                    </Link>

                    <Link
                        href="/sgpc"
                        className="text-sm font-medium text-slate-700 transition hover:text-[var(--crn-yellow-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--crn-yellow)] rounded px-2 py-1"
                    >
                        SGPC
                    </Link>

                    <Link
                        href="/sobre"
                        className="text-sm font-medium text-slate-700 transition hover:text-[var(--crn-yellow-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--crn-yellow)] rounded px-2 py-1"
                    >
                        Sobre
                    </Link>

                    <Link
                        href="/contato"
                        className="text-sm font-medium text-slate-700 transition hover:text-[var(--crn-yellow-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--crn-yellow)] rounded px-2 py-1"
                    >
                        Contato
                    </Link>

                    <a
                        href="https://sgpc.crnsistemas.com.br"
                        className="rounded-lg bg-[var(--crn-yellow)] px-5 py-3 text-sm font-semibold text-[var(--crn-black)] transition hover:bg-[var(--crn-yellow-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--crn-black)]"
                    >
                        Acessar SGPC
                    </a>
                </nav>

                <MobileMenu />
            </div>
        </header>
    );
}