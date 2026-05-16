// components/sections/Footer.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, ArrowUp, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "@/components/ui/SocialIcons";
import Link from "next/link";

type FooterLink = { label: string; href: string; external?: boolean };
type FooterColumn = { title: string; links: FooterLink[] };

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(footerRef, { once: true });
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
        { label: "GitHub", href: "https://github.com/daudzai123", external: true },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/idrees-daudzai-54432a228/", external: true },
        { label: "Email", href: "mailto:idreesdaudzai2000@gmail.com", external: true },
      ],
    },
  ];

  return (
    <footer ref={footerRef} className="relative bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <Link href="#hero" className="text-3xl font-bold gradient-text inline-block mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Idrees Daudzai
              </Link>
              <p className="text-foreground/50 text-sm leading-relaxed mb-6 max-w-md">
                UI/UX Designer & Application Developer crafting enjoyable experiences for your business.
              </p>
              <div className="flex items-center gap-2 text-sm text-foreground/40">
                <MapPin className="w-4 h-4" />
                <span>Kabul, Afghanistan</span>
              </div>
            </motion.div>

            {/* Links */}
            {footerLinks.map((column, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              >
                <h3 className="text-foreground font-semibold mb-4 text-sm">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link, j) => (
                    <li key={j}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="text-sm text-foreground/40 hover:text-primary transition-colors"
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
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/40 flex items-center gap-1">
            © {currentYear} Idrees Daudzai
          </p>
          
          {/* Real Brand Icons */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/daudzai123"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-foreground/30 hover:text-gray-900 dark:hover:text-white transition-colors"
              title="GitHub"
            >
              <GitHubIcon className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/idrees-daudzai-54432a228/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-foreground/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              title="LinkedIn"
            >
              <LinkedInIcon className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="mailto:idreesdaudzai2000@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-foreground/30 hover:text-red-500 dark:hover:text-red-400 transition-colors"
              title="Email"
            >
              <EmailIcon className="w-5 h-5" />
            </motion.a>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-sm text-foreground/40 hover:text-primary transition-colors"
          >
            Back to Top <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}