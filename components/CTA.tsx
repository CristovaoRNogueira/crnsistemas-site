import Link from "next/link";
import Container from "./Container";

interface CTAProps {
    title: string;
    description?: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel?: string;
    secondaryHref?: string;
    theme?: "light" | "dark";
}

export default function CTA({
    title,
    description,
    primaryLabel,
    primaryHref,
    secondaryLabel,
    secondaryHref,
    theme = "light",
}: CTAProps) {
    const isDark = theme === "dark";

    const sectionClass = isDark ? "bg-[var(--crn-black)] text-white" : "bg-white text-[var(--crn-black)]";
    const titleClass = isDark ? "text-white" : "text-[var(--crn-black)]";
    const descClass = isDark ? "text-slate-300" : "text-[var(--crn-muted)]";

    return (
        <section className={sectionClass}>
            <Container className="py-24">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className={`text-4xl font-bold tracking-tight md:text-5xl ${titleClass}`}>
                        {title}
                    </h2>
                    {description && (
                        <p className={`mt-6 text-lg leading-8 ${descClass}`}>
                            {description}
                        </p>
                    )}
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                        {isDark ? (
                            <Link
                                href={primaryHref}
                                className="inline-flex items-center justify-center rounded-xl bg-[#FFB82E] px-6 py-3.5 text-sm font-semibold text-[#171717] transition-all hover:bg-[#F59E0B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            >
                                {primaryLabel}
                            </Link>
                        ) : (
                            <Link
                                href={primaryHref}
                                className="inline-flex items-center justify-center rounded-xl bg-[#171717] px-6 py-3.5 text-sm font-semibold text-[#FFFFFF] transition-all hover:bg-[#2a2a2a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--crn-black)]"
                            >
                                {primaryLabel}
                            </Link>
                        )}

                        {secondaryLabel && secondaryHref && (
                            isDark ? (
                                <Link
                                    href={secondaryHref}
                                    className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-transparent px-6 py-3.5 text-sm font-semibold text-[#FFFFFF] transition-all hover:bg-white hover:text-[#171717] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                >
                                    {secondaryLabel}
                                </Link>
                            ) : (
                                <Link
                                    href={secondaryHref}
                                    className="inline-flex items-center justify-center rounded-xl border border-[var(--crn-border)] bg-[var(--crn-surface)] px-6 py-3.5 text-sm font-semibold text-[#171717] transition-all hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--crn-black)]"
                                >
                                    {secondaryLabel}
                                </Link>
                            )
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
}
