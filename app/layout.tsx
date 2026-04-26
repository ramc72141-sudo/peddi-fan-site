import React from "react";
import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { AudioToggle } from "@/components/audio-toggle";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ParticleBackground } from "@/components/particle-background";
import { CursorGlow } from "@/components/cursor-glow";

const _bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const _inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PEDDI | Global Star Ram Charan",
  description:
    "A fan-made countdown dedicated to Global Star Ram Charan's upcoming movie PEDDI. The Rage Begins.",
  keywords: ["Peddi", "Ram Charan", "Telugu Movie", "Fan Site", "Countdown"],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a0505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased min-h-screen bg-background text-foreground overflow-x-hidden relative">

        {/* Cursor glow (must be first, background layer) */}
        <CursorGlow />

        {/* Background effects */}
        <ParticleBackground />
        <AudioToggle />
        {/* Site content */}
        <Navigation />
        <main className="relative z-10">{children}</main>
        <Footer />

        {/* Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
