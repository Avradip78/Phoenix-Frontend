export const financeDemo = {
  id: "finance",
  name: "AI Finance Workflow",
  domain: "Finance & Accounts Payable",
  badge: "ACCOUNTS PAYABLE AUTOMATION",
  scenario: "Automated Invoice Understanding & PO Reconciliation",
  shortDesc: "Demonstrates autonomous invoice parsing, 3-way PO matching, line-item surcharge detection, and mandatory managerial approval before ERP posting.",
  accent: "amber",
  sampleDocument: {
    type: "Vendor Invoice (PDF)",
    fileName: "Apex_Logistics_INV-8891.pdf",
    vendor: "Apex Logistics International Corp",
    invoiceNumber: "INV-2026-8891",
    date: "2026-09-02",
    dueDate: "2026-10-02",
    poNumber: "PO-9942",
    lineItems: [
      { desc: "Freight Cargo - Sector B Hub Delivery", qty: 1, rate: 12500.00, amount: 12500.00 },
      { desc: "Fuel Surcharge Adjustment (Index Q3)", qty: 1, rate: 1750.00, amount: 1750.00 },
      { desc: "Express Unloading Expedited Fee", qty: 1, rate: 390.00, amount: 390.00, isException: true }
    ],
    subtotal: 14640.00,
    tax: 750.00,
    total: 15390.00,
    purchaseOrderMatch: {
      poNumber: "PO-9942",
      authorizedTotal: 15000.00,
      discrepancy: 390.00,
      reason: "Express Unloading Fee ($390.00) not covered under original master agreement."
    }
  },
  steps: [
    {
      stepNumber: "01",
      name: "Invoice Arrival",
      agent: "Ingestion Gateway",
      system: "AP Inbox & SFTP",
      desc: "Incoming PDF invoice received from vendor billing webhook.",
      reasoning: "Invoice received via automated vendor webhook. Computing SHA-256 hash for document integrity and idempotency check.",
      extractedFields: { "File": "Apex_Logistics_INV-8891.pdf", "Status": "Received & Queued", "File Size": "482 KB" },
      isGate: false
    },
    {
      stepNumber: "02",
      name: "Document Understanding",
      agent: "Document Intelligence Agent",
      system: "Vision-Language Foundation Model",
      desc: "Multimodal visual OCR scans layout geometry, tabular columns, and vendor headers.",
      reasoning: "Identifying bounding boxes for vendor metadata, currency notation ($ USD), and line-item grid. Zero hallucination threshold active.",
      extractedFields: { "Vendor": "Apex Logistics International Corp", "Invoice #": "INV-2026-8891", "Date": "2026-09-02" },
      isGate: false
    },
    {
      stepNumber: "03",
      name: "Structured Data Extraction",
      agent: "Financial Extraction Agent",
      system: "Strict Schema Validator",
      desc: "Converts raw unstructured invoice visual data into typed JSON entities.",
      reasoning: "Parsing line-item table: Line 1 ($12,500.00), Line 2 ($1,750.00), Line 3 ($390.00). Calculating cross-column sum consistency.",
      extractedFields: { "Subtotal": "$14,640.00", "Tax": "$750.00", "Total Amount": "$15,390.00", "Referenced PO": "PO-9942" },
      isGate: false
    },
    {
      stepNumber: "04",
      name: "PO Matching & Business Rules",
      agent: "ERP Reconciliation Agent",
      system: "NetSuite ERP Connector",
      desc: "Cross-checks line items against Purchase Order PO-9942 and supplier contracts.",
      reasoning: "Querying ERP database for PO-9942. Authorized limit: $15,000.00. Total invoice amount: $15,390.00. Delta exceeds variance threshold of $0.00.",
      extractedFields: { "PO Status": "Matched", "Authorized Amount": "$15,000.00", "Invoice Amount": "$15,390.00", "Delta": "+$390.00" },
      isGate: false
    },
    {
      stepNumber: "05",
      name: "Exception Detection",
      agent: "Audit & Policy Agent",
      system: "Corporate Policy Engine",
      desc: "Flags unauthorized expedited fee exceeding approved master agreement.",
      reasoning: "FLAG: 'Express Unloading Expedited Fee' ($390.00) has no corresponding requisition line on PO-9942. Routing to Finance Controller.",
      extractedFields: { "Exception Type": "Unauthorized Line Item", "Flagged Item": "Express Unloading Fee", "Variance": "$390.00", "Action": "Hold for Approval" },
      isGate: false
    },
    {
      stepNumber: "06",
      name: "Human Manager Approval",
      agent: "Human-in-the-Loop Gate",
      system: "Governance Control Plane",
      desc: "Halts automated execution and requests explicit human manager confirmation.",
      reasoning: "EXECUTION PAUSED. Policy rule POL-FIN-04 enforces mandatory human sign-off on any line-item discrepancy exceeding $100.00.",
      isGate: true,
      gateDetails: {
        title: "Discrepancy Sign-Off Required",
        message: "Invoice INV-2026-8891 includes an unapproved expedited unloading fee of $390.00 over the PO limit ($15,000.00).",
        approverRole: "Finance Operations Controller",
        options: ["Approve Variance & Post", "Reject Extra Surcharge", "Request Vendor Credit Memo"]
      }
    },
    {
      stepNumber: "07",
      name: "ERP System Update",
      agent: "System Mutation Agent",
      system: "NetSuite ERP / SAP AP",
      desc: "Following manager approval, updates AP ledger with verified vendor bill.",
      reasoning: "Manager sign-off authenticated. Dispatching atomic REST mutation to NetSuite AP Ledger. Bill status set to 'Approved for Scheduled Pay'.",
      extractedFields: { "ERP Bill ID": "BILL-2026-4410", "Ledger Status": "Posted & Scheduled", "Payment Date": "2026-10-02" },
      isGate: false
    },
    {
      stepNumber: "08",
      name: "Audit Log & Measurement",
      agent: "Telemetry & Compliance Agent",
      system: "Immutable Telemetry Store",
      desc: "Records chronological audit trace with cryptographic timestamp and efficiency metrics.",
      reasoning: "Audit record committed. End-to-end cycle time: 3.4 seconds (vs 4 business days manual processing). Zero manual data entry errors.",
      extractedFields: { "Audit Hash": "0x7F2A...9C14", "Cycle Latency": "3.4 seconds", "Human Touchpoint": "Single-click verification" },
      isGate: false
    }
  ],
  outputSummary: {
    system: "NetSuite Cloud ERP",
    record: "Vendor Bill #BILL-2026-4410",
    status: "Approved for Scheduled Disbursement",
    discrepancyHandled: "$390.00 Surcharge Authorized by Manager",
    auditState: "Full Cryptographic Trace Recorded"
  },
  metrics: {
    manualTime: "45–60 mins / invoice",
    aiTime: "3.4 seconds",
    accuracy: "100% deterministic validation",
    oversight: "Mandatory human gate on variance"
  }
};
