/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";

const images = [
  { src: "/images/online/features-students.jpg", label: "Classrooms" },
  { src: "/images/online/features-kids.jpg", label: "Laboratory" },
  { src: "/images/online/hero-school.jpg", label: "Sports" },
  { src: "/images/online/about-campus.jpg", label: "Events" },
  { src: "/images/online/program-studio.jpg", label: "Assembly" },
  { src: "/images/online/cta.jpg", label: "Graduation" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="w-full bg-slate-50 dark:bg-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white">
            Campus Gallery
          </h3>
          <p className="mt-4 text-xl text-slate-600 dark:text-slate-300">
            A glimpse into the vibrant life at La Petite Ecole
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {images.map((image, index) => (
            <motion.div
              key={image.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-700 h-48 shadow-md"
            >
              <img
                src={image.src}
                alt={image.label}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
