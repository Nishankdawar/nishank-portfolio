"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pipeline, savings } from "@/lib/data";
import Reveal, { SectionTitle, WinBar } from "./Reveal";

function SavingsBar({ item, idx }) {
  const [after, setAfter] = useState(false);
  const pct = (item.after / item.before) * 100;
  const fmt = (v) => (item.unit === "ms" ? `${v} ms` : `$${v}K`);
  const shadows = ["#FFC400", "#FF6A1F", "#F6F1E7"];
  return (
    <button
      onClick={() => setAfter(!after)}
      className="brut brut-sm p-5 text-left w-full transition-transform hover:-translate-y-1"
      style={{ "--sh": shadows[idx % 3], boxShadow: `6px 6px 0 ${shadows[idx % 3]}` }}
    >
      <div className="flex justify-between items-baseline">
        <span className="text-sm font-bold">{item.label}</span>
        <span className="text-2xl font-black">{after ? fmt(item.after) : fmt(item.before)}</span>
      </div>
      <div className="mt-3 h-5 rounded-full border-[3px] border-black bg-white overflow-hidden">
        <motion.div
          className="h-full bg-orange"
          animate={{ width: after ? `${pct}%` : "100%" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />
      </div>
      <div className="mt-2 font-mono text-xs font-bold text-black/60">
        {after ? `✓ ${item.note}` : "tap to optimize →"}
      </div>
    </button>
  );
}

export default function Pipeline() {
  const [active, setActive] = useState("asr");
  const cur = pipeline.find((p) => p.id === active);
  return (
    <section id="impact" className="py-20 max-w-6xl mx-auto px-6">
      <SectionTitle
        n="01"
        eyebrow="impact"
        title="Inside the platform I helped architect"
        sub="A self-sourced transcription platform handling ~10,000 hours of audio a day. Tap a stage to see how it works."
      />
      <Reveal>
        <div className="brut overflow-hidden" style={{ "--sh": "#FFC400" }}>
          <WinBar title="pipeline.flow" right={`stage ${pipeline.findIndex((p) => p.id === active) + 1}/5`} />
          <div className="p-6">
            <div className="flex flex-col md:flex-row items-stretch gap-3 md:gap-0">
              {pipeline.map((p, i) => (
                <div key={p.id} className="flex md:flex-1 items-center">
                  <button
                    onClick={() => setActive(p.id)}
                    className={`flex-1 rounded-2xl border-[3px] border-black px-3 py-4 text-center font-extrabold transition-all ${
                      active === p.id ? "bg-gold -translate-y-1 shadow-[4px_4px_0_#000]" : "bg-white hover:bg-gold/40"
                    }`}
                  >
                    <div className="text-2xl">{p.icon}</div>
                    <div className="mt-1 text-sm">{p.title}</div>
                  </button>
                  {i < pipeline.length - 1 && (
                    <div className="hidden md:block relative w-8 h-1 bg-black overflow-hidden shrink-0">
                      <span className="packet" style={{ animationDelay: `${i * 0.3}s` }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={cur.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="mt-6"
              >
                <p className="text-xl font-extrabold leading-snug">{cur.desc}</p>
                <ul className="mt-4 grid sm:grid-cols-3 gap-3">
                  {cur.points.map((pt) => (
                    <li key={pt} className="rounded-xl border-[3px] border-black bg-white px-3 py-2 font-mono text-sm font-bold">
                      ▸ {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.1} className="mt-10 grid md:grid-cols-3 gap-6">
        {savings.map((s, i) => (
          <SavingsBar key={s.label} item={s} idx={i} />
        ))}
      </Reveal>
    </section>
  );
}
