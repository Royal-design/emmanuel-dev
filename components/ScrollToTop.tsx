"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const isAtBottom = scrollTop + windowHeight >= documentHeight - 50;

      if (scrollTop > 300 && !isAtBottom) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="scroll top"
      className="flex items-center gap-2 px-4 py-2.5 bg-primary-gray-300/60 hover:opacity-80 border border-primary-gray-300/40 rounded-full h-12 w-12 transition-all duration-300 text-primary-base/70 group fixed bottom-12 right-6 z-40"
    >
      <ArrowUp className="" />
    </button>
  );
}
