"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-gradient-to-b from-white via-[#f7fafc] to-[#f3f4f6]"
    >
      <div className="absolute inset-0 bg-[url('/images/hero.svg')] bg-cover bg-center opacity-60 mix-blend-multiply" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl font-extrabold leading-tight text-[#071033] md:text-5xl">
              Shaping Future Leaders Through Excellence
            </h1>
            <p className="mt-4 text-lg text-zinc-700">
              At Greenfield International Academy we blend rigorous academics,
              innovative learning, and strong character-building to prepare
              students for global leadership.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#admissions"
                className="rounded-full bg-[#0b3b6f] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:scale-[1.02] transition"
              >
                Apply Now
              </a>
              <a
                href="#about"
                className="rounded-full border border-zinc-200 px-6 py-3 text-sm font-medium text-zinc-800 bg-white/80 hover:bg-white transition"
              >
                Explore Campus
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative w-full max-w-md"
          >
            <div className="pointer-events-none absolute -right-8 top-8 flex w-[340px] flex-col gap-4 sm:top-20">
              <div className="rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur">
                <div className="text-sm text-zinc-500">Students</div>
                <div className="mt-1 text-xl font-semibold">5000+</div>
              </div>
              <div className="rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur">
                <div className="text-sm text-zinc-500">Success Rate</div>
                <div className="mt-1 text-xl font-semibold">98%</div>
              </div>
              <div className="rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur">
                <div className="text-sm text-zinc-500">Expert Teachers</div>
                <div className="mt-1 text-xl font-semibold">50+</div>
              </div>
            </div>
            <div className="h-64 w-full rounded-3xl bg-linear-to-br from-[#e6eef8] to-white shadow-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
