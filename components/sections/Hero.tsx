// components/sections/Hero.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  FileText, 
  Mail, 
  Sparkles, 
  ArrowDown,
  Star,
  Zap,
  Award,
  ChevronRight
} from "lucide-react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleResumeClick = () => {
    window.open("/resume.pdf", "_blank");
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "mailto:your.email@example.com";
    }
  };

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="relative min-h-screen w-full overflow-hidden bg-[#030303]"
    >
      {/* Premium Animated Background */}
      <div className="absolute inset-0">
        {/* Primary Gradient Orbs */}
        <div
          className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(147,51,234,0.2) 30%, transparent 70%)",
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(236,72,153,0.2) 30%, transparent 70%)",
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.2) 0%, rgba(59,130,246,0.1) 40%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />

        {/* Luxury Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 70%)",
          }}
        />

        {/* Subtle Dot Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating Premium Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Diamond */}
        <motion.div
          animate={{
            y: [-30, 30, -30],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[20%] right-[10%] w-16 h-16 opacity-20"
        >
          <div className="w-full h-full border border-white/10 rotate-45 backdrop-blur-sm" />
        </motion.div>

        {/* Circle */}
        <motion.div
          animate={{
            y: [20, -20, 20],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[30%] left-[10%] w-24 h-24 opacity-15"
        >
          <div className="w-full h-full rounded-full border-2 border-blue-400/30" />
        </motion.div>

        {/* Triangle */}
        <motion.div
          animate={{
            y: [-40, 40, -40],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 5,
          }}
          className="absolute top-[60%] right-[20%] w-20 h-20 opacity-15"
        >
          <div 
            className="w-full h-full"
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              background: "linear-gradient(135deg, rgba(147,51,234,0.3), rgba(59,130,246,0.3))",
            }}
          />
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ opacity, scale, y }}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center w-full">
          
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="inline-flex items-center gap-3 px-5 py-2.5 glass-effect rounded-full mb-12 mt-20"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-sm font-medium text-gray-300 tracking-wide ">
              Available for Projects
            </span>
            <Star className="w-4 h-4 text-yellow-500/70" />
          </motion.div>

          {/* Role Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-400/50" />
              <h2 className="text-sm sm:text-base lg:text-lg font-light tracking-[0.3em] uppercase text-gray-400">
                UI/UX Designer & Application Developer
              </h2>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400/50" />
            </div>
          </motion.div>

          {/* MASSIVE NAME */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="mb-6 relative"
          >
            {/* Name Container */}
            <div className="relative">
              {/* First Name */}
              <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] xl:text-[6.5vw] font-black leading-[0.85] tracking-tighter">
                <span className="relative inline-block">
                  {/* Text with multiple gradients */}
                  <span className="relative z-10 bg-gradient-to-b from-white via-white to-gray-400 bg-clip-text text-transparent">
                    IDREES
                  </span>
                  
                  {/* Glow effects */}
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl rounded-lg"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </span>
              </h1>
              
              {/* Last Name - Even Bigger */}
              <h1 className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[9vw] xl:text-[8vw] font-black leading-[0.75] -mt-2 tracking-tighter">
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                    DAUDZAI
                  </span>
                  
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 via-pink-500/20 to-rose-500/30 blur-2xl rounded-lg"
                    animate={{
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                  />
                </span>
              </h1>
            </div>

            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isVisible ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
              className="mt-8 w-32 h-0.5 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed tracking-wide"
          >
            Crafting{" "}
            <span className="text-white font-normal">Enjoyable Experiences</span>
            <br />
            For Your Business
          </motion.p>

          {/* Buttons & Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 mb-8"
          >
            {/* Buttons Group */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Contact Me Button */}
              <motion.button
                onClick={handleContactClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-white text-black rounded-2xl font-semibold text-base transition-all duration-500 hover:shadow-2xl hover:shadow-white/20 min-w-[180px] overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  Contact Me
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              </motion.button>

              {/* Resume Button */}
              <motion.button
                onClick={handleResumeClick}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 border border-white/20 text-white rounded-2xl font-semibold text-base transition-all duration-500 hover:border-white/40 hover:bg-white/[0.03] backdrop-blur-sm min-w-[180px] overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <FileText className="w-4 h-4" />
                  Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/[0.02] to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 animate-shimmer" />
              </motion.button>
            </div>

            {/* Stats - Inline */}
            <div className="flex items-center gap-6 lg:gap-8">
              <div className="w-px h-12 bg-white/10 hidden lg:block" />
              
              <div className="flex gap-6 lg:gap-8">
                {[
                  { icon: Zap, label: "Projects", value: "50+" },
                  { icon: Star, label: "Clients", value: "30+" },
                  { icon: Award, label: "Experience", value: "5+ yrs" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    className="text-center group cursor-default"
                  >
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <stat.icon className="w-4 h-4 text-blue-400/70 group-hover:text-blue-400 transition-colors duration-300" />
                      <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {stat.value}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300 tracking-wide uppercase">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gray-600">
              Scroll
            </span>
            <div className="w-6 h-10 rounded-full border border-white/10 flex items-start justify-center p-1.5">
              <motion.div
                animate={{
                  y: [0, 12, 0],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1.5 h-1.5 rounded-full bg-white/50"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#030303] via-[#030303]/80 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}