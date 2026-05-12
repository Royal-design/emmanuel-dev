"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loading() {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-background text-primary-base"
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="flex w-full max-w-[300px] flex-col items-center px-6 text-center">
        <div className="relative mb-6 h-20 w-20">
          <motion.div
            className="absolute inset-0 rounded-full border border-primary-base/15"
            animate={{ scale: [1, 1.08, 1], opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-1 rounded-full border border-primary-base/25 border-t-primary-base"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-3 overflow-hidden rounded-full border border-border bg-secondary">
            <Image
              src="/avatar.png"
              alt="Emmanuel Olowookere"
              width={100}
              height={100}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <p className="text-sm font-semibold tracking-[0.24em] text-primary-base uppercase">
          Emmanuel
        </p>
        <p className="mt-2 text-sm text-secondary-gray">Frontend Engineer</p>

        <div className="mt-7 h-px w-full overflow-hidden rounded-full bg-primary-base/10">
          <motion.div
            className="h-full rounded-full bg-primary-base"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.25, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
}
