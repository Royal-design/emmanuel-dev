"use client";

import { otherProjects, projects } from "@/app/data";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { FiGithub, FiInfo } from "react-icons/fi";
import { Layout } from "./Layout";

type ProjectCategory = "all" | "full-stack" | "ai" | "practice";

const categories: { key: ProjectCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "full-stack", label: "Full-Stack" },
  { key: "ai", label: "AI Projects" },
  { key: "practice", label: "Experiments" },
];

// Categorize projects
const categorizedProjects = {
  "full-stack": projects.filter((p) =>
    [
      "Global Tech Ecommerce",
      "Home of Design Furniture",
      "Movielux",
      "BeepME – Real-Time Chat App",
    ].includes(p.title),
  ),
  ai: projects.filter(
    (p) =>
      p.title.includes("AI") ||
      p.title.includes("Ninja") ||
      p.title.includes("ChattyBee"),
  ),
  practice: otherProjects,
};

// Modal Component
const ProjectModal = ({
  project,
  isOpen,
  onClose,
}: {
  project: (typeof projects)[0] | (typeof otherProjects)[0] | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-background rounded-xl border border-primary-gray-300/40 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          title="Close"
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-primary-gray-300/80 hover:bg-primary-gray-300 transition-colors"
        >
          <X className="w-4 h-4 text-primary-base" />
        </button>

        {/* Image */}
        <div className="relative aspect-video w-full overflow-hidden rounded-t-xl bg-primary-gray-300/40">
          <Image
            src={project.imageLink}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-primary-base mb-2">
            {project.title}
          </h3>

          <p className="text-sm text-primary-base/70 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech Stacks */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStacks.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs rounded-full bg-primary-base/10 text-primary-base border border-primary-base/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary-base text-primary text-sm rounded-lg hover:bg-primary-base/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary-gray-300/40 text-primary-base text-sm rounded-lg border border-primary-gray-300/40 hover:bg-primary-gray-300/60 transition-colors"
            >
              <FiGithub className="w-4 h-4" />
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({
  project,
  compact = false,
  onInfoClick,
}: {
  project: (typeof projects)[0] | (typeof otherProjects)[0];
  compact?: boolean;
  onInfoClick: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`group rounded-lg bg-primary-gray-300/20 border border-primary-gray-300/40 hover:border-primary-base/20 transition-all ${
        compact ? "p-3" : "p-4"
      }`}
    >
      <div
        className={`relative overflow-hidden rounded-md bg-primary-gray-300/40 mb-3 ${
          compact ? "aspect-video h-32" : "aspect-video"
        }`}
      >
        {isLoading && (
          <div className="absolute inset-0 bg-primary-gray-300/60 animate-pulse" />
        )}
        <Image
          src={project.imageLink}
          alt={project.title}
          width={500}
          height={300}
          className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
        />
      </div>

      <h3
        className={`font-semibold text-primary-base mb-1 ${
          compact ? "text-sm" : "text-base"
        }`}
      >
        {project.title}
      </h3>

      <p
        className={`text-primary-base/60 mb-4 line-clamp-2  ${
          compact ? "text-xs" : "text-sm"
        }`}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1 mb-3">
        {project.techStacks.slice(0, compact ? 3 : 4).map((tech, idx) => (
          <span
            key={idx}
            className={`px-2 py-0.5 hover:opacity-80 hover:scale-105 duration-150 transition-all rounded bg-primary-base/10 text-primary-base border border-primary-base/20 ${
              compact ? "text-[10px]" : "text-xs"
            }`}
          >
            {tech}
          </span>
        ))}
        {project.techStacks.length > (compact ? 3 : 4) && (
          <span className="px-2 py-0.5 text-xs text-primary-base/50">
            +{project.techStacks.length - (compact ? 3 : 4)}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2">
        <a
          href={project.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-1.5 bg-primary-base text-primary rounded hover:bg-primary-base/90 transition-colors ${
            compact ? "px-2.5 py-1 text-xs" : "px-3 py-1.5 text-sm"
          }`}
        >
          <ExternalLink className="w-3 h-3" />
          Live
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-1.5 bg-primary-gray-300/40 text-primary-base rounded border border-primary-gray-300/40 hover:bg-primary-gray-300/60 transition-colors ${
            compact ? "px-2.5 py-1 text-xs" : "px-3 py-1.5 text-sm"
          }`}
        >
          <FiGithub className="w-3 h-3" />
          Code
        </a>
        <button
          onClick={onInfoClick}
          className={`ml-auto p-1.5 rounded-full bg-primary-gray-300/40 text-primary-base hover:bg-primary-base hover:text-primary transition-colors ${
            compact ? "text-xs" : "text-sm"
          }`}
          aria-label="View details"
        >
          <FiInfo className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

const ExperimentsCarousel = ({
  items,
  onProjectClick,
}: {
  items: typeof otherProjects;
  onProjectClick: (
    project: (typeof projects)[0] | (typeof otherProjects)[0],
  ) => void;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: false,
    dragFree: true,
  });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  return (
    <>
      {/* Mobile/Tablet: Carousel */}
      <div className="relative lg:hidden">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-3">
            {items.map((project) => (
              <div
                key={project.id}
                className="min-w-[260px] max-w-[260px] md:min-w-[280px] md:max-w-[280px] shrink-0"
              >
                <ProjectCard
                  project={project}
                  compact
                  onInfoClick={() => onProjectClick(project)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 bg-primary-gray-300/80 p-1.5 rounded-full shadow hover:bg-primary-gray-300 transition z-10"
        >
          <ChevronLeft className="w-4 h-4 text-primary-base" />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 bg-primary-gray-300/80 p-1.5 rounded-full shadow hover:bg-primary-gray-300 transition z-10"
        >
          <ChevronRight className="w-4 h-4 text-primary-base" />
        </button>
      </div>

      {/* Desktop: Grid */}
      <div className="hidden lg:grid grid-cols-4 gap-3">
        {items.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            compact
            onInfoClick={() => onProjectClick(project)}
          />
        ))}
      </div>
    </>
  );
};

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | (typeof otherProjects)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (
    project: (typeof projects)[0] | (typeof otherProjects)[0],
  ) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const getFilteredProjects = () => {
    if (activeCategory === "all") {
      return { main: projects, practice: otherProjects };
    }
    if (activeCategory === "practice") {
      return { main: [], practice: otherProjects };
    }
    return { main: categorizedProjects[activeCategory] || [], practice: [] };
  };

  const filtered = getFilteredProjects();

  return (
    <>
      <section
        className="bg-background py-12 md:py-16 scroll-mt-16"
        id="projects"
      >
        <Layout className="md:w-[85%]">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-base mb-2">
              Projects
            </h2>
            <p className="text-sm text-primary-base/60 max-w-lg">
              A showcase of my work, from full-stack applications to
              experimental projects.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mb-6 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-all ${
                  activeCategory === cat.key
                    ? "bg-primary-base text-primary"
                    : "bg-primary-gray-300/30 text-primary-base/70 border border-primary-gray-300/40 hover:border-primary-base/20"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {/* Main Projects */}
            {filtered.main.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.main.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onInfoClick={() => handleProjectClick(project)}
                  />
                ))}
              </div>
            )}

            {/* Practice/Experiments */}
            {filtered.practice.length > 0 && (
              <div>
                {(activeCategory === "all" ||
                  activeCategory === "practice") && (
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-primary-base/50 mb-4">
                    {activeCategory === "all"
                      ? "Experiments & Practice"
                      : "Projects"}
                  </h3>
                )}
                <ExperimentsCarousel
                  items={filtered.practice}
                  onProjectClick={handleProjectClick}
                />
              </div>
            )}
          </div>
        </Layout>
      </section>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};
