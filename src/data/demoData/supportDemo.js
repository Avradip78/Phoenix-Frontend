export const supportDemo = {
  id: "support",
  name: "AI Customer Support Workflow",
  domain: "Customer Support & Service",
  badge: "KNOWLEDGE-GROUNDED RESOLUTION CO-PILOT",
  scenario: "Incoming Enterprise Support Incident & Resolution",
  shortDesc: "Demonstrates incoming message intent parsing, hybrid RAG knowledge retrieval from private docs, deterministic confidence scoring, and human operator sign-off.",
  accent: "blue",
  sampleTicket: {
    ticketId: "TICK-2026-7782",
    customer: "Elena Rostova",
    company: "Vanguard Retail Logistics",
    plan: "Enterprise Platinum Tier",
    message: "Our warehouse dispatch webhooks started returning HTTP 429 rate limit errors during our peak 2 PM batch window today. What are our current concurrency thresholds and can our allocation be temporarily increased?",
    urgency: "High / Time-Sensitive"
  },
  steps: [
    {
      stepNumber: "01",
      name: "Customer Message Ingestion",
      agent: "Ticket Ingestion Gateway",
      system: "Zendesk / Intercom Suite",
      desc: "Incoming support ticket received via enterprise support portal.",
      reasoning: "Ticket TICK-2026-7782 ingested. Identifying account: Vanguard Retail Logistics (Platinum Enterprise SLA, 15-minute first response guarantee).",
      extractedFields: { "Customer": "Elena Rostova", "Account SLA": "Platinum (15m response)", "Channel": "Enterprise Portal" },
      isGate: false
    },
    {
      stepNumber: "02",
      name: "Intent & Entity Detection",
      agent: "NLU Classification Agent",
      system: "Language Understanding Model",
      desc: "Deconstructs customer inquiry into specific technical categories and issue severity.",
      reasoning: "Identified Primary Intent: 'API Rate Limit Adjustment / HTTP 429'. Target Entity: 'Warehouse Dispatch Webhook'. Urgency: High (operational impact).",
      extractedFields: { "Classification": "Technical API / Rate Limiting", "Error Code": "HTTP 429 (Too Many Requests)", "Severity": "P2 Operational" },
      isGate: false
    },
    {
      stepNumber: "03",
      name: "Grounded Knowledge Retrieval",
      agent: "Hybrid RAG Retrieval Agent",
      system: "Private Corporate Vector Store",
      desc: "Queries internal API documentation, rate limit policies, and client account contract.",
      reasoning: "Retrieving 3 private chunks: 1) 'Enterprise Webhook Concurrency Specs v4', 2) 'Platinum Tier Burst Allocation SOP', 3) 'Client Contract Schedule B'.",
      extractedFields: { "Retrieved Chunks": "3 Policy Documents", "Default Limit": "500 requests/sec", "Platinum Burst Limit": "1,500 requests/sec with approval" },
      isGate: false
    },
    {
      stepNumber: "04",
      name: "Response Draft Formulation",
      agent: "Resolution Synthesis Agent",
      system: "Foundation Language Model",
      desc: "Synthesizes high-fidelity response explaining cause and providing exact configuration instructions.",
      reasoning: "Drafting grounded response: Explains Platinum tier supports bursting to 1,500 req/s. Formulates temporary 48-hour burst override instructions.",
      extractedFields: { "Draft Status": "Complete with Documentation Citations", "Proposed Resolution": "Apply 48h Temporary Burst to 1,500 req/s" },
      isGate: false
    },
    {
      stepNumber: "05",
      name: "Confidence & Safety Check",
      agent: "Deterministic Guardrail Agent",
      system: "Policy & Safety Engine",
      desc: "Evaluates response accuracy against factual grounding citations and corporate support guidelines.",
      reasoning: "Evaluating response confidence: Grounding score 96%, Zero fabricated URLs, Tone compliance: 100%. Requires human sign-off due to infrastructure quota change.",
      extractedFields: { "Factual Grounding": "96% Verified against SOP", "Quota Modification": "Requires Support Lead Sign-Off" },
      isGate: false
    },
    {
      stepNumber: "06",
      name: "Human Support Lead Approval",
      agent: "Support Lead Gate",
      system: "Governance Control Plane",
      desc: "Support engineer reviews drafted response and validates proposed infrastructure rate-limit burst.",
      reasoning: "EXECUTION PAUSED. Policy rule POL-SUP-03 mandates human approval before applying any infrastructure quota change or sending tier-1 customer response.",
      isGate: true,
      gateDetails: {
        title: "Support Engineer Approval Required",
        message: "AI has drafted a grounded technical response and staged a temporary rate-limit burst to 1,500 req/s for Vanguard Logistics.",
        approverRole: "Senior Technical Support Engineer",
        options: ["Approve Response & Apply Burst", "Edit Response Draft", "Escalate to Infrastructure On-Call"]
      }
    },
    {
      stepNumber: "07",
      name: "Response Dispatch & Quota Update",
      agent: "Execution & Dispatch Agent",
      system: "API Gateway & Zendesk",
      desc: "Dispatches approved response to customer and triggers API gateway quota increase.",
      reasoning: "Engineer sign-off confirmed. Dispatched reply to customer portal. Invoking API Gateway Admin hook: POST /quotas/vanguard/burst_active=true.",
      extractedFields: { "Response Dispatched": "Yes (Via Portal API)", "Quota Burst Applied": "1,500 req/s active for 48h", "Ticket State": "Pending Customer Confirmation" },
      isGate: false
    },
    {
      stepNumber: "08",
      name: "Audit Logging & Telemetry",
      agent: "Telemetry & QA Agent",
      system: "Support Telemetry Store",
      desc: "Logs end-to-end incident turnaround time and citations for ongoing quality review.",
      reasoning: "Total resolution cycle: 4.2 minutes (vs 3.5 hour SLA target). 100% human-verified infrastructure change.",
      extractedFields: { "Total Turnaround": "4.2 minutes", "SLA Performance": "Exceeded (94% under SLA window)", "Audit Signature": "Saved" },
      isGate: false
    }
  ],
  outputSummary: {
    system: "Zendesk & Cloud API Gateway",
    record: "Ticket #TICK-2026-7782 (Vanguard Logistics)",
    status: "Resolved & Quota Burst Activated",
    responseGrounded: "100% Source Attributed",
    auditState: "Full Engineer Approval Logged"
  },
  metrics: {
    manualTime: "3.5 hours average response",
    aiTime: "4.2 minutes",
    accuracy: "96% factual grounding against SOP",
    oversight: "100% human sign-off on quota change"
  }
};
