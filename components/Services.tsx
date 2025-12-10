import { PiCodepenLogoThin } from "react-icons/pi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { DiCodeigniter } from "react-icons/di";
import React from "react";

export const services = [
  {
    id: 1,
    heading: "Frontend Development",
    icon: <PiCodepenLogoThin size="3.5rem" />,
    text: "My expertise lies in building sleek, user-friendly web applications with a focus on speed, accessibility, and modern engineering using React, Next.js, TypeScript, and Tailwind CSS.",
  },
  {
    id: 2,
    heading: "UI Design",
    icon: <BiLogoTailwindCss size="3rem" />,
    text: "I design clean, modern, and functional interfaces that provide seamless user experience while maintaining visual consistency across platforms.",
  },
  {
    id: 3,
    heading: "Illustrative Design",
    icon: <DiCodeigniter size="3rem" />,
    text: "I create eye-catching visual content—from simple branding elements to unique illustrations that help communicate ideas effectively.",
  },
];

export const Services = () => {
  return (
    <div className="flex-1/2  w-full">
      <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 font-semibold">
        Solutions I Provide
      </h2>

      <div className="space-y-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-4 rounded-xl border border-border bg-primary-gray-300/40 hover:border-primary-base/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
          >
            <div
              className="text-primary-base mb-4 group-hover:text-primary-base/90 
              transition-all duration-300"
            >
              {service.icon}
            </div>

            <h3 className="text-lg font-semibold text-primary-base mb-2">
              {service.heading}
            </h3>

            <p className="text-sm text-primary-base/70 leading-relaxed">
              {service.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
