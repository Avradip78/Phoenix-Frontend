export const operationsDemo = {
  id: "operations",
  name: "AI Operations Workflow",
  domain: "Supply Chain & Operations Control",
  badge: "EXCEPTION DETECTION & DISPATCH",
  scenario: "Distribution Throughput Anomaly & Corrective Dispatch",
  shortDesc: "Demonstrates real-time telemetry ingestion, delivery SLA breach pattern detection, root-cause isolation, and human operations manager dispatch authorization.",
  accent: "teal",
  sampleOperation: {
    facility: "Regional Distribution Hub - Midwest Beta",
    monitoredBatches: "14,200 Pallet Shipments Today",
    activeSLA: "Same-Day Cross-Dock Guarantee (4h maximum dwell)",
    alertTrigger: "Automated dwell-time sensor telemetry exceeded normal deviation by +42 minutes on Bay 7-12 conveyor sub-assembly",
    projectedImpact: "180 outgoing retail deliveries at risk of 24-hour delivery miss without immediate reroute"
  },
  steps: [
    {
      stepNumber: "01",
      name: "Operational Data Ingestion",
      agent: "Telemetry Ingestion Gateway",
      system: "Kafka IoT & WMS Event Stream",
      desc: "Streams live conveyor sensor readings, barcode scans, and vehicle departure timestamps.",
      reasoning: "Consuming 2,400 events/sec from Midwest Hub warehouse management system (WMS). Normalizing timestamp queues into unified operational graph.",
      extractedFields: { "Active Sensors": "128 Conveyor Nodes", "Event Throughput": "2,400 events/sec", "Monitored Hub": "Midwest Beta" },
      isGate: false
    },
    {
      stepNumber: "02",
      name: "Pattern & Velocity Analysis",
      agent: "Velocity Tracking Agent",
      system: "Time-Series Analytics Engine",
      desc: "Compares current package progression rates against historical 90-day seasonal baselines.",
      reasoning: "Detecting localized throughput drop: Bays 7-12 processing velocity decreased from 420 units/hour to 110 units/hour over the last 35 minutes.",
      extractedFields: { "Baseline Velocity": "420 units/hr", "Current Velocity": "110 units/hr (-73%)", "Duration": "35 minutes active" },
      isGate: false
    },
    {
      stepNumber: "03",
      name: "Anomaly & Exception Flagging",
      agent: "Anomaly Detection Agent",
      system: "Statistical Machine Learning Model",
      desc: "Triggers priority exception flag: 180 outbound retail orders approaching SLA breach threshold.",
      reasoning: "Z-score exceeds +3.8 sigma anomaly threshold. 180 cross-dock orders will miss the 4:00 PM carrier cutoff if remaining in Bay 7-12 queue.",
      extractedFields: { "Flag Type": "Critical SLA Risk", "Orders Affected": "180 Shipments", "Breach Horizon": "42 minutes remaining" },
      isGate: false
    },
    {
      stepNumber: "04",
      name: "Root Cause Investigation",
      agent: "Diagnostic Correlation Agent",
      system: "Maintenance & Equipment Bus",
      desc: "Correlates conveyor scanner log with optic sensor diagnostic errors on Sorter Line 3.",
      reasoning: "Root cause isolated: Sorter Line 3 optic scanner lens dirty, causing 40% barcode misreads and manual divert jams. Mechanical fault excluded.",
      extractedFields: { "Root Cause": "Sorter 3 Optic Scanner Misread", "Subsystem": "Conveyor Diverter 3B", "Remediation Needs": "Quick Lens Wipe & Queue Reroute" },
      isGate: false
    },
    {
      stepNumber: "05",
      name: "Mitigation Action Formulation",
      agent: "Optimization Dispatch Agent",
      system: "Dynamic Routing Engine",
      desc: "Formulates optimal corrective plan: Reroute 180 urgent orders to auxiliary Sorting Bay 14 and alert maintenance crew.",
      reasoning: "Simulation confirms Bay 14 has 45% idle capacity. Diverting 180 shipments recovers SLA schedule with zero delivery penalties. Dispatching maintenance ticket.",
      extractedFields: { "Proposed Reroute": "Divert to Bay 14", "Estimated Recovery Time": "18 minutes", "Overtime Impact": "$0.00" },
      isGate: false
    },
    {
      stepNumber: "06",
      name: "Human Operations Manager Decision Gate",
      agent: "Operations Director Gate",
      system: "Control Room Dashboard",
      desc: "Presents proposed queue diversion and maintenance ticket to shift operations manager for sign-off.",
      reasoning: "EXECUTION PAUSED. Policy rule POL-OPS-08 requires human facility supervisor confirmation before altering active warehouse conveyor routing logic.",
      isGate: true,
      gateDetails: {
        title: "Facility Supervisor Authorization Required",
        message: "AI recommends diverting 180 time-sensitive shipments to Bay 14 to prevent SLA breach, plus dispatching maintenance to Sorter Line 3.",
        approverRole: "Shift Operations Director",
        options: ["Authorize Immediate Queue Diversion", "Hold Current Flow & Dispatch Tech Only", "Manual Override"]
      }
    },
    {
      stepNumber: "07",
      name: "Automated System Execution",
      agent: "WMS Mutation Agent",
      system: "Warehouse Management System (WMS)",
      desc: "Sends PLC commands to conveyor sorters and transmits task alert to floor maintenance team.",
      reasoning: "Supervisor authorization confirmed. Emitting dynamic route change to PLC Controller 4. Sending push notification to Floor Lead on handheld terminal.",
      extractedFields: { "PLC Diverter Status": "Bay 14 Active", "Maintenance Ticket": "TICK-MAINT-8910 Issued", "Shipments Moving": "180 en route to Bay 14" },
      isGate: false
    },
    {
      stepNumber: "08",
      name: "Telemetry & SLA Recovery",
      agent: "Telemetry & Metrics Agent",
      system: "Executive Operations Store",
      desc: "Tracks recovery metrics: all 180 orders successfully sorted and loaded prior to 4:00 PM cutoff.",
      reasoning: "SLA breach prevented. Carrier handover completed at 3:48 PM (12 minutes ahead of deadline). 100% on-time delivery maintained.",
      extractedFields: { "Outcome": "180 Orders Shipped On-Time", "Penalty Cost Avoided": "Estimated $14,000", "Trace Signature": "Recorded" },
      isGate: false
    }
  ],
  outputSummary: {
    system: "Enterprise WMS & Industrial PLC",
    record: "Incident #OPS-2026-4401 (Midwest Hub)",
    status: "Mitigated & Shipped On-Time",
    ordersProtected: "180 Retail Shipments",
    auditState: "Full Supervisor Sign-Off Logged"
  },
  metrics: {
    manualDetection: "45–90 mins (typically post-breach)",
    aiDetection: "35 seconds",
    slaPreservation: "100% on-time departure",
    oversight: "Mandatory human supervisor authorization"
  }
};
