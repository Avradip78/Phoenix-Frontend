import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import {
  Database,
  Layers,
  LineChart,
  Sparkles,
  Cpu,
  GitBranch,
  FileCode,
  Activity,
  ArrowRight,
  Info
} from 'lucide-react';

export function TechnologySection() {
  const { navigate } = useRouter();

  const layers = [
    {
      num: "01",
      layer: "DATA PERSISTENCE & STORAGE",
      desc: "Relational transactional databases, modern cloud lakehouses, and high-performance object stores.",
      examples: "PostgreSQL, Snowflake, BigQuery, AWS S3, ClickHouse",
      icon: Database,
      accent: "blue",
      badgeClass: "bg-blue-950/80 text-blue-300 border-blue-800/80",
      iconClass: "bg-blue-950/80 text-blue-400 border border-blue-800/80"
    },
    {
      num: "02",
      layer: "DATA ENGINEERING & STREAMING",
      desc: "Deterministic ETL/ELT pipelines, event-driven streaming buses, and verified schema contracts.",
      examples: "Python, SQL, Apache Kafka, dbt, Apache Airflow",
      icon: Layers,
      accent: "cyan",
      badgeClass: "bg-cyan-950/80 text-cyan-300 border-cyan-800/80",
      iconClass: "bg-cyan-950/80 text-cyan-400 border border-cyan-800/80"
    },
    {
      num: "03",
      layer: "ANALYTICS & MACHINE LEARNING",
      desc: "Supervised & unsupervised models, time-series forecasting, anomaly detection, and classification engines.",
      examples: "Scikit-Learn, XGBoost, PyTorch, Statistical Inferences",
      icon: LineChart,
      accent: "blue",
      badgeClass: "bg-blue-950/80 text-blue-300 border-blue-800/80",
      iconClass: "bg-blue-950/80 text-blue-400 border border-blue-800/80"
    },
    {
      num: "04",
      layer: "FOUNDATION MODELS & RAG",
      desc: "State-of-the-art LLMs, hybrid semantic retrieval, private vector embeddings, and chunking strategies.",
      examples: "Claude, GPT-4o, Llama 3, pgvector, Pinecone, ChromaDB",
      icon: Sparkles,
      accent: "violet",
      badgeClass: "bg-violet-950/80 text-violet-300 border-violet-800/80",
      iconClass: "bg-violet-950/80 text-violet-400 border border-violet-800/80"
    },
    {
      num: "05",
      layer: "SPECIALIZED AGENT ARCHITECTURES",
      desc: "Autonomous planners, structured schema enforcement, deterministic state machines, and task decoupling.",
      examples: "LangGraph, Pydantic, Custom State Graphs, Structured JSON",
      icon: Cpu,
      accent: "violet",
      badgeClass: "bg-violet-950/80 text-violet-300 border-violet-800/80",
      iconClass: "bg-violet-950/80 text-violet-400 border border-violet-800/80"
    },
    {
      num: "06",
      layer: "CENTRAL ORCHESTRATION & CONTROL",
      desc: "Dependency management graphs, retry policies, distributed state persistence, and human-in-the-loop gates.",
      examples: "Temporal, Celery, Custom Control Plane, Webhook Handlers",
      icon: GitBranch,
      accent: "teal",
      badgeClass: "bg-teal-950/80 text-teal-300 border-teal-800/80",
      iconClass: "bg-teal-950/80 text-teal-400 border border-teal-800/80"
    },
    {
      num: "07",
      layer: "ENTERPRISE PROTOCOLS & APIS",
      desc: "Authenticated enterprise connectors, bi-directional event webhooks, and secure API gateways.",
      examples: "REST, GraphQL, gRPC, OAuth 2.0, Webhooks, Mutual TLS",
      icon: FileCode,
      accent: "cyan",
      badgeClass: "bg-cyan-950/80 text-cyan-300 border-cyan-800/80",
      iconClass: "bg-cyan-950/80 text-cyan-400 border border-cyan-800/80"
    },
    {
      num: "08",
      layer: "TELEMETRY & OBSERVABILITY",
      desc: "End-to-end request tracing, token economics, latency alerts, and immutable audit logging.",
      examples: "OpenTelemetry, Prometheus, Datadog, Immutable Cryptographic Logs",
      icon: Activity,
      accent: "teal",
      badgeClass: "bg-teal-950/80 text-teal-300 border-teal-800/80",
      iconClass: "bg-teal-950/80 text-teal-400 border border-teal-800/80"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#07111F] border-b border-[#1E3553] text-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="TECHNICAL ARCHITECTURE"
          badgeVariant="teal"
          title="Technology That Supports the Architecture"
          subtitle="A modular, robust multi-tier stack engineered for enterprise resilience, deterministic execution, and continuous observability."
          align="center"
          className="mb-14"
        />

        {/* Layered Stack Container */}
        <div className="bg-[#0D1B2A] rounded-2xl border border-[#1E3553] p-6 sm:p-10 shadow-2xl mb-8">
          <div className="space-y-3">
            {layers.map((l, idx) => {
              const Icon = l.icon;
              return (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-[#07111F] border border-[#1E3553] hover:border-teal-400/60 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-left group shadow-sm"
                >
                  <div className="flex items-center gap-4 min-w-[280px]">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${l.iconClass}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-slate-400 block">
                        TIER {l.num}
                      </span>
                      <h4 className="text-sm font-bold text-white leading-tight">
                        {l.layer}
                      </h4>
                    </div>
                  </div>

                  <div className="text-xs text-slate-300 max-w-md leading-relaxed">
                    {l.desc}
                  </div>

                  <div className="text-left md:text-right shrink-0">
                    <span className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded border inline-block ${l.badgeClass}`}>
                      {l.examples}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mandatory Technology Selection Note */}
          <div className="mt-8 pt-6 border-t border-[#1E3553] flex items-center gap-3 text-xs text-slate-400 text-left">
            <Info className="w-4 h-4 text-teal-400 shrink-0" />
            <span className="font-medium text-slate-200">
              Technology choices are selected based on the workflow and client environment.
            </span>
          </div>
        </div>

        {/* Explore Tech Link */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="md"
            onClick={() => navigate('/technology')}
            icon={ArrowRight}
            className="text-xs font-bold border-[#1E3553] text-slate-200 hover:text-white"
          >
            Explore Full Technology Blueprint
          </Button>
        </div>

      </div>
    </section>
  );
}
