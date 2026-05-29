"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-white dark:bg-slate-950 overflow-hidden pt-20"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 via-amber-500 to-blue-600" />

      {/* Decorative blobs */}
      <motion.div
        className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-blue-50 dark:bg-blue-950/20 opacity-40 blur-3xl"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 -right-40 w-96 h-96 rounded-full bg-amber-50 dark:bg-amber-950/20 opacity-30 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      <div className="relative z-10">
        {/* Main content container */}
        <div className="mx-auto max-w-7xl px-6 py-16">
          {/* Top section with headline and description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            {/* Small label */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                Welcome to Greenfield
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight"
            >
              Shaping Future
              <motion.span className="block bg-linear-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">
                Leaders Globally
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto"
            >
              At Greenfield International Academy, we nurture curious minds,
              build strong character, and prepare students for success in a
              rapidly changing world. Excellence in academics, arts, and
              athletics.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href="#admissions"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                <span>Apply Now</span>
                <ArrowRight size={20} />
              </motion.a>

              <motion.a
                href="#about"
                whileHover={{ scale: 1.05, borderColor: "#2563eb" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white px-8 py-4 rounded-lg font-semibold bg-slate-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 transition-all"
              >
                <span>Learn More</span>
                <ArrowRight size={20} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
