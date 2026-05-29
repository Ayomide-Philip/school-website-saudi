"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="admissions" className="w-full bg-slate-50 dark:bg-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/online/cta.jpg')" }}
          />
          <div className="absolute inset-0 bg-linear-to-r from-blue-900/75 via-blue-800/65 to-blue-700/75" />
          <div className="absolute inset-0 opacity-10 bg-pattern" />

          <div className="relative z-10 px-8 py-16 md:px-12 md:py-20">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-4xl font-bold text-white">
                  Admissions Open for 2026
                </h2>
                <p className="mt-3 text-lg text-blue-100">
                  Secure your child&apos;s place at Greenfield International
                  Academy today. Limited spots available.
                </p>
              </motion.div>

              <motion.a
                href="#apply"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-4 font-semibold text-slate-900 shadow-lg hover:bg-amber-400 transition-all md:mt-0 whitespace-nowrap"
              >
                Start Application
                <ArrowRight size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
