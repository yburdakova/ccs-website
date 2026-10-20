import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ArrowIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

export function SearchIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" /></svg>;
}

export function HomeGlyph(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><path d="m4 10 8-6 8 6v9H4z" /><path d="M9 19v-6h6v6" /></svg>;
}

export function DocumentGlyph(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v5h4M9 12h6M9 16h6" /></svg>;
}

export function SoftwareGlyph(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M7 6.5h.01M10 6.5h.01M8 14h3M14 14h2M8 17h8" /></svg>;
}

export function NetworkGlyph(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><circle cx="12" cy="5" r="2.3" /><circle cx="5" cy="18" r="2.3" /><circle cx="19" cy="18" r="2.3" /><path d="m10.9 7-4.7 8.9M13.1 7l4.7 8.9M7.3 18h9.4" /></svg>;
}

export function LegacyGlyph(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2M5.7 5.7 4 4" /></svg>;
}

export function HeadsetGlyph(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><path d="M4 13v-1a8 8 0 0 1 16 0v1M4 13h3v6H5a1 1 0 0 1-1-1zM20 13h-3v6h2a1 1 0 0 0 1-1zM17 19c-.8 1.3-2.4 2-5 2" /></svg>;
}

export function CloseIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><path d="M5 5l14 14M19 5 5 19" /></svg>;
}
