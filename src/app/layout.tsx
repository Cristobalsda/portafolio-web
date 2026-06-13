import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cristobal Pereira - Portafolio",
  description:
    "Portafolio de Cristobal Pereira, Ingeniero Informático y desarrollador Full Stack & Mobile con aplicaciones publicadas en Google Play.",
  icons: {
    icon: "/projects/LogoSinFondo.png",
  },
  openGraph: {
    title: "Cristobal Pereira - Portafolio",
    description:
      "Desarrollador Full Stack & Mobile con proyectos web y aplicaciones Flutter publicadas en Google Play.",
    type: "website",
    locale: "es_CL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
