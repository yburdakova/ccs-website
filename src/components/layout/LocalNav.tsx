"use client";

import { useEffect, useState } from "react";
import type { SectionLink } from "@/content/site";

export default function LocalNav({ title, sections }: { title: string; sections: SectionLink[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const elements = sections.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-22% 0px -62% 0px", threshold: [0, 0.25, 0.6] },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="local-nav" aria-label={`${title} sections`}>
      <div className="local-nav__inner">
        <div className="local-nav__links">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} aria-current={active === section.id ? "location" : undefined}>
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
