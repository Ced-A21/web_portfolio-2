import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./styles/globals.css";
import AnimatedBackground from "./components/AnimatedBackground";
import ParticleBackground from "./components/ParticleBackground";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { ThemeProvider } from "./context/ThemeContext";

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
      <body className={`${spaceMono.variable} antialiased font-mono`}>
        <ThemeProvider>
          <div className="fixed inset-0 -z-10 pointer-events-none">
            <ParticleBackground />
            <AnimatedBackground />
          </div>
          <div className="relative z-10 min-h-screen flex flex-col">
            <header className="fixed top-0 left-0 right-0 z-50 header-color">
              <Nav />
            </header>

            <main className="flex-1 pt-[80px]">{children}</main>
            <footer className="mt-auto flex justify-center w-full pt-20 pb-2">
              <Footer />
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
