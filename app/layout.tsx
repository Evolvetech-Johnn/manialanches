import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mania Lanches - Hambúrgueres Artesanais",
  description: "Hambúrgueres artesanais, lanches especiais, porções e delivery. Pedido rápido e saboroso!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className="bg-preto-premium text-white antialiased min-h-screen flex flex-col"
      >
        <Header />
        <main className="flex-1 pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
