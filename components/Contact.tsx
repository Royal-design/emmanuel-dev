/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiClock, FiGlobe, FiMail, FiMapPin } from "react-icons/fi";
import { Layout } from "./Layout";

const contactLinks = [
  {
    href: "mailto:olowookereoluwaseun25@gmail.com",
    icon: FiMail,
    label: "Email",
    value: "olowookereoluwaseun25@gmail.com",
  },
  {
    href: "https://wa.me/2349151879027",
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+234 915 187 9027",
  },
  {
    href: "https://www.linkedin.com/in/emmanuel-olowookere-869262216",
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "Connect with me",
  },
  {
    href: "https://github.com/Royal-design",
    icon: FaGithub,
    label: "GitHub",
    value: "View my code",
  },
];

const infoItems = [
  { icon: FiMapPin, label: "Location", value: "Ibadan, Nigeria" },
  { icon: FiClock, label: "Response Time", value: "Within 24 hours" },
  { icon: FiGlobe, label: "Remote", value: "Available worldwide" },
];

const openTo = [
  "Frontend Development",
  "Full-time Roles",
  "Contract Work",
  "Remote",
];

export const Contact = () => {
  return (
    <section
      className="bg-background py-12 md:py-16 scroll-mt-16 md:w-[90%] mx-auto"
      id="contact"
    >
      <Layout className="md:w-[85%]">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-base mb-2">
            Let's Team Up
          </h2>
          <p className="text-sm text-primary-base/60 max-w-lg mx-auto">
            Ready to build something great? I'm available for frontend projects,
            collaborations, and new opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Links */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-primary-base/50 mb-3">
              Get in Touch
            </h3>
            {contactLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3 rounded-lg bg-primary-gray-300/20 border border-primary-base/5 hover:border-primary-base/20 hover:bg-primary-gray-300/30 transition-all"
                >
                  <div className="p-2 rounded-md bg-primary-base/10 text-primary-base group-hover:bg-primary-base/20 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-primary-base/40">
                      {item.label}
                    </p>
                    <p className="text-xs font-medium text-primary-base/80 truncate">
                      {item.value}
                    </p>
                  </div>
                </Link>
              );
            })}

            {/* CTA Button */}
            <Link
              href="mailto:olowookereoluwaseun25@gmail.com"
              className="flex items-center justify-center gap-2 md:w-fit mt-4 px-4 py-3 bg-primary-base text-primary font-medium rounded-lg hover:bg-primary-base/90 transition-colors text-sm"
            >
              <FiMail className="w-4 h-4" />
              Send me an email
            </Link>
          </div>

          {/* Info & Availability */}
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-primary-gray-300/20 border border-primary-gray-300/40">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium text-primary-base">
                  Available for new opportunities
                </span>
              </div>

              <div className="space-y-2">
                {infoItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 text-xs"
                    >
                      <Icon className="w-3.5 h-3.5 text-primary-base/50" />
                      <span className="text-primary-base/60">
                        {item.label}:
                      </span>
                      <span className="text-primary-base/80 font-medium">
                        {item.value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Open To */}
            <div className="p-4 rounded-lg bg-primary-gray-300/20 border border-primary-gray-300/40">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-base/50 mb-3">
                Open To
              </p>
              <div className="flex flex-wrap gap-2">
                {openTo.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-primary-base/10 text-primary-base border border-primary-base/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};
