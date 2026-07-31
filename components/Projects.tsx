"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import { projects, type Project } from "@/app/data";
import { Layout } from "./Layout";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const categoryLabel: Record<Project["category"], string> = {
  frontend: "Frontend",
  "full-stack": "Full Stack",
  ai: "AI",
};

const categories: { key: Project["category"] | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "full-stack", label: "Full Stack" },
  { key: "frontend", label: "Frontend" },
  { key: "ai", label: "AI" },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[140] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} — case study`}
    >
      <motion.div
        initial={{ y: 48, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 32, opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[92vh] w-full max-w-3xl overflow-y-auto overscroll-contain border border-line bg-bg shadow-lift"
      >
        <div className="relative aspect-video overflow-hidden border-b border-line">
          <Image
            src={project.imageLink}
            alt={`${project.title} preview`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover object-top"
          />
          <button
            type="button"
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close case study"
            className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-bg/80 text-ink backdrop-blur-md transition-colors hover:border-accent hover:text-accent"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] tracking-[0.14em] text-ink-3 uppercase">
            <span className="text-accent">{categoryLabel[project.category]}</span>
            <span className="h-1 w-1 rounded-full bg-ink-3" />
            <span>{project.role}</span>
          </div>

          <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {project.title}
          </h3>

          <p className="mt-4 leading-relaxed text-ink-2">
            {project.description}
          </p>

          {project.highlights.length > 0 && (
            <div className="mt-6">
              <h4 className="mb-3 font-mono text-[11px] font-medium tracking-[0.22em] text-ink-3 uppercase">
                Key features
              </h4>
              <ul className="grid gap-2 sm:grid-cols-2">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2.5 text-sm text-ink-2"
                  >
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-6">
            <h4 className="mb-3 font-mono text-[11px] font-medium tracking-[0.22em] text-ink-3 uppercase">
              Technology
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStacks.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] text-ink-2"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-mono text-xs font-medium tracking-[0.14em] text-white uppercase transition-colors hover:bg-accent/90 dark:text-bg"
            >
              <ExternalLink className="h-4 w-4" />
              Live site
            </a>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 font-mono text-xs font-medium tracking-[0.14em] text-ink uppercase transition-colors hover:border-accent hover:text-accent"
              >
                Source code
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function FeaturedBlock({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <article className="group border border-line bg-surface">
      <button
        type="button"
        data-cursor="view"
        onClick={onOpen}
        className="relative block w-full overflow-hidden text-left"
        aria-label={`${project.title} — featured project. View case study.`}
      >
        <div className="relative aspect-[16/10] overflow-hidden md:aspect-[16/8]">
          <Image
            src={project.imageLink}
            alt={`${project.title} preview`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1240px"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 font-mono text-[10px] tracking-[0.18em] text-white uppercase backdrop-blur-md sm:top-6 sm:left-6">
            Featured
          </span>
        </div>
      </button>

      <div className="grid gap-8 p-6 md:grid-cols-[1.3fr_1fr] md:gap-12 md:p-10">
        <div>
          <p className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">
            {project.role}
          </p>
          <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-5xl">
            {project.title}
          </h3>
          <p className="mt-4 leading-relaxed text-ink-2">
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.techStacks.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] text-ink-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-end gap-5 md:items-end">
          <ul className="space-y-2.5">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2.5 text-sm text-ink-2"
              >
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                {h}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-mono text-xs font-medium tracking-[0.14em] text-white uppercase transition-colors hover:bg-accent/90 dark:text-bg"
            >
              Visit site
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={onOpen}
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 font-mono text-xs font-medium tracking-[0.14em] text-ink uppercase transition-colors hover:border-accent hover:text-accent"
            >
              Case study
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function ShowcaseBlock({
  project,
  reverse,
  onOpen,
}: {
  project: Project;
  reverse: boolean;
  onOpen: () => void;
}) {
  return (
    <article className="group grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
      <div className={`relative ${reverse ? "lg:order-2" : ""}`}>
        <button
          type="button"
          data-cursor="view"
          onClick={onOpen}
          aria-label={`${project.title} — ${categoryLabel[project.category]}. View case study.`}
          className="block w-full overflow-hidden border border-line bg-surface shadow-lift"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={project.imageLink}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        </button>
      </div>

      <div className={`${reverse ? "lg:order-1" : ""}`}>
        <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] tracking-[0.14em] text-ink-3 uppercase">
          <span className="text-accent">{categoryLabel[project.category]}</span>
          <span className="h-1 w-1 rounded-full bg-ink-3" />
          <span>{project.role}</span>
        </div>

        <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          {project.title}
        </h3>

        <p className="mt-4 leading-relaxed text-ink-2">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStacks.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] text-ink-2"
            >
              {tech}
            </span>
          ))}
          {project.techStacks.length > 5 && (
            <span className="tabular px-2 py-1 font-mono text-[11px] text-ink-3">
              +{project.techStacks.length - 5}
            </span>
          )}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-mono text-xs font-medium tracking-[0.14em] text-white uppercase transition-colors hover:bg-accent/90 dark:text-bg"
          >
            Live site
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 font-mono text-xs font-medium tracking-[0.14em] text-ink uppercase transition-colors hover:border-accent hover:text-accent"
            >
              Code
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex items-center gap-2 px-2 py-2.5 font-mono text-xs font-medium tracking-[0.14em] text-ink-2 uppercase transition-colors hover:text-accent"
          >
            Case study
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [category, setCategory] = useState<Project["category"] | "all">("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const close = () => setSelected(null);

  const featured = projects.find((p) => p.id === 22) ?? projects[0];

  const visible = useMemo(() => {
    if (category === "all") return projects.filter((p) => p.id !== featured.id);
    return projects.filter((p) => p.category === category);
  }, [category, featured.id]);

  const showFeatured = category === "all";

  return (
    <section id="work" className="scroll-mt-20 py-24 md:py-36">
      <Layout>
        <SectionHeading
          index="04"
          label="Selected Work"
          title="Products, shipped."
          note="Twelve projects — client platforms, AI tools and personal builds"
        />

        <Reveal>
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setCategory(cat.key)}
                aria-pressed={category === cat.key}
                className={`rounded-full border px-4 py-2 font-mono text-[11px] tracking-[0.14em] uppercase transition-colors ${
                  category === cat.key
                    ? "border-accent bg-accent text-white dark:text-bg"
                    : "border-line-strong text-ink-2 hover:border-accent hover:text-accent"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="space-y-24 md:space-y-32"
          >
            {showFeatured && (
              <Reveal>
                <FeaturedBlock
                  project={featured}
                  onOpen={() => setSelected(featured)}
                />
              </Reveal>
            )}

            {visible.map((project, i) => (
              <Reveal key={project.id}>
                <ShowcaseBlock
                  project={project}
                  reverse={i % 2 === 1}
                  onOpen={() => setSelected(project)}
                />
              </Reveal>
            ))}
          </motion.div>
        </AnimatePresence>

        <Reveal className="mt-16" delay={0.1}>
          <p className="flex flex-wrap items-center gap-2 text-sm text-ink-3">
            <Link
              href="https://github.com/Royal-design"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.12em] text-ink-2 uppercase transition-colors hover:text-accent"
            >
              More experiments on GitHub
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </p>
        </Reveal>
      </Layout>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={close} />}
      </AnimatePresence>
    </section>
  );
}
