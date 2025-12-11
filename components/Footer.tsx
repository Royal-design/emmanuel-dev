"use client";

import React from "react";
import { Mail } from "lucide-react";
import { Layout } from "./Layout";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <Layout className="py-6">
        <div className="grid md:grid-cols-2 gap-10 mb-6">
          {/* LEFT */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-3">Emmanuel</h3>

            <p className="text-sm text-primary-base/70 mb-4">
              Frontend Engineer
            </p>

            <p className="text-primary-base/70 leading-relaxed mb-6 max-w-md">
              I build fast, reliable web applications using modern technologies
              and love taking on new challenges.
            </p>

            <div className="flex bg-primary-gray-300 w-fit rounded-full px-2 py-1 hover:opacity-80 items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-primary-base/70">
                Available for opportunities
              </span>
            </div>
          </div>

          <div className="md:text-right">
            <h3 className="text-xl font-semibold text-primary-base mb-4">
              Let’s Connect
            </h3>

            <div className="flex flex-wrap md:justify-end gap-3 mb-8">
              <Link
                href="https://github.com/Royal-design"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-primary-gray-300/60 hover:opacity-80 border border-primary-gray-300/40 rounded-lg transition text-primary-base/70"
              >
                <FaGithub className="w-4 h-4" />
                <span className="text-sm font-medium">GitHub</span>
              </Link>

              <Link
                href="https://www.linkedin.com/in/emmanuel-olowookere-869262216"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-primary-gray-300/60 hover:opacity-80 border border-primary-gray-300/40 rounded-lg transition text-primary-base/70"
              >
                <FaLinkedinIn className="w-4 h-4" />
                <span className="text-sm font-medium">LinkedIn</span>
              </Link>

              <Link
                href="mailto:royaldesign1999@gmail.com"
                className="flex items-center gap-2 px-3 py-2 bg-primary-gray-300/60 hover:opacity-80 border border-primary-gray-300/40 rounded-lg transition text-primary-base/70"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">Email</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-base/70">
            © {new Date().getFullYear()} Emmanuel. Built using Next.js
          </p>

          <div className="flex items-center gap-3 text-sm text-primary-base/70">
            <span>Ibadan, Nigeria</span>
            <span className="w-1 h-1 bg-primary-gray-300 rounded-full"></span>
            <span>Open to Remote Work</span>
          </div>
        </div>
      </Layout>
    </footer>
  );
};
