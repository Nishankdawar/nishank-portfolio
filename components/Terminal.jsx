"use client";
import { useRef, useState } from "react";
import { profile, experience, skills, projects, stats } from "@/lib/data";
import Reveal, { SectionTitle, WinBar } from "./Reveal";

const commands = {
  help: () => ["Available commands:", "  about   experience   skills   projects   impact   contact   resume   clear"],
  about: () => [profile.summary],
  experience: () => experience.map((e) => `${e.period.padEnd(22)} ${e.role} @ ${e.company}`),
  skills: () => Object.entries(skills).map(([k, v]) => `${k.padEnd(22)} ${v.join(", ")}`),
  projects: () => projects.map((p) => `${p.name.padEnd(12)} ${p.url}  - ${p.tagline}`),
  impact: () => stats.map((s) => `${(s.prefix || "") + s.value + s.suffix}`.padEnd(10) + s.label),
  contact: () => [`email     ${profile.email}`, `linkedin  ${profile.linkedin}`],
  resume: () => {
    window.open("/Nishank_Dawar_Resume.pdf", "_blank");
    return ["Opening resume..."];
  },
};

export default function Terminal() {
  const [lines, setLines] = useState([{ cmd: null, out: ["Welcome. Type `help` to see what you can ask me."] }]);
  const [val, setVal] = useState("");
  const [history, setHistory] = useState([]);
  const [hi, setHi] = useState(-1);
  const bodyRef = useRef(null);

  const run = (raw) => {
    const c = raw.trim().toLowerCase();
    if (!c) return;
    setHistory((h) => [c, ...h]);
    setHi(-1);
    if (c === "clear") return setLines([]);
    const fn = commands[c];
    setLines((l) => [...l, { cmd: c, out: fn ? fn() : [`command not found: ${c}. Try \`help\`.`] }]);
    setTimeout(() => bodyRef.current?.scrollTo({ top: 99999 }), 30);
  };

  const onKey = (e) => {
    if (e.key === "Enter") {
      run(val);
      setVal("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const n = Math.min(hi + 1, history.length - 1);
      if (history[n]) {
        setHi(n);
        setVal(history[n]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const n = hi - 1;
      setHi(n);
      setVal(n >= 0 ? history[n] : "");
    }
  };

  return (
    <section id="terminal" className="py-20 max-w-4xl mx-auto px-6">
      <SectionTitle n="05" eyebrow="prompt" title="Ask my terminal" sub="Type a command, or tap one below." />
      <Reveal>
        <div className="brut overflow-hidden" style={{ "--sh": "#FF6A1F" }}>
          <WinBar title="nishank" right="new chat" />
          <div
            ref={bodyRef}
            className="h-80 overflow-y-auto p-5 font-mono text-sm space-y-2"
            onClick={(e) => e.currentTarget.querySelector("input")?.focus()}
          >
            {lines.map((l, i) => (
              <div key={i}>
                {l.cmd && (
                  <div className="font-bold">
                    <span className="rounded bg-gold px-1">$</span> {l.cmd}
                  </div>
                )}
                {l.out.map((o, j) => (
                  <div key={j} className="whitespace-pre-wrap break-words text-black/80">
                    {o}
                  </div>
                ))}
              </div>
            ))}
            <div className="flex gap-2 items-center">
              <span className="rounded bg-gold px-1 font-bold">$</span>
              <input
                value={val}
                onChange={(e) => setVal(e.target.value)}
                onKeyDown={onKey}
                className="flex-1 bg-transparent outline-none font-bold"
                spellCheck={false}
                autoComplete="off"
                aria-label="terminal input"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {Object.keys(commands).map((c) => (
            <button key={c} onClick={() => run(c)} className="rounded-full border-[3px] border-black bg-cream px-4 py-1 font-mono text-sm font-black text-black hover:bg-gold transition" style={{ boxShadow: "3px 3px 0 #FFC400" }}>
              {c}
            </button>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
