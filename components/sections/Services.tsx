// components/sections/Services.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe,
  Smartphone,
  Server,
  Palette,
  Database,
  Settings,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface Service {
  icon: any;
  title: string;
  description: string;
  features: string[];
  color: string;
  bgColor: string;
}

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const services: Service[] = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Building modern, responsive web applications with cutting-edge technologies.",
      features: ["Full-Stack Apps", "Progressive Web Apps", "E-Commerce", "CMS"],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Creating cross-platform mobile apps for iOS and Android.",
      features: ["React Native", "Cross-Platform", "Mobile-First", "App Store"],
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Designing robust, scalable APIs and server solutions.",
      features: ["RESTful APIs", "Microservices", "Database Design", "Optimization"],
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Crafting intuitive, stunning interfaces for great user experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
    },
    {
      icon: Database,
      title: "MIS Development",
      description: "Comprehensive management systems for corporate operations.",
      features: ["Data Management", "Business Intelligence", "Automation", "Reporting"],
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      icon: Settings,
      title: "System Integration",
      description: "Connecting disparate systems for seamless workflows.",
      features: ["API Integration", "Third-Party", "Sync", "Migration"],
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
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
            What I Do
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mt-4 mb-6">
            <span className="text-foreground">Services</span>
            <br />
            <span className="gradient-text">& Expertise</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Comprehensive solutions tailored to bring your digital vision to life
          </p>
        </motion.div>

        {/* Services Grid - Content ALWAYS visible */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-strong rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:border-primary/30"
            >
              {/* Icon - Always visible */}
              <div className={`p-3 rounded-xl ${service.bgColor} inline-block mb-5`}>
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>

              {/* Title - Always visible */}
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              
              {/* Description - Always visible */}
              <p className="text-sm text-foreground/50 leading-relaxed mb-5">{service.description}</p>

              {/* Features - Always visible (no hover needed) */}
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2.5 text-sm text-foreground/60"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${service.color.replace('text', 'bg')} flex-shrink-0`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold text-lg shadow-xl shadow-primary/25 hover:shadow-2xl transition-all"
          >
            <Sparkles className="w-5 h-5" />
            Start a Project
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}