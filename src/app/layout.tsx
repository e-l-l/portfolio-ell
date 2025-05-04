import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import GridBackground from "@/components/GridBackground";
import { ThemeProvider } from "@/components/ThemeProvider";
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
  title: "Titanium Chat",
  description: "A sleek chat interface with titanium theme",
  // Ensure color-scheme is set in metadata
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
        <ThemeProvider>
          <GridBackground />
          <Sidebar />
          <main className="lg:ml-16 transition-all duration-300">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
