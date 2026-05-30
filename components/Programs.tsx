"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Toddler Care",
    description: "Warm, attentive care for our youngest learners (18 months+)",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="2" />
        <path d="M8 16c1.333-2 6.667-2 8 0" />
      </svg>
    ),
  },
  {
    title: "Nursery (Ages 2–3)",
    description: "Play-based exploration that builds social and motor skills",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="6" height="6" rx="1" />
        <rect x="9" y="7" width="6" height="6" rx="1" />
        <rect x="15" y="11" width="6" height="6" rx="1" />
      </svg>
    ),
  },
  {
    title: "Pre-Kindergarten (Ages 4–5)",
    description: "Kindness-led early literacy, numeracy and school readiness",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 7c4-2 6-2 10 0v11c-4-2-6-2-10 0z" />
        <path d="M12 7c4-2 6-2 10 0v11c-4-2-6-2-10 0z" />
      </svg>
    ),
  },
  {
    title: "Early Literacy & Numeracy",
    description: "Foundational phonics, story-time and number play activities",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 6h16" />
        <path d="M4 12h6" />
        <path d="M4 18h10" />
      </svg>
    ),
  },
  {
    title: "Creative Play & Motor Skills",
    description: "Art, music, sensory play and gross/fine motor development",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 19V6l12-2v11" />
        <circle cx="6" cy="18" r="3" />
      </svg>
    ),
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
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white p-2">
                {program.icon}
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
