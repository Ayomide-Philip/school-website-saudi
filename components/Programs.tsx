"use client";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Elementary School",
    desc: "Foundational learning and character building.",
  },
  {
    title: "Junior Secondary",
    desc: "Critical thinking and interdisciplinary growth.",
  },
  {
    title: "Senior Secondary",
    desc: "Preparation for higher education and careers.",
  },
  {
    title: "STEM Programs",
    desc: "Hands-on labs, competitions, and innovation labs.",
  },
  {
    title: "Arts & Humanities",
    desc: "Creative expression and cultural studies.",
  },
];

export default function Programs() {
  return (
    <section id="academics" className="mx-auto max-w-7xl px-6 py-20">
      <h3 className="text-2xl font-bold text-[#071033]">Academic Programs</h3>
      <p className="mt-2 text-zinc-600">
        Curated programs designed to unlock each student's potential.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((p, i) => (
          <motion.div
            key={p.title}
            whileHover={{ y: -6 }}
            className="rounded-2xl bg-white p-6 shadow-lg"
          >
            <div className="text-lg font-semibold text-[#071033]">
              {p.title}
            </div>
            <div className="mt-2 text-sm text-zinc-500">{p.desc}</div>
            <a
              className="mt-4 inline-block text-sm font-medium text-[#0b3b6f]"
              href="#"
            >
              Learn more →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
