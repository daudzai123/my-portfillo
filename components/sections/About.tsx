// components/sections/About.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Palette,
  Smartphone,
  Server,
  Database,
  Zap,
  Globe,
  Sparkles,
} from "lucide-react";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const skills = [
    { icon: Globe, title: "Front-End", desc: "React, Next.js, TypeScript", color: "text-blue-500" },
    { icon: Server, title: "Back-End", desc: "Node.js, Python, Laravel, Java Spring Boot", color: "text-green-500" },
    { icon: Smartphone, title: "Mobile", desc: "React Native, Flutter", color: "text-purple-500" },
    { icon: Database, title: "Database", desc: "PostgreSQL, MongoDB, SQL Server, MySQL", color: "text-orange-500" },
    { icon: Palette, title: "UI/UX Design", desc: "Figma, Prototyping", color: "text-pink-500" },
    { icon: Code2, title: "Clean Code", desc: "Best Practices, Testing", color: "text-cyan-500" },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen w-full bg-background py-20 lg:py-32"
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
            About Me
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mt-4 mb-6">
            <span className="text-foreground">Software</span>
            <br />
            <span className="gradient-text">Engineer</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            I'm a software engineer specializing in web and mobile application
            development. I build end-to-end solutions from front-end to back-end,
            with a focus on clean design, robust APIs, and seamless integrations.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-strong rounded-2xl p-6 group cursor-default"
            >
              <div className={`p-3 rounded-xl bg-foreground/5 inline-block mb-4 group-hover:scale-110 transition-transform`}>
                <skill.icon className={`w-6 h-6 ${skill.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{skill.title}</h3>
              <p className="text-sm text-foreground/50">{skill.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            <span className="text-foreground/70">
              My goal is to create innovative, user-focused products that make an impact
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}