"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Target, Eye, Award, Users, Zap, Heart } from "lucide-react";

function Counter({
  to,
  label,
  icon: Icon,
}: {
  to: number;
  label: string;
  icon: any;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
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
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all hover:border-blue-300"
    >
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="inline-block p-3 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg mb-3"
      >
        <Icon size={24} className="text-blue-600" />
      </motion.div>
      <div className="text-3xl font-bold text-blue-600 mb-1">{value}+</div>
      <div className="text-sm font-semibold text-slate-600">{label}</div>
    </motion.div>
  );
}

function CoreValue({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-gradient-to-br from-white to-slate-50 rounded-xl p-6 border border-slate-200 shadow-md hover:shadow-lg transition-all"
    >
      <motion.div
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="inline-block p-3 bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg mb-4"
      >
        <Icon size={24} className="text-amber-600" />
      </motion.div>
      <h4 className="text-lg font-bold text-slate-900 mb-2">{title}</h4>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-white py-20 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-blue-50 opacity-40 blur-3xl"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 90, 180] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-72 h-72 rounded-full bg-amber-50 opacity-30 blur-3xl"
        animate={{ scale: [1.05, 1, 1.05], rotate: [180, 90, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-4">
            Our Story
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Building a legacy of excellence, innovation, and character
            development
          </p>
        </motion.div>

        {/* Main content - Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-stretch">
          {/* Left side - Image with overlay */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="/images/about.svg"
              alt="Greenfield Academy Campus"
              className="h-full w-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-8 left-8 bg-white/95 backdrop-blur rounded-2xl p-6 shadow-xl max-w-xs"
            >
              <p className="text-sm font-semibold text-slate-900 mb-1">
                Est. 1995
              </p>
              <p className="text-xs text-slate-600">
                30 years of transforming education
              </p>
            </motion.div>
          </motion.div>

          {/* Right side - Mission & Vision */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between gap-8"
          >
            {/* Mission */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg"
                >
                  <Target size={24} className="text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Our Mission
                </h3>
              </div>
              <p className="text-slate-700 leading-relaxed text-lg">
                To provide a world-class education that nurtures intellectual
                curiosity, inspires innovation, and develops confident,
                compassionate leaders prepared to make a meaningful impact on a
                global stage.
              </p>
            </div>

            {/* Vision */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="p-3 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg"
                >
                  <Eye size={24} className="text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Our Vision
                </h3>
              </div>
              <p className="text-slate-700 leading-relaxed text-lg">
                To be recognized globally as a beacon of educational excellence,
                where diverse learners flourish through transformative teaching,
                cutting-edge facilities, and a thriving community of scholars
                and leaders.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-10 text-center">
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

        {/* Achievements/Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-10 text-center">
            By The Numbers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Counter to={5000} label="Active Students" icon={Users} />
            <Counter to={98} label="Success Rate" icon={Award} />
            <Counter to={50} label="Faculty Members" icon={Target} />
            <Counter to={40} label="Countries Represented" icon={Eye} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
