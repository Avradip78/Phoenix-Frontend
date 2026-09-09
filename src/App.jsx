import React from 'react';
import { useRouter } from './context/RouterContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { AiWorkforcePage } from './pages/AiWorkforcePage';
import { SolutionsHubPage } from './pages/SolutionsHubPage';
import { HrWorkforcePage } from './pages/solutions/HrWorkforcePage';
import { SalesWorkforcePage } from './pages/solutions/SalesWorkforcePage';
import { MarketingWorkforcePage } from './pages/solutions/MarketingWorkforcePage';
import { FinanceWorkforcePage } from './pages/solutions/FinanceWorkforcePage';
import { SupportWorkforcePage } from './pages/solutions/SupportWorkforcePage';
import { OperationsWorkforcePage } from './pages/solutions/OperationsWorkforcePage';
import { DataDecisionIntelligencePage } from './pages/DataDecisionIntelligencePage';
import { AgentStudioPage } from './pages/AgentStudioPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { PocPage } from './pages/PocPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { GovernancePage } from './pages/GovernancePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const { currentPath } = useRouter();

  // Route Dispatcher
  const renderPage = (path) => {
    switch (path) {
      case '/':
        return <HomePage />;
      case '/ai-workforce':
        return <AiWorkforcePage />;
      case '/solutions':
        return <SolutionsHubPage />;
      case '/solutions/hr':
        return <HrWorkforcePage />;
      case '/solutions/sales':
        return <SalesWorkforcePage />;
      case '/solutions/marketing':
        return <MarketingWorkforcePage />;
      case '/solutions/finance':
        return <FinanceWorkforcePage />;
      case '/solutions/support':
        return <SupportWorkforcePage />;
      case '/solutions/operations':
        return <OperationsWorkforcePage />;
      case '/data-decision-intelligence':
        return <DataDecisionIntelligencePage />;
      case '/agent-studio':
        return <AgentStudioPage />;
      case '/how-it-works':
        return <HowItWorksPage />;
      case '/poc':
        return <PocPage />;
      case '/technology':
        return <TechnologyPage />;
      case '/governance':
        return <GovernancePage />;
      case '/about':
        return <AboutPage />;
      case '/contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  const cleanPath = (currentPath || '/').split('#')[0].replace(/\/$/, '') || '/';

  return (
    <div className="min-h-screen flex flex-col bg-[#07111F] text-[#CBD5E1] selection:bg-teal-900 selection:text-teal-200">
      <Navbar />
      <main key={cleanPath} className="flex-grow w-full">
        {renderPage(cleanPath)}
      </main>
      <Footer />
    </div>
  );
}
