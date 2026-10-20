import type { Metadata } from "next";
import Link from "next/link";
import PageFrame from "@/components/layout/PageFrame";
import ProductShowcase from "@/components/visuals/ProductShowcase";
import InquiryForm from "@/components/forms/InquiryForm";
import { ArrowIcon } from "@/components/ui/Icons";
import { pageSections, softwareProducts } from "@/content/site";

export const metadata: Metadata = {
  title: "Software Solutions",
  description: "Purpose-built records software for government offices, including land records, secure remote access, marriage applications, and probate management in development.",
  alternates: { canonical: "/software" },
};

export default function SoftwarePage() {
  return (
    <PageFrame title="Software Solutions" sections={pageSections.software}>
      <section className="subpage-hero subpage-hero--software" id="overview">
        <div>
          <span className="eyebrow">Software solutions</span>
          <h1>Records at work.<br /><em>Service in motion.</em></h1>
        </div>
        <p>Purpose-built software shaped around government records and the people responsible for managing, accessing, and serving them.</p>
        <div className="software-orbit" aria-hidden="true"><span>CCS</span><i /><i /><i /><i /></div>
      </section>

      <section className="section product-section">
        <div className="section-heading section-heading--split">
          <div><span className="eyebrow">Product sectors</span><h2>Four focused<br />work environments.</h2></div>
          <p>Select a solution to explore its position in the CCS software portfolio. Product descriptions and interface imagery remain visibly flagged until approved.</p>
        </div>
        <ProductShowcase />
      </section>

      <section className="software-crosslink">
        <span className="eyebrow eyebrow--light">Intelligence across the portfolio</span>
        <h2>Indexing can become<br /><em>more than a field.</em></h2>
        <p>AI Indexing belongs within CCS&apos;s broader tailored automation practice — connected to human validation, document context, and the surrounding workflow.</p>
        <Link className="button button--light" href="/ai-automation">Explore AI & Automation <ArrowIcon /></Link>
        <div className="software-crosslink__signal" aria-hidden="true"><i /><i /><i /><i /></div>
      </section>

      <section className="section" id="demo">
        <InquiryForm
          kind="demo"
          title="See the right solution in context."
          description="Choose a product and tell CCS about your office. No request is transmitted until an approved demo endpoint is configured."
          options={softwareProducts.map((product) => ({ value: product.id, label: product.name }))}
        />
      </section>
    </PageFrame>
  );
}
