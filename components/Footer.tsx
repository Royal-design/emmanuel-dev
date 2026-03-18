"use client";

import Link from "next/link";
import { FiGithub, FiHeart, FiLinkedin, FiMail } from "react-icons/fi";
import { Layout } from "./Layout";

const socialLinks = [
  { href: "https://github.com/Royal-design", icon: FiGithub, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/emmanuel-olowookere-869262216",
    icon: FiLinkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:olowookereoluwaseun25@gmail.com",
    icon: FiMail,
    label: "Email",
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-primary-gray-300">
      <Layout className="py-4 md:w-[85%]">
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          {/* Left */}
          <div>
            <h3 className="text-lg font-semibold text-primary-base mb-2">
              Emmanuel
            </h3>
            <p className="text-sm text-primary-base/60 mb-3">
              Frontend Engineer
            </p>
            <p className="text-sm text-primary-base/50 leading-relaxed max-w-sm mb-4">
              Building fast, accessible web applications with modern
              technologies. Always open to new challenges and opportunities.
            </p>
            <div className="flex items-center gap-2 px-3 py-1.5 w-fit rounded-full bg-primary-gray-300/30 border border-primary-gray-300/40">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs text-primary-base/60">
                Available for opportunities
              </span>
            </div>
          </div>

          {/* Right */}
          <div className="md:text-right">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-primary-base/50 mb-4">
              Let&apos;s Connect
            </h3>
            <div className="flex flex-wrap md:justify-end gap-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-primary-gray-300/30 text-primary-base/60 rounded-lg border border-primary-gray-300/40 hover:border-primary-base/20 hover:text-primary-base transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-4 border-t border-primary-gray-300/70 flex flex-col md:flex-row justify-center items-center gap-3">
          <p className="text-xs text-center text-primary-base/50">
            © {currentYear} Emmanuel. Built with{" "}
            <FiHeart className="w-3 h-3 text-red-500 inline mx-0.5" /> using
            Next.js
          </p>
        </div>
      </Layout>
    </footer>
  );
};
