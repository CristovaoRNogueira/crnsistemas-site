"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        // Fechar o menu ao mudar de rota
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                setIsOpen(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    return (
        <div className="md:hidden">
            <button
                type="button"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-lg border border-[var(--crn-border)] p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--crn-yellow)]"
            >
                <div className="relative h-4 w-5">
                    <span
                        className={`absolute left-0 top-0 block h-0.5 w-5 bg-[var(--crn-black)] transition-all duration-300 ease-in-out ${
                            isOpen ? "top-2 -rotate-45" : ""
                        }`}
                    />
                    <span
                        className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-[var(--crn-black)] transition-all duration-300 ease-in-out ${
                            isOpen ? "opacity-0" : ""
                        }`}
                    />
                    <span
                        className={`absolute left-0 top-3 block h-0.5 w-5 bg-[var(--crn-black)] transition-all duration-300 ease-in-out ${
                            isOpen ? "top-2 rotate-45" : ""
                        }`}
                    />
                </div>
            </button>

            {isOpen && (
                <div
                    id="mobile-menu"
                    className="absolute inset-x-0 top-full flex flex-col border-b border-[var(--crn-border)] bg-white px-6 pb-6 pt-4 shadow-xl"
                >
                    <nav className="flex flex-col gap-4">
                        <Link
                            href="/"
                            className="text-base font-medium text-slate-700 hover:text-[var(--crn-yellow-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--crn-yellow)] rounded p-1"
                        >
                            Início
                        </Link>
                        <Link
                            href="/servicos"
                            className="text-base font-medium text-slate-700 hover:text-[var(--crn-yellow-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--crn-yellow)] rounded p-1"
                        >
                            Serviços
                        </Link>
                        <Link
                            href="/sgpc"
                            className="text-base font-medium text-slate-700 hover:text-[var(--crn-yellow-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--crn-yellow)] rounded p-1"
                        >
                            SGPC
                        </Link>
                        <Link
                            href="/sobre"
                            className="text-base font-medium text-slate-700 hover:text-[var(--crn-yellow-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--crn-yellow)] rounded p-1"
                        >
                            Sobre
                        </Link>
                        <Link
                            href="/contato"
                            className="text-base font-medium text-slate-700 hover:text-[var(--crn-yellow-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--crn-yellow)] rounded p-1"
                        >
                            Contato
                        </Link>

                        <div className="mt-4 border-t border-[var(--crn-border)] pt-4">
                            <a
                                href="https://sgpc.crnsistemas.com.br"
                                className="block w-full text-center rounded-lg bg-[var(--crn-yellow)] px-5 py-3 text-sm font-semibold text-[var(--crn-black)] transition hover:bg-[var(--crn-yellow-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--crn-black)]"
                            >
                                Acessar SGPC
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </div>
    );
}
