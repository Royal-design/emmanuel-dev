"use client";

import Image from "next/image";
import { Layout } from "./Layout";
import { motion } from "framer-motion";
import { CgDebug } from "react-icons/cg";
import { SiCodeigniter } from "react-icons/si";
import { IoCodeSlashOutline, IoGitBranchOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
import { Stats } from "./Stats";

export const Home = () => {
  return (
    <div id="home" className="bg-background py-6">
      <Layout className="mt-6">
        <div className="flex flex-col-reverse md:flex-row">
          <section className="w-full md:w-3/5">
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs bg-primary-base/10 text-primary-base font-medium px-3 py-2 rounded-full border border-primary-base/20 hover:bg-primary-base/20 transition-colors mb-1"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-base opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-base"></span>
              </span>
              {`Hello, I'm`}
            </motion.button>

            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-9xl font-poppins font-bold text-primary-base mb-2"
            >
              Emmanuel.
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-secondary-gray text-xl md:text-2xl lg:text-[40px] font-medium mb-2"
            >
              I blend creativity with clean code
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-full md:w-[85%] lg:w-[85%] text-base md:text-lg leading-relaxed text-primary-gray"
            >
              I am a frontend developer based in Ibadan, Nigeria. Where I turn{" "}
              <span className="font-semibold text-primary-base">ideas</span>{" "}
              into{" "}
              <span className="font-semibold text-primary-base">
                web reality
              </span>{" "}
              with a passion for creating beautiful and functional web
              applications. My love for technology drives me to stay ahead of
              the curve, always learning and embracing new possibilities.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-6 mt-4"
            >
              <Link
                href="/resume.pdf"
                className="px-6 inline-flex gap-3 items-center py-3 bg-primary-base text-primary font-medium rounded-lg hover:bg-primary-base/90 transition-colors shadow-lg shadow-primary-base/25"
              >
                <FiDownload />
                Resume
              </Link>
              <Link
                href="/#contact"
                type="button"
                className="px-6 py-3 border-2 border-primary-base text-primary-base font-medium rounded-lg hover:bg-primary-base/5 transition-colors"
              >
                Get In Touch
              </Link>
            </motion.div>

            {/* Stats */}
            <Stats />
          </section>

          <section className="flex-1 mt-4 md:mt-0 max-md:mb-12 flex justify-center md:justify-end items-center">
            <motion.figure
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative  w-[300px] h-[350px] md:w-[350px] md:h-[400px]"
            >
              <motion.div
                className="absolute -left-20 top-1/2 -translate-y-1/2 z-20 -rotate-90"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.1,
                  duration: 0.4,
                }}
              >
                <div className="bg-linear-to-br  from-primary-base/30 via-primary to-primary-base/10 flex items-center px-3 py-1 border-dotted border border-deep-color rounded-full text-primary-base text-sm  shadow-lg">
                  Git Commit Addict
                  <motion.span
                    animate={{
                      rotate: [0, -10, 10, -10, 10, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                    className="ml-1 inline-block"
                  >
                    <IoGitBranchOutline />
                  </motion.span>
                </div>
              </motion.div>

              <motion.div
                className="absolute font-Inter left-[60px] -top-3 z-20"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.4,
                }}
              >
                <div className="bg-linear-to-br  from-primary-base/30 via-primary to-primary-base/10 flex items-center px-3 py-1 border-dotted border border-deep-color rounded-full text-primary-base text-sm  shadow-lg">
                  Div by Day
                  <motion.span
                    animate={{
                      rotate: [0, -10, 10, -10, 10, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                    className="ml-1"
                  >
                    <IoCodeSlashOutline />
                  </motion.span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-20 top-1/3 z-20 rotate-90"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.3,
                  duration: 0.4,
                }}
              >
                <div className="bg-linear-to-br  from-primary-base/30 via-primary to-primary-base/10 flex items-center px-3 py-1 border-dotted border border-deep-color rounded-full text-primary-base text-sm  shadow-lg">
                  Browser Whisperer
                  <motion.span
                    animate={{
                      rotate: [0, -10, 10, -10, 10, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                    className="ml-1"
                  >
                    <SiCodeigniter />
                  </motion.span>
                </div>
              </motion.div>

              <motion.div
                className="absolute right-[60px] -bottom-3 z-20"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  duration: 0.4,
                }}
              >
                <div className="bg-linear-to-br  from-primary-base/30 via-primary to-primary-base/10 flex items-center px-3 py-1 border-dotted border border-deep-color rounded-full text-primary-base text-sm  shadow-lg">
                  Debug by Night
                  <motion.span
                    animate={{
                      rotate: [0, -10, 10, -10, 10, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                    className="ml-1"
                  >
                    <CgDebug />
                  </motion.span>
                </div>
              </motion.div>

              <div className="relative w-full h-full overflow-hidden bg-linear-to-r p-0.5 rounded-bl-4xl rounded-tr-4xl from-gradient-start-shape-outer via-gradient-mid-shape-outer to-gradient-end-shape-outer group">
                <div className="absolute inset-0 bg-linear-to-r from-primary-base/20 via-primary-base/10 to-transparent transform scale-x-[0.0001] origin-left transition-transform duration-500 group-hover:scale-x-100 rounded-bl-4xl rounded-tr-4xl z-1"></div>
                <div className="relative overflow-hidden border z-10 h-full bg-background  rounded-bl-4xl rounded-tr-4xl">
                  <Image
                    src="/emmy.webp"
                    alt="Emmanuel - Frontend Developer"
                    width={300}
                    height={350}
                    className="w-full h-full object-cover  object-top transform transition-transform duration-500 group-hover:scale-105 rounded-bl-4xl rounded-tr-4xl"
                    priority
                  />
                  <div className="absolute inset-0 h-full w-full bg-overlay-image z-50 hover:bg-transparent"></div>
                </div>
              </div>
            </motion.figure>
          </section>
        </div>
      </Layout>
    </div>
  );
};
