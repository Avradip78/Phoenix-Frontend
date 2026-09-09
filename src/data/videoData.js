export const VIDEO_CATALOG = [
  {
    id: "company-overview",
    title: "PhoenixInsights: From Data to Governed Business Action",
    subtitle: "How enterprise workflows transform into high-velocity, human-governed AI operations.",
    duration: "0:48",
    category: "Company Overview",
    poster: "/phoenixinsights-logo.png",
    localVideoSrc: null, // Drop your local mp4/webm asset into public/videos/company-overview.mp4 to enable native video playback
    workflowStages: [
      { time: "0:00", label: "Fragmented Legacy Process", desc: "Disconnected spreadsheets, manual copy-pasting, and delayed reporting." },
      { time: "0:08", label: "Data Ingestion & Normalization", desc: "Automated aggregation from ERP, CRM, databases, and enterprise document stores." },
      { time: "0:16", label: "AI Intelligence & Reasoning", desc: "Specialized models analyze patterns, validate schemas, and formulate drafts." },
      { time: "0:25", label: "Multi-Agent Coordination", desc: "Domain agents collaborate to execute bounded sub-tasks." },
      { time: "0:34", label: "Mandatory Human Approval", desc: "High-stakes decisions and system mutations pause for explicit managerial sign-off." },
      { time: "0:41", label: "Governed System Action", desc: "Atomic API mutations dispatched to enterprise business systems." },
      { time: "0:48", label: "Telemetry & Measurement", desc: "Immutable audit logs verify cycle time, accuracy, and operational health." }
    ],
    captions: [
      { start: 0, end: 7, text: "Every day, high-value business workflows lose time and accuracy to manual bottlenecks." },
      { start: 8, end: 15, text: "PhoenixInsights connects your operational data directly into specialized AI intelligence." },
      { start: 16, end: 24, text: "Intelligent agents parse documents, detect anomalies, and prepare structured outputs." },
      { start: 25, end: 33, text: "Autonomous where safe, but strictly bounded by deterministic corporate policies." },
      { start: 34, end: 40, text: "Crucially, human managers retain explicit sign-off authority on every sensitive decision." },
      { start: 41, end: 48, text: "From Data to Decisions to Governed Action at scale." }
    ]
  },
  {
    id: "ai-workforce-overview",
    title: "The AI Workforce Operating System",
    subtitle: "A central control plane coordinating domain-specific agent pools.",
    duration: "0:52",
    category: "AI Workforce",
    localVideoSrc: null
  },
  {
    id: "finance-workflow",
    title: "Accounts Payable & PO Reconciliation",
    subtitle: "Autonomous document understanding and 3-way matching with approval gates.",
    duration: "0:44",
    category: "Finance Intelligence",
    localVideoSrc: null
  },
  {
    id: "sales-workflow",
    title: "Lead Intelligence & Pipeline Staging",
    subtitle: "Firmographic enrichment and personalized outreach with sales rep review.",
    duration: "0:39",
    category: "Sales Intelligence",
    localVideoSrc: null
  },
  {
    id: "operations-workflow",
    title: "Real-Time Supply Chain Exception Detection",
    subtitle: "IoT event telemetry with automated diversion and supervisor authorization.",
    duration: "0:46",
    category: "Operations Intelligence",
    localVideoSrc: null
  },
  {
    id: "decision-intelligence",
    title: "Executive Decision Support & Scenario Modeling",
    subtitle: "Multi-cohort churn diagnosis and probabilistic revenue simulation.",
    duration: "0:55",
    category: "Decision Intelligence",
    localVideoSrc: null
  }
];

export function getFeaturedVideo() {
  return VIDEO_CATALOG[0];
}
