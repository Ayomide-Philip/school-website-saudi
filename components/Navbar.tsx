"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="#" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-linear-to-br from-[#0f172a] to-[#0b3b6f] flex items-center justify-center text-white font-semibold">G</div>
              G
            </div>
            <div>
              <div className="text-sm font-semibold text-[#071033]">
                Greenfield
              </div>
              <div className="text-xs text-zinc-500">International Academy</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm text-zinc-700 hover:text-[#0b3b6f]"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm text-zinc-700 hover:text-[#0b3b6f]"
            >
              About
            </a>
            <a
              href="#academics"
              className="text-sm text-zinc-700 hover:text-[#0b3b6f]"
            >
              Academics
            </a>
            <a
              href="#admissions"
              className="text-sm text-zinc-700 hover:text-[#0b3b6f]"
            >
              Admissions
            </a>
            <a
              href="#gallery"
              className="text-sm text-zinc-700 hover:text-[#0b3b6f]"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="text-sm text-zinc-700 hover:text-[#0b3b6f]"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#apply"
              className="hidden rounded-full bg-[#b8860b] px-4 py-2 text-sm font-semibold text-white shadow-md hover:brightness-105 md:inline-block"
            >
              Apply Now
            </a>
            <button
              className="md:hidden p-2 text-zinc-700"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 rounded-xl bg-white/80 p-4 shadow-lg md:hidden backdrop-blur"
          >
            <div className="flex flex-col gap-3">
              <a href="#home" className="text-sm">
                Home
              </a>
              <a href="#about" className="text-sm">
                About
              </a>
              <a href="#academics" className="text-sm">
                Academics
              </a>
              <a href="#admissions" className="text-sm">
                Admissions
              </a>
              <a href="#gallery" className="text-sm">
                Gallery
              </a>
              <a href="#contact" className="text-sm">
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
