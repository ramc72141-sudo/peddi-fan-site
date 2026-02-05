"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function AudioToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio("/audio/peddi-theme.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.25; // cinematic, not loud
  }, []);

  const toggleAudio = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.error("Audio play blocked:", err);
      }
    }
  };

  return (
    <button
      onClick={toggleAudio}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full bg-card/80 backdrop-blur-md border border-border px-4 py-2 text-sm hover:bg-primary/20 transition"
      aria-label="Toggle background music"
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-4 h-4 text-primary" />
          Sound On
        </>
      ) : (
        <>
          <VolumeX className="w-4 h-4 text-muted-foreground" />
          Sound Off
        </>
      )}
    </button>
  );
}
