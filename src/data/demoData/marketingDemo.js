export const marketingDemo = {
  id: "marketing",
  name: "AI Marketing Workflow",
  domain: "Marketing & Growth Operations",
  badge: "CAMPAIGN INTELLIGENCE & ADAPTATION",
  scenario: "Campaign Intelligence & Content Adaptation",
  shortDesc: "Demonstrates market theme research, audience intent analysis, multi-channel asset drafting, and human marketing director review before distribution.",
  accent: "cyan",
  sampleCampaign: {
    objective: "Enterprise Workflow Modernization Q4 Drive",
    targetAudience: "Chief Operating Officers & VP Operations in Logistics and Healthcare",
    primaryPainPoint: "Legacy manual entry across disconnected spreadsheets causing delayed reporting",
    channels: ["LinkedIn Sponsored Content", "Executive Email Brief", "Technical Whitepaper Summary"],
    keyTheme: "Autonomy with Deterministic Control"
  },
  steps: [
    {
      stepNumber: "01",
      name: "Objective Definition",
      agent: "Campaign Strategy Agent",
      system: "Growth Management Hub",
      desc: "Ingests business objective, target audience parameters, and key message directives.",
      reasoning: "Objective parsed: 'Drive enterprise awareness of governed workflow automation among COOs'. Setting tone to authoritative, technical, and pragmatic.",
      extractedFields: { "Target Segment": "COOs & VPs of Operations", "Core Positioning": "Deterministic Human-in-the-Loop AI", "Geography": "North America" },
      isGate: false
    },
    {
      stepNumber: "02",
      name: "Market & Audience Research",
      agent: "Market Intelligence Agent",
      system: "Industry Signal Aggregator",
      desc: "Analyzes industry publications, discussion forums, and competitor positioning.",
      reasoning: "Synthesizing market trend signals: 72% of operational leaders express skepticism toward 'black-box AI' chatbots, prioritizing verified control gates.",
      extractedFields: { "Top Keyword Interest": "Governed Workflow Automation", "Key Objections": "Hallucinations, uncontrolled actions", "Counter-Angle": "Explicit Manager Sign-Off" },
      isGate: false
    },
    {
      stepNumber: "03",
      name: "Content Intelligence & Angles",
      agent: "Content Ideation Agent",
      system: "Knowledge Graph Index",
      desc: "Formulates messaging angles anchored in practical business problems rather than AI hype.",
      reasoning: "Developing 3 narrative angles: 1) 'The Spreadsheet Latency Trap', 2) 'Where Decisions Get Delayed', 3) 'Why the Best AI Asks for Permission'.",
      extractedFields: { "Selected Hero Hook": "Why the Most Powerful AI Workflows Still Ask for Human Permission", "Tone Rubric": "Pragmatic, No Hype" },
      isGate: false
    },
    {
      stepNumber: "04",
      name: "Multi-Channel Asset Drafting",
      agent: "Copywriting & Synthesis Agent",
      system: "Brand Voice Foundation LLM",
      desc: "Generates format-specific drafts: LinkedIn carousel script, executive email summary, and landing page hook.",
      reasoning: "Generating structured copy adhering to corporate brand guidelines. Inserting zero unsubstantiated statistics. Highlighting real workflow topologies.",
      extractedFields: { "LinkedIn Post": "Drafted (180 words)", "Executive Email": "Drafted (240 words)", "Call to Action": "Show Us Your Workflow" },
      isGate: false
    },
    {
      stepNumber: "05",
      name: "Human Marketing Review Gate",
      agent: "Marketing Director Gate",
      system: "Brand Governance Control",
      desc: "Human marketing lead reviews generated copy, brand tone, and claims verification.",
      reasoning: "EXECUTION PAUSED. Policy rule POL-MKT-01 requires explicit human approval on all outward-facing campaign content before channel distribution.",
      isGate: true,
      gateDetails: {
        title: "Marketing Director Approval Required",
        message: "AI has prepared campaign assets for the Q4 Enterprise Operations drive. Review copy compliance and approved branding tone.",
        approverRole: "Marketing Director",
        options: ["Approve All Campaign Assets", "Adjust Copy & Tone", "Rerun Audience Research"]
      }
    },
    {
      stepNumber: "06",
      name: "Channel Preparation & Staging",
      agent: "Channel Distribution Agent",
      system: "HubSpot / LinkedIn Campaign Manager",
      desc: "Stages approved drafts into marketing automation platform and configures tracking parameters.",
      reasoning: "Director approval confirmed. Staging approved LinkedIn creative into Campaign Manager. Attribution UTMs injected: utm_source=linkedin&utm_campaign=gov_workflows.",
      extractedFields: { "Campaign ID": "CAMP-2026-904", "Platform": "LinkedIn Sponsored & HubSpot", "Staged State": "Ready for Launch" },
      isGate: false
    },
    {
      stepNumber: "07",
      name: "Performance Monitoring Plan",
      agent: "Telemetry & Attribution Agent",
      system: "Marketing Analytics Bus",
      desc: "Establishes baseline performance signals and conversion telemetry hooks.",
      reasoning: "Tracking hooks active. Primary measurement KPI: Inbound 'Show Us Your Workflow' consultation requests from verified enterprise domains.",
      extractedFields: { "Primary Conversion Metric": "Workflow Intake Submissions", "Audit Signature": "Logged to Marketing Runbook" },
      isGate: false
    }
  ],
  outputSummary: {
    system: "HubSpot & LinkedIn Campaign Manager",
    record: "Campaign Package #CAMP-2026-904",
    status: "Approved & Staged for Schedule",
    channelsConfigured: "LinkedIn Sponsored, Email Digest, Landing Hook",
    auditState: "Full Content Compliance Verified"
  },
  metrics: {
    manualTime: "2 weeks of agency drafting",
    aiTime: "4.8 seconds",
    brandSafety: "100% compliant with zero hype policy",
    oversight: "Full human sign-off on all public copy"
  }
};
