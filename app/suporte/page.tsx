import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Suporte e Serviços de TI | CRN Sistemas",
  description: "Atendimento técnico e suporte de TI para garantir a continuidade operacional da sua empresa.",
};

export default function SuportePage() {
  return (
    <>
      <section className="bg-[var(--crn-surface)] py-24 lg:py-32">
        <Container>
          <SectionTitle
            eyebrow="Serviços"
            title="Suporte e TI"
            description="Atendimento técnico e suporte para continuidade operacional."
          />
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--crn-black)]">
                Garantindo que tudo continue funcionando.
              </h2>
              <div className="mt-6 space-y-6 text-lg leading-8 text-[var(--crn-muted)]">
                <p>
                  Quando a tecnologia falha, as operações param. Oferecemos suporte
                  contínuo para os sistemas e infraestrutura da sua empresa, garantindo
                  rápido tempo de resposta e minimizando impactos nos negócios.
                </p>
                <p>
                  Monitoramos a saúde das aplicações, mantemos as rotinas de backup e atuamos
                  preventivamente e corretivamente para solucionar incidentes antes que
                  se tornem problemas maiores.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl border border-[var(--crn-border)] p-8">
                <h3 className="text-xl font-bold text-[var(--crn-black)] mb-3">
                  Manutenção Preventiva
                </h3>
                <p className="text-[var(--crn-muted)] leading-7">
                  Atualizações de segurança, monitoramento de servidores e verificação
                  constante das aplicações em produção.
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--crn-border)] p-8">
                <h3 className="text-xl font-bold text-[var(--crn-black)] mb-3">
                  Atendimento Técnico
                </h3>
                <p className="text-[var(--crn-muted)] leading-7">
                  Suporte direto para resolver dúvidas técnicas e ajustar configurações
                  dos sistemas em uso pelos colaboradores.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTA
        title="Precisa de suporte especializado?"
        primaryButtonText="Fale conosco"
        primaryButtonHref="/contato"
      />
    </>
  );
}
