"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Film } from "lucide-react";

const castMembers = [
  {
    id: "hero",
    name: "Ram Charan",
    role: "Hero",
    hasFilmography: true,
  },
  {
    id: "heroine",
    name: "Janhvi Kapoor",
    role: "Heroine",
    hasFilmography: true,
  },
  {
    id: "director",
    name: "Buchi Babu Sana",
    role: "Director",
    hasFilmography: true,
  },
  {
    id: "music",
    name: "AR Rahman",
    role: "Music Director",
    hasFilmography: true,
  },
];

export function CastPreview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl tracking-wider mb-4">
            THE CAST
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Cast Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {castMembers.map((member, index) => {
            const CardContent = (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Card */}
                <div className="relative bg-card/60 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:border-primary/50 hover:bg-card/80 transition-all duration-300">

                  {/* BIG PHOTO */}
                  <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto mb-5 rounded-full overflow-hidden border border-border group-hover:border-primary/50 transition">
                    <Image
                      src={`/cast/${member.id}.jpg`}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 112px, 128px"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="font-serif text-lg md:text-xl mb-1 group-hover:text-primary transition">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    {member.role}
                  </p>

                  {/* Filmography */}
                  {member.hasFilmography && (
                    <div className="mt-3 flex items-center justify-center gap-1 text-xs text-primary/70 opacity-0 group-hover:opacity-100 transition">
                      <Film className="w-3 h-3" />
                      <span>View Filmography</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );

            return (
              <Link
                key={member.id}
                href={`/cast?member=${member.id}`}
                className="block"
              >
                {CardContent}
              </Link>
            );
          })}
        </div>

        {/* View Full Cast */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link
            href="/cast"
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary/50 rounded-lg transition"
          >
            <span>View Full Cast</span>
            <Film className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}