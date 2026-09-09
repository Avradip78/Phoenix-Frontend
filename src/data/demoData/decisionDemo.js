export const decisionDemo = {
  id: "decision",
  name: "AI Decision Intelligence",
  domain: "Executive Leadership & Strategy",
  badge: "MANAGEMENT DECISION SUPPORT",
  scenario: "Executive Retention & Revenue Trend Decision Support",
  shortDesc: "Demonstrates cross-silo data aggregation, multi-cohort retention anomaly diagnosis, scenario simulation, and executive CFO/COO strategic sign-off.",
  accent: "violet",
  sampleDataset: {
    cohortAnalysis: "Enterprise SaaS Annual Customer Cohorts (2024–2026)",
    activeARR: "$48.5M Current Annual Recurring Revenue",
    detectedTrend: "Net Revenue Retention in Mid-Market segment declined from 108% to 94% over the past two fiscal quarters",
    dataSources: ["Stripe / Chargebee Billing DB", "Salesforce CRM", "Product Telemetry / Mixpanel", "Zendesk Tickets"]
  },
  steps: [
    {
      stepNumber: "01",
      name: "Cross-System Data Ingestion",
      agent: "Enterprise Data Ingestion Agent",
      system: "Snowflake Cloud Lakehouse",
      desc: "Aggregates transactional billing, CRM pipeline records, product feature usage, and support tickets into unified model.",
      reasoning: "Executing scheduled ingestion pipeline across 4 enterprise source systems. Normalizing 1.2M events into unified customer health graph.",
      extractedFields: { "Accounts Evaluated": "840 Enterprise Customers", "Billing History": "36 Months", "Telemetry Records": "1.2M Session Events" },
      isGate: false
    },
    {
      stepNumber: "02",
      name: "Data Preparation & Modeling",
      agent: "Feature Engineering Agent",
      system: "dbt & Data Engineering Engine",
      desc: "Calculates cohort churn rates, expansion revenue, seat utilization, and ticket volume per account.",
      reasoning: "Calculating rolling 90-day Net Revenue Retention (NRR) and feature engagement velocity. Segmenting accounts by tier: Enterprise vs Mid-Market.",
      extractedFields: { "Enterprise Tier NRR": "114% (Healthy)", "Mid-Market Tier NRR": "94% (Downtrend Alert)", "Total ARR at Risk": "$3.2M" },
      isGate: false
    },
    {
      stepNumber: "03",
      name: "Trend & Anomaly Detection",
      agent: "Statistical Inference Agent",
      system: "Predictive Analytics Model",
      desc: "Isolates abnormal divergence in Mid-Market renewal rates starting precisely 120 days ago.",
      reasoning: "Decomposition analysis confirms downtrend is not seasonal. Correlation with recent product pricing tier update is statistically significant (p < 0.01).",
      extractedFields: { "Anomaly Type": "Mid-Market Renewal Compression", "Divergence Start": "120 Days Ago", "Statistical Significance": "99.4%" },
      isGate: false
    },
    {
      stepNumber: "04",
      name: "Root Cause & Driver Breakdown",
      agent: "Causal Attribution Agent",
      system: "Causal Inference Model",
      desc: "Attribute drivers: 68% of churned mid-market accounts cited lack of custom API connectors in the revised standard tier.",
      reasoning: "Synthesizing support sentiment and cancellation exit notes. Primary driver: API connector access removed from standard plan in Q1.",
      extractedFields: { "Primary Driver (68%)": "API Add-on Gating Friction", "Secondary Driver (22%)": "Competitor Bundling", "Tertiary (10%)": "Budget Freeze" },
      isGate: false
    },
    {
      stepNumber: "05",
      name: "Strategic Scenario Simulation",
      agent: "Scenario Simulation Agent",
      system: "Decision Optimization Model",
      desc: "Simulates 3 potential remediation paths: 1) Re-include 3 free API connectors, 2) Discount enterprise plan, 3) Maintain current tier.",
      reasoning: "Monte Carlo simulation on 5,000 runs: Path 1 (re-including basic API connectors in standard tier) projected to recover NRR to 105% within 2 quarters, recovering $2.4M ARR.",
      extractedFields: { "Recommended Path": "Re-bundle 3 Base Connectors in Standard", "Projected NRR Recovery": "105%", "Projected Revenue Protection": "$2.4M ARR" },
      isGate: false
    },
    {
      stepNumber: "06",
      name: "Executive Decision Support Gate",
      agent: "Executive Leadership Gate",
      system: "Executive Governance Control",
      desc: "Presents decision briefing, scenario tradeoffs, and revenue implications to CFO and Chief Commercial Officer.",
      reasoning: "EXECUTION PAUSED. Policy rule POL-EXEC-01 strictly mandates that strategic pricing, tiering, or commercial adjustments require human executive decision.",
      isGate: true,
      gateDetails: {
        title: "Executive Strategic Sign-Off Required",
        message: "AI has diagnosed mid-market NRR drop to API connector gating and recommends re-including 3 base connectors to protect $2.4M ARR.",
        approverRole: "CFO & Chief Commercial Officer",
        options: ["Authorize Tier Modification Plan", "Commission Expanded Customer Panel", "Maintain Current Pricing"]
      }
    },
    {
      stepNumber: "07",
      name: "Operational Implementation Plan",
      agent: "Execution Staging Agent",
      system: "Jira / Asana & Billing System",
      desc: "Following executive authorization, stages feature flag updates, customer success outreach tasks, and pricing updates.",
      reasoning: "CFO authorization confirmed. Staging feature flag update in LaunchDarkly: 'std_tier_base_connectors=3'. Generating CS proactive outreach task queue.",
      extractedFields: { "Feature Flag": "Staged for Deployment", "CS Tasks Generated": "42 Accounts Flagged for Proactive Outreach", "Billing Update": "Scheduled" },
      isGate: false
    },
    {
      stepNumber: "08",
      name: "Outcome Tracking & Telemetry",
      agent: "Executive Telemetry Agent",
      system: "Executive Dashboard",
      desc: "Monitors real-world renewal rates post-implementation to validate decision accuracy against projections.",
      reasoning: "Telemetry baseline established. Weekly cohort tracking active. Full audit trace of decision model, inputs, and sign-offs logged.",
      extractedFields: { "Tracking Window": "Weekly Renewal Cohorts", "Audit Trail": "Immutable Strategic Log Stored", "Executive Sign-Off": "Confirmed" },
      isGate: false
    }
  ],
  outputSummary: {
    system: "Enterprise Lakehouse & Strategic Suite",
    record: "Decision Blueprint #DEC-2026-081 (Mid-Market Retention)",
    status: "Executive Decision Authorized & Implemented",
    revenueProtected: "Projected $2.4M ARR Recovery",
    auditState: "Complete Scenario Simulation Logged"
  },
  metrics: {
    manualDiagnosis: "6–8 weeks of consultant analysis",
    aiDiagnosis: "8.2 seconds",
    decisionQuality: "Simulated over 5,000 probabilistic runs",
    oversight: "100% human CFO & CCO executive decision"
  }
};
