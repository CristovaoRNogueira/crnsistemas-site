import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://crnsistemas.com.br"),
  title: {
    default: "CRN Sistemas | Desenvolvimento de Sistemas, Sites e Soluções de TI",
    template: "%s | CRN Sistemas",
  },
  description:
    "Desenvolvimento de sistemas, sites, infraestrutura e soluções digitais para empresas e gestão pública.",
  applicationName: "CRN Sistemas",
  authors: [{ name: "CRN Sistemas" }],
  creator: "CRN Sistemas",
  publisher: "CRN Sistemas",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "CRN Sistemas",
    title: "CRN Sistemas | Desenvolvimento de Sistemas, Sites e Soluções de TI",
    description:
      "Desenvolvimento de sistemas, sites, infraestrutura e soluções digitais para empresas e gestão pública.",
    url: "https://crnsistemas.com.br",
  },
  alternates: {
    canonical: "https://crnsistemas.com.br",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CRN Sistemas",
    "url": "https://crnsistemas.com.br",
    "logo": "https://crnsistemas.com.br/brand/crn-sistemas-horizontal.png",
    "description": "Tecnologia que transforma processos em resultados. Desenvolvimento de sistemas, sites, infraestrutura e soluções digitais para empresas e gestão pública."
  };

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white antialiased flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}