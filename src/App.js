import { useState, useEffect } from 'react';
import '@/App.css';
import axios from 'axios';
import { Menu, X, ChevronRight, Mail, MapPin, ArrowUp } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || '';
const API = `${BACKEND_URL}/api`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      const response = await axios.post(`${API}/contact`, formData);
      setFormStatus({ 
        type: 'success', 
        message: response.data.message || 'Your message has been sent successfully!' 
      });
      setFormData({ name: '', company: '', role: '', email: '', message: '' });
    } catch (error) {
      setFormStatus({ 
        type: 'error', 
        message: error.response?.data?.detail || 'Failed to send message. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_50186335-eb87-40aa-a5e6-967d42aa0f4b/artifacts/26l9s6jd_PhoenixInsights%20logo%20with%20modern%20design.png" 
                alt="PhoenixInsights" 
                className="h-10 w-10"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">PhoenixInsights</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('expertise')} className="text-gray-700 hover:text-purple-600 transition">Expertise</button>
              <button onClick={() => scrollToSection('solutions')} className="text-gray-700 hover:text-purple-600 transition">Solutions</button>
              <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-purple-600 transition">Process</button>
              <button onClick={() => scrollToSection('engagement')} className="text-gray-700 hover:text-purple-600 transition">Engagement</button>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition">Contact</button>
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-3 space-y-3">
              <button onClick={() => scrollToSection('expertise')} className="block w-full text-left text-gray-700 hover:text-purple-600 py-2">Expertise</button>
              <button onClick={() => scrollToSection('solutions')} className="block w-full text-left text-gray-700 hover:text-purple-600 py-2">Solutions</button>
              <button onClick={() => scrollToSection('process')} className="block w-full text-left text-gray-700 hover:text-purple-600 py-2">Process</button>
              <button onClick={() => scrollToSection('engagement')} className="block w-full text-left text-gray-700 hover:text-purple-600 py-2">Engagement</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto text-center">
          <img 
            src="https://customer-assets.emergentagent.com/job_50186335-eb87-40aa-a5e6-967d42aa0f4b/artifacts/26l9s6jd_PhoenixInsights%20logo%20with%20modern%20design.png" 
            alt="PhoenixInsights" 
            className="h-20 w-20 mx-auto mb-6 animate-float"
          />
          <p className="text-purple-600 font-semibold mb-4">Data Science & AI Solutions</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Transform Data Into Strategic Advantage
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We partner with forward-thinking organizations to unlock the full potential of their data. Delivering production-ready AI models, predictive analytics, and actionable insights that drive measurable revenue growth and operational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition transform hover:scale-105">
              Schedule Discovery Call
            </button>
            <button onClick={() => scrollToSection('expertise')} className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition">
              Explore Services
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-600 text-sm mb-1">Production-ready AI models</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-600 text-sm mb-1">Predictive analytics at scale</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-600 text-sm mb-1">Insights wired into decisions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">15+</p>
              <p className="text-purple-100">Model initiatives shipped</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">25+</p>
              <p className="text-purple-100">Pilots & projects across domains</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">6</p>
              <p className="text-purple-100">Weeks time-to-first-pilot</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">40%</p>
              <p className="text-purple-100">Decision latency reduction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Carousel */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="tech-carousel">
          <div className="tech-track">
            {['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'LangChain', 'OpenAI', 'Claude', 'Llama', 'AWS', 'Azure', 'GCP', 'Snowflake', 'Power BI', 'Tableau'].map((tech, idx) => (
              <div key={idx} className="tech-item">{tech}</div>
            ))}
            {['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'LangChain', 'OpenAI', 'Claude', 'Llama', 'AWS', 'Azure', 'GCP', 'Snowflake', 'Power BI', 'Tableau'].map((tech, idx) => (
              <div key={`dup-${idx}`} className="tech-item">{tech}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-600 font-semibold mb-2">Our Expertise</p>
            <h2 className="text-4xl font-bold mb-4">Comprehensive Analytics & AI Solutions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">From predictive analytics to generative AI, we deliver end-to-end data science capabilities that transform how organizations leverage data for strategic decisions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Predictive Analytics & ML',
                desc: 'Deploy production-grade machine learning models that forecast demand, identify risks, and optimize operations with enterprise-level accuracy.',
                features: ['Demand Forecasting', 'Risk Scoring', 'Anomaly Detection', 'Customer LTV Prediction']
              },
              {
                title: 'Generative AI & LLM Solutions',
                desc: 'Harness large language models and generative AI to automate workflows, enhance customer experiences, and unlock new capabilities.',
                features: ['Custom Chatbots & Assistants', 'Document Intelligence', 'Content Generation', 'RAG Systems']
              },
              {
                title: 'Risk & Compliance Intelligence',
                desc: 'Navigate regulatory landscapes with AI-powered compliance monitoring, fraud detection, and real-time risk assessment frameworks.',
                features: ['Fraud Detection', 'AML/KYC Automation', 'Regulatory Reporting', 'Credit Risk Models']
              },
              {
                title: 'Business Intelligence & Dashboards',
                desc: 'Transform raw data into strategic insights with executive dashboards, automated KPI monitoring, and actionable intelligence platforms.',
                features: ['Executive Dashboards', 'Real-time Analytics', 'Self-service BI', 'Data Visualization']
              },
              {
                title: 'Customer Intelligence',
                desc: 'Unlock customer value with 360° analytics, segmentation strategies, and personalization engines that drive engagement and retention.',
                features: ['Customer 360', 'Churn Prediction', 'Segmentation', 'Personalization']
              },
              {
                title: 'Data Engineering & MLOps',
                desc: 'Build robust data infrastructure with scalable pipelines, feature stores, and automated ML operations for reliable production systems.',
                features: ['Data Pipelines', 'Feature Stores', 'Model Monitoring', 'Cloud Infrastructure']
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
                <h3 className="text-xl font-bold mb-4 text-purple-600">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center text-sm text-gray-700">
                      <ChevronRight className="h-4 w-4 text-purple-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 text-purple-600 font-semibold hover:text-purple-800 transition">Learn More →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-600 font-semibold mb-2">What We Build</p>
            <h2 className="text-4xl font-bold mb-4">Solutions We Deliver</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Examples of the types of solutions we can design and implement for your team.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Credit risk & fraud scoring',
                category: 'Financial Services',
                image: 'https://images.unsplash.com/photo-1748439281934-2803c6a3ee36',
                desc: 'ML-powered credit scoring and fraud detection systems for banking and fintech, with monitoring, explainability and governance.',
                stats: [{ label: 'accuracy', value: '96%' }, { label: 'models', value: '15+' }, { label: 'clients', value: '8' }],
                tags: ['Credit Scoring', 'Fraud Detection', 'Risk Assessment']
              },
              {
                title: 'Store & SKU level forecasting',
                category: 'Retail & Supply Chain',
                image: 'https://images.unsplash.com/photo-1761195696590-3490ea770aa1',
                desc: 'Time series models for inventory optimisation and demand planning—reducing stockouts and overstock while protecting service levels.',
                stats: [{ label: 'accuracy', value: '92%' }, { label: 'reduction', value: '35%' }, { label: 'improvement', value: '40%' }],
                tags: ['Sales Forecasting', 'Inventory Optimisation', 'Supply Planning']
              },
              {
                title: 'GenAI Assistants',
                category: 'Enterprise Automation',
                image: 'https://images.unsplash.com/photo-1684369175833-4b445ad6bfb5',
                desc: 'Custom LLM chatbots and document AI that assist teams with policy questions, document workflows, and knowledge retrieval.',
                stats: [{ label: 'time Reduction', value: '60%' }, { label: 'queries', value: '10k+' }, { label: 'satisfaction', value: '94%' }],
                tags: ['Custom Chatbots', 'Document AI', 'Knowledge Base']
              },
              {
                title: 'Customer 360 & retention',
                category: 'Marketing & CRM',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
                desc: '360° customer views, churn models and segmentation used to drive lifecycle messaging and product interventions.',
                stats: [{ label: 'retention', value: '+28%' }, { label: 'engagement', value: '+45%' }, { label: 'ltv', value: '+32%' }],
                tags: ['Customer 360', 'Churn Prediction', 'Personalisation']
              }
            ].map((solution, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img src={solution.image} alt={solution.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {solution.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex gap-4 mb-4">
                    {solution.stats.map((stat, sidx) => (
                      <div key={sidx}>
                        <p className="text-2xl font-bold text-purple-600">{stat.value}</p>
                        <p className="text-xs text-gray-600">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.tags.map((tag, tidx) => (
                      <span key={tidx} className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-600 font-semibold mb-2">How We Work</p>
            <h2 className="text-4xl font-bold mb-4">From Idea to Production in 8 Steps</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">A lean, outcome-first approach focused on pilots that move real KPIs—not just proof-of-concepts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery & framing', desc: 'Clarify objectives, constraints, KPIs and success definition with stakeholders.' },
              { step: '02', title: 'Data audit', desc: 'Assess sources, quality, availability and readiness; design interim vs. target state.' },
              { step: '03', title: 'Feature & solution design', desc: 'Translate the problem into data features, modelling options and evaluation plan.' },
              { step: '04', title: 'Model development', desc: 'Build, compare and tune models using robust validation and backtesting.' },
              { step: '05', title: 'Insights & pilot design', desc: 'Translate model outputs into decisions, playbooks and pilot experiments.' },
              { step: '06', title: 'Deployment & integration', desc: 'Expose models via APIs, dashboards or workflow tools; connect to existing systems.' },
              { step: '07', title: 'Monitoring & feedback', desc: 'Track performance, drift and user adoption; capture qualitative feedback.' },
              { step: '08', title: 'Scale & iteration', desc: 'Harden, extend to new use cases, and embed into wider decision and data platforms.' }
            ].map((process, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                <div className="text-4xl font-bold text-purple-600 mb-4">{process.step}</div>
                <h3 className="text-lg font-bold mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Phoenix Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-600 font-semibold mb-2">Why Phoenix Insights</p>
            <h2 className="text-4xl font-bold mb-4">What makes us different</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Full-stack from data to decisions', desc: 'We combine data engineering, modelling, BI and GenAI capabilities in one integrated workflow.' },
              { title: 'Production, not just POCs', desc: 'Engagements are measured on deployment and impact, not slide decks or prototypes.' },
              { title: 'Explainable & governed', desc: 'We design with explainability, auditability and regulatory alignment from day one.' },
              { title: 'Pragmatic & tool-agnostic', desc: 'We work with your stack (cloud, BI, data tools) rather than forcing new platforms.' },
              { title: 'Small, senior teams', desc: 'Hands-on data scientists and engineers, no large junior-heavy delivery structure.' },
              { title: 'Short, sharp pilots', desc: 'Typical cycles are 6–8 weeks with clear exit options and no long-term lock-in.' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-xl font-bold mb-3 text-purple-600">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section id="engagement" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-600 font-semibold mb-2">Engagement Models</p>
            <h2 className="text-4xl font-bold mb-4">Ways to Work with Phoenix Insights</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">We keep pricing transparent and aligned to value. Below are typical structures—final commercials depend on scope and complexity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Pilot Projects',
                subtitle: '2–8 week pilots',
                desc: 'Scoped engagements for a single problem area—ideal for first projects or new lines of work.',
                features: ['Fixed scope & timeline', 'One primary use case', 'Includes dashboards / notebooks', 'Optional deployment support']
              },
              {
                title: 'Model-as-a-Service',
                subtitle: 'Hosted models & APIs',
                desc: 'We own and operate the model, you consume predictions via APIs, dashboards or batch jobs.',
                features: ['Monthly or annual fee', 'SLAs for uptime & latency', 'Monitoring & retraining included', 'Ideal for risk & forecasting models']
              },
              {
                title: 'Embedded Team',
                subtitle: 'Fractional data/AI team',
                desc: 'A small team of senior specialists working as an extension of your internal analytics or product org.',
                features: ['3–6 month retainers', 'Flexible roadmap across use cases', 'Mix of engineering & DS', 'Knowledge transfer baked-in']
              }
            ].map((model, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold mb-2">{model.title}</h3>
                <p className="text-purple-600 font-semibold mb-4">{model.subtitle}</p>
                <p className="text-gray-600 mb-6">{model.desc}</p>
                <ul className="space-y-3 mb-8">
                  {model.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start text-sm text-gray-700">
                      <ChevronRight className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition">Get Started</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-600 font-semibold mb-2">Meet The Founder</p>
            <h2 className="text-4xl font-bold mb-4">Avradip Mitra Chowdhury</h2>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 md:p-12 rounded-2xl shadow-lg">
            <p className="text-gray-700 text-lg leading-relaxed">
              Phoenix Insights is a fresh, ambitious startup founded by Avradip Mitra Chowdhury—a passionate data scientist with deep expertise in machine learning, AI, and advanced analytics.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              While we're just getting started, the founder's skills and vision position Phoenix Insights to deliver exceptional value across diverse industries including financial services, retail, SaaS and operations.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-600 font-semibold mb-2">About Us</p>
            <h2 className="text-4xl font-bold mb-4">PhoenixInsights</h2>
            <p className="text-xl text-gray-600">Transforming data into strategic decisions through world-class AI and analytics solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-purple-600">Our Mission</h3>
              <p className="text-gray-600">A Hyderabad-based data & AI studio focused on practical, production-ready analytics and machine learning for financial services, SaaS, and enterprise teams.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-purple-600">Our Expertise</h3>
              <p className="text-gray-600">We blend strong data engineering foundations with applied data science and GenAI expertise. Our work ranges from first analytics foundations to advanced ML and LLM deployments.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-purple-600">Our Approach</h3>
              <p className="text-gray-600">Engagements are lean, focused and outcome-driven. We prefer 2–8 week pilots that directly connect models and insights to decisions, KPIs and processes—rather than long, unfocused projects.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <img 
              src="https://customer-assets.emergentagent.com/job_50186335-eb87-40aa-a5e6-967d42aa0f4b/artifacts/26l9s6jd_PhoenixInsights%20logo%20with%20modern%20design.png" 
              alt="PhoenixInsights" 
              className="h-24 w-24 mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-600 font-semibold mb-2">Contact</p>
            <h2 className="text-4xl font-bold mb-4">Share your context</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Briefly describe your data, analytics or AI challenge. We'll respond with potential approaches, questions, and options for a short discovery call.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition"
                      data-testid="contact-form-name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Company *</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition"
                      data-testid="contact-form-company"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Role *</label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition"
                      data-testid="contact-form-role"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition"
                      data-testid="contact-form-email"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition resize-none"
                    data-testid="contact-form-message"
                  ></textarea>
                </div>

                {formStatus.message && (
                  <div className={`mb-6 p-4 rounded-lg ${formStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`} data-testid="contact-form-status">
                    {formStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-full text-lg font-semibold hover:shadow-xl transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  data-testid="contact-form-submit"
                >
                  {isSubmitting ? 'Sending...' : 'Send via Email'}
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-4 text-purple-600">Direct details</h3>
                <div className="flex items-start space-x-3 mb-4">
                  <Mail className="h-5 w-5 text-purple-600 mt-1" />
                  <a href="mailto:info@phoenixinsightsai.com" className="text-gray-700 hover:text-purple-600 transition">
                    info@phoenixinsightsai.com
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-700">Headquarters</p>
                    <p className="text-gray-600">Hyderabad, India</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-600">
                <p className="text-gray-600 text-sm">
                  We work remotely across India and international time zones. For sensitive risk & compliance topics, we're happy to start with an NDA-backed technical session.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/80">&copy; {new Date().getFullYear()} PhoenixInsights. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition transform hover:scale-110 z-50"
          data-testid="scroll-to-top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}

export default App;