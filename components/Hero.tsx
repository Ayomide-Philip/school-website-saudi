"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[70vh] md:min-h-[60vh] overflow-hidden pt-12 sm:pt-15 scroll-mt-32 bg-slate-950"
      style={{
        backgroundImage: "url('/images/children.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 via-amber-500 to-blue-600" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/25 to-black/55" />

      <div className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-10 sm:py-14 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl mx-auto text-center mb-8 sm:mb-10"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="text-xs sm:text-sm font-semibold text-white/90 uppercase tracking-widest drop-shadow-lg">
                Welcome to La Petite Ecole
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 sm:mb-6 leading-tight drop-shadow-lg"
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
              className="text-base sm:text-lg text-white/95 mb-6 sm:mb-8 leading-relaxed drop-shadow-lg"
            >
              At La Petite Ecole, we nurture curious minds, build strong
              character, and prepare students for success in a rapidly changing
              world — excellence across early-years learning and care.
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
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-linear-to-r from-blue-600 to-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-md sm:rounded-lg font-semibold hover:shadow-lg transition-all mb-2 sm:mb-0 shadow-xl"
              >
                <span>Apply Now</span>
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                href="#about"
                aria-label="Learn More"
                whileHover={{ scale: 1.04, borderColor: "#2563eb" }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 border-2 border-white/80 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-md sm:rounded-lg font-semibold bg-transparent hover:bg-white/10 transition-all drop-shadow-lg"
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
