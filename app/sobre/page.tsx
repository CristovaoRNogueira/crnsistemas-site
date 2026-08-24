import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Sobre a CRN Sistemas",
  description:
    "Somos a CRN Sistemas, especializados em desenvolvimento de sistemas, sites, infraestrutura e soluções tecnológicas para empresas e gestão pública.",
};

export default function SobrePage() {
  return (
    <>
      <section className="bg-[var(--crn-surface)] py-24 lg:py-32">
        <Container>
          <SectionTitle
            eyebrow="Quem somos"
            title="Tecnologia que transforma processos em resultados."
            description="Nós construímos software para resolver problemas reais."
          />
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--crn-black)]">
                Desenvolvimento, Infraestrutura e Gestão.
              </h2>
              <div className="mt-6 space-y-6 text-lg leading-8 text-[var(--crn-muted)]">
                <p>
                  A CRN Sistemas desenvolve soluções completas focadas na eficiência
                  e organização. Nosso papel é entender o seu fluxo de trabalho
                  e implementar ferramentas que tornem o seu dia a dia mais produtivo.
                </p>
                <p>
                  Atuamos com desenvolvimento web e criação de sistemas sob medida,
                  implantamos infraestrutura robusta, oferecemos suporte contínuo de TI
                  e criamos plataformas robustas, como o SGPC, focado no setor público.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-[var(--crn-border)] bg-slate-50 p-8 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-[var(--crn-black)]">O que nos move</h3>
              <ul className="mt-6 space-y-4 text-[var(--crn-muted)]">
                <li className="flex items-start">
                  <span className="text-[var(--crn-yellow)] mr-3 font-bold">✓</span>
                  Soluções diretas sem jargão desnecessário
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--crn-yellow)] mr-3 font-bold">✓</span>
                  Design de sistemas voltado à eficiência e performance
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--crn-yellow)] mr-3 font-bold">✓</span>
                  Interfaces limpas e experiências que reduzem o atrito
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--crn-yellow)] mr-3 font-bold">✓</span>
                  Confiabilidade e transparência no processo e no software
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CTA
        title="Vamos construir algo incrível juntos?"
        primaryLabel="Fale com a CRN Sistemas"
        primaryHref="/contato"
      />
    </>
  );
}
