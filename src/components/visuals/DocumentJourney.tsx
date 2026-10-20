"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { digitizationStages } from "@/content/site";

export default function DocumentJourney() {
  const container = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, .18, .38, .58, .78, 1], ["-31vw", "17vw", "-20vw", "22vw", "-12vw", "28vw"]);
  const y = useTransform(scrollYProgress, [0, .18, .38, .58, .78, 1], ["-25vh", "-14vh", "0vh", "10vh", "22vh", "28vh"]);
  const rotate = useTransform(scrollYProgress, [0, .2, .4, .6, .8, 1], [-8, 4, -3, 5, -2, 3]);
  const scale = useTransform(scrollYProgress, [0, .45, .7, 1], [1, .82, .72, .62]);
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => setActive(Math.min(5, Math.floor(latest * 6))));

  if (reducedMotion) {
    return (
      <div className="journey-static">
        {digitizationStages.map((stage) => (
          <article key={stage.title}><span>{stage.number}</span><h3>{stage.title}</h3><p>{stage.detail}</p></article>
        ))}
      </div>
    );
  }

  return (
    <div className="document-journey" ref={container}>
      <div className="document-journey__sticky">
        <div className="journey-heading">
          <span className="eyebrow eyebrow--light">One record · continuous care</span>
          <h2>{digitizationStages[active].title}</h2>
          <p>{digitizationStages[active].detail}</p>
          <span className="journey-heading__counter">0{active + 1} / 06</span>
        </div>
        <svg className="journey-path" viewBox="0 0 1200 720" preserveAspectRatio="none" aria-hidden="true">
          <path d="M130 130 C 350 40, 420 240, 675 170 S 1060 105, 1020 340 S 665 390, 730 575 S 1010 610, 1100 570" />
        </svg>
        <motion.div className="traveling-document" style={{ x, y, rotate, scale }}>
          <div className="traveling-document__fold" />
          <span>CCS · RECORD</span>
          <b>0041</b>
          <i /><i /><i /><i />
          <em>{active >= 4 ? "INDEXED" : active >= 2 ? "DIGITIZING" : "SOURCE"}</em>
        </motion.div>
        <div className="journey-stations">
          {digitizationStages.map((stage, index) => (
            <div key={stage.title} className={active === index ? "is-active" : ""}>
              <span>{stage.number}</span><strong>{stage.title}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
