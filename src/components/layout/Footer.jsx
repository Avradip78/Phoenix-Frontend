import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { COMPANY_INFO } from '../../data/mockData';
import { ArrowUpRight, Shield, Cpu, Layers, Sparkles, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const { navigate } = useRouter();

  const solutionLinks = [
    { label: 'HR & Recruitment AI', path: '/solutions/hr' },
    { label: 'Sales & BD AI', path: '/solutions/sales' },
    { label: 'Marketing AI', path: '/solutions/marketing' },
    { label: 'Finance & Accounts AI', path: '/solutions/finance' },
    { label: 'Customer Support AI', path: '/solutions/support' },
    { label: 'Operations AI', path: '/solutions/operations' },
    { label: 'Data & Decision Intelligence', path: '/data-decision-intelligence' },
  ];

  const platformLinks = [
    { label: 'AI Workforce Architecture', path: '/ai-workforce' },
    { label: 'Agent Studio (Concept)', path: '/agent-studio' },
    { label: 'How It Works (8 Stages)', path: '/how-it-works' },
    { label: 'Technology Ecosystem', path: '/technology' },
    { label: 'Governance & Human Oversight', path: '/governance' },
    { label: 'Start a POC', path: '/poc' },
  ];

  const companyLinks = [
    { label: 'About PhoenixInsights', path: '/about' },
    { label: 'Leadership & Founder', path: '/about#founder' },
    { label: 'POC Engagement Model', path: '/poc' },
    { label: 'Contact Inquiries', path: '/contact' },
    { label: 'Official Website', href: 'https://phoenixinsightsai.com/', external: true },
  ];

  return (
    <footer className="bg-[#07111F] text-slate-300 border-t border-[#1E3553]">
      {/* Top Banner with Core Evolution Statement */}
      <div className="border-b border-[#1E3553] py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl text-left">
            <span className="text-xs font-bold tracking-widest text-teal-400 uppercase font-mono">
              Operational AI Architecture
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              From Data → Decisions → Governed Action.
            </h3>
            <p className="text-sm text-slate-400 mt-1.5 leading-relaxed">
              Extending Data Science, Machine Learning, and Generative AI into coordinated, human-governed AI Workforces.
            </p>
          </div>
          <button
            onClick={() => navigate('/poc')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal-600 text-white font-semibold text-sm hover:bg-teal-500 transition-colors shadow-sm shrink-0 cursor-pointer"
          >
            <span>Discuss a Workflow POC</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 text-left">
          {/* Brand Column with Official Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div
              onClick={() => navigate('/')}
              className="cursor-pointer inline-block"
              title="PhoenixInsights"
            >
              <img
                src="/phoenixinsights-logo-white.png"
                alt="PhoenixInsights - From Data to Decisions at Scale"
                className="h-10 sm:h-11 w-auto max-w-[260px] object-contain"
                style={{ aspectRatio: '738/218' }}
              />
            </div>

            <div className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono">
              {COMPANY_INFO.name}
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {COMPANY_INFO.coreStatement}
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="mailto:info@phoenixinsightsai.com" className="hover:text-white transition-colors">
                  info@phoenixinsightsai.com
                </a>
              </div>
              <div className="text-[11px] text-slate-500 pt-1">
                Founder / Director: Avradip Mitra Chowdhury
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              AI Workforces
            </h4>
            <ul className="space-y-2.5 text-sm">
              {solutionLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Architecture & Trust
            </h4>
            <ul className="space-y-2.5 text-sm">
              {platformLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                    </a>
                  ) : (
                    <button
                      onClick={() => navigate(link.path)}
                      className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-[#1E3553] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-400 font-medium">Product-Led AI Solutions & Workforce Engineering</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
