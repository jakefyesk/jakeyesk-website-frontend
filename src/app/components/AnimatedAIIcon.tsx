"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function AnimatedAIIcon() {
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const icon = iconRef.current;
    if (icon) {
      const animate = () => {
        const time = Date.now() * 0.001;
        const scale = 1 + Math.sin(time) * 0.1;
        icon.style.transform = `scale(${scale})`;
        requestAnimationFrame(animate);
      };
      animate();
    }
  }, []);

  return (
    <div className="flex h-full items-center justify-center">
      <motion.div
        ref={iconRef}
        className="flex h-64 w-64 items-center justify-center rounded-full bg-blue-500"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-6xl">AI</span>
      </motion.div>
    </div>
  );
}
