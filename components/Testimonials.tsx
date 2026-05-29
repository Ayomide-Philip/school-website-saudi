"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aisha Al-Fahad",
    role: "Parent",
    text: "The teachers at Greenfield unlock potential and inspire confidence.",
    img: "/images/testi-1.svg",
  },
  {
    name: "Mohammed Saleh",
    role: "Student",
    text: "I love the labs and the STEM challenges — I learned so much.",
    img: "/images/testi-2.svg",
  },
  {
    name: "Fatima Noor",
    role: "Parent",
    text: "A secure, nurturing environment with world-class academics.",
    img: "/images/testi-3.svg",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h3 className="text-2xl font-bold text-[#071033]">What Families Say</h3>
      <div className="mt-6 flex gap-4 overflow-x-auto py-4">
        {testimonials.map((t) => (
          <motion.div
            key={t.name}
            whileHover={{ y: -6 }}
            className="min-w-[300px] rounded-2xl bg-white p-6 shadow"
          >
            <div className="flex items-center gap-4">
              <img
                src={t.img}
                alt={t.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-[#071033]">{t.name}</div>
                <div className="text-sm text-zinc-500">{t.role}</div>
              </div>
            </div>
            <p className="mt-4 text-zinc-600">“{t.text}”</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
