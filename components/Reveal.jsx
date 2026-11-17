"use client";
import { motion } from "framer-motion";

export default function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({ n, eyebrow, title, sub }) {
  return (
    <Reveal className="mb-12 flex items-start gap-5">
      <div className="num">{n}</div>
      <div>
        <p className="label">{eyebrow}</p>
        <h2 className="mt-1 text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-tight">{title}</h2>
        {sub && <p className="mt-3 max-w-2xl text-cream/70">{sub}</p>}
      </div>
    </Reveal>
  );
}

export function WinBar({ title, right }) {
  return (
    <div className="win-bar">
      <span className="dot bg-[#ff5f57]" />
      <span className="dot bg-gold" />
      <span className="dot bg-white" />
      <span className="ml-2 font-extrabold text-sm">{title}</span>
      <span className="ml-auto font-mono text-xs font-bold text-black/50">{right}</span>
    </div>
  );
}
