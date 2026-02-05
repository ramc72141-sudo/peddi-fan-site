// app/videos/[slug]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { movieVideos } from "@/lib/movieVideos";

export default function VideoLanguagePage() {
  const { slug } = useParams();

  const video = movieVideos.find(v => v.slug === slug);

  if (!video) {
    return <div className="pt-24 text-center">Video not found</div>;
  }

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-4 max-w-3xl">

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center font-serif text-4xl md:text-6xl mb-4"
        >
          {video.title}
        </motion.h1>

        <p className="text-center text-muted-foreground mb-10">
          Select Language
        </p>

        <div className="space-y-4">
          {video.languages.length > 0 ? (
            video.languages.map((lang, index) => (
              <motion.a
                key={lang.name}
                href={lang.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="flex items-center justify-between p-5 rounded-xl border border-border bg-card/40 hover:bg-card/60 transition"
              >
                <span className="text-lg uppercase tracking-wider">
                  {lang.name}
                </span>
                <ExternalLink className="w-5 h-5 text-primary" />
              </motion.a>
            ))
          ) : (
            <p className="text-center text-muted-foreground">
              Coming Soon
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
