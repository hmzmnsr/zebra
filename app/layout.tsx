import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./fonts.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import PageTransition from "./components/layout/PageTransition";

const cofoSans = localFont({
  src: [
    {
      path: '../fonts/Cofo-Sans-Var.otf',
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: "--font-cofo-sans",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ZEBRA - Soluzioni Multimediali Immersive",
  description: "ZEBRA offre soluzioni multimediali immersive, produzione contenuti, ambienti collaborativi all'avanguardia e sviluppo applicazioni.",
  icons: {
    icon: [
      { url: '/assets/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="IT">
      <body
        className={`${cofoSans.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
