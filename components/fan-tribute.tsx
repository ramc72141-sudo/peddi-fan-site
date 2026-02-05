"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function FanTribute() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-transparent to-primary/5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Heart icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Heart className="w-8 h-8 text-primary" />
          </motion.div>

          {/* Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-6"
          >
            A Fan-Made Countdown Dedicated to
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl text-primary tracking-wide"
          >
            Mega Power Star Ram Charan
          </motion.h2>

          {/* Decorative elements */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mt-8"
          >
            <div className="w-16 h-px bg-border" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-16 h-px bg-border" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
