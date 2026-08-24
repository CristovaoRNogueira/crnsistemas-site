interface SectionTitleProps {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
    theme?: "light" | "dark";
}

export default function SectionTitle({
    eyebrow,
    title,
    description,
    align = "left",
    theme = "light",
}: SectionTitleProps) {
    const isCenter = align === "center";
    const isDark = theme === "dark";

    return (
        <div className={`max-w-3xl ${isCenter ? "mx-auto text-center" : ""}`}>
            {eyebrow && (
                <span
                    className={`text-sm font-bold uppercase tracking-[0.16em] ${
                        isDark ? "text-[var(--crn-yellow)]" : "text-[var(--crn-yellow-dark)]"
                    }`}
                >
                    {eyebrow}
                </span>
            )}
            <h2
                className={`mt-3 text-4xl font-bold tracking-tight md:text-5xl ${
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
        </div>
    );
}
