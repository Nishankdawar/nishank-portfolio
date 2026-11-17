"use client";
import { projects } from "@/lib/data";
import Reveal, { SectionTitle, WinBar } from "./Reveal";

const styles = [
  { sh: "#FF6A1F", accent: "bg-gold" },
  { sh: "#FFC400", accent: "bg-orange" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
      <SectionTitle
        n="03"
        eyebrow="live projects"
        title="Products I've built and shipped"
        sub="Both are live in production. Click through and try them."
      />
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="brut group block h-full overflow-hidden transition-transform hover:-translate-y-1 hover:-rotate-1"
              style={{ "--sh": styles[i % 2].sh }}
            >
              <WinBar title={p.url.replace("https://", "")} right="● live" />
              <div className="p-6">
                <h3 className="text-5xl font-extrabold leading-none">{p.name}</h3>
                <p className={`mt-3 inline-block rounded-lg px-2 py-0.5 text-sm font-extrabold ${styles[i % 2].accent}`}>{p.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed font-medium">{p.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {p.highlights.map((h) => (
                    <li key={h} className="text-sm font-bold flex gap-2">
                      <span>✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
                <div className="mt-6 inline-flex rounded-full border-[3px] border-black bg-black px-5 py-2 font-black text-gold group-hover:bg-gold group-hover:text-black transition">
                  Visit site ↗
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
