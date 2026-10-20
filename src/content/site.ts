export type NavItem = {
  label: string;
  href: string;
  shortLabel: string;
};

export type SectionLink = {
  label: string;
  id: string;
};

export const brand = {
  name: "Courthouse Computer Systems",
  shortName: "CCS",
  proposition: "A Legacy of Trust. A Future of Innovation.",
};

export const externalLinks = {
  clientPortal: null,
  employeePortal: null,
  supportDesk: null,
  contactEmail: null,
} as const;

export const globalNavigation: NavItem[] = [
  { label: "Home", shortLabel: "Home", href: "/" },
  { label: "Digitization Services", shortLabel: "Digitize", href: "/digitization" },
  { label: "Software Solutions", shortLabel: "Software", href: "/software" },
  { label: "Custom AI & Automation", shortLabel: "AI", href: "/ai-automation" },
  { label: "About CCS", shortLabel: "About", href: "/about" },
];

export const pageSections: Record<string, SectionLink[]> = {
  home: [
    { label: "Overview", id: "overview" },
    { label: "What We Do", id: "what-we-do" },
    { label: "Why CCS", id: "why-ccs" },
    { label: "Partnerships", id: "partnerships" },
    { label: "Contact", id: "contact" },
  ],
  digitization: [
    { label: "Overview", id: "overview" },
    { label: "Records", id: "records" },
    { label: "Case Files", id: "case-files" },
    { label: "Indexing", id: "indexing" },
    { label: "Our Process", id: "process" },
    { label: "Get a Quote", id: "quote" },
  ],
  software: [
    { label: "Overview", id: "overview" },
    { label: "Land Records", id: "land-records" },
    { label: "SRA", id: "sra" },
    { label: "Marriage", id: "marriage" },
    { label: "Probate", id: "probate" },
    { label: "Request Demo", id: "demo" },
  ],
  ai: [
    { label: "Overview", id: "overview" },
    { label: "Our Approach", id: "approach" },
    { label: "Applications", id: "applications" },
    { label: "Capabilities", id: "capabilities" },
    { label: "Let's Build", id: "build" },
  ],
  about: [
    { label: "Our Legacy", id: "overview" },
    { label: "Timeline", id: "timeline" },
    { label: "Partnerships", id: "partnerships" },
    { label: "Our People", id: "people" },
    { label: "Today & Tomorrow", id: "tomorrow" },
  ],
};

export const pillars = [
  {
    number: "01",
    title: "Digitization Services",
    eyebrow: "Preserve · Enhance · Discover",
    description:
      "Careful conversion of historical records and active case files into accessible, structured digital information.",
    href: "/digitization",
    visual: "document",
  },
  {
    number: "02",
    title: "Software Solutions",
    eyebrow: "Manage · Access · Serve",
    description:
      "Purpose-built records software for the daily realities of government offices and the communities they serve.",
    href: "/software",
    visual: "interface",
  },
  {
    number: "03",
    title: "Custom AI & Automation",
    eyebrow: "Understand · Design · Validate",
    description:
      "Tailored intelligent tools that address specific public-sector document, search, extraction, and workflow challenges.",
    href: "/ai-automation",
    visual: "network",
  },
] as const;

export const digitizationStages = [
  { number: "01", title: "Inspect", detail: "Review source records for integrity, order, and completeness." },
  { number: "02", title: "Prepare", detail: "Carefully prepare physical materials for consistent capture." },
  { number: "03", title: "Scan", detail: "Convert physical pages into high-quality digital records." },
  { number: "04", title: "Review & Enhance", detail: "Perform visual review and image-by-image enhancement where needed." },
  { number: "05", title: "Index", detail: "Add structured metadata that supports accurate discovery." },
  { number: "06", title: "Deliver", detail: "Prepare accessible digital records for an approved delivery environment." },
] as const;

export const softwareProducts = [
  {
    id: "land-records",
    number: "01",
    name: "Land Record Management",
    status: "Established solution",
    description: "[LAND_RECORDS_DESCRIPTION — approved product copy required]",
    features: ["[FEATURE_01]", "[FEATURE_02]", "[FEATURE_03]"],
    previewLabel: "LAND_RECORDS_UI_IMAGE REQUIRED",
    action: "Request a Demo",
  },
  {
    id: "sra",
    number: "02",
    name: "Secure Remote Access",
    status: "Established solution",
    description: "[SRA_DESCRIPTION — approved product copy required]",
    features: ["[FEATURE_01]", "[FEATURE_02]", "[FEATURE_03]"],
    previewLabel: "SRA_UI_IMAGE REQUIRED",
    action: "Request a Demo",
  },
  {
    id: "marriage",
    number: "03",
    name: "Online Marriage Application",
    status: "Established solution",
    description: "[MARRIAGE_DESCRIPTION — approved product copy required]",
    features: ["[FEATURE_01]", "[FEATURE_02]", "[FEATURE_03]"],
    previewLabel: "MARRIAGE_UI_IMAGE REQUIRED",
    action: "Request a Demo",
  },
  {
    id: "probate",
    number: "04",
    name: "Probate Management",
    status: "In development",
    description: "[PROBATE_DESCRIPTION — approved roadmap copy required]",
    features: ["[PLANNED_FEATURE_01]", "[PLANNED_FEATURE_02]", "[PLANNED_FEATURE_03]"],
    previewLabel: "PROBATE_PREVIEW REQUIRED",
    action: "Request Information",
  },
] as const;

export const aiModules = [
  "OCR",
  "AI Indexing",
  "Search",
  "Validation",
  "Pattern Recognition",
  "Workflow Automation",
  "Data Extraction",
] as const;

export const aiApplications = [
  {
    id: "findgenie",
    name: "FindGenie",
    label: "Document discovery",
    description: "[FINDGENIE_APPROVED_COPY — public product wording required]",
    modules: ["OCR", "Search", "Workflow Automation"],
  },
  {
    id: "courtney",
    name: "Courtney",
    label: "Historical records",
    description: "[COURTNEY_APPROVED_COPY — public product wording required]",
    modules: ["OCR", "AI Indexing", "Validation", "Data Extraction"],
  },
  {
    id: "redaction",
    name: "Automated Redaction",
    label: "Sensitive information",
    description: "[REDACTION_APPROVED_COPY — public product wording required]",
    modules: ["Pattern Recognition", "Validation", "Workflow Automation"],
  },
  {
    id: "custom",
    name: "Your Custom Solution",
    label: "A unique workflow",
    description: "Bring the process that slows your team down. CCS can explore a purpose-built approach with you.",
    modules: ["OCR", "Search", "Validation", "Workflow Automation", "Data Extraction"],
  },
] as const;

export const legacyMilestones = [
  {
    year: "1905",
    title: "Bookbinding roots",
    heritage: "E.H. Roederer Bookbindery family roots.",
    trust: "[PRIMARY SOURCE AND RIGHTS-CLEARED ARCHIVAL MATERIAL REQUIRED]",
    verified: false,
  },
  {
    year: "1970s",
    title: "Preservation evolves",
    heritage: "A transition toward microfilm and preservation technology.",
    trust: "[VERIFIED CLIENT OR PROJECT EVIDENCE REQUIRED]",
    verified: false,
  },
  {
    year: "1981",
    title: "CCS takes shape",
    heritage: "Courthouse Computer Systems is provisionally recorded as founded in 1981.",
    trust: "[FOUNDING DOCUMENTATION AND APPROVED COMPANY HISTORY REQUIRED]",
    verified: false,
  },
  {
    year: "2000s+",
    title: "From pages to systems",
    heritage: "Government records services expand into software and digital access.",
    trust: "[VERIFIED MILESTONES AND PARTNERSHIP STORIES REQUIRED]",
    verified: false,
  },
  {
    year: "Today",
    title: "Intelligence with context",
    heritage: "CCS applies modern search, indexing, redaction, and automation approaches to government workflows.",
    trust: "Capabilities are supported by supplied CCS materials; public product copy still requires approval.",
    verified: true,
  },
] as const;

export const searchIndex = [
  { title: "Digitization Services", detail: "Scanning, enhancement, indexing and delivery", href: "/digitization" },
  { title: "Land Record Management", detail: "Software solution", href: "/software#land-records" },
  { title: "Secure Remote Access", detail: "Software solution", href: "/software#sra" },
  { title: "Online Marriage Application", detail: "Software solution", href: "/software#marriage" },
  { title: "Probate Management", detail: "In development", href: "/software#probate" },
  { title: "Custom AI & Automation", detail: "Tailored intelligent workflows", href: "/ai-automation" },
  { title: "About CCS", detail: "Legacy and future", href: "/about" },
] as const;
