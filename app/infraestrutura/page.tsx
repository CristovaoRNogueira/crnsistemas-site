import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Infraestrutura e Servidores | CRN Sistemas",
  description: "Implantação e manutenção de ambientes, servidores, containers e serviços essenciais para a sua empresa.",
};

export default function InfraestruturaPage() {
  return (
    <>
      <section className="bg-[var(--crn-surface)] py-24 lg:py-32">
        <Container>
          <SectionTitle
            eyebrow="Serviços"
            title="Infraestrutura e Servidores"
            description="Implantação e manutenção de ambientes, servidores, containers e serviços essenciais de tecnologia."
          />
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--crn-black)]">
                A base sólida para a sua operação digital.
              </h2>
              <div className="mt-6 space-y-6 text-lg leading-8 text-[var(--crn-muted)]">
                <p>
                  Sistemas eficientes dependem de infraestrutura robusta. Apoiamos a sua
                  empresa no desenho, implementação e manutenção de ambientes que
                  suportem a carga de trabalho de forma segura e ininterrupta.
                </p>
                <p>
                  Trabalhamos com provedores em nuvem, configuração de servidores
                  Linux, arquitetura de microserviços em containers e otimização
                  de redes para garantir alta disponibilidade.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl border border-[var(--crn-border)] p-8">
                <h3 className="text-xl font-bold text-[var(--crn-black)] mb-3">
                  Cloud e Servidores
                </h3>
                <p className="text-[var(--crn-muted)] leading-7">
                  Provisionamento e gestão de servidores dedicados ou VPS (como AWS Lightsail, DigitalOcean),
                  configuração de web servers (Nginx, Apache) e banco de dados.
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--crn-border)] p-8">
                <h3 className="text-xl font-bold text-[var(--crn-black)] mb-3">
                  Containers e Orquestração
                </h3>
                <p className="text-[var(--crn-muted)] leading-7">
                  Containerização de aplicações (Docker) para isolamento, segurança
                  e facilidade de deploy.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTA
        title="Sua infraestrutura está pronta para crescer?"
        primaryButtonText="Fale conosco"
        primaryButtonHref="/contato"
      />
    </>
  );
}
