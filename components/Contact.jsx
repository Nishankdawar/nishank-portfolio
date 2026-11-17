"use client";
import { useState } from "react";
import { profile } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <section id="contact" className="py-20 max-w-5xl mx-auto px-6">
      <Reveal>
        <div className="brut -rotate-1 p-8 md:p-14 text-center" style={{ background: "#FFC400", "--sh": "#FF6A1F" }}>
          <p className="font-mono text-xs font-black uppercase tracking-[0.25em]">let&apos;s talk</p>
          <h2 className="mt-3 text-4xl md:text-6xl font-extrabold leading-[0.95]">
            Have a hard scaling problem?
            <br />
            Let&apos;s solve it.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={`mailto:${profile.email}`} className="btn !bg-black !text-gold" style={{ boxShadow: "5px 5px 0 #F6F1E7" }}>Email me</a>
            <button onClick={copy} className="btn btn-white font-mono">{copied ? "copied ✓" : profile.email}</button>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-orange">LinkedIn ↗</a>
          </div>
        </div>
      </Reveal>
      <p className="mt-16 text-center text-xs text-cream/40 font-mono">© {new Date().getFullYear()} Nishank Dawar</p>
    </section>
  );
}
