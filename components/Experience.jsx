"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience, achievement, education } from "@/lib/data";
import Reveal, { SectionTitle, WinBar } from "./Reveal";

const shadows = ["#FFC400", "#FF6A1F", "#F6F1E7"];

function Job({ job, idx, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <Reveal>
      <div className="brut overflow-hidden" style={{ "--sh": shadows[idx % 3] }}>
        <WinBar title={`${job.company.toLowerCase()}.log`} right={job.period} />
        <div className="p-6">
          <button onClick={() => setOpen(!open)} className="w-full text-left flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="font-mono text-xs font-bold text-black/50">ROLE</p>
              <h3 className="text-3xl md:text-4xl font-extrabold leading-none">{job.role}</h3>
              <p className="mt-2 font-bold">
                <span className="bg-gold px-2 rounded">@ {job.company}</span> · {job.place}
              </p>
            </div>
            <span className="rounded-full border-[3px] border-black bg-orange px-4 py-1 font-mono text-sm font-black text-black">
              {open ? "− collapse" : "+ expand"}
            </span>
          </button>
          <div className="mt-4 flex flex-wrap gap-2">
            {job.tags.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
          <AnimatePresence initial={false}>
            {open && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden space-y-3 pt-5"
              >
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm md:text-base leading-relaxed font-medium">
                    <span className="mt-1 h-3 w-3 shrink-0 rounded-sm border-2 border-black bg-orange" />
                    <span>{b}</span>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 max-w-5xl mx-auto px-6">
      <SectionTitle n="02" eyebrow="experience" title="Where I've built things" />
      <div className="space-y-10">
        {experience.map((j, i) => (
          <Job key={j.company} job={j} idx={i} defaultOpen={i === 0} />
        ))}
      </div>
      <Reveal className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="brut p-5 -rotate-1" style={{ "--sh": "#FFC400", background: "#FF6A1F" }}>
          <div className="font-mono text-xs font-black">🏆 ACHIEVEMENT</div>
          <div className="mt-1 text-xl font-extrabold">{achievement.title}</div>
          <div className="text-sm font-semibold">{achievement.detail}</div>
        </div>
        {education.map((e) => (
          <div key={e.degree} className="brut p-5 rotate-1" style={{ "--sh": "#FF6A1F" }}>
            <div className="font-mono text-xs font-black text-black/50">🎓 EDUCATION</div>
            <div className="mt-1 text-xl font-extrabold">{e.degree}</div>
            <div className="text-sm font-semibold">
              {e.place} · {e.year}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
