import type { Metadata } from "next";
import PageFrame from "@/components/layout/PageFrame";
import Reveal from "@/components/motion/Reveal";
import DocumentJourney from "@/components/visuals/DocumentJourney";
import InquiryForm from "@/components/forms/InquiryForm";
import { pageSections } from "@/content/site";

export const metadata: Metadata = {
  title: "Digitization Services",
  description: "Historical record scanning, case file scanning, indexing, enhancement, review, and digital delivery services from CCS.",
  alternates: { canonical: "/digitization" },
};

const services = [
  { id: "records", number: "01", title: "Historical Records", text: "Scanning and careful handling designed around the condition and significance of original public records.", tag: "[SERVICE_DETAILS]" },
  { id: "case-files", number: "02", title: "Case Files", text: "A documented workflow of Inspect → Prepare → Scan (double scan) → Review → Upload for case-file projects.", tag: "Documented workflow" },
  { id: "indexing", number: "03", title: "Record Indexing", text: "Structured metadata and indexing that make digitized records more discoverable and useful.", tag: "[INDEXING_DETAILS]" },
];

export default function DigitizationPage() {
  return (
    <PageFrame title="Digitization Services" sections={pageSections.digitization} tone="dark">
      <section className="subpage-hero subpage-hero--digitization" id="overview">
        <div>
          <span className="eyebrow eyebrow--light">Digitization services</span>
          <h1>Every record has<br /><em>a path forward.</em></h1>
        </div>
        <p>CCS helps government agencies move physical records toward accessible digital use through scanning, enhancement, review, indexing, and delivery.</p>
        <div className="hero-index"><span>Practice 01</span><i /></div>
      </section>

      <section className="journey-intro" id="process">
        <div><span className="eyebrow eyebrow--light">Scroll the record journey</span><p>The six-stage experience below is a marketing synthesis. Project workflows vary by service and scope.</p></div>
      </section>
      <DocumentJourney />

      <section className="section section--light service-ledger">
        <div className="section-heading section-heading--split">
          <div><span className="eyebrow">Service spectrum</span><h2>Different records.<br />Purposeful handling.</h2></div>
          <p>The right workflow begins with the material itself: its format, condition, organization, intended access, and approved delivery requirements.</p>
        </div>
        <div className="service-ledger__list">
          {services.map((service, index) => (
            <Reveal key={service.id}>
              <article id={service.id}>
                <span>{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><small>{service.tag}</small>
                <div className={`service-ledger__mark service-ledger__mark--${index + 1}`} aria-hidden="true"><i /><i /><i /></div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="case-workflow">
        <div className="case-workflow__intro"><span className="eyebrow eyebrow--light">Case-file workflow</span><h2>Documented.<br />Specific. Clear.</h2><p>This sequence reflects the supplied CCS presentation and is kept distinct from the broader six-stage narrative above.</p></div>
        <ol>{["Inspect", "Prepare", "Scan", "Review", "Upload"].map((step, index) => <li key={step}><span>0{index + 1}</span><strong>{step}</strong>{step === "Scan" ? <small>Double scan</small> : null}</li>)}</ol>
      </section>

      <section className="section" id="quote">
        <InquiryForm
          kind="quote"
          title="Start with the records in front of you."
          description="Describe the collection, current format, and desired outcome. Submission remains disabled until an approved secure endpoint is configured."
          options={[
            { value: "historical", label: "Historical Records Scanning" },
            { value: "case-files", label: "Case File Scanning" },
            { value: "indexing", label: "Historical Record Indexing" },
            { value: "other", label: "Other / Not sure" },
          ]}
        />
      </section>
    </PageFrame>
  );
}
