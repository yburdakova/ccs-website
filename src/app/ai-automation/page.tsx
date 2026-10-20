import type { Metadata } from "next";
import PageFrame from "@/components/layout/PageFrame";
import SolutionsLab from "@/components/visuals/SolutionsLab";
import InquiryForm from "@/components/forms/InquiryForm";
import { pageSections } from "@/content/site";

export const metadata: Metadata = {
  title: "Custom AI & Automation",
  description: "Purpose-built intelligent tools for specific government document, search, extraction, validation, and workflow challenges.",
  alternates: { canonical: "/ai-automation" },
};

export default function AiAutomationPage() {
  return (
    <PageFrame title="Custom AI & Automation" sections={pageSections.ai} tone="dark">
      <section className="subpage-hero subpage-hero--ai" id="overview">
        <div>
          <span className="eyebrow eyebrow--light">Custom AI & Automation</span>
          <h1>Your challenge.<br /><em>Our intelligence.</em></h1>
        </div>
        <p>CCS explores purpose-built intelligent tools for the specific records, decisions, and workflows that shape a government office — not AI for its own sake.</p>
        <div className="ai-pulse" aria-hidden="true"><i /><i /><i /><i /><span>HUMAN<br />REVIEW</span></div>
      </section>

      <section className="section section--dark approach" id="approach">
        <div className="section-heading section-heading--split">
          <div><span className="eyebrow eyebrow--light">Our approach</span><h2>Understand first.<br /><em>Compose second.</em></h2></div>
          <p>The workflow determines the tools. CCS can combine focused capabilities into a solution shaped around the records, review points, and desired outcome.</p>
        </div>
        <ol className="approach-flow">
          {[
            ["01", "Frame the challenge", "Map the source records, current process, and accountable decisions."],
            ["02", "Compose the modules", "Select only the OCR, extraction, search, validation, or automation pieces that fit."],
            ["03", "Keep people in view", "Design explicit human review and validation into the operating model."],
            ["04", "Integrate responsibly", "Connect outputs to an approved delivery or software workflow."],
          ].map(([number, title, text]) => <li key={number}><span>{number}</span><strong>{title}</strong><p>{text}</p></li>)}
        </ol>
      </section>

      <section className="section lab-section" id="applications">
        <div className="section-heading section-heading--split">
          <div><span className="eyebrow">Applications</span><h2>A lab for the<br />real workflow.</h2></div>
          <p>Choose an example to see how the module composition changes. Product wording marked in brackets still requires public-content approval.</p>
        </div>
        <SolutionsLab />
      </section>

      <section className="capability-ribbon" id="capabilities">
        <span>OCR</span><i /> <span>AI Indexing</span><i /> <span>Search</span><i /> <span>Validation</span><i /> <span>Pattern Recognition</span><i /> <span>Workflow Automation</span><i /> <span>Data Extraction</span>
      </section>

      <section className="section" id="build">
        <InquiryForm
          kind="ai"
          title="Bring the problem, not a product list."
          description="Describe the workflow, records, and points of friction. Attachments are intentionally omitted until secure upload infrastructure exists."
          options={[
            { value: "documents", label: "Document processing" },
            { value: "search", label: "Search and discovery" },
            { value: "extraction", label: "Extraction and indexing" },
            { value: "redaction", label: "Sensitive information / redaction" },
            { value: "workflow", label: "Workflow automation" },
            { value: "other", label: "Other / not sure" },
          ]}
        />
      </section>
    </PageFrame>
  );
}
