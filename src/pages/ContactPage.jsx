import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { COMPANY_INFO } from '../data/mockData';
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Building,
  User,
  ArrowRight,
  ShieldCheck,
  Loader2
} from 'lucide-react';

export function ContactPage() {
  const { navigate } = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'General Enterprise Inquiry',
    message: ''
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
          _subject: `PhoenixInsights Website Inquiry - ${formData.subject}`,
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
        console.error('Contact FormSubmit error:', response.status, errData);
        setErrorMessage(
          'We could not send your request right now. Please try again or email info@phoenixinsightsai.com directly.'
        );
      }
    } catch (error) {
      console.error('Network error during Contact submission:', error);
      setErrorMessage(
        'We could not send your request right now. Please try again or email info@phoenixinsightsai.com directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-28 pb-20 bg-[#07111F] text-[#CBD5E1] min-h-screen w-full overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <Badge variant="teal" size="md" className="mb-4">
            CONTACT PHOENIXINSIGHTS
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5 leading-tight">
            Connect With Our Team.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Discuss proof-of-concept opportunities, AI workforce architecture, or enterprise data science integration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Office & Information (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-[#07111F] text-white rounded-2xl p-6 sm:p-8 border border-[#1E3553] shadow-xl space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-400 block mb-1">
                  Headquarters & Information
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {COMPANY_INFO.name}
                </h3>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Registered Location:</span>
                    <span>{COMPANY_INFO.registeredOffice}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <User className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Founder / Director:</span>
                    <span>{COMPANY_INFO.founder.name}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Official Contact:</span>
                    <a
                      href="mailto:info@phoenixinsightsai.com"
                      className="text-teal-300 hover:text-white underline"
                    >
                      info@phoenixinsightsai.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1E3553]">
                <p className="text-xs text-slate-300 leading-relaxed">
                  Looking to test a specific workflow with real business data? We recommend starting directly with our structured POC inquiry.
                </p>
                <div className="mt-4">
                  <Button
                    variant="primary"
                    size="sm"
                    className="w-full justify-center text-xs font-bold shadow-md glow-teal"
                    onClick={() => navigate('/poc')}
                    icon={ArrowRight}
                  >
                    Show Us Your Workflow
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#0D1B2A] rounded-2xl border border-[#1E3553] p-6 sm:p-8 md:p-10 shadow-xl w-full min-w-0">
            {submitted ? (
              <div className="text-center py-10 sm:py-14 space-y-4">
                <div className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-400 border border-teal-500/30 flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Message Sent
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to PhoenixInsights. We’ll review your message and get back to you.
                </p>
                <div className="pt-2 text-xs text-slate-400">
                  Need a faster response? Email <a href="mailto:info@phoenixinsightsai.com" className="text-teal-400 font-semibold underline">info@phoenixinsightsai.com</a>
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
                        email: '',
                        company: '',
                        subject: 'General Enterprise Inquiry',
                        message: ''
                      });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left w-full min-w-0" noValidate={false}>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Send Us an Inquiry
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill out the form below or write directly to info@phoenixinsightsai.com
                  </p>
                </div>

                {/* Error Alert */}
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/50 flex items-start gap-3 text-xs text-red-300">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-bold">Submission Failed</strong>
                      <span>{errorMessage}</span>
                    </div>
                  </div>
                )}

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <div className="w-full min-w-0">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
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
                      placeholder="rahul@company.com"
                      className="w-full max-w-full px-3.5 py-2.5 text-xs text-white rounded-lg border border-[#1E3553] focus:outline-none focus:ring-2 focus:ring-teal-500 bg-[#07111F] placeholder-slate-500 box-border"
                    />
                  </div>
                </div>

                {/* Company & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <div className="w-full min-w-0">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Nexa Dynamics"
                      className="w-full max-w-full px-3.5 py-2.5 text-xs text-white rounded-lg border border-[#1E3553] focus:outline-none focus:ring-2 focus:ring-teal-500 bg-[#07111F] placeholder-slate-500 box-border"
                    />
                  </div>

                  <div className="w-full min-w-0">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Inquiry Type *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full max-w-full px-3.5 py-2.5 text-xs text-white rounded-lg border border-[#1E3553] focus:outline-none focus:ring-2 focus:ring-teal-500 bg-[#07111F] box-border"
                    >
                      <option className="bg-[#07111F] text-white">General Enterprise Inquiry</option>
                      <option className="bg-[#07111F] text-white">AI Workforce Architecture</option>
                      <option className="bg-[#07111F] text-white">Data Science & ML Solutions</option>
                      <option className="bg-[#07111F] text-white">Custom POC Discussion</option>
                      <option className="bg-[#07111F] text-white">Partnership & Integration</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="w-full min-w-0">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your inquiry, objectives, or current workflows..."
                    className="w-full max-w-full px-3.5 py-2.5 text-xs text-white rounded-lg border border-[#1E3553] focus:outline-none focus:ring-2 focus:ring-teal-500 bg-[#07111F] placeholder-slate-500 box-border resize-y"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 w-full">
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
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-slate-950" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-400 text-center mt-3">
                    Submissions are routed directly to info@phoenixinsightsai.com
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
