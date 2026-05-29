"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full bg-gradient-to-b from-white via-blue-50 to-slate-100"
    >
      <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-blue-100 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl flex-1"
          >
            <h1 className="text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
              Shaping Future Leaders Through Excellence
            </h1>
            <p className="mt-6 text-lg text-slate-700">
              At Greenfield International Academy we blend rigorous academics,
              innovative learning, and strong character-building to prepare
              students for global leadership and positive impact.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#admissions"
                className="rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-700 transition-all hover:scale-105"
              >
                Apply Now
              </a>
              <a
                href="#about"
                className="rounded-full border-2 border-slate-300 px-8 py-3 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 transition-all"
              >
                Explore Campus
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative flex-1 h-96"
          >
            <div className="absolute right-0 top-0 flex w-full max-w-sm flex-col gap-4">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="rounded-2xl bg-white/95 p-6 shadow-lg backdrop-blur"
              >
                <div className="text-sm text-slate-500 font-medium">
                  Total Students
                </div>
                <div className="mt-2 text-3xl font-bold text-blue-600">
                  5000+
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="rounded-2xl bg-white/95 p-6 shadow-lg backdrop-blur"
              >
                <div className="text-sm text-slate-500 font-medium">
                  Success Rate
                </div>
                <div className="mt-2 text-3xl font-bold text-amber-600">
                  98%
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="rounded-2xl bg-white/95 p-6 shadow-lg backdrop-blur"
              >
                <div className="text-sm text-slate-500 font-medium">
                  Expert Faculty
                </div>
                <div className="mt-2 text-3xl font-bold text-emerald-600">
                  50+
                </div>
              </motion.div>
            </div>

            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-3xl bg-gradient-to-br from-blue-200 via-blue-100 to-white shadow-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
