// components/sections/Projects.tsx
"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Server, Globe, ArrowUpRight, Code2 } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  link?: string;
  type: "live" | "local";
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "Innovation MIS",
      subtitle: "Afghanistan Innovation Hub",
      description: "Developed for ministry of communications and IT, this system fosters innovation by connecting ideas, resources, and stakeholders.",
      tech: ["Next.js", "Spring Boot", "TailwindCSS"],
      type: "local",
      link: "https://ictinnovation.gov.af",
    },
    {
      title: "IQ Leading Center",
      subtitle: "Website and MIS",
      description: "Created a comprehensive digital solution for a leading educational institution, including a dynamic website and a robust MIS to manage student data, courses, and administrative tasks.",
      tech: ["Next.js", "Laravel", "NextUI", "TailwindCSS"],
      link: "https://ilc.edu.af",
      type: "live",
    },
    {
      title: "Sherzad Still Mill Company",
      subtitle: "Management Information System",
      description: "Designed a custom MIS for a major steel manufacturing company to optimize production processes, inventory management, and supply chain operations.",
      tech: ["ASP.NET Core", "Next.js", "NextUI", "TailwindCSS"],
      type: "local",
    },
    {
      title: "MRM Corporation Website",
      subtitle: "Website & Branding",
      description: "Created a comprehensive website and branding solution for a leading corporation, enhancing their online presence and customer engagement.",
      tech: ["Spring Boot", "React.js", "Bootstrap"],
      link: "https://mrmc.gov.af/ps-AF",
      type: "local",
    },
    {
      title: "Prime Auto Body",
      subtitle: "Business Website & Inventory",
      description: "Designed and developed a complete digital solution for a U.S.-based auto body company, including brand identity, website, and custom inventory management.",
      tech: ["Next.js", "Backend APIs", "Cloud Deployment"],
      link: "https://primeautobodymn.com",
      type: "live",
    },

    {
      title: "OCHR MIS",
      subtitle: "Multi-Module Platform",
      description: "Delivered a robust MIS platform with modules for inventory, HR, project management, and content publishing.",
      tech: ["Laravel", "React.js", "Bootstrap"],
      type: "local",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen w-full bg-foreground/[0.02] py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-primary font-medium">
            Portfolio
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mt-4 mb-6">
            <span className="text-foreground">Featured</span>
            <br />
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A selection of projects showcasing end-to-end development expertise
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group"
            >
              <div className="relative h-full glass-strong rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:border-primary/30 overflow-hidden">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  {project.type === "live" ? (
                    <Globe className="w-8 h-8 text-primary" />
                  ) : (
                    <Server className="w-8 h-8 text-foreground/30" />
                  )}
                  
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 rounded-lg bg-foreground/5 text-foreground/40 hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {project.subtitle}
                </p>
                <p className="text-sm text-foreground/50 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 rounded-full bg-foreground/[0.03] border border-border text-foreground/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Live link indicator */}
                {project.link && hoveredProject === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 flex items-center gap-2 text-primary"
                  >
                    <span className="text-xs font-medium">View Live Project</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-6 glass rounded-full px-8 py-4">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground/60">
                <span className="text-foreground font-semibold">2</span> Live
              </span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-foreground/30" />
              <span className="text-sm text-foreground/60">
                <span className="text-foreground font-semibold">4</span> Enterprise
              </span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-accent" />
              <span className="text-sm text-foreground/60">
                <span className="text-foreground font-semibold">10+</span> Tech
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}