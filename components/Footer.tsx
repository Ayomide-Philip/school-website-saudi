"use client";
import { Mail, Share2, Send, Heart, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer
      className="relative text-slate-900 dark:text-white"
      style={{
        backgroundImage: "url('/images/online/footer.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/60 dark:bg-slate-900/75" />
      <div className="mx-auto max-w-7xl px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center font-semibold text-white">
                G
              </div>
              <div>
                <div className="font-semibold text-slate-900 dark:text-white">
                  Greenfield
                </div>
                <div className="text-xs text-blue-600 dark:text-blue-200">
                  International Academy
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-400">
              Excellence • Integrity • Leadership
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-400">
              <li>
                <a
                  href="#about"
                  className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#academics"
                  className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition"
                >
                  Academics
                </a>
              </li>
              <li>
                <a
                  href="#admissions"
                  className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition"
                >
                  Admissions
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition"
                >
                  Gallery
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-400">
              <li>123 Prestige Avenue</li>
              <li>Riyadh, Saudi Arabia</li>
              <li>
                <a
                  href="tel:+966555555555"
                  className="hover:text-slate-900 dark:hover:text-white transition"
                >
                  +966 5555 5555
                </a>
              </li>
              <li>
                <a
                  href="mailto:admissions@greenfield.edu"
                  className="hover:text-slate-900 dark:hover:text-white transition"
                >
                  admissions@greenfield.edu
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">
              Newsletter
            </h4>
            <p className="mb-4 text-sm text-slate-700 dark:text-slate-400">
              Get latest news and updates
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                aria-label="Email for newsletter"
                className="flex-1 rounded-lg px-4 py-2 text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm"
              />
              <button
                type="submit"
                className="rounded-lg bg-blue-600 dark:bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition"
              >
                <Mail size={18} />
              </button>
            </form>
            {subscribed && (
              <p className="mt-2 text-sm text-green-400">
                Thank you for subscribing!
              </p>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 border-t border-slate-200 dark:border-slate-800 pt-8"
        >
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-sm text-slate-700 dark:text-slate-400">
              © {new Date().getFullYear()} Greenfield International Academy. All
              rights reserved.
            </p>
            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
              <a
                href="#"
                className="hover:text-white transition"
                aria-label="Facebook"
              >
                <Share2 size={20} />
              </a>
              <a
                href="#"
                className="hover:text-slate-900 dark:hover:text-white transition"
                aria-label="Twitter"
              >
                <Send size={20} />
              </a>
              <a
                href="#"
                className="hover:text-slate-900 dark:hover:text-white transition"
                aria-label="Instagram"
              >
                <Heart size={20} />
              </a>
              <a
                href="#"
                className="hover:text-slate-900 dark:hover:text-white transition"
                aria-label="LinkedIn"
              >
                <Briefcase size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
