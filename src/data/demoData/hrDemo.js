export const hrDemo = {
  id: "hr",
  name: "AI Recruitment Workflow",
  domain: "HR & Talent Operations",
  badge: "CANDIDATE INTELLIGENCE & SCREENING",
  scenario: "Inbound Candidate Screening & Interview Orchestration",
  shortDesc: "Demonstrates automated resume understanding, deterministic skills scoring against role criteria, interview briefing compilation, and mandatory human recruiter review.",
  accent: "violet",
  sampleCandidate: {
    candidateName: "Alex Rivera",
    targetRole: "Staff Data & ML Platform Engineer",
    currentLocation: "Austin, TX (Open to Remote)",
    yearsExperience: "8 Years",
    keyCompetencies: ["Apache Kafka", "Python / PyTorch", "Snowflake", "LangGraph / Agents", "Distributed Systems"],
    education: "B.S. in Computer Science, UT Austin",
    resumeSummary: "8 years architecting high-throughput data streaming and ML inference pipelines. Led real-time feature store deployment serving 50M daily events."
  },
  steps: [
    {
      stepNumber: "01",
      name: "Application Ingestion",
      agent: "ATS Ingestion Gateway",
      system: "Greenhouse / Lever ATS",
      desc: "Incoming application and resume PDF received via career portal.",
      reasoning: "Candidate submission received for Job Requisition REQ-2026-402 (Staff Data & ML Platform Engineer). Extracting text streams.",
      extractedFields: { "Applicant": "Alex Rivera", "Requisition": "REQ-2026-402", "Source": "Direct Company Portal" },
      isGate: false
    },
    {
      stepNumber: "02",
      name: "Resume Understanding & Parsing",
      agent: "Resume Parsing Agent",
      system: "Document Extraction Engine",
      desc: "Deconstructs work history, educational credentials, certifications, and technical proficiencies.",
      reasoning: "Identifying career progression: Software Engineer → Senior Data Engineer → Lead Platform Architect. Verifying employment timeline consistency.",
      extractedFields: { "Total Experience": "8 Years", "Current Role": "Lead Platform Architect", "Education": "B.S. Computer Science (UT Austin)" },
      isGate: false
    },
    {
      stepNumber: "03",
      name: "Skill & Competency Extraction",
      agent: "Skills Taxonomy Agent",
      system: "Technical Ontology Index",
      desc: "Maps candidate project narratives to role prerequisites (Streaming, Distributed Systems, ML Infrastructure).",
      reasoning: "Extracted verified competencies: Kafka (Advanced, 5 yrs), Python (Expert, 8 yrs), Snowflake (Intermediate, 3 yrs), Agent State Machines (Proficient, 2 yrs).",
      extractedFields: { "Core Stack": "Kafka, Python, PyTorch, Snowflake", "System Architecture": "High-Throughput Streaming & Distributed Systems" },
      isGate: false
    },
    {
      stepNumber: "04",
      name: "Role Matching & Gap Analysis",
      agent: "Requisition Matching Agent",
      system: "Scoring & Rubric Engine",
      desc: "Calculates match percentage against deterministic hiring rubric with zero demographic bias.",
      reasoning: "Comparing skills to REQ-402 rubric: Architecture score: 94%, Distributed data: 92%, ML deployment: 88%. Composite competency match: 91%.",
      extractedFields: { "Role Fit": "91% Competency Alignment", "Experience Baseline": "Exceeds 6+ Year Requirement", "Compensation Band": "Aligned" },
      isGate: false
    },
    {
      stepNumber: "05",
      name: "Candidate Executive Brief",
      agent: "Briefing Synthesis Agent",
      system: "HR Intelligence Store",
      desc: "Generates a structured 1-page briefing for hiring manager highlighting strengths and suggested technical drill-down areas.",
      reasoning: "Compiling executive brief: High strength in distributed data flow. Suggested technical inquiry: Deep-dive into fault tolerance on multi-region streaming.",
      extractedFields: { "Strengths": "Distributed systems, streaming architectures", "Suggested Discussion": "Partition failure recovery strategies" },
      isGate: false
    },
    {
      stepNumber: "06",
      name: "Human Recruiter Decision Gate",
      agent: "Recruiting Manager Gate",
      system: "Governance Control Plane",
      desc: "Recruiter reviews candidate profile, scorecard, and briefing. AI never makes final reject or advance decisions.",
      reasoning: "EXECUTION PAUSED. Policy rule POL-HR-02 mandates that all advancement or rejection decisions require explicit human recruiter review.",
      isGate: true,
      gateDetails: {
        title: "Recruiting Manager Decision Required",
        message: "AI has screened Alex Rivera (91% rubric fit) and compiled an interview briefing for the Staff Platform Engineer requisition.",
        approverRole: "Technical Talent Acquisition Lead",
        options: ["Advance to Technical Screen", "Request Additional Portfolio Work", "Archive Application with Notification"]
      }
    },
    {
      stepNumber: "07",
      name: "Interview Coordination",
      agent: "Calendar Orchestration Agent",
      system: "Google Calendar & ATS Integration",
      desc: "Following recruiter advancement, checks hiring manager schedule and stages invitation slots.",
      reasoning: "Recruiter advance confirmed. Identifying 3 mutually available 45-minute technical screen windows on Lead Architect calendar.",
      extractedFields: { "Proposed Slots": "Tue 10:00 AM, Wed 2:30 PM, Thu 11:00 AM", "Interviewer": "VP of Architecture" },
      isGate: false
    },
    {
      stepNumber: "08",
      name: "ATS System Update & Telemetry",
      agent: "ATS Synchronization Agent",
      system: "Greenhouse ATS API",
      desc: "Updates candidate state to 'Screening Approved' and attaches complete scorecard to candidate record.",
      reasoning: "Atomic API call to Greenhouse ATS. Candidate moved to Stage: 'Technical Screen'. Scorecard attached. Audit trace sealed.",
      extractedFields: { "Greenhouse State": "Advanced to Stage 2", "Candidate ID": "CAND-2026-9041", "Audit Status": "Complete Recruiter Sign-Off Logged" },
      isGate: false
    }
  ],
  outputSummary: {
    system: "Greenhouse Enterprise ATS",
    record: "Candidate #CAND-2026-9041 (Alex Rivera)",
    status: "Advanced to Technical Screen by Human Recruiter",
    rubricScore: "91% Competency Match",
    auditState: "Full Human Sign-Off Logged"
  },
  metrics: {
    manualTime: "40 mins per resume review",
    aiTime: "3.1 seconds",
    biasControl: "Strict skills-only rubric evaluation",
    oversight: "100% human recruiter decision authority"
  }
};
