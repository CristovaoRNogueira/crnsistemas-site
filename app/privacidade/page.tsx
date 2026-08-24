import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Política de Privacidade | CRN Sistemas",
  description: "Política de Privacidade da CRN Sistemas.",
};

export default function PrivacidadePage() {
  return (
    <section className="bg-white py-24">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-[var(--crn-black)] md:text-4xl">
          Política de Privacidade
        </h1>

        <div className="mt-8 space-y-6 text-[var(--crn-muted)] leading-relaxed">
          <p>
            A <strong>CRN Sistemas</strong> leva a sua privacidade a sério.
            Esta política descreve as informações que coletamos e como as utilizamos.
          </p>

          <h2 className="text-xl font-semibold text-[var(--crn-black)] mt-10">1. Coleta de Informações</h2>
          <p>
            Coletamos informações básicas de contato (como nome e e-mail) apenas
            quando fornecidas voluntariamente por você através de nossos formulários
            de contato, com o objetivo de responder às suas dúvidas ou solicitações comerciais.
          </p>

          <h2 className="text-xl font-semibold text-[var(--crn-black)] mt-10">2. Uso das Informações</h2>
          <p>
            As informações coletadas são utilizadas exclusivamente para o relacionamento
            comercial e técnico entre a CRN Sistemas e seus clientes ou potenciais clientes.
            Não vendemos, alugamos ou compartilhamos suas informações com terceiros para fins de marketing.
          </p>

          <h2 className="text-xl font-semibold text-[var(--crn-black)] mt-10">3. Segurança</h2>
          <p>
            Adotamos medidas técnicas e organizacionais adequadas para proteger seus
            dados contra acessos não autorizados, perdas, destruição ou alteração.
          </p>

          <h2 className="text-xl font-semibold text-[var(--crn-black)] mt-10">4. Dados do SGPC</h2>
          <p>
            No contexto do uso da plataforma SaaS <strong>SGPC</strong>, a CRN Sistemas
            atua como operadora dos dados. As políticas de privacidade e proteção de dados
            dos cidadãos são de responsabilidade do órgão público (controlador) contratante,
            conforme previsto nos contratos específicos de prestação de serviço.
          </p>

          <p className="mt-12 text-sm">
            Última atualização: {new Date().getFullYear()}
          </p>
        </div>
      </Container>
    </section>
  );
}
