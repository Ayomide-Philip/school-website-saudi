/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import { Target, Eye, Users, Zap, Heart, LucideIcon } from "lucide-react";

function CoreValue({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-linear-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-lg transition-all"
    >
      <motion.div
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="inline-block p-3 bg-linear-to-br from-amber-100 to-amber-50 dark:from-amber-900/30 dark:to-amber-800/20 rounded-lg mb-4"
      >
        <Icon size={24} className="text-amber-600 dark:text-amber-400" />
      </motion.div>
      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
        {title}
      </h4>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-white dark:bg-slate-900 py-10 relative overflow-hidden"
    >
      <motion.div
        className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-blue-50 dark:bg-blue-950/20 opacity-40 blur-3xl"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 90, 180] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-72 h-72 rounded-full bg-amber-50 dark:bg-amber-950/20 opacity-30 blur-3xl"
        animate={{ scale: [1.05, 1, 1.05], rotate: [180, 90, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-4">
            Our Story
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Building a legacy of excellence, innovation, and character
            development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-stretch">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="/images/online/about-campus.jpg"
              alt="Greenfield Academy Campus"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/30 via-transparent to-transparent" />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-8 left-8 bg-white/95 dark:bg-slate-800/95 backdrop-blur rounded-2xl p-6 shadow-xl max-w-xs"
            >
              <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                Est. 1995
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                30 years of transforming education
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between gap-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Target
                  size={24}
                  className="text-blue-500 dark:text-blue-400"
                />

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Our Mission
                </h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                To provide a world-class education that nurtures intellectual
                curiosity, inspires innovation, and develops confident,
                compassionate leaders prepared to make a meaningful impact on a
                global stage.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Eye size={24} className="text-blue-500 dark:text-blue-400" />

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Our Vision
                </h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                To be recognized globally as a beacon of educational excellence,
                where diverse learners flourish through transformative teaching,
                cutting-edge facilities, and a thriving community of scholars
                and leaders.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">
            Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CoreValue
              icon={Zap}
              title="Excellence"
              description="Committed to the highest standards in academics, athletics, and character development."
            />
            <CoreValue
              icon={Users}
              title="Community"
              description="Building a supportive, inclusive environment where every voice is valued and heard."
            />
            <CoreValue
              icon={Heart}
              title="Integrity"
              description="Fostering honesty, respect, and ethical responsibility in all that we do."
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
