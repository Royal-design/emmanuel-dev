import { stack } from "@/app/data";
import { Layout } from "./Layout";
import { Reveal } from "./Reveal";

const layers: { name: string; key: keyof typeof stack; accent: string }[] = [
  { name: "frontend", key: "frameworks", accent: "#60a5fa" },
  { name: "backend", key: "tools", accent: "#fbbf24" },
  { name: "data & ai", key: "languages", accent: "#34d399" },
];

export function StackWindow() {
  const code = stack;

  return (
    <div className="relative border-b border-line bg-surface/40 py-16 md:py-20">
      <Layout>
        <Reveal>
          <div className="overflow-hidden border border-line bg-surface shadow-lift">
            {/* Window chrome */}
            <div className="flex items-center justify-between gap-3 border-b border-line bg-surface-2/60 px-4 py-2.5 sm:px-5">
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="truncate font-mono text-[11px] tracking-[0.14em] text-ink-2 uppercase">
                stack.ts — emmanuel
              </span>
              <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[10px] tracking-[0.12em] text-ink-3 uppercase">
                full-stack
              </span>
            </div>

            {/* Code body */}
            <div className="grid overflow-x-auto md:grid-cols-[44px_1fr]">
              {/* Line numbers */}
              <div
                className="hidden select-none flex-col border-r border-line py-5 text-right font-mono text-[12px] leading-[1.7] text-ink-3 md:flex"
                aria-hidden="true"
              >
                {Array.from({ length: 26 }).map((_, i) => (
                  <span key={i} className="pr-3.5">
                    {i + 1}
                  </span>
                ))}
              </div>

              <div className="py-5 pl-5 pr-5 sm:pl-6 sm:pr-8">
                <pre className="font-mono text-[12px] leading-[1.7] whitespace-pre sm:text-[13px]">
                  <code>
                    <span className="text-ink-3">{"// "}</span>
                    <span className="text-ink-2">
                      emmanuel olowookere — full-stack engineer
                    </span>
                    {"\n"}
                    <span className="text-ink-3">{"// "}</span>
                    <span className="text-ink-2">
                      front to back, engineered to ship.
                    </span>
                    {"\n"}
                    {"\n"}
                    <span className="text-accent">export</span>
                    {" "}
                    <span className="text-ink">const</span>
                    {" "}
                    <span className="text-[#60a5fa]">stack</span>
                    {" = {"}
                    {"\n"}
                    {layers.map((layer) => (
                      <span key={layer.name}>
                        {"  "}
                        <span className="text-[#60a5fa]">{layer.name}</span>
                        <span className="text-ink-2">: [</span>
                        {"\n"}
                        {code[layer.key].map((item, i) => (
                          <span key={item}>
                            {"    "}
                            <span className="text-ink-2">&quot;</span>
                            <span className={layer.accent}>{item}</span>
                            <span className="text-ink-2">&quot;</span>
                            {i < code[layer.key].length - 1 && (
                              <span className="text-ink-3">,</span>
                            )}
                            {"\n"}
                          </span>
                        ))}
                        {"  "}
                        <span className="text-ink-2">]</span>
                        <span className="text-ink-3">,</span>
                        {"\n"}
                      </span>
                    ))}
                    <span className="text-ink">{"};"}</span>
                    {"\n"}
                    {"\n"}
                    <span className="text-accent">export</span>
                    {" "}
                    <span className="text-ink">const</span>
                    {" "}
                    <span className="text-[#60a5fa]">status</span>
                    {" = "}
                    <span className="text-ink">active</span>
                    <span className="text-ink-2">;</span>
                    {"\n"}
                    <span className="text-ink-3">{"// "}</span>
                    <span className="text-[#34d399]">✓</span>
                    <span className="text-ink-2">
                      {" "}
                      open to opportunities — remote & on-site
                    </span>
                  </code>
                </pre>
              </div>
            </div>

            {/* Status bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line bg-surface-2/60 px-4 py-2.5 font-mono text-[10px] tracking-[0.14em] text-ink-3 uppercase sm:px-5">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" />
                  lint — passing
                </span>
                <span className="hidden items-center gap-1.5 sm:flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Frontend · Backend · Database
                </span>
              </div>
              <span className="tabular">Ln 21, Col 12 · UTF-8</span>
            </div>
          </div>
        </Reveal>
      </Layout>
    </div>
  );
}