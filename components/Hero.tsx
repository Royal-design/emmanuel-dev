"use client";

import { contactInfo } from "@/app/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "./Layout";
import { Magnetic } from "./Magnetic";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
};

const lineReveal = {
  hidden: { y: "112%" },
  visible: {
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const portraitReveal = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 700], [0, 90]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      <div className="dot-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(75%_70%_at_50%_35%,black,transparent)]" />
      <div className="hero-glow pointer-events-none absolute inset-0" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative"
      >
        <Layout className="pb-10 pt-32 md:pb-16">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start gap-12 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="flex w-full min-w-0 flex-col gap-8 lg:max-w-[720px]">
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] text-ink-2 uppercase sm:text-xs"
              >
                <span className="text-ink-3">{"//"}</span>
                <span className="min-w-0">
                  Full-Stack Engineer — {contactInfo.location}
                </span>
                <span
                  className="inline-block h-3 w-[7px] shrink-0 animate-blink bg-accent"
                  aria-hidden="true"
                />
              </motion.div>

              <h1 className="font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.92] font-bold tracking-tight [overflow-wrap:anywhere]">
                <span className="block overflow-hidden pb-[0.08em]">
                  <motion.span variants={lineReveal} className="block">
                    Emmanuel
                  </motion.span>
                </span>
                <span className="block overflow-hidden pb-[0.2em] pt-[0.04em]">
                  <motion.span variants={lineReveal} className="block">
                    <span className="text-outline">Olowookere</span>
                  </motion.span>
                </span>
              </h1>

              <motion.p
                variants={fadeUp}
                className="max-w-xl text-base leading-relaxed text-ink-2 md:text-lg"
              >
                I turn complex products into fast, accessible, beautifully
                engineered software — across the entire stack. With React,
                Next.js, TypeScript and Node.js on the front, and Express,
                NestJS, FastAPI, Python and PostgreSQL behind the scenes, I build
                products that feel obvious to use.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center gap-4"
              >
                <Magnetic>
                  <Link
                    href="#work"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3.5 font-mono text-xs font-medium tracking-[0.14em] text-white uppercase transition-[background-color] hover:bg-accent/90 dark:text-bg"
                  >
                    View selected work
                    <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link
                    href={contactInfo.resume}
                    className="inline-flex items-center gap-2.5 rounded-full border border-line-strong px-6 py-3.5 font-mono text-xs font-medium tracking-[0.14em] text-ink uppercase transition-colors hover:border-accent hover:text-accent"
                  >
                    <Download className="h-4 w-4" />
                    Résumé
                  </Link>
                </Magnetic>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-2 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-6 font-mono text-xs tracking-[0.12em] text-ink-3 uppercase"
              >
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-success" />
                  <span className="text-ink-2">{contactInfo.availability}</span>
                </span>
                <span className="tabular">3+ yrs · 20+ projects</span>
                <span className="hidden sm:inline">
                  Full-stack & AI products @ Cartolinks · Vatebra
                </span>
                <span className="hidden items-center gap-1.5 md:flex">
                  <span>{contactInfo.coords}</span>
                </span>
              </motion.div>
            </div>

            <motion.figure
              variants={portraitReveal}
              className="relative mx-auto w-full max-w-[320px] shrink-0 lg:mx-0 lg:w-[340px]"
            >
              <span
                className="absolute -top-2.5 -left-2.5 z-10 h-5 w-5 border-t-2 border-l-2 border-accent"
                aria-hidden="true"
              />
              <span
                className="absolute -top-2.5 -right-2.5 z-10 h-5 w-5 border-t-2 border-r-2 border-accent"
                aria-hidden="true"
              />
              <span
                className="absolute -bottom-2.5 -left-2.5 z-10 h-5 w-5 border-b-2 border-l-2 border-accent"
                aria-hidden="true"
              />
              <span
                className="absolute -right-2.5 -bottom-2.5 z-10 h-5 w-5 border-r-2 border-b-2 border-accent"
                aria-hidden="true"
              />
              <div className="overflow-hidden border border-line bg-surface shadow-lift">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/portrait.webp"
                    alt="Portrait of Emmanuel Olowookere"
                    fill
                    priority
                    sizes="(max-width: 1024px) 320px, 340px"
                    className="object-cover object-top grayscale-[25%] transition-[filter,transform] duration-700 hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
                <figcaption className="flex items-center justify-between gap-3 border-t border-line px-4 py-3">
                  <div className="min-w-0">
                    <p className="truncate font-mono text-[11px] tracking-[0.14em] text-ink uppercase">
                      E. Olowookere
                    </p>
                    <p className="mt-0.5 truncate font-mono text-[10px] text-ink-3">
                      Full-Stack Engineer — Osun State, NG
                    </p>
                  </div>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-success" />
                    <span className="font-mono text-[10px] tracking-[0.12em] text-ink-3 uppercase">
                      Open
                    </span>
                  </span>
                </figcaption>
              </div>
            </motion.figure>
          </motion.div>
        </Layout>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute right-8 bottom-10 hidden flex-col items-center gap-3 lg:flex"
        aria-hidden="true"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-ink-3 [writing-mode:vertical-lr]">
          Scroll
        </span>
        <span className="relative h-14 w-px overflow-hidden bg-line">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-accent"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
