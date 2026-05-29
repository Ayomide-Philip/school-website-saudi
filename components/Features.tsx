"use client";
import {
  BookOpen,
  UserCheck,
  Flask,
  Volleyball,
  Monitor,
  Shield,
} from "lucide-react";

const features = [
  { title: "Smart Classrooms", icon: BookOpen },
  { title: "Certified Teachers", icon: UserCheck },
  { title: "Modern Laboratories", icon: Flask },
  { title: "Sports Facilities", icon: Volleyball },
  { title: "Digital Learning", icon: Monitor },
  { title: "Safe Environment", icon: Shield },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h3 className="text-2xl font-bold text-[#071033]">Why Choose Us</h3>
      <p className="mt-2 text-zinc-600">
        A holistic education experience with premium facilities and a passionate
        faculty.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl bg-white p-6 shadow hover:scale-[1.02] transition"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-[#0b3b6f] p-3 text-white">
                <f.icon />
              </div>
              <div>
                <div className="font-semibold text-[#071033]">{f.title}</div>
                <div className="text-sm text-zinc-500">
                  Premium quality and modern standards.
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
