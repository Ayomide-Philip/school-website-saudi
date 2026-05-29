/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aisha Al-Fahad",
    role: "Parent",
    text: "The teachers at Greenfield unlock potential and inspire confidence. My daughter has grown tremendously.",
    img: "/images/online/testimonial-1.jpg",
    rating: 5,
  },
  {
    name: "Mohammed Saleh",
    role: "Student, Senior Secondary",
    text: "I love the labs and the STEM challenges. The hands-on learning makes everything click into place.",
    img: "/images/online/testimonial-2.jpg",
    rating: 5,
  },
  {
    name: "Fatima Noor",
    role: "Parent",
    text: "A secure, nurturing environment with world-class academics. Exactly what we were looking for.",
    img: "/images/online/testimonial-3.jpg",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white">
            What Families Say
          </h3>
          <p className="mt-4 text-xl text-slate-600 dark:text-slate-300">
            Real stories from our community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-2xl bg-white dark:bg-slate-800 p-8 shadow-lg border border-slate-100 dark:border-slate-700"
            >
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="h-16 w-16 rounded-full object-cover shadow-md"
                />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="mt-4 text-slate-700 dark:text-slate-300">
                &quot;{testimonial.text}&quot;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
