"use client";

import React from "react";
import {
  Mail,
  Clock,
  MapPin,
  Globe,
  Download,
  PhoneCall,
  ArrowUpRight,
} from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { TbBrandWhatsappFilled } from "react-icons/tb";

import { Layout } from "./Layout";
import Link from "next/link";
import { IoChatbubbleOutline } from "react-icons/io5";

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;
interface ContactItemProps {
  href: string;
  icon: IconType;
  label: string;
  value: string;
}

interface InfoItemProps {
  icon?: IconType;
  title: string;
  subtitle: string;
  indicator?: boolean;
}

const ContactItem: React.FC<ContactItemProps> = ({
  href,
  icon: Icon,
  label,
  value,
}) => (
  <Link
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel="noopener noreferrer"
    className="group flex items-center justify-between gap-4 p-2 md:p-4 rounded-xl bg-primary-gray-300/60 border border-primary-gray-300/40 hover:bg-primary-gray-300 transition-all w-full min-w-0 overflow-hidden"
  >
    <div className="flex items-center gap-4 min-w-0">
      <div className="shrink-0 w-12 h-12 rounded-full bg-primary-base/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary-base/70" />
      </div>

      <div className="min-w-0">
        <p className="text-sm text-primary-base/60 mb-0.5">{label}</p>
        <p className="text-primary-base max-sm:text-sm font-medium wrap-break-word">
          {value}
        </p>
      </div>
    </div>

    <ArrowUpRight className="shrink-0 w-5 h-5 text-primary-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
  </Link>
);

const InfoItem: React.FC<InfoItemProps> = ({
  icon: Icon,
  title,
  subtitle,
  indicator,
}) => (
  <div className="flex items-start gap-4 min-w-0">
    <div className="shrink-0 w-10 h-10 rounded-full bg-primary-base/10 flex items-center justify-center">
      {indicator ? (
        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
      ) : (
        Icon && <Icon className="w-5 h-5 text-primary-base/70" />
      )}
    </div>

    <div className="min-w-0">
      <p className="text-primary-base font-semibold mb-1">{title}</p>
      <p className="text-primary-base/60 text-sm wrap-break-word">{subtitle}</p>
    </div>
  </div>
);

export const Contact: React.FC = () => {
  return (
    <div className="bg-secondary py-24" id="contact">
      <Layout>
        {/* Header */}
        <div className="text-center mb-16 px-3">
          <h1 className="text-2xl md:text-4xl font-semibold text-primary-base mb-4">
            Let’s Team Up
          </h1>

          <p className="text-primary-base/70 md:w-[500px] mx-auto text-lg wrap-break-word">
            Ready to build something great? I’m available for frontend work,
            collabs, and new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 w-full">
          {/* LEFT */}
          <div className="bg-primary-gray-300/40 border hover:border-primary-base/40 hover:shadow-lg transition-all duration-300 flex flex-col rounded-2xl p-4 sm:p-6 min-w-0">
            <div className="flex items-center gap-3 mb-8">
              <IoChatbubbleOutline className="text-2xl" />
              <h2 className="text-2xl font-semibold text-primary-base">
                Get in Touch
              </h2>
            </div>

            <div className="space-y-4 mb-8">
              <ContactItem
                href="mailto:olowookereoluwaseun25@gmail.com"
                icon={Mail}
                label="Email"
                value="olowookereoluwaseun25@gmail.com"
              />

              <ContactItem
                href="https://wa.me/2349151879027"
                icon={TbBrandWhatsappFilled}
                label="WhatsApp"
                value="+234-915-187-9027"
              />

              <ContactItem
                href="https://www.linkedin.com/in/emmanuel-olowookere-869262216"
                icon={FaLinkedinIn}
                label="LinkedIn"
                value="Connect with me"
              />

              <ContactItem
                href="https://github.com/Royal-design"
                icon={FaGithub}
                label="GitHub"
                value="View my code"
              />
            </div>

            {/* ACTION BUTTONS */}
            <div className="space-y-3 mt-auto">
              <Link
                href="mailto:olowookereoluwaseun25@gmail.com"
                className="w-full flex items-center justify-center gap-2 py-3.5 dark:bg-primary-base bg-secondary-gray text-primary rounded-xl hover:opacity-90 transition-opacity font-medium"
              >
                <Mail className="w-5 h-5" />
                Send me an email
              </Link>

              <Link
                href="/resume.pdf"
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary-gray-300/60 text-primary-base rounded-xl border border-primary-gray-300/40 hover:bg-primary-gray-300 transition-colors font-medium"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6 min-w-0">
            <div className="bg-primary-gray-300/40 border hover:border-primary-base/40 hover:shadow-lg transition-all duration-300 rounded-2xl p-4 sm:p-6 min-w-0">
              <h2 className="text-2xl font-semibold text-primary-base mb-6">
                Availability & Info
              </h2>

              <div className="space-y-6">
                <InfoItem
                  indicator
                  title="Available for New Opportunities"
                  subtitle="Currently accepting new projects"
                />

                <InfoItem
                  icon={Clock}
                  title="Response Time"
                  subtitle="Within 24 hours"
                />

                <InfoItem icon={MapPin} title="Location" subtitle="Nigeria" />

                <InfoItem
                  icon={Globe}
                  title="Remote Work"
                  subtitle="Available"
                />
              </div>

              <div className="mt-8 pt-6 border-t border-primary-gray-300/40">
                <p className="text-primary-base font-semibold mb-4">Open to:</p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Frontend Development",
                    "Full-time Roles",
                    "Contract Work",
                    "Remote Opportunities",
                  ].map((tag, idx) => (
                    <span
                      key={tag}
                      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                        idx === 0
                          ? "dark:bg-primary-base bg-secondary-gray text-primary"
                          : "bg-primary-gray-300/60 border border-primary-gray-300/40 text-primary-base"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-primary-gray-300/40 hover:border-primary-base/40 hover:shadow-lg transition-all duration-300 border rounded-2xl p-4 sm:p-6 min-w-0">
              <h3 className="text-xl font-semibold text-primary-base mb-3">
                Ready to start a project?
              </h3>

              <p className="text-primary-base/70 mb-6">
                I’m excited to learn about your project and explore how we can
                build something great together.
              </p>

              <a href="tel:+2349151879027">
                <button className="flex items-center justify-center gap-2 w-full px-6 py-3 dark:bg-primary-base bg-secondary-gray text-primary rounded-xl hover:opacity-90 transition-opacity font-medium whitespace-nowrap">
                  <PhoneCall className="w-5 h-5" />
                  Schedule a call
                </button>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
