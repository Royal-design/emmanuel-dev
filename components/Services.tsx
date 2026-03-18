import {
  FiCode,
  FiGitBranch,
  FiLayout,
  FiPenTool,
  FiSmartphone,
  FiZap,
} from "react-icons/fi";

const services = [
  {
    icon: FiCode,
    title: "Frontend Development",
    description: "React, Next.js, TypeScript & Tailwind CSS applications",
  },
  {
    icon: FiLayout,
    title: "UI Design",
    description: "Clean, modern interfaces with seamless UX",
  },
  {
    icon: FiPenTool,
    title: "Illustrative Design",
    description: "Visual content & branding elements",
  },
  {
    icon: FiSmartphone,
    title: "Responsive Design",
    description: "Mobile-first, cross-device compatible layouts",
  },
  {
    icon: FiZap,
    title: "Performance Optimization",
    description: "Fast loading, optimized web experiences",
  },
  {
    icon: FiGitBranch,
    title: "API Integration",
    description: "RESTful APIs & state management solutions",
  },
];

export const Services = () => {
  return (
    <div className="md:flex-[40%]">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-primary-base/50 mb-4">
        Services
      </h3>

      <div className="space-y-2">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="group flex items-start gap-3 p-3 rounded-lg bg-primary-gray-300/20 border border-primary-gray-300/40 hover:border-primary-base/20 hover:bg-primary-gray-300/30 transition-all"
            >
              <div className="p-2 rounded-md bg-primary-base/10 text-primary-base group-hover:bg-primary-base/20 transition-colors">
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-primary-base mb-0.5">
                  {service.title}
                </h4>
                <p className="text-xs text-primary-base/60">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
