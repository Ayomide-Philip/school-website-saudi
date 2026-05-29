"use client";
import { motion } from "framer-motion";

const images = [
  "/images/gallery-1.svg",
  "/images/gallery-2.svg",
  "/images/gallery-3.svg",
  "/images/gallery-4.svg",
  "/images/gallery-5.svg",
  "/images/gallery-6.svg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-20">
      <h3 className="text-2xl font-bold text-[#071033]">Campus Gallery</h3>
      <p className="mt-2 text-zinc-600">A glimpse into life at Greenfield.</p>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {images.map((src, i) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            key={src}
            className="overflow-hidden rounded-xl bg-zinc-100"
          >
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              className="h-36 w-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
