"use client";

import { useCallback } from "react";
import { Layout } from "./Layout";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FiGithub } from "react-icons/fi";
import { otherProjects, projects } from "@/app/data";

export const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, dragFree: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <div className="bg-background py-24" id="projects">
      <Layout className="md:w-[80%]">
        <div className="space-y-16">
          {/* Featured Projects Section */}
          <section>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary-base mb-2">
              Featured Projects
            </h2>
            <p className="text-sm md:text-base text-primary-base/70 mb-8 md:max-w-[550px]">
              A showcase of my most impactful work, demonstrating full-stack
              development skills, modern UI/UX design, and scalable
              architecture.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group p-6 hover:border-primary-base/40 duration-300 flex flex-col rounded-xl bg-primary-gray-300/40 border border-primary-gray-300 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
                >
                  <div className="relative overflow-hidden border rounded-lg mb-4 bg-primary-gray-300/60 aspect-video">
                    <Image
                      src={project.imageLink}
                      alt={project.title}
                      width={1000}
                      height={1000}
                      className="w-full hover:scale-[1.02] transition-all duration-200 h-full object-cover"
                    />
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold text-primary-base mb-2">
                    {project.title}
                  </h3>

                  <p className="text-primary-base/70 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStacks.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-primary-gray-300/60 hover:bg-primary-gray-300 transition-all border border-primary-gray-300/40 text-primary-base"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex-1"></div>
                  <div className="flex gap-3 mt-6">
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary-base text-primary text-sm rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary-gray-300/60 text-primary-base text-sm rounded-lg border border-primary-gray-300/40 hover:bg-primary-gray-300 transition-colors"
                    >
                      <FiGithub className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Other Projects Section with Carousel */}
          <section>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary-base mb-2">
              Mini Projects
            </h2>
            <p className="text-sm md:text-base text-primary-base/70 mb-8 md:max-w-[550px]">
              Some additional projects that showcase my versatility and skill in
              web development.
            </p>

            <div className="relative">
              {/* Embla Carousel Container */}
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {otherProjects.concat(otherProjects).map((project, index) => (
                    <div
                      key={index}
                      className="min-w-[350px] max-w-[350px] shrink-0 ml-4 group p-4 rounded-xl bg-primary-gray-300/40 border border-primary-gray-300 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
                    >
                      <div className="relative overflow-hidden border rounded-lg mb-3 bg-primary-gray-300/60 h-[200px]">
                        <Image
                          src={project.imageLink}
                          alt={project.title}
                          width={1000}
                          height={1000}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>

                      <h3 className="text-base font-semibold text-primary-base mb-2">
                        {project.title}
                      </h3>

                      <p className="text-primary-base/70 text-xs leading-relaxed mb-3 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex gap-2 mb-3 flex-wrap">
                        {project.techStacks.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 text-xs rounded-full bg-primary-gray-300/60 border border-primary-gray-300/40 text-primary-base"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <a
                          href={project.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-primary-base text-primary text-xs rounded-lg hover:opacity-90 transition-opacity"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Live
                        </a>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-primary-gray-300/60 text-primary-base text-xs rounded-lg border border-primary-gray-300/40 hover:bg-primary-gray-300 transition-colors"
                        >
                          <FiGithub className="w-3 h-3" />
                          Code
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                type="button"
                onClick={scrollPrev}
                aria-label="back button"
                className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-primary-gray-300/60 p-2 rounded-full shadow hover:bg-primary-gray-300 transition z-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                aria-label="next label"
                onClick={scrollNext}
                className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-primary-gray-300/60 p-2 rounded-full shadow hover:bg-primary-gray-300 transition z-10"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};
