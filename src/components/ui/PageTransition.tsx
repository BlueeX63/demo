"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<"idle" | "in" | "out">("idle");
  const columns = 5;

  useEffect(() => {
    const handleIn = () => setPhase("in");
    window.addEventListener("trigger-transition-in", handleIn);
    return () => window.removeEventListener("trigger-transition-in", handleIn);
  }, []);

  // When pathname changes, play the 'out' animation to reveal the new page
  useEffect(() => {
    if (phase === "in") {
      setPhase("out");
    } else {
      // For initial load or back button
      setPhase("out");
    }
  }, [pathname]);

  const anim = {
    initial: { 
      y: "-100vh",
      transition: { duration: 0 }
    },
    in: (i: number) => ({
      y: "0vh",
      transition: { duration: 0.5, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] as const }
    }),
    out: (i: number) => ({
      y: "100vh",
      transition: { duration: 0.5, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] as const }
    })
  };

  return (
    <div 
      className={`fixed inset-0 pointer-events-none z-[100] flex ${phase === "idle" ? "hidden" : ""}`}
      style={{ display: phase === "idle" ? "none" : "flex" }}
    >
      {[...Array(columns)].map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={anim}
          initial="initial"
          animate={phase === "idle" ? "initial" : phase}
          onAnimationComplete={() => {
            if (phase === "out") setPhase("idle");
          }}
          className="relative h-screen flex-1 bg-foreground"
        />
      ))}
    </div>
  );
}
