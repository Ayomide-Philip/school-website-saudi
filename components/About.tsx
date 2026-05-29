"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Counter({ to, label }: { to: number; label: string }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(to / (duration / 16));
    const iv = setInterval(() => {
      start += step;
      if (start >= to) {
        setValue(to);
        clearInterval(iv);
      } else {
        setValue(start);
      }
    }, 16);
    return () => clearInterval(iv);
  }, [to]);

  return (
    <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-white p-6 shadow-md border border-blue-100">
      <div className="text-3xl font-bold text-blue-600">{value}+</div>
      <div className="mt-2 text-sm text-slate-600">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="w-full bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white p-8 shadow-xl overflow-hidden"
          >
            <img
              src="/images/about.svg"
              alt="Campus"
              className="h-80 w-full rounded-2xl object-cover shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900">
              Our Mission &amp; Vision
            </h2>
            <p className="mt-6 text-lg text-slate-700 leading-relaxed">
              Greenfield International Academy is committed to delivering
              world-class education that nurtures curiosity, innovation, and
              leadership while maintaining a supportive and safe environment for
              every student.
            </p>
            <p className="mt-4 text-lg text-slate-700 leading-relaxed">
              We believe in developing not just academic excellence, but
              well-rounded individuals who are prepared to face global
              challenges with confidence and integrity.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <Counter to={5000} label="Students" />
              <Counter to={98} label="Success Rate" />
              <Counter to={50} label="Faculty" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
