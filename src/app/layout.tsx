import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GridBackground from "@/components/GridBackground";
import ParticleSphereWrapper from "@/components/ParticleSphereWrapper";
import { ContactButton } from "@/components/ContactButton";
// Force dark mode script runs on client only
import "@/lib/force-dark-mode";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ell's portfolio",
  description:
    "This is ell, an AI/ML and Software Developer who also likes gaming and data.",
};

export const viewport: Viewport = {
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <head>
        <meta name="color-scheme" content="dark" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <ParticleSphereWrapper />
        <GridBackground />
        <main>{children}</main>
        <ContactButton />
      </body>
    </html>
  );
}
