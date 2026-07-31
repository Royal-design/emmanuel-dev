import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  note?: string;
  id?: string;
}

export function SectionHeading({
  index,
  label,
  title,
  note,
  id,
}: SectionHeadingProps) {
  return (
    <Reveal as="header" className="mb-12 md:mb-20">
      <div className="mb-6 flex items-center gap-4">
        <span className="font-mono text-xs text-accent">{index}</span>
        <span className="h-px w-16 bg-line-strong md:w-24" aria-hidden="true" />
        <span className="font-mono text-[11px] font-medium tracking-[0.22em] text-ink-3 uppercase">
          {label}
        </span>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2
          id={id}
          className="scroll-mt-24 font-display text-4xl font-semibold tracking-tight text-balance md:text-6xl"
        >
          {title}
        </h2>
        {note && (
          <p className="max-w-sm text-sm leading-relaxed text-ink-2 md:pb-2 md:text-right">
            {note}
          </p>
        )}
      </div>
    </Reveal>
  );
}
