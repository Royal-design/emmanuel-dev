import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { contactInfo } from "@/app/data";
import { Layout } from "./Layout";

const navLinks = [
  { href: "#work", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Journey" },
  { href: "#stack", label: "Toolbox" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface/40">
      <Layout className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="#top" className="font-display text-2xl font-semibold tracking-tight">
              Emmanuel<span className="text-accent">.</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-2">
              Full-stack engineer building fast, accessible web applications —
              frontend to backend — always open to new challenges.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-success" />
              <span className="font-mono text-[11px] tracking-[0.16em] text-ink-2 uppercase">
                {contactInfo.availability}
              </span>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="mb-4 font-mono text-[11px] font-medium tracking-[0.22em] text-ink-3 uppercase">
              Navigate
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-2 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="mb-4 font-mono text-[11px] font-medium tracking-[0.22em] text-ink-3 uppercase">
              Connect
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-ink-2 transition-colors hover:text-accent"
                >
                  <FaGithub className="h-4 w-4" aria-hidden="true" />
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-ink-2 transition-colors hover:text-accent"
                >
                  <FaLinkedinIn className="h-4 w-4" aria-hidden="true" />
                  LinkedIn
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm break-all text-ink-2 transition-colors hover:text-accent"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 md:flex-row md:items-center">
          <p className="font-mono text-[11px] tracking-[0.08em] text-ink-3">
            © {currentYear} Emmanuel Olowookere. Designed & built with Next.js.
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-ink-2 uppercase transition-colors hover:text-accent"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line-strong transition-colors group-hover:border-accent">
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>
      </Layout>
    </footer>
  );
}
