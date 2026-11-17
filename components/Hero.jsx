"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { profile, stats } from "@/lib/data";
import { WinBar } from "./Reveal";

function Typewriter({ words }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[i];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(word.slice(0, text.length + 1));
          if (text.length + 1 === word.length) setTimeout(() => setDel(true), 1200);
        } else {
          setText(word.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setI((i + 1) % words.length);
          }
        }
      },
      del ? 30 : 60
    );
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return (
    <span>
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}

function Counter({ value, decimals = 0, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min((now - start) / 1600, 1);
      setN(value * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  const shown = decimals ? n.toFixed(decimals) : Math.round(n).toLocaleString("en-US");
  return (
    <span ref={ref}>
      {prefix}
      {shown}
      {suffix}
    </span>
  );
}

const statStyles = [
  { bg: "bg-gold", rot: "-rotate-2", sh: "#F6F1E7" },
  { bg: "bg-cream", rot: "rotate-1", sh: "#FF6A1F" },
  { bg: "bg-orange", rot: "-rotate-1", sh: "#F6F1E7" },
  { bg: "bg-cream", rot: "rotate-2", sh: "#FFC400" },
  { bg: "bg-gold", rot: "-rotate-1", sh: "#FF6A1F" },
];

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4">
              <div className="num">00</div>
              <div>
                <p className="label">hello world</p>
                <span className="mt-1 inline-flex items-center gap-2 rounded-full border-[3px] border-black bg-cream px-3 py-1 text-xs font-black text-black">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" /> OPEN TO OPPORTUNITIES
                </span>
              </div>
            </div>
            <h1 className="mt-6 text-[clamp(3.2rem,9vw,7.5rem)] font-extrabold leading-[0.9] tracking-tight">
              Nishank
              <br />
              <span className="hl">Dawar</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-cream/80 leading-relaxed">{profile.summary}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="btn">See live projects →</a>
              <a href="/Nishank_Dawar_Resume.pdf" target="_blank" rel="noreferrer" className="btn btn-white">Resume ↓</a>
              <a href="#terminal" className="btn btn-orange font-mono">$ terminal</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: 6, y: 30 }}
            animate={{ opacity: 1, rotate: 2, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="brut overflow-hidden" style={{ "--sh": "#FF6A1F" }}>
              <WinBar title="whoami" right="~/nishank" />
              <div className="p-6 min-h-[220px]">
                <p className="font-mono text-xs font-bold text-black/50">YOU</p>
                <p className="mt-2 text-2xl font-extrabold leading-snug">
                  {profile.role} who <span className="bg-gold px-1 rounded">
                    <Typewriter words={profile.roles} />
                  </span>
                </p>
                <p className="mt-6 font-mono text-xs font-bold text-black/50">STACK</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Python", "Kubernetes", "AWS", "ClickHouse", "LLMs", "FastAPI"].map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-3 rotate-12 rounded-2xl border-[3px] border-black bg-gold px-4 py-3 text-3xl" style={{ boxShadow: "4px 4px 0 #F6F1E7" }}>
              ⚡
            </div>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-5">
          {stats.map((s, idx) => {
            const st = statStyles[idx % statStyles.length];
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.08 }}
                whileHover={{ rotate: 0, scale: 1.04 }}
                className={`brut ${st.bg} ${st.rot} p-4 ${idx === 4 ? "col-span-2 md:col-span-1" : ""}`}
                style={{ "--sh": st.sh, borderRadius: 18 }}
              >
                <div className="text-3xl md:text-4xl font-black">
                  <Counter {...s} />
                </div>
                <div className="mt-1 text-xs font-bold leading-tight">{s.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
