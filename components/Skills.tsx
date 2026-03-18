import { DiVisualstudio } from "react-icons/di";
import { FaGitAlt, FaGithub, FaJs, FaReact, FaSass } from "react-icons/fa";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiFirebase,
  SiJson,
  SiPostman,
  SiRedux,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { Layout } from "./Layout";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "HTML5", icon: IoLogoHtml5, color: "#E34F26" },
      { name: "CSS3", icon: IoLogoCss3, color: "#1572B6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "SCSS", icon: FaSass, color: "#CC6699" },
      { name: "JSON", icon: SiJson, color: "#5B5EA6" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Next.js", icon: RiNextjsFill, color: "#7C7C7C" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "ShadCN", icon: SiShadcnui, color: "#6D28D9" },
      { name: "Chakra UI", icon: SiChakraui, color: "#319795" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "VS Code", icon: DiVisualstudio, color: "#007ACC" },
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#8B5CF6" },
      { name: "Azure DevOps", icon: VscAzureDevops, color: "#0078D7" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    ],
  },
];

const softSkills = [
  "Teamwork",
  "Leadership",
  "Adaptability",
  "Communication",
  "Problem Solving",
  "Collaboration",
  "Time Management",
  "Critical Thinking",
];

export const Skills = () => {
  return (
    <section className="bg-background py-12 md:py-16 scroll-mt-16" id="skills">
      <Layout className="md:w-[85%]">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-base mb-2">
            Skills
          </h2>
          <p className="text-sm text-primary-base/60 max-w-lg">
            Technologies and tools I work with to build modern web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-primary-gray-300/30 border border-primary-gray-300/50 rounded-lg p-4"
            >
              <h3 className="text-xs font-semibold uppercase tracking-wider text-primary-base/50 mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-2 px-3 py-1.5 bg-primary-gray-300/40 rounded-md border border-transparent hover:border-primary-base/20 hover:bg-primary-gray-300/60 transition-all duration-200 cursor-default"
                    >
                      <Icon
                        className="text-base opacity-70 group-hover:opacity-100 transition-opacity"
                        style={{ color: skill.color }}
                      />
                      <span className="text-xs font-medium text-primary-base/80 group-hover:text-primary-base transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills - Compact inline style */}
        <div className="bg-primary-gray-300/20 border border-primary-gray-300/40 rounded-lg p-4">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-base/50 mr-2">
              Soft Skills
            </span>
            {softSkills.map((skill, index) => (
              <span
                key={index}
                className="text-xs text-primary-base/70 before:content-['·'] before:mr-1.5 before:text-primary-base/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Layout>
    </section>
  );
};
