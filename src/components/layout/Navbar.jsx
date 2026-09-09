import React, { useState, useEffect } from 'react';
import { useRouter } from '../../context/RouterContext';
import { Button } from '../ui/Button';
import { Menu, X, ChevronRight } from 'lucide-react';

export function Navbar() {
  const { currentPath, navigate } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'AI Workforce', path: '/ai-workforce' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Technology', path: '/technology' },
    { label: 'POC', path: '/poc' },
    { label: 'About', path: '/about' },
  ];

  const handleNavClick = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07111F]/95 backdrop-blur-md shadow-xl border-b border-[#1E3553] py-2.5 sm:py-3'
          : 'bg-[#07111F]/90 backdrop-blur-sm border-b border-[#1E3553]/80 py-3 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Official PhoenixInsights Logo */}
          <div
            onClick={() => handleNavClick('/')}
            className="flex items-center cursor-pointer group shrink-0 py-1 relative z-20 isolate"
            title="PhoenixInsights - Home"
          >
            <img
              src="/phoenixinsights-logo-white.png"
              alt="PhoenixInsights - From Data to Decisions at Scale"
              className="h-8 sm:h-9 md:h-10 w-auto max-w-[200px] sm:max-w-[240px] md:max-w-[270px] object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              style={{ aspectRatio: '738/218', imageRendering: '-webkit-optimize-contrast' }}
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = currentPath === item.path || (item.path !== '/' && currentPath.startsWith(item.path));
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'text-teal-300 bg-teal-950/70 border border-teal-500/40 shadow-sm font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Button
              variant="primary"
              size="sm"
              className="text-xs sm:text-sm font-bold px-4 py-2 shadow-lg shadow-teal-500/20"
              onClick={() => handleNavClick('/poc')}
            >
              Show Us Your Workflow
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-[#0D1B2A] border-b border-[#1E3553] shadow-2xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = currentPath === item.path || (item.path !== '/' && currentPath.startsWith(item.path));
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold text-left transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-teal-950/70 text-teal-300 font-bold border border-teal-500/40'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#1E3553] space-y-2">
            <Button
              variant="primary"
              size="md"
              className="w-full justify-center shadow-lg shadow-teal-500/20"
              onClick={() => handleNavClick('/poc')}
            >
              Show Us Your Workflow
            </Button>
            <Button
              variant="outline"
              size="md"
              className="w-full justify-center text-sm border-[#1E3553] text-slate-300 hover:text-white"
              onClick={() => handleNavClick('/contact')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
