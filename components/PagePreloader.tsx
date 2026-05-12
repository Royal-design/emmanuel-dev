"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function PagePreloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const minimumDisplay = window.setTimeout(() => {
      setIsVisible(false);
    }, 1600);

    const handleLoad = () => {
      window.setTimeout(() => setIsVisible(false), 450);
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
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background text-primary-base"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          aria-label="Loading portfolio"
          role="status"
        >
          <motion.div
            className="flex w-full max-w-[320px] flex-col items-center px-6 text-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="relative mb-6 h-24 w-24">
              <motion.div
                className="absolute inset-0 rounded-full border border-primary-base/15"
                animate={{ scale: [1, 1.08, 1], opacity: [0.65, 1, 0.65] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-1 rounded-full border border-primary-base/25 border-t-primary-base"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="absolute inset-3 overflow-hidden rounded-full border border-border bg-secondary">
                <Image
                  src="/avatar.png"
                  alt="Emmanuel Olowookere"
                  width={120}
                  height={120}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <motion.p
              className="text-sm font-semibold tracking-[0.24em] text-primary-base uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.45 }}
            >
              Emmanuel
            </motion.p>
            <motion.p
              className="mt-2 text-sm text-secondary-gray"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.45 }}
            >
              Frontend Engineer
            </motion.p>

            <div className="mt-7 h-px w-full overflow-hidden rounded-full bg-primary-base/10">
              <motion.div
                className="h-full rounded-full bg-primary-base"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.25,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

