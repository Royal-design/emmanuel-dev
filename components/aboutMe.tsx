import Image from "next/image";
import { RiCheckLine } from "react-icons/ri";

const ABOUT_POINTS = [
  "Building pixel-perfect, responsive UI",
  "Implementing smooth animations & interactions",
  "Writing scalable, maintainable front-end code",
  "Optimizing performance for better user experience",
  "Creating reusable design systems and components",
  "Improving accessibility and web standards compliance",
  "Integrating APIs and managing state efficiently",
  "Translating Figma designs into real interfaces",
  "Ensuring cross-browser & cross-device compatibility",
];

const ABOUT_INFO = [
  { label: "Name", value: "Olowookere Oluwaseun" },
  { label: "Phone", value: "(+234) 915 187 9027" },
  { label: "Experience", value: "3+ Years" },
  { label: "Nationality", value: "Nigerian" },
  { label: "Email", value: "royaldesign1999@gmail.com" },
  { label: "Language", value: "English, Yoruba" },
];

export const AboutMe = () => {
  return (
    <div className="flex-1/2">
      <div className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-primary-gray-300 text-primary-base mb-3">
        <Image
          src="/handwave.webp"
          alt="hand wave"
          width={100}
          height={100}
          className="size-6"
        />
        <span className="">Who Am I?</span>
      </div>

      <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">About Me</h2>

      <p className="text-base text-primary-base leading-relaxed">
        I’m a Front-End Engineer passionate about building fast, accessible, and
        visually engaging digital experiences. I specialize in React, Next.js,
        TypeScript, and modern UI engineering—bringing ideas to life through
        clean code, thoughtful design, and great user experiences.
      </p>

      {/* Skills List */}
      <div className="mt-5 space-y-2 text-secondary-gray text-sm">
        {ABOUT_POINTS.map((point, index) => (
          <p key={index} className="flex items-center gap-2">
            <RiCheckLine className="text-primary-base" />
            {point}
          </p>
        ))}
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-2 w-fit gap-2 md:gap-4 mt-4">
        {ABOUT_INFO.map(({ label, value }, index) => (
          <div
            key={index}
            className="px-2 py-2 max-md:py-1 rounded-md bg-primary-gray-300 text-secondary-gray text-sm"
          >
            {label}:{" "}
            <span className="font-medium text-primary-base/80 max-md:block max-md:text-xs whitespace-normal">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
