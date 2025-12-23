import { education, experiences } from "@/app/data";
import { Layout } from "./Layout";
import { GraduationCap, Calendar, ChevronRight } from "lucide-react";

export const Resume = () => {
  return (
    <div className="bg-secondary py-6 md:py-12 scroll-mt-16" id="resume">
      <Layout className="md:w-[80%]">
        <div className="space-y-16">
          {/* Experience Section */}
          <section className="relative">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary-base mb-2">
              Work Experience
            </h2>
            <p className="text-sm md:text-base text-primary-base/70 mb-8 md:max-w-[550px]">
              My professional journey building scalable web applications and
              collaborating with cross-functional teams to deliver impactful
              solutions.
            </p>

            <div className="relative space-y-4">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-gray-300 hidden md:block" />

              {experiences.map((exp, index) => (
                <div key={index} className="relative  md:pl-12 group">
                  <div className="absolute left-2.5 top-6 w-3 h-3 rounded-full bg-primary-base border-2 border-background shadow-sm group-hover:scale-125 transition-transform duration-300 hidden md:block" />

                  <div className="p-4 rounded-xl bg-primary-gray-300/40 border hover:border-primary-base/40  duration-300 border-primary-gray-300 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-primary-base mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-primary-base/80 font-medium flex items-center gap-2">
                          <ChevronRight className="w-4 h-4" />
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-primary-base/70 text-sm bg-primary-gray-300/60 px-3 py-1.5 rounded-full border border-primary-gray-300/40">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="text-primary-base/70 text-sm leading-relaxed flex gap-3"
                        >
                          <span className="text-primary-base/50 mt-1">•</span>
                          <span className="flex-1">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="relative">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary-base mb-2">
              Education
            </h2>
            <p className="text-sm md:text-base text-primary-base/70 mb-8 md:max-w-[550px]">
              Academic background and certifications that have shaped my
              technical expertise and problem-solving approach.
            </p>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl hover:border-primary-base/40 duration-300 bg-primary-gray-300/40 border border-primary-gray-300 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-primary-base mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-primary-base/80 font-medium flex items-center gap-2">
                        <GraduationCap className="w-4 h-4" />
                        {edu.school}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-primary-base/70 text-sm bg-primary-gray-300/60 px-3 py-1.5 rounded-full border border-primary-gray-300/40">
                      <Calendar className="w-4 h-4" />
                      {edu.duration}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {edu.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="text-primary-base/70 text-sm leading-relaxed flex gap-3"
                      >
                        <span className="text-primary-base/50 mt-1">•</span>
                        <span className="flex-1">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};
