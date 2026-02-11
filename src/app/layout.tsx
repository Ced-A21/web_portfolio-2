import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./styles/globals.css";
import AnimatedBackground from "./components/AnimatedBackground";
import ParticleBackground from "./components/ParticleBackground";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Christian Cedrick Alon",
  description: "Ced's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.variable} ${spaceMono.variable} antialiased`}
      >
        <div className="fixed inset-0 -z-10">
          <ParticleBackground />
        </div>
        <main className="font-space-mono relative z-10 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
