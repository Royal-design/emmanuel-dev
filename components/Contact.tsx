"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "@/app/data";
import { Layout } from "./Layout";
import { Magnetic } from "./Magnetic";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const socials = [
  {
    href: contactInfo.github,
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/Royal-design",
  },
  {
    href: contactInfo.linkedin,
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "Emmanuel Olowookere",
  },
  {
    href: contactInfo.whatsapp,
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: contactInfo.phone,
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-line py-24 md:py-36">
      <Layout>
        <SectionHeading
          index="05"
          label="Contact"
          title="Let's build something worth shipping."
          note={`Replies within 24 hours · ${contactInfo.location}`}
        />

        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="min-w-0 md:col-span-7">
            <Reveal>
              <p className="max-w-xl leading-relaxed text-ink-2">
                I&apos;m currently available for frontend roles, contract work and
                ambitious product teams — remote or on-site in Nigeria. If you
                have a product to build, a dashboard to refine, or an AI
                interface that needs to feel effortless, let&apos;s talk.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 min-w-0">
                <Magnetic strength={0.2}>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="group inline-flex max-w-full flex-wrap items-baseline gap-x-3 font-display text-xl font-semibold tracking-tight md:text-4xl"
                  >
                    <span className="relative min-w-0 break-words">
                      {contactInfo.email}
                      <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-accent transition-transform duration-500 group-hover:scale-x-0" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 md:h-8 md:w-8" />
                  </a>
                </Magnetic>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
                </span>
                <span className="font-mono text-xs tracking-[0.16em] text-ink-2 uppercase">
                  {contactInfo.availability} — frontend · contract · remote
                </span>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={0.1}>
              <div className="border border-line bg-surface">
                <div className="border-b border-line px-5 py-4">
                  <h3 className="font-mono text-[11px] font-medium tracking-[0.22em] text-ink-3 uppercase">
                    Elsewhere
                  </h3>
                </div>
                <ul className="divide-y divide-line">
                  {socials.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-accent-soft/50"
                        >
                          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-2 transition-colors group-hover:border-accent group-hover:text-accent">
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <span className="flex-1">
                            <span className="block text-sm font-medium text-ink">
                              {item.label}
                            </span>
                            <span className="block text-xs text-ink-3">
                              {item.value}
                            </span>
                          </span>
                          <ArrowUpRight className="h-4 w-4 text-ink-3 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Layout>
    </section>
  );
}
