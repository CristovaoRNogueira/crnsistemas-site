import Link from "next/link";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";

const services = [
  {
    title: "Desenvolvimento de Sistemas",
    description:
      "Soluções personalizadas para transformar processos e necessidades específicas em sistemas eficientes.",
    href: "/desenvolvimento-de-sistemas",
  },
  {
    title: "Desenvolvimento de Sites",
    description:
      "Sites institucionais, portais e experiências digitais rápidas, responsivas e preparadas para mecanismos de busca.",
    href: "/desenvolvimento-de-sites",
  },
  {
    title: "Gestão Pública",
    description:
      "Soluções digitais desenvolvidas para os desafios operacionais e administrativos da gestão pública.",
    href: "/gestao-publica",
  },
  {
    title: "Infraestrutura e Servidores",
    description:
      "Implantação e manutenção de ambientes, servidores, containers e serviços essenciais de tecnologia.",
    href: "/infraestrutura",
  },
  {
    title: "Suporte e TI",
    description:
      "Atendimento técnico e suporte para continuidade operacional.",
    href: "/suporte",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--crn-border)] bg-white">
        <div className="absolute -right-32 top-24 h-80 w-80 rounded-full bg-[var(--crn-yellow)]/10 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-black/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
          <div className="flex flex-col justify-center">
            <span className="mb-6 inline-flex w-fit items-center rounded-full border border-[var(--crn-border)] bg-slate-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-600">
              Tecnologia e desenvolvimento
            </span>

            <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-[var(--crn-black)] md:text-6xl">
              Soluções digitais que transformam processos em resultados.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--crn-muted)]">
              Desenvolvemos sistemas, sites e soluções de infraestrutura para
              empresas, organizações e gestão pública.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/servicos"
                className="!text-white rounded-xl bg-[var(--crn-black)] px-6 py-3.5 text-sm font-semibold transition hover:bg-[#2a2a2a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                Conhecer soluções
              </Link>

              <a
                href="https://sgpc.crnsistemas.com.br/login"
                className="rounded-xl bg-[var(--crn-yellow)] px-6 py-3.5 text-sm font-semibold text-[var(--crn-black)] transition hover:bg-[var(--crn-yellow-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                Acessar SGPC
              </a>
            </div>
          </div>

          <div className="relative flex min-h-[400px] items-center justify-center">
            <div className="absolute inset-8 rounded-[2rem] border border-[var(--crn-border)] bg-slate-50 shadow-sm" />

            <div className="relative w-full max-w-md rounded-[2rem] border border-[var(--crn-border)] bg-white p-8 shadow-2xl shadow-black/5">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  CRN Sistemas
                </span>

                <div className="flex space-x-1.5">
                  <span className="h-3 w-3 rounded-full bg-slate-300" />
                  <span className="h-3 w-3 rounded-full bg-[var(--crn-yellow)]" />
                  <span className="h-3 w-3 rounded-full bg-slate-900" />
                </div>
              </div>

              <div className="space-y-4 font-mono text-sm">
                <div className="rounded-lg bg-slate-950 p-5 text-slate-300 shadow-inner">
                  <div className="flex items-center space-x-2 mb-3 border-b border-slate-800 pb-2">
                    <span className="text-slate-500 text-xs">src/core/sys.ts</span>
                  </div>
                  <div>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">crn</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-slate-400">{"{"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-white">innovation:</span>{" "}
                    <span className="text-orange-300">true</span><span className="text-white">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-white">solutions:</span>{" "}
                    <span className="text-slate-400">[</span>
                    <span className="text-green-300">&apos;tech&apos;</span><span className="text-white">, </span>
                    <span className="text-green-300">&apos;systems&apos;</span>
                    <span className="text-slate-400">]</span>
                  </div>
                  <div>
                    <span className="text-slate-400">{"}"}</span>
                  </div>
                  <div className="mt-4 flex items-center">
                    <span className="text-[var(--crn-yellow)] mr-2">&lt;</span>
                    <span className="text-white">execute</span>
                    <span className="text-[var(--crn-yellow)] ml-2">/&gt;</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-slate-200 p-4 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative">
                      <div className="mb-2 h-2 w-16 rounded bg-slate-300" />
                      <div className="h-7 w-12 rounded bg-[var(--crn-yellow)]" />
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 p-4 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative">
                      <div className="mb-2 h-2 w-20 rounded bg-slate-300" />
                      <div className="h-7 w-20 rounded bg-slate-900" />
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-slate-100 p-4 flex items-center justify-between">
                  <div>
                    <div className="h-2 w-24 rounded bg-slate-300" />
                    <div className="mt-3 h-2 w-32 rounded bg-slate-200" />
                  </div>
                  <div className="h-8 w-8 rounded-full border-2 border-[var(--crn-yellow)] border-t-transparent animate-spin" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--crn-surface)] py-24">
        <Container>
          <SectionTitle
            eyebrow="Nossos serviços"
            title="Tecnologia para diferentes desafios."
            description="Soluções pensadas para necessidades reais, com tecnologia adequada ao contexto de cada organização."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={service.title} className={index === 4 ? "md:col-span-2 lg:col-span-1" : ""}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  href={service.href}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--crn-black)] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <SectionTitle
              theme="dark"
              eyebrow="Nossa plataforma"
              title="SGPC — Sistema de Gestão Pública"
              description="Uma plataforma SaaS desenvolvida para organizar processos, ações, pessoas e estruturas da administração pública em um único ambiente."
            />
          </div>

          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Link
              href="/sgpc"
              className="!text-[var(--crn-black)] rounded-xl bg-white px-6 py-3.5 text-sm font-semibold transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Conhecer o SGPC
            </Link>

            <a
              href="https://sgpc.crnsistemas.com.br/login"
              className="rounded-xl bg-[var(--crn-yellow)] px-6 py-3.5 text-sm font-semibold text-[var(--crn-black)] transition hover:bg-[var(--crn-yellow-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--crn-yellow)]"
            >
              Acessar o sistema
            </a>
          </div>
        </div>
      </section>

      <CTA
        title="Tecnologia não precisa ser complicada. Precisa funcionar."
        description="Transformamos necessidades reais em soluções digitais práticas, eficientes e preparadas para evoluir."
        primaryLabel="Fale com a CRN Sistemas"
        primaryHref="/contato"
      />

      <CTA
        theme="dark"
        title="Vamos transformar sua necessidade em uma solução?"
        primaryLabel="Falar com a CRN Sistemas"
        primaryHref="/contato"
        secondaryLabel="Conhecer o SGPC"
        secondaryHref="/sgpc"
      />
    </>
  );
}