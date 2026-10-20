"use client";

import { useState } from "react";

type InquiryFormProps = {
  kind: "contact" | "quote" | "demo" | "ai";
  title: string;
  description: string;
  options?: readonly { value: string; label: string }[];
};

export default function InquiryForm({ kind, title, description, options }: InquiryFormProps) {
  const [notice, setNotice] = useState(false);
  const selectionLabel = kind === "demo" ? "Product" : kind === "quote" ? "Service" : "Workflow type";

  return (
    <div className="inquiry-panel">
      <div className="inquiry-panel__intro">
        <span className="eyebrow">Secure inquiry</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="integration-note">
          <span>Integration status</span>
          <strong>Submission endpoint required</strong>
          <p>This preview does not transmit or store entered information.</p>
        </div>
      </div>
      <form
        className="inquiry-form"
        onSubmit={(event) => {
          event.preventDefault();
          setNotice(true);
        }}
      >
        <div className="form-row">
          <label>Full name<input name="name" autoComplete="name" required /></label>
          <label>Organization / county<input name="organization" autoComplete="organization" required /></label>
        </div>
        <div className="form-row">
          <label>Work email<input type="email" name="email" autoComplete="email" required /></label>
          <label>Phone <span>(optional)</span><input type="tel" name="phone" autoComplete="tel" /></label>
        </div>
        {options ? (
          <label>{selectionLabel}
            <select name="context" defaultValue="">
              <option value="" disabled>Select an option</option>
              {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
          </label>
        ) : null}
        <label>{kind === "ai" ? "Describe the challenge" : "How can CCS help?"}
          <textarea name="message" rows={5} required />
        </label>
        <div className="form-actions">
          <button className="button button--primary" type="submit">Review integration status</button>
          <small>Protected submission, rate limiting, and email delivery must be configured server-side.</small>
        </div>
        {notice ? <p className="form-notice" role="status">Form preview only — no information was sent. Configure the approved endpoint before launch.</p> : null}
      </form>
    </div>
  );
}
