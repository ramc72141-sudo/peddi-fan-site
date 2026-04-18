"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// ✅ Configure the release date here (May 1st, 2026)
const RELEASE_DATE = new Date("2026-06-04T00:00:00");

interface TimeUnit {
  value: number;
  label: string;
}

function calculateTimeLeft(): TimeUnit[] {
  const now = new Date();
  const difference = RELEASE_DATE.getTime() - now.getTime();

  if (difference <= 0) {
    return [
      { value: 0, label: "Days" },
      { value: 0, label: "Hours" },
      { value: 0, label: "Minutes" },
      { value: 0, label: "Seconds" },
    ];
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return [
    { value: days, label: "Days" },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Minutes" },
    { value: seconds, label: "Seconds" },
  ];
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([
    { value: 0, label: "Days" },
    { value: 0, label: "Hours" },
    { value: 0, label: "Minutes" },
    { value: 0, label: "Seconds" },
  ]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-20 h-24 md:w-28 md:h-32 bg-card/50 rounded-lg animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {timeLeft.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 * index, duration: 0.5 }}
          className="relative group"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl group-hover:bg-primary/30 transition-colors duration-500" />

          {/* Card */}
          <div className="relative w-20 h-24 md:w-28 md:h-32 bg-card/80 backdrop-blur-sm border border-border rounded-lg flex flex-col items-center justify-center overflow-hidden">
            
            {/* Top highlight */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            {/* Number */}
            <motion.span
              key={unit.value}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="font-serif text-3xl md:text-5xl text-foreground"
            >
              {unit.value.toString().padStart(2, "0")}
            </motion.span>

            {/* Label */}
            <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest mt-1">
              {unit.label}
            </span>

            {/* Bottom highlight */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
