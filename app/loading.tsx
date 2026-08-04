"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-bg text-ink"
      role="status"
      aria-label="Loading portfolio"
    >
      <motion.p
        className="font-display text-3xl font-semibold tracking-tight"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Oluwaseun<span className="text-accent">.</span>
      </motion.p>
      <div className="mt-6 h-px w-40 overflow-hidden bg-line">
        <motion.div
          className="h-full bg-accent"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <p className="mt-4 font-mono text-[10px] tracking-[0.3em] text-ink-3 uppercase">
        Initializing
      </p>
    </div>
  );
}
