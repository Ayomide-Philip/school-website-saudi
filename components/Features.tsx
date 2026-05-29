"use client";
import {
  BookOpen,
  Users,
  Microscope,
  Trophy,
  Laptop,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Smart Classrooms",
    description: "Interactive technology-enabled learning spaces",
    icon: BookOpen,
  },
  {
    title: "Certified Teachers",
    description: "Highly qualified and passionate educators",
    icon: Users,
  },
  {
    title: "Modern Laboratories",
    description: "State-of-the-art STEM and science facilities",
    icon: Microscope,
  },
  {
    title: "Sports Facilities",
    description: "Complete athletic and wellness infrastructure",
    icon: Trophy,
  },
  {
    title: "Digital Learning",
    description: "Online and hybrid learning capabilities",
    icon: Laptop,
  },
  {
    title: "Safe Environment",
    description: "Secure campus with modern safety protocols",
    icon: Shield,
  },
];

export default function Features() {
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
            Why Choose Us
          </h3>
          <p className="mt-4 text-xl text-slate-600 dark:text-slate-300">
            A holistic education experience with premium facilities and a
            passionate faculty
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="rounded-2xl bg-white dark:bg-slate-800 p-8 shadow-lg border border-slate-100 dark:border-slate-700 transition-all"
            >
              <div className="rounded-lg bg-linear-to-br from-blue-600 to-blue-700 p-4 w-fit">
                <feature.icon className="text-white" size={28} />
              </div>
              <h4 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
                {feature.title}
              </h4>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
