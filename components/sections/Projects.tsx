// components/sections/Projects.tsx
"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  ExternalLink,
  Server,
  Globe,
  Code2,
  ArrowUpRight,
  Layers,
  Database,
  Cloud,
  Wrench,
  Users,
  Package,
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  type: "live" | "local";
  icon: any;
  gradient: string;
  accent: string;
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  const projects: Project[] = [
    {
      title: "Innovation Management System",
      subtitle: "Afghanistan Innovation Hub",
      description:
        "Developed for ministry of communications and IT, this system fosters innovation by providing a platform for idea submission, evaluation, and collaboration among innovators, investors, and government entities.",
      tech: ["Next.js", "Spring Boot", "NextUI", "TailwindCSS"],
      link: "https://ictinnovation.gov.af",
      type: "live",
      icon: Users,
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      accent: "blue",
    },
    {
      title: "CMS for Government Services",
      subtitle: "Government Service Platform",
      description:
        "Built a custom CMS to manage and publish content for a government services platform, enabling efficient updates and improved user experience for citizens accessing public services online.",
      tech: ["Strapi", "Next.js", "NextUI", "TailwindCSS"],
      type: "local",
      icon: Layers,
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
      accent: "purple",
    },
    {
      title: "MRM Corporation MIS",
      subtitle: "Management Information System",
      description:
        "Created a comprehensive MIS solution to manage corporate data, streamline operations, and support decision-making through real-time insights.",
      tech: ["Spring Boot", "React.js", "Bootstrap"],
      type: "local",
      icon: Database,
      gradient: "from-emerald-500 via-green-500 to-teal-500",
      accent: "emerald",
    },
    {
      title: "OCHR MIS",
      subtitle: "Multi-Module Management Platform",
      description:
        "Delivered a robust MIS platform with modules for inventory, HR, project management, and content publishing, modernizing the organization's website.",
      tech: ["Laravel", "React.js", "Bootstrap"],
      type: "local",
      icon: Package,
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      accent: "orange",
    },
    {
      title: "STATIC MIS",
      subtitle: "Internal Operations System",
      description:
        "Developed a full-featured management system to handle project workflows, human resources, and inventory for internal operations.",
      tech: ["Laravel", "React.js", "Bootstrap"],
      type: "local",
      icon: Wrench,
      gradient: "from-rose-500 via-red-500 to-pink-500",
      accent: "rose",
    },
    {
      title: "Prime Auto Body",
      subtitle: "Business Website & Inventory System",
      description:
        "Designed and developed a complete digital solution for a U.S.-based auto body company, including brand identity, a professional website, employee email setup, and a custom inventory management system to support daily operations.",
      tech: [
        "Next.js",
        "Backend APIs",
        "Inventory Management",
        "Email Hosting",
        "Cloud Deployment",
      ],
      link: "https://primeautobodymn.com",
      type: "live",
      icon: Globe,
      gradient: "from-sky-500 via-blue-500 to-indigo-500",
      accent: "sky",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen w-full bg-[#030303] overflow-hidden py-20 lg:py-32"
    >
      {/* Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0">
        {/* Gradient Orbs */}
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(147,51,234,0.2) 30%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.2) 0%, rgba(168,85,247,0.2) 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px",
              maskImage:
                "radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 70%)",
            }}
          />
        </div>
      </motion.div>

      {/* Content Container */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500" />
            <span className="text-sm tracking-[0.3em] uppercase text-blue-400 font-medium">
              Portfolio
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500" />
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
              Featured
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto"
          >
            A selection of projects showcasing end-to-end development expertise
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative"
            >
              <div className="relative h-full glass-effect-strong rounded-2xl p-6 lg:p-8 transition-all duration-500 hover:bg-white/[0.07] hover:border-white/20 overflow-hidden">
                {/* Gradient Border Top */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Background Gradient on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-2xl`}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    {/* Icon */}
                    <motion.div
                      animate={
                        hoveredProject === index
                          ? { rotate: 10, scale: 1.1 }
                          : { rotate: 0, scale: 1 }
                      }
                      transition={{ duration: 0.3 }}
                      className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-10`}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    {/* Link Indicator */}
                    {project.type === "live" && project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}

                    {project.type === "local" && (
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-500"
                      >
                        <Server className="w-4 h-4" />
                      </motion.div>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-3">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow group-hover:text-gray-400 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-gray-400 group-hover:border-white/20 group-hover:text-gray-300 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Indicator */}
                    {project.link && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={
                          hoveredProject === index
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 10 }
                        }
                        transition={{ duration: 0.3 }}
                        className="mt-4 flex items-center gap-2 text-blue-400"
                      >
                        <span className="text-xs font-medium">
                          View Live Project
                        </span>
                        <ArrowUpRight className="w-3 h-3" />
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats or CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 lg:mt-24 text-center"
        >
          <div className="inline-flex items-center gap-6 glass-effect rounded-full px-8 py-4">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-400">
                <span className="text-white font-semibold">2</span> Live Projects
              </span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-400">
                <span className="text-white font-semibold">4</span> Enterprise
                Solutions
              </span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-gray-400">
                <span className="text-white font-semibold">10+</span>{" "}
                Technologies
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}