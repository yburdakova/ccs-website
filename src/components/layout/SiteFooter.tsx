import Link from "next/link";
import { globalNavigation } from "@/content/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__lead">
        <span className="eyebrow eyebrow--light">A conversation can start the next chapter.</span>
        <h2>Bring us the records challenge that matters to your office.</h2>
        <Link className="button button--light" href="/#contact">Start a conversation</Link>
      </div>
      <div className="site-footer__grid">
        <div>
          <strong>Courthouse Computer Systems</strong>
          <p>Technology for government records, access, and intelligent workflows.</p>
        </div>
        <nav aria-label="Footer navigation">
          {globalNavigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className="site-footer__pending">
          <span>Contact</span>
          <p>[VERIFIED_CONTACT_INFO]</p>
          <p>[CONTACT_EMAIL]</p>
        </div>
      </div>
      <div className="site-footer__legal">
        <span>© {new Date().getFullYear()} Courthouse Computer Systems</span>
        <span>Legal and privacy links pending approval</span>
      </div>
    </footer>
  );
}
