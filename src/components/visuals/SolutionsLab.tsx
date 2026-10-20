"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { aiApplications, aiModules } from "@/content/site";

export default function SolutionsLab() {
  const [selectedId, setSelectedId] = useState<string>(aiApplications[0].id);
  const selected = aiApplications.find((application) => application.id === selectedId) ?? aiApplications[0];
  const reduceMotion = useReducedMotion();

  return (
    <div className="solutions-lab">
      <div className="solutions-lab__header">
        <span><i /> Tailored Solutions Lab</span>
        <small>Choose a workflow example</small>
      </div>
      <div className="solutions-lab__tabs" role="tablist" aria-label="AI workflow examples">
        {aiApplications.map((application) => (
          <button key={application.id} type="button" role="tab" aria-selected={selected.id === application.id} onClick={() => setSelectedId(application.id)}>
            <small>{application.label}</small>{application.name}
          </button>
        ))}
      </div>
      <div className="solutions-lab__stage">
        <svg viewBox="0 0 900 560" preserveAspectRatio="none" aria-hidden="true">
          {aiModules.map((module, index) => {
            const active = selected.modules.includes(module as never);
            const angle = (index / aiModules.length) * Math.PI * 2 - Math.PI / 2;
            const x = 450 + Math.cos(angle) * 330;
            const y = 280 + Math.sin(angle) * 205;
            return <motion.path key={module} d={`M450 280 Q ${450 + (x - 450) * .35} ${280 + (y - 280) * .1} ${x} ${y}`} initial={false} animate={{ opacity: active ? 1 : .12, pathLength: active ? 1 : .7 }} transition={{ duration: reduceMotion ? 0 : .55 }} />;
          })}
        </svg>
        <div className="solutions-lab__core">
          <span>Government workflow</span>
          <strong>{selected.name}</strong>
        </div>
        {aiModules.map((module, index) => (
          <div key={module} className={`lab-node lab-node--${index + 1} ${selected.modules.includes(module as never) ? "is-active" : ""}`}>
            <span>{String(index + 1).padStart(2, "0")}</span>{module}
          </div>
        ))}
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          className="solutions-lab__detail"
          key={selected.id}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
        >
          <span>Active composition</span><strong>{selected.modules.join(" + ")}</strong><p>{selected.description}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
