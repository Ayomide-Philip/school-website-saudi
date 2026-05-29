"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Toggle from "./toggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#academics", label: "Academics" },
    { href: "#admissions", label: "Admissions" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    setActiveLink(href);
    setOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg"
            : "bg-white/70 dark:bg-transparent backdrop-blur-md"
        }`}
      >
        <div
          className={`h-1 bg-linear-to-r from-blue-600 via-amber-500 to-blue-600 ${
            scrolled ? "opacity-100" : "opacity-50"
          } transition-opacity duration-300`}
        />

        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="#"
              className="flex items-center gap-3 group cursor-pointer"
              onClick={() => handleNavClick("#home")}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="h-11 w-11 rounded-full bg-linear-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-lg shadow-lg"
              >
                G
              </motion.div>
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  Greenfield
                </div>
                <div className="text-xs font-medium text-blue-600 dark:text-blue-300">
                  International Academy
                </div>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  whileHover={{ y: -2 }}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeLink === link.href
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {link.label}
                  {activeLink === link.href && (
                    <motion.div
                      layoutId="activeLink"
                      className="absolute bottom-1 left-4 right-4 h-0.5 bg-linear-to-r from-blue-600 to-amber-500"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Toggle />
              <motion.a
                href="#apply"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden rounded-full bg-linear-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 px-7 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-blue-500/50 transition-all md:inline-block"
              >
                Apply Now
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="md:hidden p-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setOpen(!open)}
                aria-label={open ? "Close menu" : "Open menu"}
              >
                {open ? <X size={26} /> : <Menu size={26} />}
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: open ? 1 : 0,
          y: open ? 0 : -20,
          pointerEvents: open ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 md:hidden bg-white dark:bg-slate-900"
      >
        <button
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 p-3 rounded-full bg-white dark:bg-slate-800 shadow-md text-slate-700 dark:text-slate-200 z-50"
        >
          <X size={20} />
        </button>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-6 pt-16 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: open ? 1 : 0, y: open ? 0 : 20 }}
            transition={{ delay: 0.1 }}
            className="space-y-1"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: open ? 1 : 0,
                  x: open ? 0 : -20,
                }}
                transition={{
                  delay: open ? 0.1 + index * 0.05 : 0,
                  duration: 0.3,
                }}
                className={`group block rounded-lg px-3 py-2 text-sm sm:px-6 sm:py-4 sm:text-lg sm:font-semibold transition-all ${
                  activeLink === link.href
                    ? "bg-linear-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                    : "text-slate-900 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{link.label}</span>
                  {activeLink === link.href && (
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="text-white"
                    >
                      ✓
                    </motion.div>
                  )}
                </div>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: open ? 1 : 0 }}
              transition={{ delay: 0.35 }}
              className="h-px bg-linear-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent my-6"
            />

            <motion.a
              href="#apply"
              onClick={() => handleNavClick("#apply")}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: open ? 1 : 0,
                y: open ? 0 : 10,
              }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block w-full rounded-md bg-linear-to-r from-blue-600 via-blue-600 to-blue-700 dark:from-blue-600 dark:via-blue-600 dark:to-blue-700 px-4 py-2 text-center text-sm font-semibold text-white shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Apply Now
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
