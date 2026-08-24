import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Serviços | CRN Sistemas",
  description: "Conheça nossas soluções em desenvolvimento de sistemas, web, gestão pública, infraestrutura e suporte.",
};

const services = [
  {
    title: "Desenvolvimento de Sistemas",
    description: "Soluções personalizadas para transformar processos e necessidades específicas em sistemas eficientes.",
    href: "/desenvolvimento-de-sistemas",
  },
  {
    title: "Desenvolvimento de Sites",
    description: "Sites institucionais, portais e experiências digitais rápidas, responsivas e preparadas para mecanismos de busca.",
    href: "/desenvolvimento-de-sites",
  },
  {
    title: "Gestão Pública",
    description: "Soluções digitais desenvolvidas para os desafios operacionais e administrativos da gestão pública.",
    href: "/gestao-publica",
  },
  {
    title: "Infraestrutura e Servidores",
    description: "Implantação e manutenção de ambientes, servidores, containers e serviços essenciais de tecnologia.",
    href: "/infraestrutura",
  },
  {
    title: "Suporte e TI",
    description: "Atendimento técnico e suporte para continuidade operacional.",
    href: "/suporte",
  },
];

export default function ServicosPage() {
  return (
    <>
      <section className="bg-[var(--crn-surface)] py-24 lg:py-32">
        <Container>
          <SectionTitle
            eyebrow="Nossos Serviços"
            title="Tecnologia adequada ao seu contexto."
            description="Nós entregamos soluções sob medida, de ponta a ponta, seja criando software do zero ou garantindo a infraestrutura e o suporte necessários para sua operação."
          />
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTA
        title="Não sabe por onde começar?"
        primaryLabel="Falar com especialista"
        primaryHref="/contato"
      />
    </>
  );
}
