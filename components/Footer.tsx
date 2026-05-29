"use client";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#071033] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-linear-to-br from-[#0f172a] to-[#0b3b6f] flex items-center justify-center font-semibold">
                G
              </div>
              <div>
                <div className="font-semibold">
                  Greenfield International Academy
                </div>
                <div className="text-sm text-white/70">
                  Excellence • Integrity • Leadership
                </div>
              </div>
            </div>
            <div className="mt-4 text-sm text-white/70">
              123 Prestige Ave, Riyadh
              <br />
              +966 5 555 5555
              <br />
              admissions@greenfield.edu
            </div>
          </div>
          <div>
            <div className="font-semibold">Quick Links</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-white">
                  Academics
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-white">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white">
                  Gallery
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Newsletter</div>
            <p className="mt-2 text-sm text-white/70">
              Get the latest news and events from Greenfield.
            </p>
            <form className="mt-4 flex gap-2">
              <input
                aria-label="Email"
                placeholder="Email address"
                className="flex-1 rounded-md px-3 py-2 text-black"
              />
              <button className="rounded-md bg-[#b8860b] px-4 py-2 font-semibold text-[#071033]">
                Subscribe
              </button>
            </form>
            <div className="mt-4 flex items-center gap-3 text-white/80">
              <a href="#" aria-label="Email"><Mail size={20} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" aria-label="GitHub"><Github size={20} /></a>
              <a href="#" aria-label="Contact"><Send size={20} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Greenfield International Academy. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
