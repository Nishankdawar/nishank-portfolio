export const profile = {
  name: "Nishank Dawar",
  role: "Senior Software Engineer",
  email: "19nishank@gmail.com",
  linkedin: "https://www.linkedin.com/in/nishank-dawar-85966a19b/",
  summary:
    "7+ years architecting and scaling distributed systems, high-throughput data platforms and AI-powered infrastructure. I turn hard scale, latency and cost problems into reliable, cost-efficient systems.",
  roles: [
    "builds distributed systems",
    "scales data platforms",
    "ships AI infrastructure",
    "cuts cloud & LLM costs",
  ],
};

export const stats = [
  { value: 1.62, prefix: "$", suffix: "M", decimals: 2, label: "annualized savings driven" },
  { value: 10000, suffix: "+", label: "hours of audio processed daily" },
  { value: 50, suffix: "K", label: "concurrent users served" },
  { value: 99.9, suffix: "%", decimals: 1, label: "production uptime" },
  { value: 7, suffix: "+", label: "years of experience" },
];

export const pipeline = [
  {
    id: "ingest",
    title: "Ingestion",
    icon: "⇣",
    desc: "Sources are discovered and events are deduplicated before any expensive work happens.",
    points: ["Duplicate-event consolidation", "Queue-driven, retryable workers", "Media scraping at scale"],
  },
  {
    id: "pre",
    title: "Preprocessing",
    icon: "✂",
    desc: "Audio is cleaned before transcription, so we never pay to transcribe silence or music.",
    points: ["Silence / music trimming", "Media normalization", "Hundreds of TBs of data weekly"],
  },
  {
    id: "asr",
    title: "Transcription",
    icon: "🎙",
    desc: "A self-sourced pipeline replaces third-party vendors, cutting cost and vendor-concentration risk.",
    points: ["~99% accuracy", "~5 min per hour of audio", "Monthly spend $40K → <$5K"],
  },
  {
    id: "llm",
    title: "LLM Enrichment",
    icon: "✦",
    desc: "Providers are chosen through a benchmarking framework that scores quality, latency and cost.",
    points: ["Benchmarking framework adopted org-wide", "LLM spend $120K → $20K", "Provider optimization"],
  },
  {
    id: "pub",
    title: "Publishing",
    icon: "⇡",
    desc: "Results go to production with observability and crash-safe, resumable execution.",
    points: ["OpenTelemetry + Grafana", "K8s persistent storage: resume after pod failure", "99.9% uptime"],
  },
];

export const savings = [
  { label: "Transcription / month", before: 40, after: 5, unit: "K", note: "87.5%+ reduction" },
  { label: "LLM spend / month", before: 120, after: 20, unit: "K", note: "83.3% reduction" },
  { label: "API latency", before: 4000, after: 700, unit: "ms", note: "~5.7x faster" },
];

export const experience = [
  {
    company: "AlphaSense",
    role: "Senior Software Engineer",
    period: "Jan 2022 – Present",
    place: "Remote",
    tags: ["Kubernetes", "AWS", "ClickHouse", "Dagster", "OpenTelemetry", "LLMs"],
    bullets: [
      "Led architecture of key components of a self-sourced transcription platform processing ~10,000 hours of audio daily (ingestion → preprocessing → transcription → LLM enrichment → publishing); ~5 min per hour of audio at ~99% accuracy. Expected to unlock tens of millions of dollars in annual savings.",
      "Drove cost optimization worth $1.62M+ annualized: transcription $40K → <$5K/month, LLM $120K → $20K/month. Built an LLM benchmarking framework (quality/latency/cost) now adopted across teams.",
      "Designed backend APIs for 50K concurrent users / 1.5M concurrent requests, cutting latency from 4s to 700ms; built pipelines transforming hundreds of TBs of data weekly.",
      "Revamped a critical product backend in one week, unblocking ~$1.4M ARR; built an alternative-data service removing ~15K API calls/month ($43K/yr) with 7x faster responses.",
      "Established OpenTelemetry + Grafana observability (99.9% uptime) and Kubernetes execution with persistent storage so long-running workflows survive pod failures.",
      "Built Sherlogs, a centralized debugging platform across microservices, AWS and Grafana logs, adopted by multiple teams. Mentored 6 junior engineers.",
      "Optimized an equity screener (120K tickers, 1,000 metrics) to <2s for 50K concurrent users; cut scraping proxy costs 3x (~$3K/mo); built Slack bots saving analysts 2h/day.",
    ],
  },
  {
    company: "InfoFractals",
    role: "Lead Backend Engineer",
    period: "Oct 2020 – Jan 2022",
    place: "Remote",
    tags: ["Python", "PostgreSQL", "REST"],
    bullets: [
      "Built backend services from scratch for an EdTech platform: auth, course discovery & purchasing, social features, student profiles and blogs.",
      "Scaled to ~250K users/month and 1,500 blogs.",
    ],
  },
  {
    company: "Attentive AI",
    role: "Backend Engineer",
    period: "Jul 2019 – Sep 2020",
    place: "Delhi / Noida",
    tags: ["Python", "Geospatial", "QGIS"],
    bullets: [
      "Developed LawnX for the landscaping industry (2M requests/month), contributing to 15x company revenue growth.",
      "Built JARVIS for geospatial workflows (4M requests/month, 100 properties in ~5 min) and QCWS, a QGIS quality-checking plugin (2M requests/month).",
    ],
  },
];

export const projects = [
  {
    name: "Ecombox",
    url: "https://ecombox.in/",
    tagline: "Ecommerce seller intelligence for Indian sellers",
    desc: "Diagnoses payment leaks, fixes broken listings with AI and automates shipment planning across Amazon, Flipkart and Meesho. Ingests settlement, MTR, listing and inventory reports and reconciles every rupee to the actual deposit.",
    tags: ["Next.js", "PostgreSQL", "Supabase", "LLMs", "Multi-tenant"],
    highlights: ["Settlement-to-deposit reconciliation engine", "SKU diagnostics & profitability", "AI Copy Doctor for listings"],
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    name: "RankScout",
    url: "https://rankscout.in/",
    tagline: "SEO & AI-visibility engine",
    desc: "Generates SEO content, hosts client blogs on their own domains and audits AI visibility, local SEO and website health. FastAPI + React, containerized and deployed on AWS EC2 behind nginx.",
    tags: ["FastAPI", "React", "Docker", "AWS EC2", "OpenRouter", "Postgres"],
    highlights: ["Host-based multi-domain blog rendering", "LLM cost tracking", "Keyword research & indexing automation"],
    gradient: "from-cyan-400 to-blue-500",
  },
];

export const skills = {
  Languages: ["Python", "C", "C++", "SQL", "HTML", "CSS"],
  "Backend & Frameworks": ["Django", "Flask", "FastAPI", "Sanic", "Celery"],
  "Data & Messaging": ["PostgreSQL", "MongoDB", "ClickHouse", "Redis", "RabbitMQ", "Dagster"],
  "Cloud & Infra": ["AWS", "Docker", "Kubernetes"],
  Observability: ["OpenTelemetry", "Grafana", "Prometheus"],
  Core: ["Distributed Systems", "System Design", "DSA", "DBMS", "OOP"],
};

export const education = [
  { degree: "B.Tech, Computer Engineering", place: "Netaji Subhas Institute of Technology, Delhi", year: "2015–2019" },
];

export const achievement = {
  title: "Top 5 finalist: 2026 Ignite Challenge",
  detail: "ElevenLabs × Dubai AI Festival 2026, awarded a $2,500 grant from ElevenLabs.",
};
