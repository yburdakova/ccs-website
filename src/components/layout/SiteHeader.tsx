import Image from "next/image";
import Link from "next/link";
import SearchPanel from "./SearchPanel";

function PortalButton({ children, solid = false }: { children: React.ReactNode; solid?: boolean }) {
  return (
    <span className={`portal-button ${solid ? "portal-button--solid" : ""}`} aria-disabled="true">
      {children}
    </span>
  );
}

export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="site-header__inner">
        <Link className="brand-mark" href="/" aria-label="Courthouse Computer Systems home">
          <Image src="/CCSLogo.png" width={366} height={104} priority alt="Courthouse Computer Systems" />
        </Link>
        <div className="site-header__actions">
          <SearchPanel />
          <PortalButton solid>Client Portal</PortalButton>
          <PortalButton>Employee Portal</PortalButton>
        </div>
      </div>
    </header>
  );
}
