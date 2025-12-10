"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "./Layout";
import Link from "next/link";
import { Avatar } from "./Avatar";
import { TextTypeWriter } from "./TextTypeWriter";
import { ThemeMode } from "./ThemeMode";
import { CgClose } from "react-icons/cg";

export const textSequence = [
  "Front-End Engineer",
  2000,
  "Web Developer",
  2000,
  "AI Engineer",
  2000,
  "",
];

const navLinks = [
  { path: "#about", label: "About" },
  { path: "#skills", label: "Skills" },
  { path: "#resume", label: "Resume" },
  { path: "#projects", label: "Projects" },
  { path: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach((link) => {
        const section = document.querySelector(link.path);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 80 && top >= -section.clientHeight + 80) {
            setActiveSection(link.path);

            // Update URL without scrolling
            if (window.location.hash !== link.path) {
              window.history.replaceState(null, "", link.path);
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="border-b sticky backdrop-blur-lg bg-background/80 z-50 top-0 w-full border-border">
        <Layout>
          <div className="flex items-center justify-between py-2">
            <Link href="#home">
              <div className="flex cursor-pointer items-center w-50">
                <Avatar />
                <div>
                  <h2 className="text-lg font-bold text-primary-base ">
                    Emmanuel
                  </h2>
                  <div className="text-sm text-secondary-gray">
                    <TextTypeWriter sequence={textSequence} />
                  </div>
                </div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center font-medium gap-8">
              {navLinks.map((link) => (
                <Link
                  className={`text-sm transition-colors border-b-2 ${
                    activeSection === link.path
                      ? "border-primary-base font-semibold"
                      : "border-transparent hover:border-primary-base"
                  }`}
                  key={link.path}
                  href={link.path}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <ThemeMode />

              <button
                className="md:hidden flex flex-col gap-1 w-6 h-6 justify-center z-50 relative"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <span
                  className={`w-full h-0.5 rounded-full bg-primary-base transition-transform ${
                    isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 rounded-full bg-primary-base transition-opacity ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 rounded-full bg-primary-base transition-transform ${
                    isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </Layout>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-lg z-40"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="md:hidden fixed top-0 right-0 h-full w-[70%] max-w-sm bg-background border-l border-border shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary-base/10 transition-colors"
                  aria-label="Close menu"
                >
                  <CgClose />
                </button>

                <nav className="flex flex-col gap-2 mt-8">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                    >
                      <Link
                        className={`text-base py-2 px-4 block rounded-lg transition-colors ${
                          activeSection === link.path
                            ? "text-primary-base font-semibold bg-primary-base/10"
                            : "text-foreground hover:text-primary-base hover:bg-primary-base/5"
                        }`}
                        href={link.path}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
