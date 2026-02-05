"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Countdown } from "./countdown";
import { Play, Calendar } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 pointer-events-none z-0"
        style={{ backgroundImage: "url('/peddi-poster.png')" }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/70 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-20 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-primary text-sm md:text-base uppercase tracking-[0.3em] mb-6"
        >
          Mega Power Star Ram Charan
        </motion.p>

        <motion.h1
  initial={{
    opacity: 0,
    y: 30,
    scale: 1.08,
  }}
  animate={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  transition={{
    duration: 1.1,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="relative font-serif text-7xl md:text-9xl lg:text-[12rem] tracking-wider text-foreground"
>
  PEDDI
</motion.h1>


        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl text-muted-foreground tracking-widest uppercase mb-12"
        >
          The Rage Begins
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-12"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.9 }}
  className="mb-6"
>
  <p className="text-primary text-xs md:text-sm uppercase tracking-[0.45em] mb-3">
    Worldwide Release
  </p>

  <h2 className="font-serif text-4xl md:text-5xl tracking-[0.25em] uppercase text-primary">
  30&nbsp;APRIL&nbsp;2026
</h2>


  <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
</motion.div>

          <Countdown />
        </motion.div>

        {/* ACTION BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="relative z-30 mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
         <Link
  href="/videos"
  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold uppercase hover:scale-105 transition"
>
  <Play className="w-5 h-5" />
  Watch Videos
</Link>


          <a
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=PEDDI+Movie+Release&dates=20260430T043000Z/20260430T053000Z&details=PEDDI+movie+release+starring+Ram+Charan&location=India"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-border bg-secondary/40 hover:border-primary/50 transition"
          >
            <Calendar className="w-5 h-5" />
            Add Reminder
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-0" />
    </section>
  );
}
