"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="rounded-3xl bg-gradient-to-r from-[#0b3b6f] to-[#122744] p-10 text-white shadow-2xl"
      >
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-2xl font-bold">Admissions Open for 2026</div>
            <div className="mt-1 text-sm text-white/90">
              Secure your child's place at Greenfield International Academy
              today.
            </div>
          </div>
          <a
            href="#apply"
            className="mt-4 rounded-full bg-[#b8860b] px-6 py-3 font-semibold text-[#071033] md:mt-0"
          >
            Start Application
          </a>
        </div>
      </motion.div>
    </section>
  );
}
