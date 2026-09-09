import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from '../../context/RouterContext';
import { Button } from '../ui/Button';
import { getFeaturedVideo, VIDEO_CATALOG } from '../../data/videoData';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize2,
  Subtitles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Database,
  Cpu,
  Layers,
  Zap,
  Activity,
  AlertTriangle,
  Lock
} from 'lucide-react';

export function ProductStoryVideo() {
  const { navigate } = useRouter();
  const defaultVideo = getFeaturedVideo();

  const [selectedVideoId, setSelectedVideoId] = useState(defaultVideo.id);
  const videoData = VIDEO_CATALOG.find((v) => v.id === selectedVideoId) || defaultVideo;

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(48); // 48 seconds simulation
  const [showCaptions, setShowCaptions] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeStageIdx, setActiveStageIdx] = useState(0);

  // Playback loop with strict timer cleanup
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  // Unmount cleanup: pause and reset playback state so no execution lingers
  useEffect(() => {
    return () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };
  }, []);

  // Sync active stage based on time
  useEffect(() => {
    const stageCutoffs = [0, 8, 16, 25, 34, 41, 48];
    for (let i = stageCutoffs.length - 1; i >= 0; i--) {
      if (currentTime >= stageCutoffs[i]) {
        setActiveStageIdx(i);
        break;
      }
    }
  }, [currentTime]);

  const currentCaption = videoData.captions?.find(
    (c) => currentTime >= c.start && currentTime <= c.end
  );

  const currentStage = videoData.workflowStages?.[activeStageIdx] || videoData.workflowStages?.[0] || {
    time: "0:00",
    label: "Workflow Initializing",
    desc: "Awaiting stage definition."
  };

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section id="product-story-video" className="py-20 md:py-24 bg-[#07111F] text-white border-b border-[#1E3553] relative overflow-hidden isolate">
      {/* Ambient background lighting */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-teal-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1B2A] border border-teal-500/30 text-teal-300 text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Play className="w-3.5 h-3.5 text-teal-400 fill-teal-400" />
            <span>PRODUCT STORY & ARCHITECTURE OVERVIEW</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            See How Workflows Transform Into AI Operations
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A 48-second architectural walkthrough: from fragmented spreadsheets and manual delays into connected data, autonomous agents, and human approval gates.
          </p>
        </div>

        {/* Cinematic Video Player Container */}
        <div className="bg-[#0D1B2A] rounded-2xl border border-[#1E3553] shadow-2xl overflow-hidden relative">
          
          {/* Top Video Identity Bar */}
          <div className="px-5 py-3.5 border-b border-[#1E3553] bg-[#07111F]/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                {videoData.title}
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400 bg-[#0D1B2A] px-2.5 py-0.5 rounded border border-[#1E3553]">
              Duration: {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          {/* Main Visual Display Canvas */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] md:aspect-[16/8] bg-[#07111F] flex items-center justify-center p-6 overflow-hidden">
            
            {/* When not playing and at start: Poster Frame with Big Play Button */}
            {!isPlaying && currentTime === 0 && (
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#07111F] via-[#07111F]/80 to-[#07111F]/90 flex flex-col items-center justify-center p-6 text-center cursor-pointer"
                onClick={handlePlayToggle}
              >
                <div className="w-20 h-20 rounded-2xl bg-teal-600/90 text-white flex items-center justify-center shadow-xl shadow-teal-500/30 hover:scale-105 transition-transform border border-teal-400/50 mb-5 group">
                  <Play className="w-8 h-8 ml-1 text-white fill-white group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 max-w-xl">
                  Watch the 48-Second PhoenixInsights Workflow Overview
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-md mb-4">
                  Interactive simulation showing business problem, data ingestion, AI reasoning, and human managerial approval.
                </p>
                <span className="text-xs font-mono text-teal-400 bg-[#0D1B2A] px-3 py-1 rounded-full border border-teal-500/40">
                  Click Anywhere to Play (Audio Muted by Default)
                </span>
              </div>
            )}

            {/* Live Interactive Workflow Canvas Animation */}
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
              
              {/* Active Stage Indicator Card */}
              <div className="w-full bg-[#0D1B2A]/95 rounded-2xl border border-teal-500/40 p-6 sm:p-8 shadow-2xl backdrop-blur-md text-left transition-all">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-4 border-b border-[#1E3553] mb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold uppercase text-teal-400 bg-teal-950/80 px-2.5 py-0.5 rounded border border-teal-800">
                      PHASE 0{activeStageIdx + 1} OF 07
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Timestamp: {currentStage.time}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-400">
                    {activeStageIdx === 4 ? "★ MANDATORY HUMAN GATE ACTIVE" : "Automated Execution Stream"}
                  </span>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-bold ${
                    activeStageIdx === 0 ? 'bg-red-950 text-red-400 border border-red-800' :
                    activeStageIdx === 4 ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/30' :
                    activeStageIdx === 6 ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' :
                    'bg-teal-950 text-teal-400 border border-teal-800'
                  }`}>
                    {activeStageIdx === 0 && <AlertTriangle className="w-6 h-6" />}
                    {activeStageIdx === 1 && <Database className="w-6 h-6" />}
                    {activeStageIdx === 2 && <Cpu className="w-6 h-6" />}
                    {activeStageIdx === 3 && <Layers className="w-6 h-6" />}
                    {activeStageIdx === 4 && <ShieldCheck className="w-6 h-6" />}
                    {activeStageIdx === 5 && <Zap className="w-6 h-6" />}
                    {activeStageIdx === 6 && <Activity className="w-6 h-6" />}
                  </div>

                  <div>
                    <h4 className="text-lg sm:text-xl font-extrabold text-white mb-1">
                      {currentStage.label}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {currentStage.desc}
                    </p>
                  </div>
                </div>

                {/* Animated progress flow markers */}
                <div className="grid grid-cols-7 gap-1.5 pt-3 border-t border-[#1E3553]">
                  {videoData.workflowStages.map((s, idx) => (
                    <div
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === activeStageIdx
                          ? idx === 4 ? 'bg-amber-400 ring-2 ring-amber-400/40' : 'bg-teal-400 ring-2 ring-teal-400/40'
                          : idx < activeStageIdx
                          ? 'bg-teal-700'
                          : 'bg-slate-800'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Subtitles / Synchronised Captions Overlay */}
              {showCaptions && currentCaption && (
                <div className="mt-4 px-4 py-2 rounded-lg bg-black/80 border border-[#1E3553] text-xs sm:text-sm font-medium text-slate-200 text-center animate-in fade-in">
                  "{currentCaption.text}"
                </div>
              )}
            </div>
          </div>

          {/* Video Control Bar */}
          <div className="bg-[#07111F] p-4 border-t border-[#1E3553]">
            {/* Scrubber Timeline Bar */}
            <div
              className="w-full h-2 bg-slate-800 rounded-full cursor-pointer mb-4 relative overflow-hidden group"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const newRatio = clickX / rect.width;
                setCurrentTime(Math.floor(newRatio * duration));
              }}
            >
              <div
                className="h-full bg-gradient-to-r from-teal-500 via-cyan-400 to-amber-400 transition-all"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              />
            </div>

            {/* Control Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePlayToggle}
                  className="p-2 rounded-lg bg-teal-600 text-white hover:bg-teal-500 transition-colors cursor-pointer"
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                </button>

                <button
                  onClick={handleReset}
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                  title="Restart Video"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <span className="text-xs font-mono text-slate-400 ml-2">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowCaptions(!showCaptions)}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono font-bold border transition-colors cursor-pointer ${
                    showCaptions
                      ? 'bg-teal-950/80 text-teal-300 border-teal-800'
                      : 'bg-slate-900 text-slate-500 border-slate-800'
                  }`}
                >
                  <Subtitles className="w-3.5 h-3.5 inline mr-1" />
                  CC
                </button>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => navigate('/poc')}
                  icon={ArrowRight}
                  className="text-xs font-bold"
                >
                  Show Us Your Workflow
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Library Catalog Strip (Section 26 Requirement) */}
        <div className="mt-8 pt-6 border-t border-[#1E3553] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-mono uppercase font-bold text-teal-400">Video Architecture:</span>
            <span>Supports local video files via <code>public/videos/</code> or modular video streaming.</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono text-slate-500">Other Available Workflows:</span>
            {VIDEO_CATALOG.slice(1, 4).map((v) => (
              <button
                key={v.id}
                onClick={() => {
                  setSelectedVideoId(v.id);
                  handleReset();
                }}
                className="px-2.5 py-1 rounded-md bg-[#0D1B2A] border border-[#1E3553] hover:border-teal-500/50 text-slate-300 text-[11px] transition-colors cursor-pointer"
              >
                {v.category}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
