export const salesDemo = {
  id: "sales",
  name: "AI Sales Workflow",
  domain: "Sales & Business Development",
  badge: "LEAD INTELLIGENCE & PIPELINE ENGINE",
  scenario: "Inbound Prospect Qualification & Account Research",
  shortDesc: "Demonstrates automated inbound lead enrichment, firmographic qualification, buying intent scoring, CRM staging, and human account executive sign-off.",
  accent: "teal",
  sampleProspect: {
    leadName: "Sarah Jenkins",
    title: "Vice President of Operational Systems",
    company: "Nexus Health Systems Corp",
    workEmail: "s.jenkins@nexushealthsys.com",
    industry: "Healthcare Networks & Diagnostics",
    employeeCount: "450",
    inboundNote: "Evaluating solutions to connect our fragmented clinic scheduling and clinical billing workflows.",
    firmographics: {
      annualRevenue: "$85M - $100M",
      techStack: "Salesforce Health Cloud, Epic EHR, Workday",
      growthSignal: "Opened 4 regional diagnostic centers in Q2"
    }
  },
  steps: [
    {
      stepNumber: "01",
      name: "Lead Arrives",
      agent: "Inbound Capture Agent",
      system: "Web Form / Marketing Webhook",
      desc: "Inbound form submission received from enterprise prospect.",
      reasoning: "Inbound lead event triggered from website intake. Validating business domain '@nexushealthsys.com' and MX record authenticity.",
      extractedFields: { "Contact": "Sarah Jenkins", "Title": "VP of Operational Systems", "Domain": "nexushealthsys.com" },
      isGate: false
    },
    {
      stepNumber: "02",
      name: "Lead Enrichment",
      agent: "Data Enrichment Agent",
      system: "Corporate Intelligence DB & APIs",
      desc: "Fetches corporate headcount, funding, executive leadership, and tech stack.",
      reasoning: "Querying firmographic APIs. Headcount: 450 employees. HQ: Chicago, IL. Public disclosures confirm active digital workflow modernization initiative.",
      extractedFields: { "Headcount": "450 employees", "Revenue Range": "$85M - $100M", "Key Systems": "Salesforce, Epic, Workday" },
      isGate: false
    },
    {
      stepNumber: "03",
      name: "Company & Workflow Research",
      agent: "Market Research Agent",
      system: "Public Filing & Industry Corpus",
      desc: "Analyzes stated operational pain points against healthcare compliance requirements.",
      reasoning: "Correlating prospect note with HIPAA and clinical scheduling constraints. Identifying high friction in multi-clinic patient billing handoffs.",
      extractedFields: { "Pain Point": "Fragmented clinic scheduling & billing", "Compliance Needs": "HIPAA BAA Required", "Fit Score": "Tier-1 Enterprise Fit" },
      isGate: false
    },
    {
      stepNumber: "04",
      name: "Lead Qualification & ICP Scoring",
      agent: "Qualification Agent",
      system: "Deterministic Scoring Rules",
      desc: "Calculates Ideal Customer Profile alignment score based on role, headcount, and budget authority.",
      reasoning: "Role (VP) = +35 pts, Headcount (450) = +25 pts, Active Project = +20 pts, Tech compatibility = +15 pts. Aggregate ICP Score: 95/100.",
      extractedFields: { "ICP Alignment": "95 / 100 (Tier 1)", "Authority Level": "VP / Executive Decision Maker", "Urgency": "High (Active Evaluation)" },
      isGate: false
    },
    {
      stepNumber: "05",
      name: "Buying Signal & Recommendation",
      agent: "Deal Strategy Agent",
      system: "Solution Knowledge Base",
      desc: "Formulates tailored POC focus recommendation and custom talking points.",
      reasoning: "Recommended initial workflow: 'Multi-Clinic Billing Handoff POC'. Anticipated business impact: Eliminates duplicate entry between EHR and billing.",
      extractedFields: { "Recommended POC": "Clinical Billing & Scheduling Bridge", "Key Value Hook": "Deterministic human sign-off on invoice generation" },
      isGate: false
    },
    {
      stepNumber: "06",
      name: "CRM Pipeline Update",
      agent: "CRM Integration Agent",
      system: "Salesforce CRM",
      desc: "Creates enriched Account, Contact, and Opportunity in Salesforce with research brief.",
      reasoning: "Atomic API call to Salesforce REST API: POST /services/data/v58.0/sobjects/Opportunity. Stage set to 'Stage 1 - Qualified Inbound'.",
      extractedFields: { "Salesforce Opp": "OPP-2026-8819", "Stage": "Qualified Inbound", "Assigned Rep": "Enterprise AE Team" },
      isGate: false
    },
    {
      stepNumber: "07",
      name: "Human Review Gate",
      agent: "Account Executive Gate",
      system: "Sales Operations Control",
      desc: "Staged tailored outreach draft and research brief presented to Account Executive for sign-off.",
      reasoning: "EXECUTION PAUSED. Policy rule POL-SALES-01 requires human sales executive review and approval before any outbound message dispatch.",
      isGate: true,
      gateDetails: {
        title: "Account Executive Sign-Off Required",
        message: "AI has prepared an executive research brief and tailored outreach proposal for Sarah Jenkins (VP Ops, Nexus Health).",
        approverRole: "Assigned Enterprise Account Executive",
        options: ["Approve & Dispatch Outreach", "Customize Message Content", "Schedule Internal Deal Review"]
      }
    },
    {
      stepNumber: "08",
      name: "Outreach & Telemetry",
      agent: "Communication & Logging Agent",
      system: "Corporate Email & Telemetry Store",
      desc: "Following AE approval, dispatches personalized communication and logs conversion timestamp.",
      reasoning: "AE approval confirmed. Personalized email dispatched from AE inbox. Calendar link embedded. Complete trace logged to CRM activity stream.",
      extractedFields: { "Dispatch Status": "Sent via Google Workspace API", "Calendar Hook": "Active", "Audit Log": "Logged to Salesforce Activity History" },
      isGate: false
    }
  ],
  outputSummary: {
    system: "Salesforce Enterprise CRM",
    record: "Opportunity #OPP-2026-8819 (Nexus Health Systems)",
    status: "Qualified & Outreach Dispatched",
    qualificationScore: "95/100 (Tier-1 Match)",
    auditState: "Complete Research Brief Attached"
  },
  metrics: {
    manualTime: "3–4 hours of manual research",
    aiTime: "4.1 seconds",
    accuracy: "Verified against public records",
    oversight: "100% human sign-off on outreach"
  }
};
