import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { WORKFLOW_BUILDER_PRESETS } from '../../data/mockData';
import {
  Wrench,
  CheckCircle2,
  Layers,
  Users,
  ShieldCheck,
  Activity,
  ArrowRight,
  SlidersHorizontal,
  RefreshCw,
  Sparkles
} from 'lucide-react';

export function WorkflowBuilder() {
  const { navigate } = useRouter();

  const departments = ['HR', 'Sales', 'Marketing', 'Finance', 'Support', 'Operations', 'Custom'];
  
  const [selectedDept, setSelectedDept] = useState('HR');
  const [selectedProcessIdx, setSelectedProcessIdx] = useState(0);
  const [selectedTools, setSelectedTools] = useState(['Workday', 'Google Calendar', 'Email']);
  const [manualStepsText, setManualStepsText] = useState('Manual resume screening, manual email follow-ups, fragmented calendar coordination across interviewers');
  const [desiredOutcome, setDesiredOutcome] = useState('Automated L1 resume screening, instant interview scheduling sync, and complete audit logging with HR approval gates.');

  const currentPreset = WORKFLOW_BUILDER_PRESETS[selectedDept] || WORKFLOW_BUILDER_PRESETS.HR;
  const currentProcess = currentPreset.processes[selectedProcessIdx] || currentPreset.processes[0];

  const handleDeptChange = (dept) => {
    setSelectedDept(dept);
    setSelectedProcessIdx(0);
    const preset = WORKFLOW_BUILDER_PRESETS[dept] || WORKFLOW_BUILDER_PRESETS.HR;
    setSelectedTools(preset.tools.slice(0, 3));
  };

  const toggleTool = (tool) => {
    if (selectedTools.includes(tool)) {
      setSelectedTools(selectedTools.filter(t => t !== tool));
    } else {
      setSelectedTools([...selectedTools, tool]);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#F8F7F4] border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Interactive Workflow Architect"
          badgeVariant="purple"
          title="Tell Us What Your Team Does."
          subtitle="Configure your department, current tools, and operational bottlenecks to generate an illustrative AI Workforce Blueprint."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Inputs (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                1. Select Department
              </label>
              <div className="flex flex-wrap gap-2">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => handleDeptChange(dept)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      selectedDept === dept
                        ? 'bg-navy-900 text-white shadow-xs'
                        : 'bg-[#F8F7F4] text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Select Business Process */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                2. Select Business Process
              </label>
              <div className="space-y-2">
                {currentPreset.processes.map((proc, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedProcessIdx(idx)}
                    className={`p-3 rounded-lg border text-xs font-semibold cursor-pointer transition-all flex items-center justify-between ${
                      selectedProcessIdx === idx
                        ? 'border-purple-600 bg-purple-50/50 text-navy-900'
                        : 'border-gray-200 bg-[#F8F7F4] text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <span>{proc.name}</span>
                    {selectedProcessIdx === idx && (
                      <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Current Tools */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                3. Current Software & Tools in Use
              </label>
              <div className="flex flex-wrap gap-2">
                {currentPreset.tools.map((tool) => {
                  const isChecked = selectedTools.includes(tool);
                  return (
                    <button
                      key={tool}
                      onClick={() => toggleTool(tool)}
                      className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                        isChecked
                          ? 'bg-navy-900 text-white border-navy-900'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      {isChecked ? `✓ ${tool}` : `+ ${tool}`}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Current Manual Bottlenecks */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                4. Current Manual Steps & Bottlenecks
              </label>
              <textarea
                rows={2}
                value={manualStepsText}
                onChange={(e) => setManualStepsText(e.target.value)}
                className="w-full px-3.5 py-2 text-xs text-navy-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-[#F8F7F4]"
                placeholder="Describe manual bottlenecks..."
              />
            </div>

            {/* 5. Desired Outcome */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                5. Target Operational Outcome
              </label>
              <input
                type="text"
                value={desiredOutcome}
                onChange={(e) => setDesiredOutcome(e.target.value)}
                className="w-full px-3.5 py-2 text-xs text-navy-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-[#F8F7F4]"
                placeholder="Describe desired target outcome..."
              />
            </div>
          </div>

          {/* Right Column: Generated Blueprint Output (5 cols) */}
          <div className="lg:col-span-5 bg-navy-950 text-white rounded-2xl border border-navy-800 p-6 md:p-8 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-navy-800 mb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400">
                  Architectural Synthesis
                </span>
                <h3 className="text-lg font-bold text-white">
                  Your AI Workforce Blueprint
                </h3>
              </div>
              <Badge variant="concept" size="sm">
                Example Blueprint
              </Badge>
            </div>

            {/* Blueprint Key Parameters */}
            <div className="space-y-4 text-xs">
              <div className="flex justify-between py-2 border-b border-navy-900">
                <span className="text-gray-400">Department:</span>
                <span className="font-bold text-white">{selectedDept}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-navy-900">
                <span className="text-gray-400">Selected Process:</span>
                <span className="font-bold text-purple-300 text-right max-w-[200px] truncate">
                  {currentProcess.name}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 py-2">
                <div className="bg-navy-900/80 p-3 rounded-lg border border-navy-800">
                  <span className="text-[10px] text-gray-400 block mb-1">Potential Workflow Steps</span>
                  <span className="text-xl font-mono font-bold text-white">{currentProcess.steps} Steps</span>
                </div>
                <div className="bg-navy-900/80 p-3 rounded-lg border border-navy-800">
                  <span className="text-[10px] text-gray-400 block mb-1">Potential AI Agents</span>
                  <span className="text-xl font-mono font-bold text-purple-400">{currentProcess.agents} Agents</span>
                </div>
              </div>

              <div className="py-2 border-b border-navy-900">
                <span className="text-gray-400 block mb-1">Potential System Integrations:</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {selectedTools.map((t, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-navy-900 text-gray-300 text-[11px] border border-navy-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="py-2 border-b border-navy-900">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-gray-400">Human Approval Gates:</span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono font-bold text-xs">
                    {currentProcess.humanGates} Critical Gates
                  </span>
                </div>
                <ul className="space-y-1 text-gray-300 text-[11px]">
                  {currentProcess.gateList.map((g, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="py-2">
                <span className="text-gray-400 block mb-1">Monitoring & Observability:</span>
                <span className="text-purple-300 font-medium text-[11px]">
                  {currentProcess.monitoring}
                </span>
              </div>
            </div>

            {/* Disclaimer & Action */}
            <div className="mt-6 pt-5 border-t border-navy-800 space-y-4">
              <p className="text-[10px] text-gray-400 leading-relaxed italic">
                * Illustrative blueprint architecture. Actual agent counts, integration endpoints, and approval topologies are tailored during the discovery phase.
              </p>

              <Button
                variant="purple"
                size="md"
                className="w-full justify-center text-xs"
                onClick={() => navigate('/poc')}
                icon={ArrowRight}
              >
                Request This Workflow POC
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
