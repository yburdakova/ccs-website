"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { softwareProducts } from "@/content/site";
import { ArrowIcon } from "@/components/ui/Icons";

export default function ProductShowcase() {
  const [activeId, setActiveId] = useState<string>(softwareProducts[0].id);
  const reduceMotion = useReducedMotion();
  const active = softwareProducts.find((product) => product.id === activeId) ?? softwareProducts[0];

  return (
    <div className="product-showcase">
      <div className="product-selector" role="tablist" aria-label="Software products">
        {softwareProducts.map((product) => (
          <button
            key={product.id}
            id={product.id}
            type="button"
            role="tab"
            aria-selected={active.id === product.id}
            aria-controls="product-display"
            onClick={() => setActiveId(product.id)}
          >
            <span>{product.number}</span>
            <strong>{product.name}</strong>
            <small>{product.status}</small>
          </button>
        ))}
      </div>
      <div className="product-display" id="product-display" role="tabpanel">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            className="product-display__content"
            key={active.id}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: .36 }}
          >
            <span className="status-pill">{active.status}</span>
            <p className="product-display__number">{active.number}</p>
            <h2>{active.name}</h2>
            <p className="placeholder-copy">{active.description}</p>
            <ul>{active.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            <a className="text-link" href="#demo">{active.action}<ArrowIcon /></a>
          </motion.div>
        </AnimatePresence>
        <div className="ui-preview" aria-label={`Placeholder for ${active.name} interface image`}>
          <div className="ui-preview__bar"><i /><i /><i /><span>CCS / {active.name}</span></div>
          <div className="ui-preview__body">
            <aside><i /><i /><i /><i /></aside>
            <div className="ui-preview__canvas">
              <span className="placeholder-label">Approved UI asset required</span>
              <strong>{active.previewLabel}</strong>
              <div className="ui-preview__search" />
              <div className="ui-preview__rows"><i /><i /><i /><i /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
