"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Github, LinkedIn, Vector, LightIcon } from "../svg";
import { useTheme } from "../context/ThemeContext";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <nav className="flex justify-center h-20 text-2xl">
        <div className="navbar-between md:px-4 pt-4 w-full max-w-2xl theme-border-b">
          <div className="md:flex-shrink-0 px-4">
            <svg width="50" height="28" viewBox="0 0 47 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.4782 3.80761C22.4728 1.98953 19.9179 0.751399 17.1364 0.249791C14.3549 -0.251817 11.4718 0.00562723 8.85169 0.989567C6.23158 1.97351 3.99214 3.63975 2.41655 5.77759C0.840966 7.91543 -4.28221e-07 10.4288 0 13C4.28222e-07 15.5712 0.840967 18.0846 2.41656 20.2224C3.99214 22.3603 6.23159 24.0265 8.85169 25.0104C11.4718 25.9944 14.3549 26.2518 17.1364 25.7502C19.9179 25.2486 22.4728 24.0105 24.4782 22.1924L21.3362 19.3438C19.9523 20.5985 18.1891 21.4529 16.2695 21.7991C14.35 22.1453 12.3603 21.9676 10.5521 21.2886C8.74395 20.6095 7.19848 19.4596 6.11114 17.9843C5.02381 16.5089 4.44344 14.7744 4.44344 13C4.44344 11.2256 5.02381 9.49106 6.11114 8.01571C7.19848 6.54036 8.74395 5.39046 10.5521 4.71143C12.3603 4.0324 14.35 3.85473 16.2695 4.2009C18.1891 4.54706 19.9523 5.40152 21.3362 6.6562L24.4782 3.80761Z" fill="var(--color-text)" style={{ transition: "fill 0.3s ease" }} />
              <rect x="27.0847" y="22.8485" width="19.9153" height="3.15152" fill="#514E99" />
            </svg>
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
                  className="pointer lift theme-icon"
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
                  className="pointer lift theme-icon"
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
                className="mb-1 pointer lift theme-icon"
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

                <div className="flex items-center gap-4 pt-4 theme-border-t opacity-50">
                  <a
                    href="https://github.com/Ced-A21"
                    onClick={() => setIsOpen(false)}
                  >
                    <Image
                      className="pointer lift theme-icon"
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
                      className="pointer lift theme-icon"
                      src={LinkedIn}
                      alt="LinkedIn"
                      width={23}
                      height={23}
                      priority
                    />
                  </a>
                  <button onClick={toggleTheme} aria-label="Toggle theme">
                    <Image
                      className="pointer lift theme-icon"
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
