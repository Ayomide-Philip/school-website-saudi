"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Toddler Care",
    description: "Warm, attentive care for our youngest learners (18 months+)",
    color: "from-rose-200 to-rose-300",
  },
  {
    title: "Nursery (Ages 2–3)",
    description: "Play-based exploration that builds social and motor skills",
    color: "from-amber-200 to-amber-300",
  },
  {
    title: "Pre-Kindergarten (Ages 4–5)",
    description: "Kindness-led early literacy, numeracy and school readiness",
    color: "from-emerald-200 to-emerald-300",
  },
  {
    title: "Early Literacy & Numeracy",
    description: "Foundational phonics, story-time and number play activities",
    color: "from-sky-200 to-sky-300",
  },
  {
    title: "Creative Play & Motor Skills",
    description: "Art, music, sensory play and gross/fine motor development",
    color: "from-fuchsia-200 to-fuchsia-300",
  },
];

export default function Programs() {
  return (
    <section id="early-years" className="w-full bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white">
            Early Years & Nursery Programs
          </h3>
          <p className="mt-4 text-xl text-slate-600 dark:text-slate-300">
            Gentle, play-based learning that nurtures curiosity and confidence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl bg-white dark:bg-slate-800 p-8 shadow-lg border border-slate-100 dark:border-slate-700 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${program.color} opacity-0 group-hover:opacity-5 transition-opacity`}
              />

              <div
                className={`inline-block rounded-lg bg-linear-to-br ${program.color} p-3 text-white`}
              >
                <div className="w-6 h-6" />
              </div>

              <h4 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">
                {program.title}
              </h4>
              <p className="mt-3 text-slate-600 dark:text-slate-400">
                {program.description}
              </p>

              <a
                href="#"
                className="mt-6 inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
              >
                Learn more
                <ArrowRight
                  size={16}
                  className="ml-2 group-hover/link:translate-x-1 transition-transform"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
