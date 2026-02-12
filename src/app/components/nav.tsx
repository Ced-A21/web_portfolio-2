"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Github, LinkedIn, Logo, Vector, LightIcon } from "../svg";
import { useTheme } from "../context/ThemeContext";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <nav className="flex justify-center h-20 text-2xl">
        <div className="navbar-between md:px-4 pt-4 w-full max-w-2xl theme-border-b">
          <div className="md:flex-shrink-0 px-4">
            <Image src={Logo} alt="Logo" width={50} height={50} priority />
          </div>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center pt-2 gap-5">
            <div className="md:flex flex-row gap-4">
              <Link href="/" className="button-navs lift font-mono">
                Home
              </Link>
              <Link href="/projects" className="button-navs lift font-mono">
                Projects
              </Link>
            </div>
            <div className="row flex items-center justify-center gap-2">
              <a href="https://github.com/Ced-A21">
                <Image
                  className="pointer lift"
                  src={Github}
                  alt="Github"
                  width={27}
                  height={27}
                  priority
                />
              </a>
              <a
                className="mb-1"
                href="https://www.linkedin.com/in/christian-cedrick-alon-367214222/"
              >
                <Image
                  className="pointer lift"
                  src={LinkedIn}
                  alt="LinkedIn"
                  width={23}
                  height={23}
                  priority
                />
              </a>
            </div>
            <button onClick={toggleTheme} aria-label="Toggle theme">
              <Image
                className="mb-1 pointer lift"
                src={isDark ? Vector : LightIcon}
                alt={isDark ? "Switch to light mode" : "Switch to dark mode"}
                width={18}
                height={18}
                priority
              />
            </button>
          </div>

          {/* Burger button - small screens only */}
          <button
            className="sm:hidden px-4 pt-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 theme-bar"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-0.5 theme-bar"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 theme-bar"
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 sm:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 z-50 sm:hidden theme-bg theme-border-l"
            >
              <div className="flex flex-col pt-24 px-8 gap-8">
                <Link
                  href="/"
                  className="button-navs lift font-mono text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  className="button-navs lift font-mono text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>

                <div className="flex items-center gap-4 pt-4 theme-border-t opacity-20">
                  <a
                    href="https://github.com/Ced-A21"
                    onClick={() => setIsOpen(false)}
                  >
                    <Image
                      className="pointer lift"
                      src={Github}
                      alt="Github"
                      width={27}
                      height={27}
                      priority
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/christian-cedrick-alon-367214222/"
                    onClick={() => setIsOpen(false)}
                  >
                    <Image
                      className="pointer lift"
                      src={LinkedIn}
                      alt="LinkedIn"
                      width={23}
                      height={23}
                      priority
                    />
                  </a>
                  <button onClick={toggleTheme} aria-label="Toggle theme">
                    <Image
                      className="pointer lift"
                      src={isDark ? Vector : LightIcon}
                      alt={isDark ? "Switch to light mode" : "Switch to dark mode"}
                      width={18}
                      height={18}
                      priority
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
