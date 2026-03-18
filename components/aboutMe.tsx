import Image from "next/image";
import {
  FiClock,
  FiGlobe,
  FiMail,
  FiMapPin,
  FiPhone,
  FiUser,
} from "react-icons/fi";

const highlights = [
  "Pixel-perfect, responsive UI development",
  "Modern React & Next.js applications",
  "Performance optimization & accessibility",
  "Clean, maintainable code architecture",
];

const personalInfo = [
  { icon: FiUser, label: "Name", value: "Olowookere Oluwaseun" },
  { icon: FiMail, label: "Email", value: "olowookereoluwaseun25@gmail.com" },
  { icon: FiPhone, label: "Phone", value: "(+234) 915 187 9027" },
  { icon: FiMapPin, label: "Location", value: "Nigeria" },
  { icon: FiClock, label: "Experience", value: "3+ Years" },
  { icon: FiGlobe, label: "Languages", value: "English, Yoruba" },
];

export const AboutMe = () => {
  return (
    <div className="md:flex-[60%]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-full bg-primary-base/10 text-primary-base border border-primary-base/20">
          <Image
            src="/handwave.webp"
            alt="wave"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          About Me
        </div>
      </div>

      {/* Bio */}
      <p className="text-sm md:text-base text-primary-base/80 leading-relaxed mb-6 max-w-2xl">
        {`I'm a `}
        <span className="font-semibold text-primary-base">
          Front-End Engineer
        </span>{" "}
        passionate about building fast, accessible, and visually engaging
        digital experiences. I specialize in React, Next.js, and
        TypeScript—transforming ideas into polished products through clean code
        and thoughtful design.
      </p>

      {/* Highlights */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3 py-2 text-xs md:text-sm text-primary-base/70 bg-primary-gray-300/30 rounded-lg border border-primary-gray-300/50"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-base/60" />
            {item}
          </div>
        ))}
      </div>

      {/* Personal Info */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {personalInfo.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="group flex items-center gap-2 px-3 py-2 bg-primary-gray-300/20 rounded-lg border border-primary-gray-300/40 hover:border-primary-base/20 hover:bg-primary-gray-300/30 transition-all"
          >
            <Icon className="w-4 h-4 text-primary-base/50 group-hover:text-primary-base/70 transition-colors" />
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-wider text-primary-base/40">
                {label}
              </p>
              <p className="text-xs font-medium text-primary-base/80 wrap-break-word">
                {value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
