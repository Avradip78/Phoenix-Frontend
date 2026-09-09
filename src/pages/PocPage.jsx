import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  ArrowRight,
  Clock,
  Layers,
  Building,
  Mail,
  Phone,
  User,
  Sliders,
  Target,
  FileText,
  Sparkles,
  Loader2
} from 'lucide-react';

export function PocPage() {
  const { navigate } = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    designation: '',
    email: '',
    phone: '',
    industry: 'Financial Services & Banking',
    department: 'HR & Recruitment',
    businessProcess: '',
    currentTools: '',
    currentPainPoint: '',
    desiredOutcome: '',
    workflowComplexity: 'Medium (2-3 Connected Tools)',
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@phoenixinsightsai.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `PhoenixInsights POC Request - ${formData.company || 'Enterprise'}`,
          _replyto: formData.email,
          _template: 'table'
        })
      });

      if (response.ok) {
        const data = await response.json().catch(() => ({}));
        if (data.success === 'false' || data.success === false) {
          console.warn('FormSubmit returned success: false', data);
          if (data.message && data.message.toLowerCase().includes('activation')) {
            setErrorMessage(
              'Form submission requires one-time activation. An activation email has been sent to info@phoenixinsightsai.com. Please activate it or email info@phoenixinsightsai.com directly.'
            );
          } else {
            setErrorMessage(
              data.message || 'We could not send your request right now. Please try again or email info@phoenixinsightsai.com directly.'
            );
          }
        } else {
          setSubmitted(true);
        }
      } else {
        const errData = await response.json().catch(() => ({}));
        console.error('FormSubmit error response:', response.status, errData);
        setErrorMessage(
          'We could not send your request right now. Please try again or email info@phoenixinsightsai.com directly.'
        );
      }
    } catch (error) {
      console.error('Network error during POC submission:', error);
      setErrorMessage(
        'We could not send your request right now. Please try again or email info@phoenixinsightsai.com directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const pocSteps = [
    { num: "01", title: "Identify a Workflow", desc: "Select a single repetitive, high-touch process causing operational delay." },
    { num: "02", title: "Map the Process", desc: "Deconstruct inputs, decisions, system dependencies, and human approval steps." },
    { num: "03", title: "Identify Automation", desc: "Pinpoint where specialized AI agents reduce latency without increasing risk." },
    { num: "04", title: "Design Architecture", desc: "Configure agent roles, system tool bindings, and human approval gates." },
    { num: "05", title: "Build the POC", desc: "Construct a functional proof-of-concept tested on realistic business scenarios." },
    { num: "06", title: "Validate", desc: "Verify accuracy, error resilience, guardrails, and compliance alignment." },
    { num: "07", title: "Measure", desc: "Evaluate cycle time reduction, manual touchpoint drops, and throughput gains." },
    { num: "08", title: "Scale", desc: "Transition the validated agent modules into production and expand to adjacent workflows." },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#07111F] text-[#CBD5E1] min-h-screen w-full overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <Badge variant="teal" size="md" className="mb-4">
            SHOW US YOUR WORKFLOW — POC EVALUATION
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5 leading-tight">
            Turn Business Workflows Into Intelligent AI Workflows.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            You don't need to know which AI tool you need. Show us how the work happens today, where time or money is lost, and we'll identify where intelligent workflows create measurable value.
          </p>
        </div>

        {/* 8-Step Process Cards */}
        <div className="bg-[#0D1B2A] rounded-2xl border border-[#1E3553] p-6 sm:p-8 shadow-xl mb-14">
          <div className="max-w-2xl mb-6 text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 block mb-1">
              Structured Engagement Methodology
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              The 8-Stage Workflow Validation Path
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {pocSteps.map((s, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#07111F] border border-[#1E3553] flex flex-col justify-between text-left hover:border-teal-500/40 transition-colors shadow-lg"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-teal-400 block mb-1">
                    STEP {s.num}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white mb-1">
                    {s.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main POC Request Form & Context Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Guidelines & Principles (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-[#07111F] text-white rounded-2xl p-6 sm:p-8 border border-[#1E3553] shadow-xl space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-400 block mb-1">
                  CORE PHILOSOPHY
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Where Is Your Business Losing Time or Quality?
                </h3>
              </div>

              <blockquote className="border-l-2 border-teal-400 pl-3.5 italic text-xs sm:text-sm text-slate-300">
                "We don't start by asking: 'Where can we use AI?' We start by asking: 'Where is your business losing time, money or decision quality?'"
              </blockquote>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Rather than committing to sprawling enterprise overhauls, our validation model allows your team to evaluate intelligent workflows on a single, well-defined operational friction point.
              </p>

              <div className="space-y-3 text-xs text-slate-200">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Deterministic Scope:</strong> Single high-touch process with transparent boundaries.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Empirical Validation:</strong> Rigorous benchmarking against existing manual baselines.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong className="text-amber-300">Mandatory Human-in-the-Loop:</strong> Explicit managerial sign-off gates before system actions.</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0D1B2A] border border-[#1E3553] text-xs text-slate-300 leading-relaxed">
                <strong className="text-white block mb-1">Truthful Engagement Principle:</strong>
                We review your actual workflow and discuss a practical proof-of-concept approach. We do not make unsupported claims or promise automated miracles.
              </div>

              <div className="pt-2 border-t border-[#1E3553] flex items-center gap-2 text-xs text-slate-400">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Direct email: <strong className="text-teal-300">info@phoenixinsightsai.com</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive POC Request Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#0D1B2A] rounded-2xl border border-[#1E3553] p-6 sm:p-8 md:p-10 shadow-xl w-full min-w-0">
            {submitted ? (
              <div className="text-center py-10 sm:py-14 space-y-4">
                <div className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto shadow-lg border border-teal-500/30">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Request Received
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. We’ve received your POC request and will review the workflow details before getting back to you.
                </p>
                <div className="pt-2 text-xs text-slate-400">
                  Need a faster response? Email <a href="mailto:info@phoenixinsightsai.com" className="text-teal-400 font-semibold underline">info@phoenixinsightsai.com</a> directly.
                </div>
                <div className="pt-6">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#1E3553] text-white hover:bg-[#112236]"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        designation: '',
                        email: '',
                        phone: '',
                        industry: 'Financial Services & Banking',
                        department: 'HR & Recruitment',
                        businessProcess: '',
                        currentTools: '',
                        currentPainPoint: '',
                        desiredOutcome: '',
                        workflowComplexity: 'Medium (2-3 Connected Tools)',
                        additionalInfo: ''
                      });
                    }}
                  >
                    Submit Another Workflow Request
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left w-full min-w-0" noValidate={false}>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Show Us Your Workflow
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Please provide details regarding the business process you would like to evaluate. We will analyze your workflow and propose an intelligent AI workflow architecture.
                  </p>
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/50 flex items-start gap-3 text-xs text-red-300">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-bold">Submission Failed</strong>
                      <span>{errorMessage}</span>
                    </div>
                  </div>
                )}

                {/* Row 1: Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <div className="w-full min-w-0">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full max-w-full px-3.5 py-2.5 text-xs text-white rounded-lg border border-[#1E3553] focus:outline-none focus:ring-2 focus:ring-teal-500 bg-[#07111F] placeholder-slate-500 box-border"
                    />
                  </div>

                  <div className="w-full min-w-0">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Acme Global"
                      className="w-full max-w-full px-3.5 py-2.5 text-xs text-white rounded-lg border border-[#1E3553] focus:outline-none focus:ring-2 focus:ring-teal-500 bg-[#07111F] placeholder-slate-500 box-border"
                    />
                  </div>
                </div>

                {/* Row 2: Designation & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <div className="w-full min-w-0">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Designation / Role *
                    </label>
                    <input
                      type="text"
                      name="designation"
                      required
                      value={formData.designation}
                      onChange={handleChange}
                      placeholder="e.g. VP of Operations"
                      className="w-full max-w-full px-3.5 py-2.5 text-xs text-white rounded-lg border border-[#1E3553] focus:outline-none focus:ring-2 focus:ring-teal-500 bg-[#07111F] placeholder-slate-500 box-border"
                    />
                  </div>

                  <div className="w-full min-w-0">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sarah@company.com"
                      className="w-full max-w-full px-3.5 py-2.5 text-xs text-white rounded-lg border border-[#1E3553] focus:outline-none focus:ring-2 focus:ring-teal-500 bg-[#07111F] placeholder-slate-500 box-border"
                    />
                  </div>
                </div>

                {/* Row 3: Phone & Industry */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <div className="w-full min-w-0">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 / +1 (555) 000-0000"
                      className="w-full max-w-full px-3.5 py-2.5 text-xs text-white rounded-lg border border-[#1E3553] focus:outline-none focus:ring-2 focus:ring-teal-500 bg-[#07111F] placeholder-slate-500 box-border"
                    />
                  </div>

                  <div className="w-full min-w-0">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Industry Sector
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full max-w-full px-3.5 py-2.5 text-xs text-white rounded-lg border border-[#1E3553] focus:outline-none focus:ring-2 focus:ring-teal-500 bg-[#07111F] box-border"
                    >
                      <option className="bg-[#07111F] text-white">Financial Services & Banking</option>
                      <option className="bg-[#07111F] text-white">Insurance & Risk Management</option>
                      <option className="bg-[#07111F] text-white">Technology & SaaS</option>
                      <option className="bg-[#07111F] text-white">Healthcare & Life Sciences</option>
                      <option className="bg-[#07111F] text-white">Retail & E-commerce</option>
                      <option className="bg-[#07111F] text-white">Manufacturing & Logistics</option>
                      <option className="bg-[#07111F] text-white">Professional Services & Consulting</option>
                      <option className="bg-[#07111F] text-white">Other</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Department & Target Business Process */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <div className="w-full min-w-0">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Department *
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full max-w-full px-3.5 py-2.5 text-xs text-white rounded-lg border border-[#1E3553] focus:outline-none focus:ring-2 focus:ring-teal-500 bg-[#07111F] box-border"
                    >
                      <option className="bg-[#07111F] text-white">HR & Recruitment</option>
                      <option className="bg-[#07111F] text-white">Sales & Business Development</option>
                      <option className="bg-[#07111F] text-white">Marketing & Content</option>
                      <option className="bg-[#07111F] text-white">Finance & Accounts</option>
                      <option className="bg-[#07111F] text-white">Customer Support</option>
                      <option className="bg-[#07111F] text-white">Operations & Supply Chain</option>
                      <option className="bg-[#07111F] text-white">Data & Analytics</option>
                      <option className="bg-[#07111F] text-white">Custom Cross-Functional</option>
                    </select>
                  </div>

                  <div className="w-full min-w-0">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Business Process *
                    </label>
                    <input
                      type="text"
                      name="businessProcess"
                      required
                      value={formData.businessProcess}
                      onChange={handleChange}
                      placeholder="e.g. Inbound Resume Screening & Scheduling"
                      className="w-full max-w-full px-3.5 py-2.5 text-xs text-white rounded-lg border border-[#1E3553] focus:outline-none focus:ring-2 focus:ring-teal-500 bg-[#07111F] placeholder-slate-500 box-border"
                    />
                  </div>
                </div>

                {/* Row 5: Current Tools (Full Width) */}
                <div className="w-full min-w-0">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Current Tools & Software in Use
                  </label>
                  <input
                    type="text"
                    name="currentTools"
                    value={formData.currentTools}
                    onChange={handleChange}
                    placeholder="e.g. Workday, Outlook, Slack, PostgreSQL, Salesforce"
                    className="w-full max-w-full px-3.5 py-2.5 text-xs text-white rounded-lg border border-[#1E3553] focus:outline-none focus:ring-2 focus:ring-teal-500 bg-[#07111F] placeholder-slate-500 box-border"
                  />
                </div>

                {/* Row 6: Current Manual Pain Point / Bottleneck (Full Width) */}
                <div className="w-full min-w-0">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Current Manual Pain Point / Bottleneck *
                  </label>
                  <textarea
                    name="currentPainPoint"
                    required
                    rows={3}
                    value={formData.currentPainPoint}
                    onChange={handleChange}
                    placeholder="Describe where the process slows down, creates manual overhead, or introduces errors..."
                    className="w-full max-w-full px-3.5 py-2.5 text-xs text-white rounded-lg border border-[#1E3553] focus:outline-none focus:ring-2 focus:ring-teal-500 bg-[#07111F] placeholder-slate-500 box-border resize-y"
                  />
                </div>

                {/* Row 7: Desired Target Outcome & Estimated Workflow Complexity */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <div className="w-full min-w-0">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Desired Target Outcome *
                    </label>
                    <input
                      type="text"
                      name="desiredOutcome"
                      required
                      value={formData.desiredOutcome}
                      onChange={handleChange}
                      placeholder="e.g. 70% faster turnaround with structured audit logs"
                      className="w-full max-w-full px-3.5 py-2.5 text-xs text-white rounded-lg border border-[#1E3553] focus:outline-none focus:ring-2 focus:ring-teal-500 bg-[#07111F] placeholder-slate-500 box-border"
                    />
                  </div>

                  <div className="w-full min-w-0">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Estimated Workflow Complexity
                    </label>
                    <select
                      name="workflowComplexity"
                      value={formData.workflowComplexity}
                      onChange={handleChange}
                      className="w-full max-w-full px-3.5 py-2.5 text-xs text-white rounded-lg border border-[#1E3553] focus:outline-none focus:ring-2 focus:ring-teal-500 bg-[#07111F] box-border"
                    >
                      <option className="bg-[#07111F] text-white">Single System (Low Complexity)</option>
                      <option className="bg-[#07111F] text-white">Medium (2-3 Connected Tools)</option>
                      <option className="bg-[#07111F] text-white">High (Multi-System Enterprise Stack)</option>
                      <option className="bg-[#07111F] text-white">Regulated / High-Compliance Workflow</option>
                    </select>
                  </div>
                </div>

                {/* Row 8: Additional Information (Full Width) */}
                <div className="w-full min-w-0">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Additional Information / Requirements
                  </label>
                  <textarea
                    name="additionalInfo"
                    rows={2}
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    placeholder="Any specific data governance, security, or timeline constraints..."
                    className="w-full max-w-full px-3.5 py-2.5 text-xs text-white rounded-lg border border-[#1E3553] focus:outline-none focus:ring-2 focus:ring-teal-500 bg-[#07111F] placeholder-slate-500 box-border resize-y"
                  />
                </div>

                {/* Submit Action: 100% contained, disabled while submitting, loading spinner */}
                <div className="pt-3 w-full">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full max-w-full px-6 py-3.5 rounded-lg font-bold text-sm text-slate-950 flex items-center justify-center gap-2 transition-all shadow-md ${
                      isSubmitting
                        ? 'bg-teal-400 cursor-not-allowed opacity-75'
                        : 'bg-teal-500 hover:bg-teal-400 cursor-pointer glow-teal'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-slate-950" />
                        <span>Submit Your Workflow for Evaluation</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-400 text-center mt-3 leading-relaxed">
                    We will review your workflow and discuss a practical proof-of-concept approach.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
