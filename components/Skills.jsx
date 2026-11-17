"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import Reveal, { SectionTitle } from "./Reveal";

const shadows = ["#FFC400", "#FF6A1F", "#F6F1E7"];

export default function Skills() {
  const cats = Object.keys(skills);
  const [active, setActive] = useState("All");
  return (
    <section id="skills" className="py-20 max-w-6xl mx-auto px-6">
      <SectionTitle n="04" eyebrow="toolbox" title="Technical skills" sub="Tap a category to filter." />
      <Reveal>
        <div className="flex flex-wrap gap-3 mb-10">
          {["All", ...cats].map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border-[3px] border-black px-4 py-1.5 text-sm font-extrabold text-black transition-all ${
                active === c ? "bg-gold -translate-y-0.5" : "bg-cream hover:bg-orange"
              }`}
              style={{ boxShadow: active === c ? "4px 4px 0 #F6F1E7" : "2px 2px 0 #F6F1E7" }}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cats
            .filter((c) => active === "All" || c === active)
            .map((c, i) => (
              <motion.div layout key={c} className="brut p-5" style={{ "--sh": shadows[i % 3] }}>
                <h3 className="font-mono text-xs font-black uppercase tracking-widest text-black/60">{c}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skills[c].map((s) => (
                    <span key={s} className="chip transition hover:bg-gold hover:-translate-y-0.5 cursor-default">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </Reveal>
    </section>
  );
}
