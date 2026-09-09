import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { Button } from '../ui/Button';
import {
  ArrowRight,
  Database,
  BrainCircuit,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Activity,
  CheckCircle2,
  RefreshCw,
  Sparkles,
  GitBranch,
  Users,
  TrendingUp,
  CreditCard
} from 'lucide-react';

export function Hero() {
  const { navigate } = useRouter();
  const [activeNode, setActiveNode] = useState('orchestrator');

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#07111F] text-white border-b border-slate-800">
      {/* Background ambient gradient glow and technical grid */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-25">
        <div className="absolute inset-0 bg-grid-pattern-dark" />
        <div className="absolute -top-32 left-1/4 w-[600px] h-[350px] bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Headline, Copy, CTAs, Positioning */}
          <div className="lg:col-span-6 text-left space-y-6">
            {/* Brand Positioning Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1B2A] border border-teal-500/30 text-teal-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">
                Operational AI Architecture
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-xs font-semibold text-white">
                PhoenixInsights
              </span>
            </div>

            {/* Dominant Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.12]">
              Turn Business Workflows Into Intelligent AI Workflows.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl font-normal">
              Find where your business is losing time, money or decision quality — then see how intelligent workflows can help. We connect Data Science, AI, ML, Generative AI, Decision Intelligence and intelligent agents to transform business workflows into measurable, governed action.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                className="justify-center text-sm sm:text-base px-8 py-4 bg-teal-500 hover:bg-teal-400 text-dark-950 font-bold shadow-lg glow-teal transition-all cursor-pointer"
                onClick={() => navigate('/poc')}
                icon={ArrowRight}
              >
                Show Us Your Workflow
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="justify-center text-sm sm:text-base px-8 py-4 bg-[#0D1B2A] border-slate-700 hover:border-slate-500 text-white cursor-pointer hover:text-teal-300 hover:border-teal-500/40"
                onClick={() => {
                  const demoEl = document.getElementById('ai-workforce-demo');
                  if (demoEl) {
                    demoEl.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    navigate('/#ai-workforce-demo');
                  }
                }}
              >
                See What AI Can Do
              </Button>
            </div>

            {/* Truthful Positioning Anchors */}
            <div className="pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="font-medium text-slate-200">Governed by Design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-medium text-slate-200">Human in the Loop</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <RefreshCw className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-medium text-slate-200">Closed-Loop Telemetry</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: AI WORKFORCE OPERATING SYSTEM VISUALIZATION */}
          <div className="lg:col-span-6 w-full min-w-0">
            <div className="bg-[#0D1B2A] rounded-2xl border border-slate-700/80 p-5 sm:p-7 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />

              {/* Panel Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-5 relative z-10">
                <div className="text-left">
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-teal-400 block">
                    OPERATING TOPOLOGY
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    AI Workforce Operating System
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-950/80 border border-teal-500/40 text-teal-300 text-[10px] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                  <span>Interactive Map</span>
                </div>
              </div>

              {/* Connected Visual Topology Pipeline */}
              <div className="space-y-3 relative z-10 text-xs">
                
                {/* 1. DATA & INTELLIGENCE INGESTION */}
                <div className="grid grid-cols-2 gap-2">
                  <div
                    onClick={() => setActiveNode('data')}
                    className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                      activeNode === 'data' ? 'bg-[#14253B] border-blue-400 shadow-sm' : 'bg-[#07111F] border-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <Database className="w-3.5 h-3.5 text-blue-400" />
                      <span className="text-[9px] font-mono font-bold uppercase text-blue-300">01 BUSINESS DATA</span>
                    </div>
                    <span className="text-[11px] font-bold text-white block">Enterprise Data Stores</span>
                  </div>

                  <div
                    onClick={() => setActiveNode('intelligence')}
                    className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                      activeNode === 'intelligence' ? 'bg-[#14253B] border-cyan-400 shadow-sm' : 'bg-[#07111F] border-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <BrainCircuit className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-[9px] font-mono font-bold uppercase text-cyan-300">02 INTELLIGENCE</span>
                    </div>
                    <span className="text-[11px] font-bold text-white block">ML & GenAI Models</span>
                  </div>
                </div>

                {/* Connecting Vector */}
                <div className="flex justify-center my-0.5">
                  <div className="w-0.5 h-3.5 bg-slate-600" />
                </div>

                {/* 2. CENTRAL AI ORCHESTRATOR HUB */}
                <div
                  onClick={() => setActiveNode('orchestrator')}
                  className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                    activeNode === 'orchestrator'
                      ? 'bg-[#14253B] border-teal-400 shadow-xl glow-teal ring-2 ring-teal-400/30'
                      : 'bg-[#07111F] border-teal-500/40 hover:border-teal-400'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Cpu className="w-4 h-4 text-teal-400 animate-pulse" />
                    <span className="text-[10px] font-mono font-bold uppercase text-teal-300 tracking-wider">
                      03 CENTRAL CONTROL PLANE
                    </span>
                  </div>
                  <h4 className="text-sm font-extrabold text-white tracking-wide">
                    PHOENIXINSIGHTS AI ORCHESTRATOR
                  </h4>
                  <p className="text-[11px] text-slate-300 mt-0.5">
                    Goal interpretation, task decomposition, and state coordination.
                  </p>
                </div>

                {/* Branching Tree Lines */}
                <div className="flex flex-col items-center my-1">
                  <div className="w-0.5 h-3 bg-teal-400/60" />
                  <div className="w-[75%] h-0.5 bg-slate-600" />
                  <div className="grid grid-cols-3 w-[75%]">
                    <div className="flex justify-center"><div className="w-0.5 h-3 bg-violet-400/60" /></div>
                    <div className="flex justify-center"><div className="w-0.5 h-3 bg-blue-400/60" /></div>
                    <div className="flex justify-center"><div className="w-0.5 h-3 bg-amber-400/60" /></div>
                  </div>
                </div>

                {/* 3. DOMAIN AGENTS TIER */}
                <div className="grid grid-cols-3 gap-2">
                  <div
                    onClick={() => setActiveNode('hr')}
                    className={`p-2 rounded-lg border text-left cursor-pointer transition-all ${
                      activeNode === 'hr' ? 'bg-[#14253B] border-violet-400 shadow-sm' : 'bg-[#07111F] border-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-1 mb-0.5">
                      <Users className="w-3 h-3 text-violet-400" />
                      <span className="text-[8px] font-mono font-bold uppercase text-violet-300">HR AGENT</span>
                    </div>
                    <div className="text-[10px] font-bold text-white truncate">Sourcing & Screening</div>
                  </div>

                  <div
                    onClick={() => setActiveNode('sales')}
                    className={`p-2 rounded-lg border text-left cursor-pointer transition-all ${
                      activeNode === 'sales' ? 'bg-[#14253B] border-blue-400 shadow-sm' : 'bg-[#07111F] border-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-1 mb-0.5">
                      <TrendingUp className="w-3 h-3 text-blue-400" />
                      <span className="text-[8px] font-mono font-bold uppercase text-blue-300">SALES AGENT</span>
                    </div>
                    <div className="text-[10px] font-bold text-white truncate">Lead Qualification</div>
                  </div>

                  <div
                    onClick={() => setActiveNode('finance')}
                    className={`p-2 rounded-lg border text-left cursor-pointer transition-all ${
                      activeNode === 'finance' ? 'bg-[#14253B] border-amber-400 shadow-sm' : 'bg-[#07111F] border-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-1 mb-0.5">
                      <CreditCard className="w-3 h-3 text-amber-400" />
                      <span className="text-[8px] font-mono font-bold uppercase text-amber-300">FINANCE AGENT</span>
                    </div>
                    <div className="text-[10px] font-bold text-white truncate">Invoice & Matching</div>
                  </div>
                </div>

                {/* Converging into Decision Node */}
                <div className="flex flex-col items-center my-1">
                  <div className="grid grid-cols-3 w-[75%]">
                    <div className="flex justify-center"><div className="w-0.5 h-3 bg-slate-600" /></div>
                    <div className="flex justify-center"><div className="w-0.5 h-3 bg-slate-600" /></div>
                    <div className="flex justify-center"><div className="w-0.5 h-3 bg-slate-600" /></div>
                  </div>
                  <div className="w-[75%] h-0.5 bg-slate-600" />
                  <div className="w-0.5 h-3 bg-teal-400/60" />
                </div>

                {/* 4. DECISION ENGINE */}
                <div
                  onClick={() => setActiveNode('decision')}
                  className={`p-2 rounded-lg border text-center cursor-pointer transition-all max-w-xs mx-auto ${
                    activeNode === 'decision' ? 'bg-[#14253B] border-teal-400 shadow-sm' : 'bg-[#07111F] border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-center gap-1.5">
                    <GitBranch className="w-3.5 h-3.5 text-teal-400" />
                    <span className="text-[10px] font-mono font-bold uppercase text-teal-300">04 DECISION ENGINE</span>
                  </div>
                  <span className="text-[10px] text-slate-300 block">Threshold scoring & policy validation</span>
                </div>

                {/* Vector down */}
                <div className="w-0.5 h-3 bg-amber-400/60 mx-auto" />

                {/* 5. HUMAN APPROVAL GATE (Warm Amber Highlight) */}
                <div
                  onClick={() => setActiveNode('approval')}
                  className={`p-2.5 rounded-xl border text-center cursor-pointer transition-all max-w-sm mx-auto ${
                    activeNode === 'approval'
                      ? 'bg-[#1E251E] border-amber-400 shadow-xl glow-amber ring-1 ring-amber-400/40'
                      : 'bg-[#07111F] border-amber-500/60'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <span className="text-[10px] font-mono font-bold uppercase text-amber-300 tracking-wider">
                      05 HUMAN APPROVAL GATE
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-200 font-semibold block mt-0.5">
                    Mandatory Manager Authorization for Sensitive Steps
                  </span>
                </div>

                {/* Vector down */}
                <div className="w-0.5 h-3 bg-teal-400/60 mx-auto" />

                {/* 6. BUSINESS ACTION & MEASUREMENT LOOP */}
                <div className="grid grid-cols-2 gap-2">
                  <div
                    onClick={() => setActiveNode('action')}
                    className={`p-2 rounded-lg border text-left cursor-pointer transition-all ${
                      activeNode === 'action' ? 'bg-[#14253B] border-teal-400 shadow-sm' : 'bg-[#07111F] border-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-1 mb-0.5">
                      <Zap className="w-3.5 h-3.5 text-teal-400" />
                      <span className="text-[8px] font-mono font-bold uppercase text-teal-300">06 ACTION</span>
                    </div>
                    <span className="text-[10px] font-bold text-white block">Governed Execution</span>
                  </div>

                  <div
                    onClick={() => setActiveNode('measurement')}
                    className={`p-2 rounded-lg border text-left cursor-pointer transition-all ${
                      activeNode === 'measurement' ? 'bg-[#14253B] border-blue-400 shadow-sm' : 'bg-[#07111F] border-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-1 mb-0.5">
                      <Activity className="w-3.5 h-3.5 text-blue-400" />
                      <span className="text-[8px] font-mono font-bold uppercase text-blue-300">07 TELEMETRY</span>
                    </div>
                    <span className="text-[10px] font-bold text-white block">Closed-Loop Learning</span>
                  </div>
                </div>

              </div>

              {/* Bottom Insight Footer */}
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span className="text-teal-400 font-mono">Continuous Verification Loop</span>
                <span className="text-slate-500 font-mono">Zero Unchecked Autonomy</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
