"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Counter({ to, label }: { to: number; label: string }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const step = Math.ceil(to / (duration / 16));
    const iv = setInterval(() => {
      start += step;
      if (start >= to) {
        setValue(to);
        clearInterval(iv);
      } else setValue(start);
    }, 16);
    return () => clearInterval(iv);
  }, [to]);
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm">
      <div className="text-2xl font-semibold text-[#071033]">
        {value}
        {to > 1000 ? "+" : ""}
      </div>
      <div className="text-sm text-zinc-500">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="rounded-2xl bg-gradient-to-br from-white to-[#f8fafc] p-6 shadow-lg"
        >
          <img
            src="/images/about.svg"
            alt="Campus"
            className="h-72 w-full rounded-xl object-cover"
          />
        </motion.div>
        <div>
          <h2 className="text-3xl font-bold text-[#071033]">
            Our Mission & Vision
          </h2>
          <p className="mt-4 text-zinc-700">
            Greenfield International Academy is committed to delivering
            world-class education that nurtures curiosity, innovation, and
            leadership while maintaining a supportive and safe environment.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            <Counter to={5000} label="Students" />
            <Counter to={98} label="Success Rate" />
            <Counter to={50} label="Expert Teachers" />
          </div>
        </div>
      </div>
    </section>
  );
}
