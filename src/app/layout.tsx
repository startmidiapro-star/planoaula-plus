// src/app/layout.tsx - VERSÃO CORRIGIDA
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PlanoAula+ - Crie planos de aula alinhados à BNCC",
  description: "Crie planos de aula alinhados à BNCC em minutos, não horas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}