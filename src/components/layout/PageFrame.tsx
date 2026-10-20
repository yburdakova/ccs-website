import type { SectionLink } from "@/content/site";
import LocalNav from "./LocalNav";

export default function PageFrame({
  title,
  sections,
  children,
  tone = "light",
}: {
  title: string;
  sections: SectionLink[];
  children: React.ReactNode;
  tone?: "light" | "dark" | "paper";
}) {
  return (
    <div className={`page-frame page-frame--${tone}`}>
      <LocalNav title={title} sections={sections} />
      {children}
    </div>
  );
}
