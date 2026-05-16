// components/sections/About.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Code2,
  Palette,
  Database,
  Zap,
  Layers,
  Smartphone,
  Globe,
  Server,
  Cpu,
  ArrowRight,
  Sparkles,
  Hexagon,
} from "lucide-react";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    {
      icon: Globe,
      title: "Front-End",
      description: "React, Next.js, TypeScript",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Server,
      title: "Back-End",
      description: "Node.js, Python, APIs",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Smartphone,
      title: "Mobile",
      description: "React Native, Flutter",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Database,
      title: "Database",
      description: "PostgreSQL, MongoDB",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const highlights = [
    { icon: Code2, label: "Clean Code", color: "text-blue-400" },
    { icon: Palette, label: "Great Design", color: "text-purple-400" },
    { icon: Layers, label: "Full Stack", color: "text-cyan-400" },
    { icon: Cpu, label: "Innovation", color: "text-pink-400" },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen w-full bg-[#030303] overflow-hidden py-20 lg:py-32"
    >
      {/* Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0">
        {/* Gradient Orbs */}
        <div
          className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(147,51,234,0.2) 30%, transparent 70%)",
            filter: "blur(80px)",
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.2) 0%, rgba(168,85,247,0.2) 40%, transparent 70%)",
            filter: "blur(60px)",
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        />

        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </motion.div>

      {/* Content Container */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative"
          >
            {/* Abstract Shape Composition */}
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main Circle */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                  scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute inset-0 rounded-full border border-white/5"
              />

              {/* Rotating Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-white/10"
              />

              {/* Inner Ring with Gradient */}
              <motion.div
                animate={{ rotate: 180 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 rounded-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-white/10 backdrop-blur-sm"
              />

              {/* Center Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <Hexagon className="w-32 h-32 text-blue-400/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="w-12 h-12 text-blue-400/50" />
                  </div>
                </motion.div>
              </div>

              {/* Orbiting Dots */}
              {[0, 72, 144, 216, 288].map((degree, index) => (
                <motion.div
                  key={index}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 15 + index * 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0"
                  style={{ rotate: degree }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                  />
                </motion.div>
              ))}

              {/* Floating Code Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass-effect rounded-xl px-4 py-2"
              >
                <Code2 className="w-5 h-5 text-blue-400" />
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute -bottom-4 -left-4 glass-effect rounded-xl px-4 py-2"
              >
                <Database className="w-5 h-5 text-purple-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="space-y-10">
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent" />
              <span className="text-sm tracking-[0.3em] uppercase text-blue-400 font-medium">
                About Me
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1]"
            >
              <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                Software
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Engineer
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-xl"
            >
              I'm a software engineer specializing in web and mobile application
              development. I build end-to-end solutions from front-end to
              back-end, with a focus on clean design, robust APIs, and seamless
              integrations. My goal is to create innovative, user-focused
              products that make an impact.
            </motion.p>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
              className="grid grid-cols-2 gap-3"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-center gap-3 glass-effect rounded-xl px-4 py-3 group cursor-default"
                >
                  <item.icon
                    className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <span className="text-sm font-medium text-gray-300">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
              className="grid grid-cols-2 gap-4"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="relative group cursor-default"
                >
                  <div className="glass-effect-strong rounded-2xl p-5 relative overflow-hidden">
                    {/* Gradient Line Top */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${skill.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
                    />

                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`p-2 rounded-xl bg-gradient-to-br ${skill.gradient} bg-opacity-10`}
                      >
                        <skill.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-semibold text-white text-sm">
                        {skill.title}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                      {skill.description}
                    </p>

                    {/* Hover Glow */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <motion.button
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group inline-flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                <span className="text-sm font-medium">View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}