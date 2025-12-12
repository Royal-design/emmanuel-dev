"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Layout } from "./Layout";

export const Error404 = () => {
  return (
    <main className="flex items-center justify-center bg-linear-to-br from-primary-gray-300 to-primary py-4">
      <Layout className="md:w-[75%]">
        <div className="relative w-full rounded-2xl shadow-2xl overflow-hidden bg-primary/80  backdrop-blur-md border">
          {/* decorative blobs */}
          <div className="pointer-events-none absolute -left-20 -top-20 w-64 h-64 rounded-full bg-linear-to-tr from-primary-base/40 to-primary-gray-300/40 opacity-70 mix-blend-multiply blur-3xl" />
          <div className="pointer-events-none absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-linear-to-tr from-primary-gray-300/40 to-primary-base/30 opacity-60 mix-blend-screen blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 p-10 md:p-16 items-center">
            <section aria-labelledby="title" className="space-y-4">
              <h1
                id="title"
                className="text-5xl md:text-6xl font-extrabold tracking-tight text-primary-base"
              >
                404
              </h1>
              <p className="text-lg md:text-xl font-semibold text-secondary-gray">
                Oops — page not found.
              </p>
              <p className="text-sm md:text-base text-secondary-gray max-w-xl">
                {`Looks like the page you were trying to reach doesn’t exist. It
              might have been moved or removed, or maybe you mistyped the
              address. Don't worry — here's a map back to safety.`}
              </p>

              <div className="flex flex-wrap gap-3 mt-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-primary-gray-300/80 font-medium shadow hover:scale-[1.02] transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-base/60"
                >
                  Home
                </Link>

                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-primary-gray-300/80 text-primary-base border border-primary-gray-300/40 font-medium shadow-sm hover:opacity-95 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-base/30"
                >
                  Contact me
                </Link>

                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-secondary-gray hover:underline"
                >
                  Back to portfolio
                </Link>
              </div>

              <div className="mt-6 text-xs text-secondary-gray">
                Tip: try checking the URL for typos or return to the homepage.
              </div>
            </section>

            {/* Illustration */}
            <motion.figure
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center justify-center w-full"
              aria-hidden="true"
            >
              <svg
                width="360"
                height="280"
                viewBox="0 0 360 280"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="max-w-full h-auto"
              >
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop
                      offset="0%"
                      stopColor="var(--primary-base)"
                      stopOpacity="0.95"
                    />
                    <stop
                      offset="100%"
                      stopColor="var(--primary-gray-300)"
                      stopOpacity="0.6"
                    />
                  </linearGradient>
                </defs>

                <rect
                  x="0"
                  y="0"
                  width="360"
                  height="280"
                  rx="20"
                  fill="url(#g1)"
                  opacity="0.06"
                />

                {/* paper plane */}
                <g transform="translate(40,40)">
                  <motion.polygon
                    initial={{ x: -10, y: -6 }}
                    animate={{ x: 8, y: -12 }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 3,
                      ease: "easeInOut",
                    }}
                    points="0,30 120,10 60,80"
                    fill="var(--secondary-gray)"
                    opacity="0.95"
                  />

                  <motion.path
                    d="M10 110 C60 60, 120 60, 170 110"
                    stroke="var(--secondary-gray)"
                    strokeWidth="3"
                    strokeOpacity="0.5"
                    fill="transparent"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "linear",
                    }}
                  />

                  <ellipse
                    cx="160"
                    cy="180"
                    rx="120"
                    ry="40"
                    fill="var(--secondary-gray)"
                    opacity="0.06"
                  />
                </g>

                <circle
                  cx="300"
                  cy="40"
                  r="3"
                  fill="var(--secondary-gray)"
                  opacity="0.6"
                />
                <circle
                  cx="280"
                  cy="80"
                  r="2"
                  fill="var(--secondary-gray)"
                  opacity="0.45"
                />
                <circle
                  cx="320"
                  cy="120"
                  r="2.5"
                  fill="var(--secondary-gray)"
                  opacity="0.5"
                />
              </svg>
            </motion.figure>
          </div>
        </div>
      </Layout>
    </main>
  );
};
