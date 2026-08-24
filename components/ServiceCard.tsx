import Link from "next/link";

interface ServiceCardProps {
    title: string;
    description: string;
    href: string;
}

export default function ServiceCard({ title, description, href }: ServiceCardProps) {
    return (
        <Link href={href} className="group block">
            <article className="rounded-2xl border border-[var(--crn-border)] bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 h-full flex flex-col">
                <div className="mb-6 h-2 w-12 rounded-full bg-[var(--crn-yellow)] transition-all group-hover:w-16 group-hover:bg-[var(--crn-yellow-dark)]" />
                <h3 className="text-xl font-bold text-[var(--crn-black)] group-hover:text-[var(--crn-yellow-dark)] transition-colors">
                    {title}
                </h3>
                <p className="mt-3 mb-6 flex-1 leading-7 text-[var(--crn-muted)]">
                    {description}
                </p>
                <div className="mt-auto flex items-center text-sm font-semibold text-[var(--crn-yellow-dark)] transition-colors">
                    Saiba mais <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
            </article>
        </Link>
    );
}
