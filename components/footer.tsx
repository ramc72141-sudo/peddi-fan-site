"use client";

import { motion } from "framer-motion";
import { Twitter, Instagram } from "lucide-react";

const socialLinks = [
  {
    icon: Twitter,
    href: "https://x.com/PeddiMovieOffl",
    label: "Peddi Movie Twitter",
    enabled: true,
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/peddimovie/",
    label: "Peddi Movie Instagram",
    enabled: true,
  },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-6">

          {/* Social Links (PEDDI ONLY) */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-3 bg-secondary/50 rounded-full hover:bg-primary/20 hover:text-primary transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </motion.a>
              );
            })}
          </div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground text-center max-w-md"
          >
            This is a fan-made website. Not affiliated with official movie
            promotions.
          </motion.p>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xs text-muted-foreground/60"
          >
            Made with ❤️ for PEDDI
          </motion.p>

          {/* 👇 FOLLOW ME (POINTS ONLY TO DEVELOPER) */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-1"
          >
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Follow me
            </span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.1 }}
              className="text-base"
            >
              👇
            </motion.span>
          </motion.div>

          {/* Developer Credit */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-xs text-muted-foreground/70"
          >
            Developer{" "}
            <a
              href="https://x.com/Akhilll569953"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline hover:text-primary/80 transition-colors"
            >
              Akhil
            </a>
          </motion.p>

        </div>
      </div>
    </footer>
  );
}
