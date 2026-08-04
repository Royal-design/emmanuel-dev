"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function PagePreloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const minimumDisplay = window.setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    const handleLoad = () => {
      window.setTimeout(() => setIsVisible(false), 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad, { once: true });
    }

    return () => {
      window.clearTimeout(minimumDisplay);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg text-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          role="status"
          aria-label="Loading portfolio"
        >
          <motion.p
            className="font-display text-4xl font-semibold tracking-tight"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Emmanuel<span className="text-accent">.</span>
          </motion.p>

          <div className="mt-7 h-px w-48 overflow-hidden bg-line">
            <motion.div
              className="h-full bg-accent"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <motion.p
            className="mt-5 font-mono text-[10px] tracking-[0.3em] text-ink-3 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.4 }}
          >
            Initializing
          </motion.p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
