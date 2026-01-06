import type { Metadata } from "next";
import { Marcellus, Inter } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Le Chalet de Rozan | Éco-gîte & Chambres d'hôtes Grenoble",
  description: "Découvrez le Chalet de Rozan, une maison en pierre et bois de 1903 modernisée en habitat à énergie positive. Studio éco-chalet et chambre d'hôtes avec vue panoramique sur les massifs de Belledonne et du Vercors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${marcellus.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
