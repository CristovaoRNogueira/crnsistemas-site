import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Soluções para Gestão Pública | CRN Sistemas",
  description: "Desenvolvimento de ferramentas e implantação do SGPC para modernizar e organizar a administração pública.",
};

export default function GestaoPublicaPage() {
  return (
    <>
      <section className="bg-[var(--crn-surface)] py-24 lg:py-32">
        <Container>
          <SectionTitle
            eyebrow="Serviços"
            title="Gestão Pública"
            description="Soluções digitais desenvolvidas para os desafios operacionais e administrativos da gestão pública."
          />
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--crn-black)]">
                Tecnologia para a administração pública.
              </h2>
              <div className="mt-6 space-y-6 text-lg leading-8 text-[var(--crn-muted)]">
                <p>
                  A complexidade da administração pública exige sistemas que tragam
                  organização, transparência e eficiência para as rotinas diárias das
                  secretarias e órgãos de gestão.
                </p>
                <p>
                  A CRN Sistemas desenvolve soluções voltadas especificamente para este setor.
                  Através do SGPC (Sistema de Gestão Pública), oferecemos uma
                  plataforma completa para organizar estrutura, ações e processos
                  em um ambiente digital unificado.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-[var(--crn-black)] p-10 text-white shadow-xl">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-[var(--crn-yellow)]">
                Plataforma Proprietária
              </span>
              <h3 className="text-3xl font-bold">SGPC</h3>
              <p className="mt-4 text-slate-300 leading-relaxed">
                Um sistema SaaS desenvolvido pela CRN Sistemas focado no
                atendimento aos municípios e autarquias, garantindo isolamento de
                dados, controle rigoroso de permissões e rastreabilidade total de ações.
              </p>
              <div className="mt-8">
                <a
                  href="/sgpc"
                  className="inline-block rounded-lg bg-[var(--crn-yellow)] px-6 py-3 text-sm font-semibold text-[var(--crn-black)] transition hover:bg-[var(--crn-yellow-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Conhecer o SGPC
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTA
        title="Vamos modernizar a gestão do seu município?"
        primaryButtonText="Fale conosco"
        primaryButtonHref="/contato"
      />
    </>
  );
}
