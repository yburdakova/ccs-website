import type { Metadata } from "next";
import Link from "next/link";
import PageFrame from "@/components/layout/PageFrame";
import Reveal from "@/components/motion/Reveal";
import InquiryForm from "@/components/forms/InquiryForm";
import ArchiveHero from "@/components/visuals/ArchiveHero";
import { ArrowIcon } from "@/components/ui/Icons";
import { pageSections, pillars } from "@/content/site";

export const metadata: Metadata = {
  title: "Government Records, Software & Intelligent Workflows",
  description: "CCS brings digitization, government records software, and tailored AI and automation into one trusted technology partner.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <PageFrame title="CCS / Home" sections={pageSections.home}>
      <section className="hero hero--home" id="overview">
        <div className="hero__copy">
          <Reveal><span className="eyebrow">Government technology · thoughtfully advanced</span></Reveal>
          <Reveal delay={.08}><h1>Preserving the Past.<br /><em>Powering the Future.</em></h1></Reveal>
          <Reveal delay={.16}><p className="hero__lede">CCS brings physical records, purpose-built software, and intelligent automation together for the public-sector workflows that matter.</p></Reveal>
          <Reveal className="hero__actions" delay={.24}>
            <a className="button button--primary" href="#what-we-do">Explore our solutions <ArrowIcon /></a>
            <a className="button button--ghost" href="#contact">Contact CCS</a>
          </Reveal>
          <Reveal className="hero__footnote" delay={.32}>
            <span>01</span><p>Three disciplines.<br />One continuous record journey.</p>
          </Reveal>
        </div>
        <Reveal className="hero__visual" delay={.12}><ArchiveHero /></Reveal>
      </section>

      <section className="section section--pillars" id="what-we-do">
        <div className="section-heading section-heading--split">
          <div><span className="eyebrow">What we do</span><h2>From fragile source<br />to living system.</h2></div>
          <p>Three focused practices connect the full lifecycle of public information — how it is preserved, managed, found, and put to work.</p>
        </div>
        <div className="pillar-composition">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} className={`pillar pillar--${index + 1}`} delay={index * .08}>
              <Link href={pillar.href}>
                <div className={`pillar__visual pillar__visual--${pillar.visual}`} aria-hidden="true"><i /><i /><i /><i /></div>
                <span className="pillar__number">{pillar.number}</span>
                <small>{pillar.eyebrow}</small>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
                <span className="text-link">Explore practice <ArrowIcon /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--dark principles" id="why-ccs">
        <div className="section-heading section-heading--split">
          <div><span className="eyebrow eyebrow--light">Why CCS</span><h2>Progress without<br /><em>losing context.</em></h2></div>
          <p>Government records require more than generic technology. CCS approaches each engagement with attention to source material, operational reality, and responsible human review.</p>
        </div>
        <div className="principle-list">
          {[
            ["01", "Records first", "Start with the condition, structure, and purpose of the information — not a preselected tool."],
            ["02", "Human validation", "Use technology to support informed review, not to hide uncertainty or replace accountable decisions."],
            ["03", "Built for continuity", "Connect preservation and access with systems designed around real government workflows."],
            ["04", "Tailored progress", "Apply modern engineering where it creates a clear, useful path forward for the agency."],
          ].map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section evidence" id="partnerships">
        <div className="section-heading section-heading--split">
          <div><span className="eyebrow">Trusted partnerships</span><h2>Proof belongs<br />to the record.</h2></div>
          <p>Client evidence will appear here only after names, marks, quotations, and usage rights are approved.</p>
        </div>
        <div className="evidence-grid">
          <div className="evidence-placeholder evidence-placeholder--wide"><span>Approved client marks</span><strong>[APPROVED_CLIENT_LOGOS]</strong></div>
          <div className="evidence-placeholder"><span>Verified customer voice</span><strong>[VERIFIED_TESTIMONIALS]</strong></div>
          <div className="evidence-placeholder"><span>Documented outcomes</span><strong>[CASE_STUDIES]</strong></div>
        </div>
      </section>

      <section className="legacy-bridge">
        <div className="legacy-bridge__paper"><span>Past</span><i /><i /><i /></div>
        <div className="legacy-bridge__copy"><span className="eyebrow eyebrow--light">Legacy meets innovation</span><h2>Technology changes.<br /><em>Trust endures.</em></h2><p>See how a history of preserving records points toward today&apos;s intelligent government systems.</p><Link className="button button--light" href="/about">Explore the CCS story <ArrowIcon /></Link></div>
        <div className="legacy-bridge__network" aria-hidden="true"><i /><i /><i /><i /><i /></div>
      </section>

      <section className="section" id="contact">
        <InquiryForm kind="contact" title="What could work better for your office?" description="Share the challenge. Once an approved secure endpoint is connected, this form will route inquiries to the CCS team." />
      </section>
    </PageFrame>
  );
}
