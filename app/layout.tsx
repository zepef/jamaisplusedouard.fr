import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jamais Plus Édouard — Veille Citoyenne",
    template: "%s | Jamais Plus Édouard",
  },
  description:
    "Biographie, controverses et réseau d'Édouard Philippe. Suivi quotidien du candidat à la présidentielle.",
  openGraph: {
    title: "Jamais Plus Édouard",
    description:
      "Veille citoyenne sur Édouard Philippe — biographie, faux pas, réseau.",
    url: "https://jamaisplusedouard.fr",
    siteName: "jamaisplusedouard.fr",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
