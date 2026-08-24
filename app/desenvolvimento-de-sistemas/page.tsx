import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Desenvolvimento de Sistemas Personalizados | CRN Sistemas",
  description: "Criamos software sob medida para transformar processos e resolver as necessidades específicas da sua empresa.",
};

export default function SistemasPage() {
  return (
    <>
      <section className="bg-[var(--crn-surface)] py-24 lg:py-32">
        <Container>
          <SectionTitle
            eyebrow="Serviços"
            title="Desenvolvimento de Sistemas"
            description="Soluções personalizadas para transformar processos e necessidades específicas em sistemas eficientes."
          />
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--crn-black)]">
                Software sob medida para o seu negócio.
              </h2>
              <div className="mt-6 space-y-6 text-lg leading-8 text-[var(--crn-muted)]">
                <p>
                  Sistemas de prateleira nem sempre atendem aos fluxos de trabalho
                  particulares de cada organização. A CRN Sistemas desenvolve
                  soluções de software que se adaptam perfeitamente aos seus
                  processos, não o contrário.
                </p>
                <p>
                  Desde a modelagem inicial do banco de dados até a interface do usuário,
                  construímos plataformas modernas, escaláveis e seguras, pensadas
                  para a longevidade técnica e operacional.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl border border-[var(--crn-border)] p-8">
                <h3 className="text-xl font-bold text-[var(--crn-black)] mb-3">
                  Sistemas Web (SaaS)
                </h3>
                <p className="text-[var(--crn-muted)] leading-7">
                  Plataformas baseadas na nuvem, acessíveis de qualquer lugar,
                  preparadas para multi-tenant e escalonamento.
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--crn-border)] p-8">
                <h3 className="text-xl font-bold text-[var(--crn-black)] mb-3">
                  Automação de Processos
                </h3>
                <p className="text-[var(--crn-muted)] leading-7">
                  Digitalização de fluxos de aprovação e operações manuais, reduzindo
                  erros humanos e acelerando resultados.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTA
        title="Pronto para otimizar os processos da sua organização?"
        primaryLabel="Fale com nossa equipe"
        primaryHref="/contato"
      />
    </>
  );
}
