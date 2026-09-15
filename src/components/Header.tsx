import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronRight,
  Clock,
  Sparkles,
} from 'lucide-react';
import { ZealLogo } from './ZealLogo';
import { COMPANY_INFO } from '../data/companyData';
import { PageRoute } from '../types';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: 'home' },
    { label: 'Why Choose Us', route: 'why-choose-us' },
    { label: 'Make an Appointment', route: 'appointment' },
    { label: 'Projects', route: 'projects' },
    { label: 'About Us', route: 'about' },
    { label: 'Services', route: 'services' },
    { label: 'Contact Us', route: 'contact' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-900 text-white shadow-xl transition-all duration-300">
      {/* Top Contact Info Bar (Desktop & Tablet) */}
      <div className="hidden md:block bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span className="font-semibold">{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <div className="hidden xl:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>Serving Bengaluru & Chennai</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Mon - Sat: 9:00 AM - 7:00 PM
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-amber-400 font-bold flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Civil Engineers & Contractors
            </span>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation Bar */}
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          scrolled ? 'py-2.5 bg-slate-900/95 backdrop-blur-md' : 'py-3 bg-slate-900'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none group cursor-pointer"
            aria-label="Zeal Construction Home"
          >
            <ZealLogo variant="full" height={44} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`px-3 py-2 text-xs xl:text-sm font-bold tracking-wide rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-amber-400 bg-slate-800/80 shadow-inner border border-amber-500/20'
                      : 'text-slate-200 hover:text-amber-400 hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="hidden xl:flex items-center gap-2 px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-xs rounded-xl border border-slate-700 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Us</span>
            </a>

            <button
              onClick={() => onOpenQuoteModal()}
              className="px-4 py-2.5 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-slate-950 font-extrabold text-xs xl:text-sm rounded-xl shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-3 py-1.5 bg-amber-500 text-slate-950 font-bold text-xs rounded-lg shadow-sm cursor-pointer"
            >
              Get Quote
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-amber-400 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          {/* Quick Contact Header in Drawer */}
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1.5 text-xs text-slate-300">
            <div className="flex items-center justify-between">
              <span className="font-bold text-amber-400">Zeal Construction</span>
              <span className="text-[10px] text-emerald-400 font-medium">Bengaluru, KA</span>
            </div>
            <div className="flex items-center justify-between pt-1">
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="flex items-center gap-1.5 text-white font-bold text-xs hover:text-amber-400"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                {COMPANY_INFO.phone}
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-slate-400 hover:text-amber-400"
              >
                Email Us
              </a>
            </div>
          </div>

          {/* Mobile Nav Links */}
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-bold text-sm transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : 'text-slate-200 hover:bg-slate-900 hover:text-amber-400'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-slate-500'}`} />
                </button>
              );
            })}
          </div>

          {/* Mobile Bottom Action Buttons */}
          <div className="pt-2 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                onOpenQuoteModal();
                setMobileMenuOpen(false);
              }}
              className="py-3 px-4 bg-amber-500 text-slate-950 font-black text-center text-xs rounded-xl shadow-md cursor-pointer"
            >
              Get a Free Quote
            </button>
            <button
              onClick={() => handleNavClick('appointment')}
              className="py-3 px-4 bg-slate-800 text-slate-100 font-bold text-center text-xs rounded-xl border border-slate-700 cursor-pointer"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
