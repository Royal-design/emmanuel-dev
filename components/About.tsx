import { contactInfo } from "@/app/data";
import {
  FiClock,
  FiCode,
  FiGitBranch,
  FiGlobe,
  FiLayout,
  FiMail,
  FiMapPin,
  FiPenTool,
  FiSmartphone,
  FiUser,
  FiZap,
} from "react-icons/fi";
import { Layout } from "./Layout";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const highlights = [
  "End-to-end full-stack web development",
  "Modern React, Next.js & TypeScript applications",
  "RESTful APIs & PostgreSQL data modeling",
  "Performance optimization & accessibility",
  "Clean, maintainable code architecture",
];

const personalInfo = [
  { icon: FiUser, label: "Name", value: "Olowookere Emmanuel" },
  {
    icon: FiMail,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  { icon: FiGlobe, label: "Languages", value: "English, Yoruba" },
  { icon: FiMapPin, label: "Location", value: contactInfo.location },
  { icon: FiClock, label: "Experience", value: "3+ Years" },
  { icon: FiSmartphone, label: "Focus", value: "Full-Stack · AI Interfaces" },
];

const services = [
  {
    icon: FiCode,
    title: "Full-Stack Development",
    description:
      "React, Next.js, Node.js, NestJS, Express & FastAPI applications",
  },
  {
    icon: FiGitBranch,
    title: "Backend & APIs",
    description:
      "REST APIs with Express, NestJS & FastAPI, PostgreSQL & Prisma",
  },
  {
    icon: FiLayout,
    title: "UI Engineering",
    description: "Clean, modern interfaces with seamless UX",
  },
  {
    icon: FiZap,
    title: "Performance Optimization",
    description: "Fast loading, optimized web experiences",
  },
  {
    icon: FiPenTool,
    title: "Design Translation",
    description: "Figma to production-ready, pixel-perfect UI",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-b border-line py-24 md:py-36"
    >
      <Layout>
        <SectionHeading
          index="01"
          label="About"
          title="I build software that feels engineered, not assembled."
          note="Full-stack engineer · Osun State, Nigeria"
        />

        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="min-w-0 md:col-span-7">
            <Reveal>
              <p className="font-display text-2xl leading-snug font-medium tracking-tight text-balance md:text-3xl">
                I&apos;m a full-stack engineer who treats software as a serious
                medium — turning product ideas into fast, accessible products
                through clean code and deliberate design.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
<p className="mt-6 max-w-xl leading-relaxed text-ink-2">
                I specialize in React, Next.js and TypeScript on the front end,
                with Node.js, Express, NestJS, Python, FastAPI and PostgreSQL
                on the back end. My work spans AI-powered products, enterprise
                dashboards, e-commerce platforms and full-stack applications —
                each one shipped to production and used by real people.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <ul className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 border border-line bg-surface px-4 py-3 text-sm text-ink-2"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 bg-accent"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-12">
                <h3 className="mb-5 font-mono text-[11px] font-medium tracking-[0.22em] text-ink-3 uppercase">
                  What I do
                </h3>
                <div className="divide-y divide-line border-y border-line">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={service.title}
                        className="group flex items-start gap-4 py-4 transition-colors hover:bg-surface/60"
                      >
                        <Icon className="mt-0.5 h-4 w-4 shrink-0 text-ink-3 transition-colors group-hover:text-accent" />
                        <div>
                          <h4 className="text-sm font-medium text-ink">
                            {service.title}
                          </h4>
                          <p className="mt-0.5 text-sm text-ink-2">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="min-w-0 md:col-span-5">
            <div className="md:sticky md:top-28">
              <Reveal delay={0.1}>
                <div className="border border-line bg-surface">
                  <div className="flex items-center gap-2.5 border-b border-line px-5 py-4">
                    <span className="h-2 w-2 rounded-full bg-success" />
                    <span className="font-mono text-xs tracking-[0.14em] text-ink-2 uppercase">
                      {contactInfo.availability}
                    </span>
                  </div>
                  <dl className="divide-y divide-line">
                    {personalInfo.map((item) => {
                      const Icon = item.icon;
                      const content = (
                        <>
                          <dt className="font-mono text-[10px] tracking-[0.18em] text-ink-3 uppercase">
                            {item.label}
                          </dt>
                          <dd className="mt-1 text-sm font-medium break-words text-ink">
                            {item.value}
                          </dd>
                        </>
                      );
                      return (
                        <div
                          key={item.label}
                          className="flex items-center gap-4 px-5 py-4"
                        >
                          <Icon
                            className="h-4 w-4 shrink-0 text-accent"
                            aria-hidden="true"
                          />
                          <div className="min-w-0">
                            {item.href ? (
                              <a href={item.href} className="hover:text-accent">
                                {content}
                              </a>
                            ) : (
                              content
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </dl>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <p className="mt-6 font-mono text-xs leading-relaxed text-ink-3">
                  <span className="text-accent">$</span> echo{" "}
                  <span>
                    &quot;let&apos;s build something that ships.&quot;
                  </span>
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
}
