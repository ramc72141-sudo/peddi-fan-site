"use client";

import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Disc3, ExternalLink } from "lucide-react";
import { movieSongs } from "@/lib/movieSongs";

export default function SongLanguagePage() {
  const params = useParams();
  const slug = params.slug as string;

  const song = movieSongs.find(
    (s) => s.slug === slug && s.released === true
  );

  if (!song) {
    notFound();
  }

  const languages = Object.entries(song.youtube);

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-4 max-w-3xl">

        {/* Album Art (UNCHANGED STYLE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto mb-10"
        >
          <div className="relative aspect-square bg-card/60 border rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-primary/10 blur-3xl" />
            <div className="relative h-full flex flex-col items-center justify-center">
              <Disc3 className="w-24 h-24 text-primary/50 animate-spin-slow" />
              <span className="mt-4 text-xl font-serif">PEDDI</span>
              <span className="text-sm text-muted-foreground">
                Original Soundtrack
              </span>
            </div>
          </div>
        </motion.div>

        {/* Song Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="font-serif text-4xl md:text-5xl tracking-wider">
            {song.title}
          </h1>
          <p className="text-muted-foreground mt-2">
            Music by {song.musicDirector}
          </p>
        </motion.div>

        {/* Language Buttons */}
        <div className="grid sm:grid-cols-2 gap-4">
          {languages.map(([lang, link], index) => (
            <motion.a
              key={lang}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group flex items-center justify-between px-6 py-4 rounded-xl
                bg-card/50 backdrop-blur-sm border border-border
                hover:border-primary/60 hover:bg-primary/10 transition-all"
            >
              <span className="uppercase tracking-wider font-medium">
                {lang}
              </span>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Spin animation */}
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
}
