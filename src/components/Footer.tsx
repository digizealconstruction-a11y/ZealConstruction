import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ArrowUp,
  Shield,
  Award,
} from 'lucide-react';
import { ZealLogo } from './ZealLogo';
import { COMPANY_INFO } from '../data/companyData';
import { PageRoute } from '../types';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: 'home' },
    { label: 'Why Choose Us', route: 'why-choose-us' },
    { label: 'Make an Appointment', route: 'appointment' },
    { label: 'Projects', route: 'projects' },
    { label: 'About Us', route: 'about' },
    { label: 'Services', route: 'services' },
    { label: 'Contact Us', route: 'contact' },
  ];

  const serviceLinks = [
    'Residential Construction',
    'Exterior Waterproofing',
    'Interior Waterproofing',
    'Terrace Waterproofing',
    'Villa Roof Waterproofing',
    'Structural Waterproofing',
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Overview */}
          <div className="space-y-4">
            <button
              onClick={() => {
                onNavigate('home');
                scrollToTop();
              }}
              className="text-left focus:outline-none cursor-pointer"
            >
              <ZealLogo variant="full" height={48} />
            </button>
            <p className="text-xs text-slate-400 leading-relaxed pt-2">
              Zeal Construction is a premier civil engineering and waterproofing contracting firm operating across Bengaluru and Chennai. We deliver specialized waterproofing, structural restoration, and residential construction solutions designed for long-term durability.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-amber-400 font-bold">
              <Shield className="w-4 h-4 text-amber-500" />
              <span>Certified Waterproofing Experts</span>
            </div>
            <button
              onClick={() => onOpenQuoteModal()}
              className="mt-2 inline-flex items-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs rounded-xl shadow-md transition-all cursor-pointer"
            >
              Request Free Inspection
            </button>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white text-sm font-extrabold uppercase tracking-wider mb-4 border-b border-amber-500/40 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.route}>
                  <button
                    onClick={() => {
                      onNavigate(link.route);
                      scrollToTop();
                    }}
                    className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors py-1 cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-amber-500" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white text-sm font-extrabold uppercase tracking-wider mb-4 border-b border-amber-500/40 pb-2 inline-block">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {serviceLinks.map((service, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      onNavigate('services');
                      scrollToTop();
                    }}
                    className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors py-1 text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                    <span>{service}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-extrabold uppercase tracking-wider mb-4 border-b border-amber-500/40 pb-2 inline-block">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-relaxed">
                  {COMPANY_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="text-slate-200 hover:text-amber-400 font-bold transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-slate-300 hover:text-amber-400 transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  onNavigate('appointment');
                  scrollToTop();
                }}
                className="w-full py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-500/30 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                Book Appointment Online
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>Copyright © 2025 Zeal Construction. All Rights Reserved.</p>
            <p className="text-[11px] text-slate-600 mt-0.5">
              Water Proofing, Engineers & Contractors • Bengaluru & Chennai
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 bg-slate-900 hover:bg-slate-800 text-amber-400 rounded-xl border border-slate-800 transition-colors flex items-center gap-2 font-bold cursor-pointer"
            aria-label="Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
