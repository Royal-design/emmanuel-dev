import { education, experiences } from "@/app/data";
import { Layout } from "./Layout";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-b border-line bg-surface/40 py-24 md:py-36"
    >
      <Layout>
        <SectionHeading
          index="02"
          label="Experience"
          title="Where I've worked"
          note="Six roles and counting — from internship to leading production interfaces"
        />

        <div className="relative space-y-16 md:space-y-20">
          <span
            className="absolute top-2 bottom-2 left-[9px] w-px bg-line-strong md:left-[13px]"
            aria-hidden="true"
          />
          {experiences.map((exp, i) => (
            <Reveal as="article" key={`${exp.company}-${exp.title}`} delay={i * 0.04}>
              <div className="relative pl-10 md:pl-16">
                <span
                  className="absolute top-1.5 left-0 h-[18px] w-[18px] rounded-full border border-line-strong bg-bg md:h-[27px] md:w-[27px] md:border-[3px]"
                  aria-hidden="true"
                >
                  <span className="absolute inset-[5px] rounded-full bg-accent/80 md:inset-[7px]" />
                </span>

                <div className="grid gap-2 md:grid-cols-[240px_1fr] md:gap-10">
                  <div className="pt-1">
                    <p className="font-mono text-xs tracking-[0.14em] text-ink-3 uppercase">
                      {exp.duration}
                    </p>
                  </div>

                  <div className="group">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                        {exp.title}
                      </h3>
                      <span className="font-mono text-xs text-accent">
                        @ {exp.company}
                      </span>
                    </div>
                    <ul className="mt-4 space-y-2.5">
                      {exp.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-sm leading-relaxed text-ink-2"
                        >
                          <span
                            className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-ink-3 transition-colors group-hover:bg-accent"
                            aria-hidden="true"
                          />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <div className="border-t border-line pt-10">
            <h3 className="mb-6 font-mono text-[11px] font-medium tracking-[0.22em] text-ink-3 uppercase">
              Education
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="flex flex-col justify-between border border-line bg-surface p-6 transition-colors hover:border-accent/40"
                >
                  <div>
                    <p className="font-mono text-xs tracking-[0.14em] text-accent">
                      {edu.duration}
                    </p>
                    <h4 className="mt-2 font-display text-lg font-semibold tracking-tight">
                      {edu.degree}
                    </h4>
                    <p className="mt-1 text-sm text-ink-2">{edu.school}</p>
                  </div>
                  <ul className="mt-4 space-y-1.5">
                    {edu.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2 text-xs leading-relaxed text-ink-3"
                      >
                        <span
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Layout>
    </section>
  );
}
