"use client";

import { motion, useReducedMotion } from "framer-motion";

const lines = [74, 88, 60, 82, 54];

export default function ArchiveHero() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="archive-hero" aria-label="Illustration of a paper record becoming searchable digital information">
      <div className="archive-hero__grid" aria-hidden="true" />
      <motion.div
        className="archive-sheet archive-sheet--back"
        animate={reduceMotion ? undefined : { y: [0, -8, 0], rotate: [-5, -3, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="archive-sheet archive-sheet--front"
        initial={reduceMotion ? false : { opacity: 0, y: 30, rotate: 4 }}
        animate={{ opacity: 1, y: 0, rotate: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="archive-sheet__stamp">PUBLIC RECORD</span>
        <strong>RECORD · 0041</strong>
        {lines.map((width, index) => <i key={width + index} style={{ width: `${width}%` }} />)}
        <div className="archive-sheet__seal">CCS</div>
      </motion.div>
      <div className="archive-scan" aria-hidden="true" />
      <span className="archive-hero__caption">From physical history to usable intelligence</span>
    </div>
  );
}
