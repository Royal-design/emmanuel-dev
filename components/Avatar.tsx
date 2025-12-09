"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Avatar = () => {
  return (
    <div className="relative w-[60px] h-[60px]">
      {/* Animated Border Circle */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 50 50"
        initial={{ strokeDasharray: "1, 150", strokeDashoffset: 0 }}
        animate={{ strokeDasharray: "130, 150", strokeDashoffset: 0 }}
        transition={{
          duration: 2,
          ease: "circInOut",
          repeat: Infinity,
          repeatDelay: 2,
        }}
      >
        {/* Define Gradient */}
        <defs>
          <linearGradient
            id="stroke-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "var(--primary-gray-200)", stopOpacity: 1 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "var(--primary-gray)", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "var(--primary-gray-200)", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>

        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="url(#stroke-gradient)"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* Inner Circle with Padding */}
      <div className="absolute inset-2 bg-[#050e01] rounded-full">
        <div className="overflow-hidden h-full rounded-full w-full">
          <Image
            src="/avatar.png"
            width={100}
            height={100}
            alt="avatar"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
