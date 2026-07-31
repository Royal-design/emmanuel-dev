"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { contactInfo } from "@/app/data";
import { ThemeMode } from "./ThemeMode";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((s) => observer.observe(s));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[110] transition-[background-color,border-color,box-shadow] duration-500 ${
          scrolled || open
            ? "border-b border-line bg-bg/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1240px] items-center justify-between px-5 sm:px-8 md:h-20 md:px-12">
          <Link
            href="#top"
            className="font-display text-xl font-semibold tracking-tight"
            onClick={() => setOpen(false)}
          >
            Emmanuel<span className="text-accent">.</span>
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary"
          >
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative flex items-center gap-1.5 text-sm transition-colors ${
                  active === link.href
                    ? "text-ink"
                    : "text-ink-2 hover:text-ink"
                }`}
              >
                <span className="font-mono text-[10px] text-accent">
                  0{i + 1}
                </span>
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                    active === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeMode />
            <Link
              href={contactInfo.resume}
              className="hidden items-center gap-1.5 rounded-full border border-line-strong px-4 py-2 font-mono text-xs tracking-[0.12em] text-ink uppercase transition-colors hover:border-accent hover:text-accent md:inline-flex"
            >
              Résumé
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative z-[130] flex h-10 w-10 items-center justify-center lg:hidden"
            >
              <span
                className={`absolute h-px w-6 bg-ink transition-transform duration-300 ${
                  open ? "rotate-45" : "-translate-y-[4px]"
                }`}
              />
              <span
                className={`absolute h-px w-6 bg-ink transition-transform duration-300 ${
                  open ? "-rotate-45" : "translate-y-[4px]"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[120] flex flex-col bg-bg lg:hidden"
          >
            <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
            <nav
              className="relative flex flex-1 flex-col justify-center gap-1 px-5 pt-20 sm:px-8"
              aria-label="Mobile"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 border-b border-line py-4"
                  >
                    <span className="font-mono text-xs text-accent">
                      0{i + 1}
                    </span>
                    <span className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                      {link.label}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-ink-3 transition-colors group-hover:text-accent" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative flex flex-col gap-3 border-t border-line px-5 py-6 sm:px-8"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-success" />
                <span className="font-mono text-xs tracking-[0.14em] text-ink-2 uppercase">
                  {contactInfo.availability}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-ink-3">
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  GitHub ↗
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {contactInfo.email}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
