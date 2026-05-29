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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-lg"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      {/* Top bar with border */}
      <div
        className={`h-1 bg-gradient-to-r from-blue-600 via-amber-500 to-blue-600 ${
          scrolled ? "opacity-100" : "opacity-50"
        } transition-opacity duration-300`}
      />

      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#"
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => handleNavClick("#home")}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="h-11 w-11 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-lg shadow-lg"
            >
              G
            </motion.div>
            <div>
              <div className="text-sm font-bold text-slate-900">Greenfield</div>
              <div className="text-xs font-medium text-blue-600">
                International Academy
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                whileHover={{ y: -2 }}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeLink === link.href
                    ? "text-blue-600"
                    : "text-slate-700 hover:text-blue-600"
                }`}
              >
                {link.label}
                {activeLink === link.href && (
                  <motion.div
                    layoutId="activeLink"
                    className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 to-amber-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>

          {/* Right section */}
          <div className="flex items-center gap-4">
            <Toggle />
            <motion.a
              href="#apply"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-7 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-blue-500/50 transition-all md:inline-block"
            >
              Apply Now
            </motion.a>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Full-screen Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: open ? 1 : 0,
          y: open ? 0 : -20,
          pointerEvents: open ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 top-16 z-40 md:hidden bg-white backdrop-blur-2xl"
      >
        {/* Gradient background elements */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-50 opacity-40 blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 180] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-amber-50 opacity-30 blur-3xl pointer-events-none"
          animate={{ scale: [1.1, 1, 1.1], rotate: [180, 90, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />

        {/* Menu content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: open ? 1 : 0, y: open ? 0 : 20 }}
            transition={{ delay: 0.1 }}
            className="space-y-2"
          >
            {/* Navigation links */}
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
                className={`group block rounded-lg px-6 py-4 text-lg font-semibold transition-all ${
                  activeLink === link.href
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                    : "text-slate-900 hover:bg-slate-100"
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

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: open ? 1 : 0 }}
              transition={{ delay: 0.35 }}
              className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent my-6"
            />

            {/* Theme toggle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: open ? 1 : 0,
                y: open ? 0 : 10,
              }}
              transition={{ delay: 0.38 }}
              className="flex items-center justify-between px-2"
            >
              <span className="text-sm font-medium text-slate-900">Dark Mode</span>
              <Toggle />
            </motion.div>

            {/* Apply button */}
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
              className="block w-full rounded-full bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 px-6 py-4 text-center text-lg font-semibold text-white shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Apply Now
            </motion.a>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: open ? 1 : 0,
                y: open ? 0 : 10,
              }}
              transition={{ delay: 0.5 }}
              className="rounded-xl bg-white/50 backdrop-blur border border-slate-200 px-6 py-4 mt-8"
            >
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
                Contact Us
              </p>
              <p className="text-sm font-medium text-slate-900 mb-1">
                admissions@greenfield.edu
              </p>
              <p className="text-sm text-slate-600">+966 5555 5555</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
}
