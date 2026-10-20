import type { Metadata } from "next";
import Link from "next/link";
import PageFrame from "@/components/layout/PageFrame";
import LegacyTimeline from "@/components/visuals/LegacyTimeline";
import { ArrowIcon } from "@/components/ui/Icons";
import { pageSections } from "@/content/site";

export const metadata: Metadata = {
  title: "About CCS",
  description: "A provisional living history of Courthouse Computer Systems, from preservation roots toward modern government records technology.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageFrame title="About CCS" sections={pageSections.about} tone="paper">
      <section className="subpage-hero subpage-hero--about" id="overview">
        <div>
          <span className="eyebrow">A living legacy</span>
          <h1>A legacy of trust.<br /><em>A future of innovation.</em></h1>
        </div>
        <p>This history is presented as a working editorial record. Provisional milestones remain clearly marked until primary sources and publication rights are approved.</p>
        <div className="archival-seal" aria-hidden="true"><span>CCS</span><small>PAST / PRESENT / NEXT</small></div>
      </section>

      <section className="archive-note">
        <span>Editorial integrity note</span>
        <p>No synthetic image is presented as historical evidence. Every archival slot below awaits authentic, rights-cleared material with provenance.</p>
      </section>

      <section className="section timeline-section" id="timeline">
        <div className="section-heading section-heading--split">
          <div><span className="eyebrow">Living legacy timeline</span><h2>Two stories.<br />One line of trust.</h2></div>
          <p>Our Heritage follows how the company&apos;s technology changed. Their Trust is reserved for verified public-sector relationships and evidence.</p>
        </div>
        <LegacyTimeline />
      </section>

      <section className="section evidence evidence--paper" id="partnerships">
        <div className="section-heading section-heading--split">
          <div><span className="eyebrow">Trusted partnerships</span><h2>The archive must<br />support the story.</h2></div>
          <p>Names, contracts, dated testimonials, and public records will be connected to milestones only after verification and usage approval.</p>
        </div>
        <div className="evidence-grid">
          <div className="evidence-placeholder evidence-placeholder--wide"><span>County and government evidence</span><strong>[VERIFIED_CLIENT_STORIES]</strong></div>
          <div className="evidence-placeholder"><span>Rights and provenance</span><strong>[IMAGE_RIGHTS_AND_CREDITS]</strong></div>
          <div className="evidence-placeholder"><span>Original materials</span><strong>[ARCHIVAL_ASSET_REGISTRY]</strong></div>
        </div>
      </section>

      <section className="people-placeholder" id="people">
        <div><span className="eyebrow eyebrow--light">Our people</span><h2>A family story needs<br /><em>real faces.</em></h2><p>Portraits and biographies will appear here after selection, consent, and copy approval.</p></div>
        <div className="people-placeholder__frames"><i /><i /><i /></div>
        <strong>[APPROVED_EMPLOYEE_PORTRAITS]</strong>
      </section>

      <section className="future-finale" id="tomorrow">
        <div className="future-finale__paper" aria-hidden="true"><i /><i /><i /></div>
        <div className="future-finale__copy"><span className="eyebrow eyebrow--light">Today & tomorrow</span><h2>Rooted in history.<br /><em>Driven by innovation.</em></h2><p>[TODAY_AI_AND_GOVERNMENT_COPY — approved public narrative required]</p><Link className="button button--light" href="/ai-automation">See what CCS is building toward <ArrowIcon /></Link></div>
        <div className="future-finale__nodes" aria-hidden="true">{Array.from({ length: 9 }).map((_, index) => <i key={index} />)}</div>
      </section>
    </PageFrame>
  );
}
