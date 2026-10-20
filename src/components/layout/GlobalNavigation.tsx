"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { globalNavigation } from "@/content/site";
import { DocumentGlyph, HomeGlyph, LegacyGlyph, NetworkGlyph, SoftwareGlyph } from "@/components/ui/Icons";

const icons = [HomeGlyph, DocumentGlyph, SoftwareGlyph, NetworkGlyph, LegacyGlyph];

export default function GlobalNavigation() {
  const pathname = usePathname();

  return (
    <nav className="global-rail" aria-label="Primary navigation">
      <div className="global-rail__track" aria-hidden="true" />
      {globalNavigation.map((item, index) => {
        const Icon = icons[index];
        const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className="global-rail__link"
            aria-current={active ? "page" : undefined}
            data-label={item.label}
          >
            <Icon />
            <span>{item.shortLabel}</span>
          </Link>
        );
      })}
    </nav>
  );
}
