// components/sections/Contact.tsx
"use client";

import { useState, useRef, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "@/components/ui/SocialIcons";
import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = "service_3lv9uoe";
const EMAILJS_TEMPLATE_ID = "template_gm1ekrq";
const EMAILJS_PUBLIC_KEY = "6z-Wez1j70_6OzPR3";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const templateParams = {
        from_name: formState.name,
        reply_to: formState.email,
        subject: formState.subject,
        message: formState.message,
        to_email: "idreesdaudzai2000@gmail.com",
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Email error:", err);
      setError("Failed to send message. Please email me directly at idreesdaudzai2000@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { 
      icon: Mail, 
      label: "Email", 
      value: "idreesdaudzai2000@gmail.com", 
      href: "mailto:idreesdaudzai2000@gmail.com", 
      color: "text-red-500",
      bgColor: "bg-red-500/10"
    },
    { 
      icon: Phone, 
      label: "Phone", 
      value: "+93 780 363 104", 
      href: "tel:+93780363104", 
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    { 
      icon: MapPin, 
      label: "Location", 
      value: "Kabul, Afghanistan", 
      href: "#", 
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
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
            Get In Touch
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mt-4 mb-6">
            <span className="text-foreground">Let's</span>
            <br />
            <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring it to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-4 glass rounded-2xl p-5 group"
              >
                <div className={`p-3 rounded-xl ${info.bgColor}`}>
                  <info.icon className={`w-5 h-5 ${info.color}`} />
                </div>
                <div className="flex-grow">
                  <p className="text-xs text-foreground/40 mb-1">{info.label}</p>
                  <p className="text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors">
                    {info.value}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-foreground/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </motion.a>
            ))}

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass rounded-2xl p-5"
            >
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-medium text-foreground">Available for Projects</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
              </div>
              <p className="text-xs text-foreground/40">
                Currently accepting freelance projects and full-time opportunities
              </p>
            </motion.div>

            {/* Social Links - REAL ICONS */}
            <div className="flex gap-3">
              <motion.a
                href="https://github.com/daudzai123"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 rounded-xl glass text-foreground/40 hover:text-gray-900 dark:hover:text-white transition-all"
                title="GitHub"
              >
                <GitHubIcon className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/idrees-daudzai-54432a228/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 rounded-xl glass text-foreground/40 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="mailto:idreesdaudzai2000@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 rounded-xl glass text-foreground/40 hover:text-red-500 dark:hover:text-red-400 transition-all"
                title="Email"
              >
                <EmailIcon className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="glass-strong rounded-2xl p-6 lg:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-foreground mb-3">Message Sent Successfully!</h3>
                  <p className="text-foreground/60 mb-2">Thank you for reaching out.</p>
                  <p className="text-foreground/60 mb-6">I'll get back to you within 24 hours at idreesdaudzai2000@gmail.com</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground/60 mb-2">Your Name</label>
                      <input
                        type="text"
                        name="from_name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder-foreground/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground/60 mb-2">Your Email</label>
                      <input
                        type="email"
                        name="reply_to"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder-foreground/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/60 mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder-foreground/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="Project Discussion"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/60 mb-2">Message</label>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder-foreground/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 p-3 rounded-xl"
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {error}
                    </motion.div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-primary/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
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
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}