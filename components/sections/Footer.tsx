// components/sections/Footer.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Heart,
  ArrowUp,
  Mail,
  MapPin,
  Terminal,
  Globe,
  AtSign,
} from "lucide-react";
import Link from "next/link";

// Define types
type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(footerRef, { once: true });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks: FooterColumn[] = [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "#hero" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Services", href: "#services" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Web Development", href: "#services" },
        { label: "Mobile Apps", href: "#services" },
        { label: "UI/UX Design", href: "#services" },
        { label: "Backend Development", href: "#services" },
        { label: "MIS Solutions", href: "#services" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "GitHub", href: "https://github.com/idreesdaudzai", external: true },
        { label: "LinkedIn", href: "https://linkedin.com/in/idreesdaudzai", external: true },
        { label: "Twitter", href: "https://twitter.com/idreesdaudzai", external: true },
        { label: "Email", href: "mailto:idrees.daudzai@example.com", external: true },
      ],
    },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#030303] border-t border-white/5"
    >
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <Link
                href="#hero"
                className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent inline-block mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Idrees Daudzai
              </Link>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-md">
                UI/UX Designer & Application Developer crafting enjoyable
                experiences for your business. Building innovative, user-focused
                products that make an impact.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>Kabul, Afghanistan</span>
              </div>
            </motion.div>

            {/* Links Columns */}
            {footerLinks.map((column, columnIndex) => (
              <motion.div
                key={columnIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + columnIndex * 0.1,
                }}
              >
                <h3 className="text-white font-semibold mb-4 text-sm">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="text-sm text-gray-500 hover:text-teal-400 transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm text-gray-600 flex items-center gap-1"
            >
              © {currentYear} Idrees Daudzai. Made with
              <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              {[
                { icon: Terminal, href: "https://github.com/idreesdaudzai", label: "GitHub" },
                { icon: Globe, href: "https://linkedin.com/in/idreesdaudzai", label: "LinkedIn" },
                { icon: AtSign, href: "https://twitter.com/idreesdaudzai", label: "Twitter" },
                { icon: Mail, href: "mailto:idrees.daudzai@example.com", label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-600 hover:text-teal-400 transition-colors duration-300"
                  title={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>

            {/* Back to Top */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-teal-400 transition-colors duration-300"
            >
              Back to Top
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}