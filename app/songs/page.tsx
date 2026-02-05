"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Music, User, Disc3, Clock } from "lucide-react";
import { movieSongs } from "@/lib/movieSongs";

export default function SongsPage() {
  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif text-5xl md:text-7xl tracking-wider mb-4">
            SONGS
          </h1>
          <p className="text-muted-foreground text-lg">
            The musical journey of PEDDI
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Album Art (UNCHANGED) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-md mx-auto mb-12"
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

        {/* Songs List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {movieSongs.map((song, index) => (
            <motion.div
              key={song.slug}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className={`border rounded-xl p-4 backdrop-blur-sm transition-all
                ${
                  song.released
                    ? "bg-card/40 hover:bg-card/60"
                    : "bg-card/20 opacity-50 cursor-not-allowed"
                }`}
            >
              <div className="flex items-center gap-4">
                
                {/* Song Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-medium">
                    {song.title}
                  </h3>
                  <div className="flex gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {song.singer}
                    </span>
                    <span className="flex items-center gap-1">
                      <Music className="w-3 h-3" />
                      {song.musicDirector}
                    </span>
                  </div>
                </div>

                {/* Type */}
                <span className="hidden md:block px-3 py-1 text-xs rounded-full bg-primary/20 text-primary">
                  {song.type}
                </span>

                {/* Duration */}
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {song.duration}
                </span>

                {/* Action */}
                {song.released ? (
                  <Link
                    href={`/songs/${song.slug}`}
                    className="ml-4 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm uppercase tracking-wider hover:scale-105 transition"
                  >
                    View Languages
                  </Link>
                ) : (
                  <span className="ml-4 text-xs uppercase tracking-wider text-muted-foreground">
                    Coming Soon
                  </span>
                )}
              </div>
            </motion.div>
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