import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { FaJs, FaSass } from "react-icons/fa";
import { SiTypescript, SiJson, SiChakraui } from "react-icons/si";

import { FaReact } from "react-icons/fa";
import { SiRedux, SiTailwindcss } from "react-icons/si";

import { SiShadcnui } from "react-icons/si";

import { FaGitAlt, FaGithub } from "react-icons/fa";
import { SiFirebase, SiPostman } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { Layout } from "./Layout";
import { RiNextjsFill } from "react-icons/ri";
import { VscAzureDevops } from "react-icons/vsc";

export const skills = [
  {
    category: "Web Technologies",
    items: [
      { name: "HTML5", icon: <IoLogoHtml5 /> },
      { name: "CSS3", icon: <IoLogoCss3 /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "SCSS", icon: <FaSass /> },
      { name: "JSON / REST", icon: <SiJson /> },
    ],
  },
  {
    category: "Frontend Frameworks & UI Libraries",
    items: [
      { name: "Next.js", icon: <RiNextjsFill /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "ShadCN UI", icon: <SiShadcnui /> },
      { name: "Chakra UI", icon: <SiChakraui /> },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "VS Code", icon: <DiVisualstudio /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Azure DevOps", icon: <VscAzureDevops /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
];

export const softSkills = [
  { name: "Teamwork" },
  { name: "Leadership" },
  { name: "Adaptability" },
  { name: "Communication" },
  { name: "Problem Solving" },
  { name: "Collaboration" },
  { name: "Time Management" },
  { name: "Critical Thinking" },
  { name: "Conflict Resolution" },
  { name: "Attention to Detail" },
];

export const Skills = () => {
  return (
    <div className="bg-background py-6 md:py-12 scroll-mt-16" id="skills">
      <Layout className="md:w-[80%]">
        <h2 className="text-3xl md:text-4xl font-semibold text-primary-base">
          Skills & Expertise
        </h2>
        <p className="text-sm md:text-base text-primary-base/70 mb-6 md:max-w-[500px]">
          A combination of technical and interpersonal skills that I have
          developed to deliver effective solutions and collaborate efficiently.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((group, index) => (
            <div
              key={index}
              className="p-4 rounded-xl min-h-[340px] bg-primary-gray-300/40 border border-primary-gray-300 hover:border-primary-base/40 hover:shadow-lg transition-all duration-300 shadow-sm flex flex-col"
            >
              <h3 className="text-xl font-semibold text-primary-base mb-6">
                {group.category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 flex-1">
                {group.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-primary-gray-300/60 border border-primary-gray-300/40 shadow hover:shadow-md hover:-translate-y-1 transition-all w-full"
                  >
                    <span className="text-primary-base/80 text-4xl">
                      {item.icon}
                    </span>
                    <p className="text-sm font-medium text-primary-base text-center">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Soft Skills */}
          <div className="p-4 rounded-xl min-h-[340px] bg-primary-gray-300/40 hover:border-primary-base/40 hover:shadow-lg transition-all duration-300 border border-primary-gray-300 shadow-sm flex flex-col">
            <h3 className="text-xl font-semibold text-primary-base mb-6">
              Soft Skills
            </h3>

            <div className="flex flex-wrap gap-4 justify-items-center">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-xs md:text-sm rounded-full bg-primary-gray-300/60 border border-primary-gray-300/40 text-primary-base font-medium shadow-sm hover:shadow-md transition"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
