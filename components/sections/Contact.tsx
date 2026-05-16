// components/sections/Contact.tsx
"use client";

import { useState, useRef, FormEvent } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Globe,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Terminal,
  AtSign,
} from "lucide-react";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "idrees.daudzai@example.com",
      href: "mailto:idrees.daudzai@example.com",
      color: "text-teal-400",
      bgColor: "bg-teal-500/10",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+93 700 123 456",
      href: "tel:+93700123456",
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kabul, Afghanistan",
      href: "#",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
    },
  ];

  const socialLinks = [
    { 
      icon: Terminal, 
      href: "https://github.com/idreesdaudzai", 
      label: "GitHub",
      color: "hover:text-teal-400"
    },
    { 
      icon: Globe, 
      href: "https://linkedin.com/in/idreesdaudzai", 
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    { 
      icon: AtSign, 
      href: "https://twitter.com/idreesdaudzai", 
      label: "Twitter",
      color: "hover:text-cyan-400"
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen w-full bg-[#030303] overflow-hidden py-20 lg:py-32"
    >
      {/* Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div
          className="absolute top-1/3 right-0 w-[700px] h-[700px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(20,184,166,0.15) 0%, rgba(16,185,129,0.1) 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-1/4 left-0 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.1) 0%, rgba(20,184,166,0.1) 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
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
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-teal-500" />
            <span className="text-sm tracking-[0.3em] uppercase text-teal-400 font-medium">
              Get In Touch
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
              Let's
            </span>
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Work Together
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto"
          >
            Have a project in mind? Let's discuss how we can bring it to life
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-4 glass-effect rounded-2xl p-5 group cursor-pointer"
              >
                <div className={`p-3 rounded-xl ${info.bgColor}`}>
                  <info.icon className={`w-5 h-5 ${info.color}`} />
                </div>
                <div className="flex-grow">
                  <p className="text-xs text-gray-500 mb-1">{info.label}</p>
                  <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    {info.value}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-gray-400 group-hover:translate-x-1 transition-all duration-300" />
              </motion.a>
            ))}

            {/* Availability Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="glass-effect rounded-2xl p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium text-white">
                  Available for Projects
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
              </div>
              <p className="text-xs text-gray-500">
                Currently accepting freelance projects and full-time
                opportunities
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex items-center gap-3"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-xl glass-effect text-gray-400 ${social.color} hover:border-white/30 transition-all duration-300`}
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:col-span-3"
          >
            <div className="glass-effect-strong rounded-2xl p-6 lg:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    }}
                    className="inline-flex p-4 rounded-full bg-emerald-500/10 mb-6"
                  >
                    <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Thank you for reaching out. I'll get back to you within 24
                    hours.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 bg-white text-black rounded-xl font-semibold text-sm"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-teal-500/50 focus:bg-white/[0.05] transition-all duration-300"
                        placeholder="Idrees Daudzai"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-teal-500/50 focus:bg-white/[0.05] transition-all duration-300"
                        placeholder="idrees@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-teal-500/50 focus:bg-white/[0.05] transition-all duration-300"
                      placeholder="Project Discussion"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-teal-500/50 focus:bg-white/[0.05] transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-red-400 text-sm"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {error}
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-xl font-semibold text-base transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none" />
    </section>
  );
}