// components/sections/Services.tsx
"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Globe,
  Smartphone,
  Server,
  Palette,
  Database,
  Cloud,
  Shield,
  Zap,
  Code2,
  Settings,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface Service {
  icon: any;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  const services: Service[] = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Building modern, responsive web applications with cutting-edge technologies for optimal performance and user experience.",
      features: [
        "Full-Stack Applications",
        "Progressive Web Apps",
        "E-Commerce Solutions",
        "Content Management Systems",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Creating cross-platform mobile applications that deliver native-like experiences across iOS and Android devices.",
      features: [
        "React Native Apps",
        "Cross-Platform Solutions",
        "Mobile-First Design",
        "App Store Deployment",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Designing robust, scalable APIs and server-side solutions that power complex applications with reliability.",
      features: [
        "RESTful APIs",
        "Microservices",
        "Database Design",
        "Server Optimization",
      ],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Crafting intuitive, visually stunning interfaces that enhance user engagement and create memorable experiences.",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Interactive Design",
        "Design Systems",
      ],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Database,
      title: "MIS Development",
      description:
        "Developing comprehensive management information systems for corporate data handling and operational efficiency.",
      features: [
        "Data Management",
        "Business Intelligence",
        "Workflow Automation",
        "Real-Time Reporting",
      ],
      gradient: "from-indigo-500 to-violet-500",
    },
    {
      icon: Settings,
      title: "System Integration",
      description:
        "Connecting disparate systems and services to create seamless, efficient workflows across your organization.",
      features: [
        "API Integration",
        "Third-Party Services",
        "Data Synchronization",
        "Legacy System Migration",
      ],
      gradient: "from-rose-500 to-pink-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative min-h-screen w-full bg-[#030303] overflow-hidden py-20 lg:py-32"
    >
      {/* Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div
          className="absolute top-1/2 left-0 w-[700px] h-[700px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(147,51,234,0.15) 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.15) 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.05) 1px, transparent 1px),
                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px",
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500" />
            <span className="text-sm tracking-[0.3em] uppercase text-blue-400 font-medium">
              What I Do
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
              Services
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              & Expertise
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto"
          >
            Comprehensive solutions tailored to bring your digital vision to
            life
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              className="group"
            >
              <div className="relative h-full glass-effect-strong rounded-2xl p-6 lg:p-8 transition-all duration-500 hover:bg-white/[0.07] hover:border-white/20 overflow-hidden">
                {/* Top Gradient Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Background Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 rounded-2xl`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    animate={
                      hoveredService === index
                        ? { rotate: 10, scale: 1.1, y: -5 }
                        : { rotate: 0, scale: 1, y: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} bg-opacity-10 mb-5`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-5 group-hover:text-gray-400 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2.5">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={
                          hoveredService === index
                            ? {
                                opacity: 1,
                                x: 0,
                                transition: { delay: featureIndex * 0.05 },
                              }
                            : {}
                        }
                        className="flex items-center gap-2.5 text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 lg:mt-24 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-semibold text-base transition-all duration-500 hover:shadow-2xl hover:shadow-white/20"
          >
            <Sparkles className="w-5 h-5" />
            Start a Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}