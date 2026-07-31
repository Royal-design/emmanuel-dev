import { DiVisualstudio } from "react-icons/di";
import { FaGitAlt, FaGithub, FaSass } from "react-icons/fa";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiFirebase,
  SiJavascript,
  SiJson,
  SiPostman,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { stack } from "@/app/data";
import { Layout } from "./Layout";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  HTML5: IoLogoHtml5,
  CSS3: IoLogoCss3,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  SCSS: FaSass,
  JSON: SiJson,
  "Next.js": RiNextjsFill,
  React: SiReact,
  Redux: SiRedux,
  Tailwind: SiTailwindcss,
  ShadCN: SiShadcnui,
  "Chakra UI": SiChakraui,
  Git: FaGitAlt,
  GitHub: FaGithub,
  "VS Code": DiVisualstudio,
  "Azure DevOps": VscAzureDevops,
  Postman: SiPostman,
  Firebase: SiFirebase,
  Supabase: SiSupabase,
};

const groups = [
  { title: "Languages", items: stack.languages },
  { title: "Frameworks", items: stack.frameworks },
  { title: "Tools & Platforms", items: stack.tools },
];

export function Skills() {
  return (
    <section id="stack" className="scroll-mt-20 border-b border-line py-24 md:py-36">
      <Layout>
        <SectionHeading
          index="03"
          label="Stack"
          title="Tools I reach for, daily."
          note="The technologies behind the projects on this page"
        />

        <div className="grid gap-6 md:grid-cols-3 md:gap-4">
          {groups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.08}>
              <div className="border border-line bg-surface">
                <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
                  <h3 className="font-mono text-[11px] font-medium tracking-[0.22em] text-ink-2 uppercase">
                    {group.title}
                  </h3>
                  <span className="tabular font-mono text-[10px] text-ink-3">
                    0{group.items.length}
                  </span>
                </div>
                <ul className="divide-y divide-line">
                  {group.items.map((item) => {
                    const Icon = iconMap[item];
                    return (
                      <li key={item}>
                        <div className="group flex items-center justify-between px-5 py-3 transition-colors hover:bg-accent-soft">
                          <span className="flex items-center gap-3 text-sm text-ink-2 transition-colors group-hover:text-ink">
                            {Icon && (
                              <Icon className="h-4 w-4 text-ink-3 transition-colors group-hover:text-accent" />
                            )}
                            {item}
                          </span>
                          <span
                            className="h-1 w-1 rounded-full bg-ink-3 transition-all group-hover:w-3 group-hover:rounded-sm group-hover:bg-accent"
                            aria-hidden="true"
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-3">
            <span className="mr-2 font-mono text-[11px] font-medium tracking-[0.22em] text-ink-3 uppercase">
              Beyond the code
            </span>
            {stack.soft.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-line px-3 py-1 font-mono text-[11px] tracking-[0.08em] text-ink-2 uppercase transition-colors hover:border-accent/50 hover:text-accent"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </Layout>
    </section>
  );
}
