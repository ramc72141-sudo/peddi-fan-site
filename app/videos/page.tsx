// app/videos/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play } from "lucide-react";
import { movieVideos } from "@/lib/movieVideos";

export default function VideosPage() {
  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-4 max-w-3xl">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center font-serif text-5xl md:text-7xl mb-12"
        >
          VIDEOS
        </motion.h1>

        <div className="space-y-4">
          {movieVideos.map((video, index) => (
            <motion.div
              key={video.slug}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/videos/${video.slug}`}
                className="flex items-center justify-between p-5 rounded-xl bg-card/40 hover:bg-card/60 border border-border transition"
              >
                <span className="text-lg font-medium">
                  {video.title}
                </span>
                <Play className="w-5 h-5 text-primary" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
