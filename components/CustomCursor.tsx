"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorState = "default" | "link" | "view";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [state, setState] = useState<CursorState>("default");
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 380, damping: 32, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 380, damping: 32, mass: 0.6 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setEnabled(true);
    document.documentElement.classList.add("no-cursor");

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };

    const over = (e: PointerEvent) => {
      const target = e.target as Element;
      const viewEl = target.closest?.("[data-cursor='view']");
      if (viewEl) {
        setState("view");
        return;
      }
      if (target.closest?.("a, button, [role='button'], input, textarea")) {
        setState("link");
        return;
      }
      setState("default");
    };

    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const leave = () => setVisible(false);

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    document.documentElement.addEventListener("pointerleave", leave);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      document.documentElement.removeEventListener("pointerleave", leave);
      document.documentElement.classList.remove("no-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  const ringSize = state === "view" ? 92 : state === "link" ? 52 : 34;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[200] h-2 w-2 rounded-full bg-accent"
        style={{ x, y, opacity: visible ? 1 : 0 }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-accent" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[199] flex items-center justify-center"
        style={{ x: ringX, y: ringY, opacity: visible ? 1 : 0 }}
        animate={{
          scale: pressed ? 0.85 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <div
          className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/60 bg-accent/10 backdrop-blur-[2px] transition-[width,height] duration-300"
          style={{ width: ringSize, height: ringSize }}
        >
          {state === "view" && (
            <span className="font-mono text-[10px] font-medium tracking-[0.18em] text-accent uppercase">
              View
            </span>
          )}
        </div>
      </motion.div>
    </>
  );
}
