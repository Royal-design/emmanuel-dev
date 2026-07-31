import { stack } from "@/app/data";

const items = [
  ...stack.frameworks,
  "Supabase",
  "Vercel",
  "Stripe",
  "SignalR",
  "Firebase",
  "Framer Motion",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div
      className="group relative overflow-hidden border-y border-line py-4 select-none"
      aria-hidden="true"
    >
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap group-hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-mono text-sm tracking-[0.14em] text-ink-2 uppercase">
              {item}
            </span>
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
