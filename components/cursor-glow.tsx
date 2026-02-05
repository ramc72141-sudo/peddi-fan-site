"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) =>
      setPos({ x: e.clientX, y: e.clientY });

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div className="pointer-events-none fixed inset-0 z-10 hidden md:block">
      <motion.div
        className="absolute w-[420px] h-[420px] rounded-full"
        animate={{ x: pos.x - 210, y: pos.y - 210 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        style={{
          background:
            "radial-gradient(circle, rgba(220,38,38,0.18) 0%, rgba(220,38,38,0.08) 35%, transparent 65%)",
        }}
      />
    </motion.div>
  );
}
