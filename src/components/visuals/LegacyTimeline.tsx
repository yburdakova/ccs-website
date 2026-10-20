"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { legacyMilestones } from "@/content/site";

export default function LegacyTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start .8", "end .3"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="legacy-timeline" ref={ref}>
      <div className="legacy-timeline__line"><motion.i style={{ height }} /></div>
      <div className="legacy-timeline__labels"><span>Our heritage</span><span>Their trust</span></div>
      {legacyMilestones.map((milestone, index) => (
        <motion.article
          key={milestone.year}
          className={index === legacyMilestones.length - 1 ? "is-future" : ""}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .4 }}
          transition={{ duration: .7 }}
        >
          <div className="timeline-year"><span>{milestone.year}</span><i /></div>
          <div className="timeline-track timeline-track--heritage">
            <small>Our heritage</small><h3>{milestone.title}</h3><p>{milestone.heritage}</p>
            {!milestone.verified ? <span className="verification-chip">Provisional · verification required</span> : null}
          </div>
          <div className="timeline-track timeline-track--trust">
            <small>Their trust</small><p>{milestone.trust}</p>
          </div>
          <div className="timeline-artifact" aria-label="Placeholder for an authentic historical asset">
            <span>{index === legacyMilestones.length - 1 ? "SYSTEM VIEW" : "ARCHIVAL ASSET"}</span>
            <strong>{index === legacyMilestones.length - 1 ? "MODERN CCS VISUAL REQUIRED" : "AUTHENTIC MATERIAL REQUIRED"}</strong>
            <i /><i /><i />
          </div>
        </motion.article>
      ))}
    </div>
  );
}
