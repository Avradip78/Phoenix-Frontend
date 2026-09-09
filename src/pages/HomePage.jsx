import React from 'react';
import { Hero } from '../components/home/Hero';
import { ProblemFrictionSection } from '../components/home/ProblemFrictionSection';
import { WorkflowIntelligenceSection } from '../components/home/WorkflowIntelligenceSection';
import { AiWorkforceDemoEngine } from '../components/demos/AiWorkforceDemoEngine';
import { BeforeAfterWorkflow } from '../components/home/BeforeAfterWorkflow';
import { MeetWorkforceArchitecture } from '../components/home/MeetWorkforceArchitecture';
import { BlueprintMethodologySection } from '../components/home/BlueprintMethodologySection';
import { SolutionsWorkflowSection } from '../components/home/SolutionsWorkflowSection';
import { CommercialModelSection } from '../components/home/CommercialModelSection';
import { GovernanceSection } from '../components/home/GovernanceSection';
import { TechnologySection } from '../components/home/TechnologySection';
import { StartWithOneWorkflow } from '../components/home/StartWithOneWorkflow';
import { FinalCta } from '../components/home/FinalCta';

export function HomePage() {
  return (
    <div className="flex flex-col w-full min-w-0 overflow-x-hidden">
      {/* 2. HERO SECTION */}
      <Hero />

      {/* 4. PROBLEM SECTION: WHERE BUSINESS WORKFLOWS BREAK DOWN */}
      <ProblemFrictionSection />

      {/* 5. WORKFLOW INTELLIGENCE SECTION: WHAT PHOENIXINSIGHTS DOES */}
      <WorkflowIntelligenceSection />

      {/* 6. SEE WHAT AI CAN DO / INTERACTIVE DEMO ENGINE */}
      <AiWorkforceDemoEngine />

      {/* 7. BEFORE / AFTER WORKFLOW COMPARISON */}
      <BeforeAfterWorkflow />

      {/* 8. MEET YOUR AI WORKFORCE */}
      <MeetWorkforceArchitecture />

      {/* 9. PHOENIXINSIGHTS WORKFLOW INTELLIGENCE BLUEPRINT™ */}
      <BlueprintMethodologySection />

      {/* 10. SOLUTIONS / WORKFLOW AREAS */}
      <SolutionsWorkflowSection />

      {/* 11. HOW CUSTOMERS START / COMMERCIAL MODEL */}
      <CommercialModelSection />

      {/* 12. GOVERNANCE, HUMAN OVERSIGHT & SECURITY */}
      <GovernanceSection />

      {/* 13. TECHNOLOGY, DATA & INTEGRATION ARCHITECTURE */}
      <TechnologySection />

      {/* 14. START WITH ONE WORKFLOW */}
      <StartWithOneWorkflow />

      {/* 15. FINAL CTA / SHOW US YOUR WORKFLOW */}
      <FinalCta />
    </div>
  );
}
