"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[70vh] md:min-h-screen bg-white dark:bg-slate-950 overflow-hidden pt-28 sm:pt-32 scroll-mt-32"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 via-amber-500 to-blue-600" />
      <motion.div
        className="hidden sm:block absolute -top-40 -left-40 w-72 h-72 rounded-full bg-blue-50 dark:bg-blue-950/20 opacity-40 blur-3xl"
        animate={{ scale: [1, 1.07, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="hidden sm:block absolute -bottom-20 -right-40 w-96 h-96 rounded-full bg-amber-50 dark:bg-amber-950/20 opacity-30 blur-3xl"
        animate={{ scale: [1.05, 1, 1.05], rotate: [360, 180, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      <div className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-10 sm:py-14 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl mx-auto text-center mb-8 sm:mb-14"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                Welcome to Greenfield
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-3 sm:mb-6 leading-tight"
            >
              Shaping Future
              <motion.span className="block bg-linear-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">
                Leaders Globally
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 leading-relaxed"
            >
              At Greenfield International Academy, we nurture curious minds,
              build strong character, and prepare students for success in a
              rapidly changing world — excellence across academics, arts, and
              athletics.
            </motion.p>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full"
            >
              <motion.a
                href="#admissions"
                aria-label="Apply Now"
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 18px 36px rgba(37, 99, 235, 0.18)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-linear-to-r from-blue-600 to-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-md sm:rounded-lg font-semibold hover:shadow-lg transition-all mb-2 sm:mb-0"
              >
                <span>Apply Now</span>
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                href="#about"
                aria-label="Learn More"
                whileHover={{ scale: 1.04, borderColor: "#2563eb" }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white px-6 py-3 sm:px-8 sm:py-4 rounded-md sm:rounded-lg font-semibold bg-slate-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 transition-all"
              >
                <span>Learn More</span>
                <ArrowRight size={18} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
