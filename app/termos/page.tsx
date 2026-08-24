import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Termos de Uso | CRN Sistemas",
  description: "Termos de Uso da CRN Sistemas.",
};

export default function TermosPage() {
  return (
    <section className="bg-white py-24">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-[var(--crn-black)] md:text-4xl">
          Termos de Uso
        </h1>

        <div className="mt-8 space-y-6 text-[var(--crn-muted)] leading-relaxed">
          <p>
            Ao acessar o site institucional da <strong>CRN Sistemas</strong>, você concorda
            com estes termos de uso. Caso não concorde com algum dos termos, evite
            a utilização de nosso site.
          </p>

          <h2 className="text-xl font-semibold text-[var(--crn-black)] mt-10">1. Uso do Site Institucional</h2>
          <p>
            O conteúdo disponibilizado neste site tem finalidade informativa e comercial
            sobre os serviços prestados pela CRN Sistemas. O acesso é livre e gratuito.
          </p>

          <h2 className="text-xl font-semibold text-[var(--crn-black)] mt-10">2. Propriedade Intelectual</h2>
          <p>
            Todos os direitos de propriedade intelectual sobre as marcas, logos, textos,
            layout e demais elementos visuais contidos neste site pertencem à CRN Sistemas.
            A reprodução não autorizada é proibida.
          </p>

          <h2 className="text-xl font-semibold text-[var(--crn-black)] mt-10">3. Aplicações SaaS (SGPC)</h2>
          <p>
            O acesso às ferramentas SaaS desenvolvidas pela CRN Sistemas (como o <strong>SGPC</strong>)
            é regido por contratos de prestação de serviço específicos celebrados
            com cada organização. As condições de uso da aplicação não são regidas por
            estes termos institucionais.
          </p>

          <h2 className="text-xl font-semibold text-[var(--crn-black)] mt-10">4. Limitação de Responsabilidade</h2>
          <p>
            A CRN Sistemas não garante que o site institucional estará livre de
            interrupções ou falhas operacionais, embora envidemos todos os esforços
            para mantê-lo funcional e seguro.
          </p>

          <p className="mt-12 text-sm">
            Última atualização: {new Date().getFullYear()}
          </p>
        </div>
      </Container>
    </section>
  );
}
