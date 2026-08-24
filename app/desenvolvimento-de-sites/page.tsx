import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Desenvolvimento de Sites Profissionais | CRN Sistemas",
  description: "Sites institucionais e portais rápidos, responsivos e preparados para os mecanismos de busca.",
};

export default function SitesPage() {
  return (
    <>
      <section className="bg-[var(--crn-surface)] py-24 lg:py-32">
        <Container>
          <SectionTitle
            eyebrow="Serviços"
            title="Desenvolvimento de Sites"
            description="Sites institucionais, portais e experiências digitais rápidas, responsivas e preparadas para mecanismos de busca."
          />
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--crn-black)]">
                Presença digital rápida e eficiente.
              </h2>
              <div className="mt-6 space-y-6 text-lg leading-8 text-[var(--crn-muted)]">
                <p>
                  Sua empresa precisa de um site que represente adequadamente
                  a sua marca, que carregue rápido e que funcione de forma perfeita
                  em qualquer dispositivo, desde smartphones até grandes monitores.
                </p>
                <p>
                  Construímos experiências focadas em performance e acessibilidade.
                  Nossos projetos já nascem estruturados para SEO (otimização para
                  mecanismos de busca), garantindo as melhores práticas técnicas.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl border border-[var(--crn-border)] p-8">
                <h3 className="text-xl font-bold text-[var(--crn-black)] mb-3">
                  Arquitetura Moderna
                </h3>
                <p className="text-[var(--crn-muted)] leading-7">
                  Utilizamos ferramentas modernas de renderização para garantir
                  que seu site seja extremamente rápido, o que beneficia tanto os
                  usuários quanto o rankeamento no Google.
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--crn-border)] p-8">
                <h3 className="text-xl font-bold text-[var(--crn-black)] mb-3">
                  Responsividade e Design
                </h3>
                <p className="text-[var(--crn-muted)] leading-7">
                  Visual profissional, limpo e corporativo. A comunicação deve ser
                  direta e a navegação deve ser fluida e intuitiva, guiando o
                  visitante para a ação desejada.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTA
        title="Sua empresa merece uma presença digital de alto nível."
        primaryLabel="Solicitar orçamento"
        primaryHref="/contato"
      />
    </>
  );
}
