import Link from "next/link";
import Container from "./Container";

interface CTAProps {
    title: string;
    description?: string;
    primaryButtonText: string;
    primaryButtonHref: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
    theme?: "light" | "dark";
}

export default function CTA({
    title,
    description,
    primaryButtonText,
    primaryButtonHref,
    secondaryButtonText,
    secondaryButtonHref,
    theme = "light",
}: CTAProps) {
    const isDark = theme === "dark";

    return (
        <section className={isDark ? "bg-[var(--crn-black)] text-white" : "bg-white"}>
            <Container className="py-24">
                <div className="mx-auto max-w-3xl text-center">
                    <h2
                        className={`text-4xl font-bold tracking-tight md:text-5xl ${
                            isDark ? "text-white" : "text-[var(--crn-black)]"
                        }`}
                    >
                        {title}
                    </h2>
                    {description && (
                        <p
                            className={`mt-6 text-lg leading-8 ${
                                isDark ? "text-slate-300" : "text-[var(--crn-muted)]"
                            }`}
                        >
                            {description}
                        </p>
                    )}
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                        <Link
                            href={primaryButtonHref}
                            className={`inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 ${
                                isDark
                                    ? "bg-[#FFB82E] text-[#171717] hover:bg-[#F59E0B] focus-visible:ring-white"
                                    : "bg-[#171717] text-white hover:bg-[#2a2a2a] focus-visible:ring-[var(--crn-black)]"
                            }`}
                        >
                            {primaryButtonText}
                        </Link>
                        {secondaryButtonText && secondaryButtonHref && (
                            <Link
                                href={secondaryButtonHref}
                                className={`inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 ${
                                    isDark
                                        ? "bg-transparent border border-white/30 text-white hover:bg-white hover:text-[#171717] focus-visible:ring-white"
                                        : "bg-[var(--crn-surface)] border border-[var(--crn-border)] text-[#171717] hover:bg-slate-100 focus-visible:ring-[var(--crn-black)]"
                                }`}
                            >
                                {secondaryButtonText}
                            </Link>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
}
