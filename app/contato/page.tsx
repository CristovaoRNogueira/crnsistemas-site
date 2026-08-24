import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Contato | CRN Sistemas",
  description: "Entre em contato com a CRN Sistemas para conversarmos sobre soluções digitais, sistemas e infraestrutura.",
};

export default function ContatoPage() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Contato"
              title="Fale com a CRN Sistemas."
              description="Preencha o formulário e nossa equipe entrará em contato com você o mais rápido possível."
            />

            <div className="mt-10 space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--crn-muted)]">
                  WhatsApp / Telefone
                </h3>
                <p className="mt-2 text-lg font-medium text-[var(--crn-black)]">
                  (Disponível sob consulta)
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--crn-muted)]">
                  E-mail
                </h3>
                <p className="mt-2 text-lg font-medium text-[var(--crn-black)]">
                  contato@crnsistemas.com.br <span className="text-sm text-slate-400 font-normal block">(Pendente de confirmação)</span>
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--crn-border)] bg-white p-8 shadow-sm">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                  Nome completo
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full rounded-md border-0 py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-[var(--crn-border)] placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[var(--crn-yellow)] sm:text-sm sm:leading-6"
                    placeholder="Seu nome"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                  E-mail
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-[var(--crn-border)] placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[var(--crn-yellow)] sm:text-sm sm:leading-6"
                    placeholder="voce@exemplo.com.br"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                  Mensagem
                </label>
                <div className="mt-2">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 py-2.5 px-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-[var(--crn-border)] placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[var(--crn-yellow)] sm:text-sm sm:leading-6"
                    placeholder="Como podemos ajudar?"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="block w-full rounded-xl bg-[var(--crn-black)] px-3.5 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-[#2a2a2a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--crn-black)]"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
