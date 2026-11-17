const items = ["PYTHON", "KUBERNETES", "AWS", "CLICKHOUSE", "FASTAPI", "POSTGRESQL", "OPENTELEMETRY", "REDIS", "RABBITMQ", "DAGSTER", "LLMs", "DISTRIBUTED SYSTEMS"];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="my-16 -rotate-1 overflow-hidden border-y-[3px] border-black bg-gold py-3">
      <div className="marquee">
        {[...row, ...row].map((t, i) => (
          <span key={i} className="mx-6 flex items-center gap-12 text-2xl font-black text-black whitespace-nowrap">
            {t} <span className="text-orange">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
