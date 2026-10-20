# CCS website content and integration register

This file tracks every unresolved item that must be verified or supplied before public launch. Bracketed placeholder copy is intentionally visible in the website until approval.

| Item | Required source / approval | Status | Appears in |
| --- | --- | --- | --- |
| `CLIENT_PORTAL_URL` | Confirmed external application URL | Required | Global header |
| `EMPLOYEE_PORTAL_URL` | Confirmed external application URL | Required | Global header |
| `SUPPORT_DESK_URL` | Confirmed external support URL | Required | Floating support control |
| `VERIFIED_CONTACT_INFO` | Approved company address and phone | Required | Footer |
| `CONTACT_EMAIL` | Approved public inbox | Required | Footer and forms |
| `CONTACT_API_ENDPOINT` | Secured, rate-limited backend endpoint | Required | Contact form |
| `DEMO_FORM_ENDPOINT` | Secured, rate-limited backend endpoint | Required | Demo form |
| `QUOTE_FORM_ENDPOINT` | Secured, rate-limited backend endpoint | Required | Quote form |
| `AI_INQUIRY_ENDPOINT` | Secured, rate-limited backend endpoint | Required | AI challenge form |
| `APPROVED_CLIENT_LOGOS` | Rights-cleared logo files and usage approval | Required | Home |
| `VERIFIED_TESTIMONIALS` | Approved quotations with attribution and dates | Required | Home |
| `CASE_STUDIES` | Verified outcomes and publication approval | Required | Home |
| Product descriptions and features | Current approved product sheets | Required | Software Solutions |
| Product UI images | Current rights-cleared screenshots | Required | Software Solutions |
| FindGenie / Courtney / Redaction copy | Public-content approval | Required | AI & Automation |
| Historic milestones | Primary-source company records | Required | About CCS |
| Archival imagery | Original files, provenance, captions, usage rights | Required | About CCS |
| Client history | Contracts, public records, or approved customer stories | Required | About CCS |
| Employee portraits | Selected photos, consent, biographies | Required | About CCS |
| `TODAY_AI_AND_GOVERNMENT_COPY` | Approved corporate narrative | Required | About CCS finale |
| Legal and privacy URLs | Approved legal pages | Required | Footer |
| `NEXT_PUBLIC_SITE_URL` | Production origin for canonical and sitemap URLs | Required for deployment | SEO |

## Integration requirements

- Forms must use server-side schema validation, spam protection, rate limiting, and an approved email or CRM transport.
- Do not put SMTP, API, or portal credentials in frontend environment variables.
- Do not enable attachment upload until authenticated object storage, file-size/type validation, malware scanning, retention policy, and privacy review are complete.
- Run a content audit and remove all unresolved bracketed placeholders before public launch.
