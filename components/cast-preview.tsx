"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { User, Film, Music, Clapperboard } from "lucide-react";

const castMembers = [
  {
    id: "hero",
    name: "Ram Charan",
    role: "Hero",
    icon: User,
    hasFilmography: true,
  },
  {
    id: "heroine",
    name: "Janhvi Kapoor",
    role: "Heroine",
    icon: User,
    hasFilmography: true,
  },
  {
    id: "director",
    name: "Buchi Babu Sana",
    role: "Director",
    icon: Clapperboard,
    hasFilmography: true,
  },
  {
    id: "music",
    name: "AR Rahman",
    role: "Music Director",
    icon: Music,
    hasFilmography: true,
  },
];

export function CastPreview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl tracking-wider text-foreground mb-4">
            THE CAST
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {castMembers.map((member, index) => {
            const Icon = member.icon;
            const CardContent = (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Card */}
                <div className="relative bg-card/60 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:bg-card/80">
                  {/* Icon placeholder for photo */}
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>

                  {/* Name */}
                  <h3 className="font-serif text-lg md:text-xl text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    {member.role}
                  </p>

                  {/* Filmography indicator */}
                  {member.hasFilmography && (
                    <div className="mt-3 flex items-center justify-center gap-1 text-xs text-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Film className="w-3 h-3" />
                      <span>View Filmography</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );

            if (member.hasFilmography) {
              return (
                <Link
                  key={member.id}
                  href={`/cast?member=${member.id}`}
                  className="block"
                >
                  {CardContent}
                </Link>
              );
            }

            return <div key={member.id}>{CardContent}</div>;
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link
            href="/cast"
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary/50 rounded-lg text-foreground hover:text-primary transition-all duration-300"
          >
            <span>View Full Cast</span>
            <Film className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
