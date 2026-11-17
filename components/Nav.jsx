"use client";
import { useEffect, useState } from "react";

const links = [
  ["impact", "Impact"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["terminal", "Terminal"],
];

export default function Nav() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setProgress((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 py-3 bg-black/75 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center gap-3 md:gap-5">
        <a href="#top" className="brut brut-sm !rounded-full px-5 py-2 font-black text-lg" style={{ "--sh": "#FF6A1F" }}>
          nishank.dev
        </a>
        <div className="hidden md:block flex-1 h-5 rounded-full border-[3px] border-black bg-cream overflow-hidden" style={{ boxShadow: "4px 4px 0 #FFC400" }}>
          <div className="h-full bg-orange transition-[width]" style={{ width: `${progress}%` }} />
        </div>
        <nav className="hidden lg:flex gap-4 text-sm font-bold">
          {links.map(([id, l]) => (
            <a key={id} href={`#${id}`} className="hover:text-gold transition">{l}</a>
          ))}
        </nav>
        <a href="/Nishank_Dawar_Resume.pdf" target="_blank" rel="noreferrer" className="ml-auto md:ml-0 rotate-2 rounded-xl border-[3px] border-black bg-gold px-4 py-2 font-black text-black text-sm" style={{ boxShadow: "4px 4px 0 #F6F1E7" }}>
          RESUME ↓
        </a>
      </div>
    </header>
  );
}
