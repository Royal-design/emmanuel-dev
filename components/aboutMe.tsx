import React from "react";
import { RiCheckLine } from "react-icons/ri";

export const AboutMe = () => {
  return (
    <div className="flex-1/2">
      <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">About Me</h2>
      <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary-gray-300 text-primary-base mb-3">
        Front-End Engineer • UI Focused
      </span>

      <p className="text-base text-primary-base leading-relaxed">
        I’m a Front-End Engineer passionate about building fast, accessible, and
        visually engaging digital experiences. I specialize in React, Next.js,
        TypeScript, and modern UI engineering—bringing ideas to life through
        clean code, thoughtful design, and great user experiences.
      </p>

      <div className="mt-5 space-y-2 text-secondary-gray text-sm">
        <p className="flex items-center gap-2">
          <RiCheckLine className="text-primary-base" /> Building pixel-perfect,
          responsive UI
        </p>
        <p className="flex items-center gap-2">
          <RiCheckLine className="text-primary-base" /> Implementing smooth
          animations & interactions
        </p>
        <p className="flex items-center gap-2">
          <RiCheckLine className="text-primary-base" /> Writing scalable,
          maintainable front-end code
        </p>
        <p className="flex items-center gap-2">
          <RiCheckLine className="text-primary-base" /> Optimizing performance
          for better user experience
        </p>
        <p className="flex items-center gap-2">
          <RiCheckLine className="text-primary-base" /> Creating reusable design
          systems and components
        </p>
        <p className="flex items-center gap-2">
          <RiCheckLine className="text-primary-base" /> Improving accessibility
          and web standards compliance
        </p>
        <p className="flex items-center gap-2">
          <RiCheckLine className="text-primary-base" /> Integrating APIs and
          managing state efficiently
        </p>
        <p className="flex items-center gap-2">
          <RiCheckLine className="text-primary-base" /> Translating Figma
          designs into real interfaces
        </p>
        <p className="flex items-center gap-2">
          <RiCheckLine className="text-primary-base" /> Ensuring cross-browser &
          cross-device compatibility
        </p>
      </div>

      <div className="grid grid-cols-2 w-fit gap-2 md:gap-4 mt-4">
        <div className="px-2 rounded-md text-secondary-gray  text-sm py-2 max-md:py-1 bg-primary-gray-300">
          Name:{" "}
          <span className="font-medium max-md:block max-md:text-xs text-primary-base/80">
            Olowookere Oluwaseun
          </span>
        </div>
        <div className="px-2 rounded-md text-secondary-gray  text-sm py-2 max-md:py-1 bg-primary-gray-300">
          Phone:{" "}
          <span className="font-medium max-md:block max-md:text-xs text-primary-base/80">
            (+234) 915 187 9027
          </span>
        </div>
        <div className="px-2 rounded-md text-secondary-gray  text-sm py-2 max-md:py-1 bg-primary-gray-300">
          Experience:{" "}
          <span className="font-medium max-md:block max-md:text-xs text-primary-base/80">
            3+ Years
          </span>
        </div>
        <div className="px-2 rounded-md text-secondary-gray  text-sm py-2 max-md:py-1 bg-primary-gray-300">
          Nationality:{" "}
          <span className="font-medium max-md:block max-md:text-xs text-primary-base/80">
            Nigerian
          </span>
        </div>
        <div className="px-2 rounded-md text-secondary-gray text-sm py-2 max-md:py-1 bg-primary-gray-300">
          Email:{" "}
          <span className="font-medium wrap-break-word whitespace-normal max-md:block max-md:text-xs text-primary-base/80">
            royaldesign1999@gmail.com
          </span>
        </div>

        <div className="px-2 rounded-md text-secondary-gray  text-sm py-2 max-md:py-1 bg-primary-gray-300">
          Language:{" "}
          <span className="font-medium max-md:block max-md:text-xs text-primary-base/80">
            English, Yoruba
          </span>
        </div>
      </div>
    </div>
  );
};
