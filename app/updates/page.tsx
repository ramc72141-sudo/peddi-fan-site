"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Film,
  Music,
  Camera,
  Megaphone,
  PartyPopper,
  Clapperboard,
  Star,
} from "lucide-react";

// Updates data - easily editable for future updates
const updates = [
  {
    id: 1,
    date: "February 2026",
    title: "Movie Announcement",
    description:
      "PEDDI officially announced! Ram Charan to star in this highly anticipated action drama.",
    type: "announcement",
    icon: Megaphone,
    isLatest: true,
  },
  {
    id: 2,
    date: "March 2026",
    title: "First Look Poster",
    description:
      "The intense first look poster of Ram Charan as PEDDI revealed. Fans go crazy!",
    type: "poster",
    icon: Camera,
  },
  {
    id: 3,
    date: "April 2026",
    title: "Director Announcement",
    description:
      "Renowned director joins the project. More details coming soon!",
    type: "announcement",
    icon: Clapperboard,
  },
  {
    id: 4,
    date: "May 2026",
    title: "Music Director On Board",
    description:
      "A legendary music composer confirmed to create the soundtrack for PEDDI.",
    type: "music",
    icon: Music,
  },
  {
    id: 5,
    date: "June 2026",
    title: "Second Poster Release",
    description:
      "Action-packed poster showcases the intensity of PEDDI. The rage is real!",
    type: "poster",
    icon: Camera,
  },
  {
    id: 6,
    date: "July 2026",
    title: "Teaser Announcement",
    description: "Get ready! Teaser to be unveiled on Independence Day 2026.",
    type: "teaser",
    icon: Film,
  },
  {
    id: 7,
    date: "August 2026",
    title: "Teaser Release",
    description:
      "The explosive teaser breaks the internet with record-breaking views!",
    type: "teaser",
    icon: Star,
    isHighlight: true,
  },
  {
    id: 8,
    date: "Coming Soon",
    title: "Release Date",
    description:
      "PEDDI storms into theaters worldwide. The wait is almost over!",
    type: "release",
    icon: PartyPopper,
    isFuture: true,
  },
];

const typeColors: Record<string, string> = {
  announcement: "bg-primary/20 text-primary border-primary/30",
  poster: "bg-accent/20 text-accent border-accent/30",
  music: "bg-chart-2/20 text-chart-2 border-chart-2/30",
  teaser: "bg-chart-4/20 text-chart-4 border-chart-4/30",
  release: "bg-chart-5/20 text-chart-5 border-chart-5/30",
};

export default function UpdatesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-5xl md:text-7xl tracking-wider text-foreground mb-4">
            UPDATES
          </h1>
          <p className="text-muted-foreground text-lg">
            Stay tuned for the latest news and announcements
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Central line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {/* Updates */}
          <div className="space-y-8">
            {updates.map((update, index) => {
              const Icon = update.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={update.id}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`relative flex items-start gap-4 md:gap-8 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary md:-translate-x-1.5 top-6 z-10">
                    {update.isLatest && (
                      <span className="absolute inset-0 rounded-full bg-primary animate-ping" />
                    )}
                  </div>

                  {/* Spacer for mobile */}
                  <div className="w-8 md:hidden" />

                  {/* Content */}
                  <div
                    className={`flex-1 md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`relative bg-card/60 backdrop-blur-sm border rounded-xl p-5 transition-all duration-300 ${
                        update.isHighlight
                          ? "border-primary/50 bg-primary/5"
                          : update.isFuture
                            ? "border-dashed border-border/50"
                            : "border-border hover:border-primary/30"
                      }`}
                    >
                      {/* Latest badge */}
                      {update.isLatest && (
                        <span className="absolute -top-2 -right-2 px-2 py-0.5 text-xs bg-primary text-primary-foreground rounded-full">
                          Latest
                        </span>
                      )}

                      {/* Header */}
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          isLeft ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <div
                          className={`p-2 rounded-lg border ${
                            typeColors[update.type] ||
                            "bg-secondary/50 text-muted-foreground border-border"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {update.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className={`font-serif text-xl text-foreground mb-2 ${
                          update.isFuture ? "text-muted-foreground" : ""
                        }`}
                      >
                        {update.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {update.description}
                      </p>

                      {/* Highlight effect */}
                      {update.isHighlight && (
                        <div className="absolute inset-0 bg-primary/5 rounded-xl pointer-events-none" />
                      )}
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Subscribe Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 max-w-xl mx-auto"
        >
          <div className="bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-8 text-center">
            <h2 className="font-serif text-2xl text-foreground mb-3">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-6">
              Follow us on social media for the latest updates about PEDDI
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {["Twitter", "Instagram", "YouTube"].map((platform, index) => (
                <motion.button
                  key={platform}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="px-5 py-2.5 bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary/50 rounded-lg text-foreground hover:text-primary transition-all duration-300"
                >
                  {platform}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
