"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Elementary School",
    description: "Building strong foundational skills and fostering curiosity",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Junior Secondary",
    description: "Developing critical thinking and interdisciplinary expertise",
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Senior Secondary",
    description: "Preparing for higher education and professional careers",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    title: "STEM Programs",
    description: "Hands-on labs, competitions, and innovation challenges",
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Arts & Humanities",
    description: "Creative expression and cultural enrichment",
    color: "from-pink-500 to-pink-600",
  },
];

export default function Programs() {
  return (
    <section id="academics" className="w-full bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white">
            Academic Programs
          </h3>
          <p className="mt-4 text-xl text-slate-600 dark:text-slate-300">
            Curated programs designed to unlock each student&apos;s potential
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
                className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-5 transition-opacity`}
              />

              <div
                className={`inline-block rounded-lg bg-gradient-to-br ${program.color} p-3 text-white`}
              >
                <div className="w-6 h-6" />
              </div>

              <h4 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">
                {program.title}
              </h4>
              <p className="mt-3 text-slate-600 dark:text-slate-400">{program.description}</p>

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
