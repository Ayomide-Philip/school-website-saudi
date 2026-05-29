"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-white/80">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="#" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-900 to-blue-600 flex items-center justify-center text-white font-semibold text-sm">
              G
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">
                Greenfield
              </div>
              <div className="text-xs text-slate-500">
                International Academy
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm text-slate-700 hover:text-blue-600 transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm text-slate-700 hover:text-blue-600 transition"
            >
              About
            </a>
            <a
              href="#academics"
              className="text-sm text-slate-700 hover:text-blue-600 transition"
            >
              Academics
            </a>
            <a
              href="#admissions"
              className="text-sm text-slate-700 hover:text-blue-600 transition"
            >
              Admissions
            </a>
            <a
              href="#gallery"
              className="text-sm text-slate-700 hover:text-blue-600 transition"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="text-sm text-slate-700 hover:text-blue-600 transition"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#apply"
              className="hidden rounded-full bg-amber-600 px-6 py-2 text-sm font-semibold text-white shadow-md hover:bg-amber-700 transition md:inline-block"
            >
              Apply Now
            </a>
            <button
              className="md:hidden p-2 text-slate-700"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 rounded-xl bg-white p-4 shadow-lg md:hidden"
          >
            <div className="flex flex-col gap-3">
              <a href="#home" className="text-sm text-slate-700">
                Home
              </a>
              <a href="#about" className="text-sm text-slate-700">
                About
              </a>
              <a href="#academics" className="text-sm text-slate-700">
                Academics
              </a>
              <a href="#admissions" className="text-sm text-slate-700">
                Admissions
              </a>
              <a href="#gallery" className="text-sm text-slate-700">
                Gallery
              </a>
              <a href="#contact" className="text-sm text-slate-700">
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
