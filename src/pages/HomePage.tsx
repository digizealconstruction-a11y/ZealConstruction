import React, { useState } from 'react';
import {
  Shield,
  ArrowRight,
  Phone,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Building2,
  Droplets,
  Award,
  Layers,
  MapPin,
  Sparkles,
  Home as HomeIcon,
  Clock,
  UserCheck,
  Trophy,
  HardHat,
  Hammer,
  FileCheck,
  Ruler,
  Check,
  Star,
  Quote,
} from 'lucide-react';
import {
  COMPANY_INFO,
  WATERPROOFING_APPLICATIONS,
  FEATURED_SERVICES,
  ALL_SERVICES,
  PROJECTS,
  TESTIMONIALS,
  WHY_CHOOSE_REASONS,
} from '../data/companyData';
import { PageRoute } from '../types';
import heroBuildingImg from '../assets/images/commercial_building_hero_1786531195860.jpg';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // 6 Services corresponding to template "Our Services" grid
  const templateServices = [
    {
      title: 'Residential Construction',
      desc: 'New home builds, villas & custom structural works.',
      icon: <HomeIcon className="w-6 h-6 text-amber-400" />,
      category: 'construction',
    },
    {
      title: 'Commercial Buildings',
      desc: 'Office towers, retail malls & corporate spaces.',
      icon: <Building2 className="w-6 h-6 text-amber-400" />,
      category: 'construction',
    },
    {
      title: 'Exterior Waterproofing',
      desc: 'Weather-proof elastomeric acrylic chemical barrier.',
      icon: <Droplets className="w-6 h-6 text-amber-400" />,
      category: 'waterproofing',
    },
    {
      title: 'Terrace & Villa Roof Protection',
      desc: 'Monolithic heat-reflective & UV-resistant terrace coats.',
      icon: <Layers className="w-6 h-6 text-amber-400" />,
      category: 'waterproofing',
    },
    {
      title: 'Structural Design & Waterproofing',
      desc: 'Deep basement, footing & retaining wall chemical tanking.',
      icon: <Ruler className="w-6 h-6 text-amber-400" />,
      category: 'structural',
    },
    {
      title: 'UG Sump & Tank Lining',
      desc: 'Food-grade, non-toxic crystalline seal for drinking water.',
      icon: <Shield className="w-6 h-6 text-amber-400" />,
      category: 'waterproofing',
    },
  ];

  // Why choose pill items from template
  const whyChoosePills = [
    {
      title: '10+ Years of Experience',
      icon: <Trophy className="w-5 h-5 text-amber-500" />,
      bgColor: 'bg-amber-100/60',
    },
    {
      title: 'Licensed & Insured Engineers',
      icon: <Shield className="w-5 h-5 text-blue-600" />,
      bgColor: 'bg-blue-100/60',
    },
    {
      title: 'Skilled Team of Civil Experts',
      icon: <HardHat className="w-5 h-5 text-amber-600" />,
      bgColor: 'bg-amber-100/60',
    },
    {
      title: 'High-Quality Certified Materials',
      icon: <HomeIcon className="w-5 h-5 text-amber-500" />,
      bgColor: 'bg-amber-100/60',
    },
    {
      title: 'On-Time Project Delivery',
      icon: <Clock className="w-5 h-5 text-amber-600" />,
      bgColor: 'bg-amber-100/60',
    },
    {
      title: 'Transparent Pricing & Warranties',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
      bgColor: 'bg-emerald-100/60',
    },
  ];

  return (
    <div className="space-y-0 pb-0">
      {/* 1. HERO SECTION (DARK WITH CONSTRUCTION BACKGROUND & OVERLAPPING SERVICES) */}
      <section className="relative bg-slate-950 text-white overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-36">
        {/* Background Image with 98% Opacity */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBuildingImg}
            alt="Zeal Construction Commercial Glass Building"
            className="w-full h-full object-cover object-center opacity-[0.98]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/70 to-slate-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              <Shield className="w-4 h-4 text-amber-400" />
              <span>Civil Engineers & Contractors • Bengaluru</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Building Strong Foundations <br className="hidden sm:inline" />
              for the <span className="text-amber-400">Future</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Trusted residential & commercial waterproofing and construction experts delivering quality, structural safety, and on-time results across Bengaluru.
            </p>

            {/* CTA Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenQuoteModal()}
                className="py-3.5 px-8 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold shadow-amber-500/20 text-sm sm:text-base rounded-xl shadow-xl flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Get a Free Quote</span>
              </button>

              <button
                onClick={() => onNavigate('projects')}
                className="py-3.5 px-8 bg-slate-900/80 hover:bg-slate-800 text-slate-100 border border-slate-700 font-bold text-sm sm:text-base rounded-xl backdrop-blur-md flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>View Our Projects</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR SERVICES SECTION (FLOATING / OVERLAPPING CARDS GRID) */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 lg:-mt-24 mb-16">
        <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-800 text-white shadow-2xl rounded-3xl p-6 sm:p-10 space-y-8">
          <div>
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block mb-1">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templateServices.map((srv, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-800/80 text-white border border-slate-700/80 hover:border-amber-500/50 transition-all duration-300 space-y-3 group cursor-pointer"
                onClick={() => onNavigate('services')}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700">
                    {srv.icon}
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    {srv.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pl-0.5">
                  {srv.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-2 text-center border-t border-slate-700/50">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:underline cursor-pointer"
            >
              <span>Explore All Waterproofing & Construction Offerings</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>


      {/* 3. WHY CHOOSE ZEAL CONSTRUCTION (LIGHT CONCRETE BG WITH ENGINEER PHOTO & PILLS) */}
      <section className="bg-slate-100 py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-2">
            <span className="text-amber-600 font-extrabold text-xs uppercase tracking-widest block">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Why Choose Zeal Construction
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl">
              We bring specialized chemical formulations and civil engineering expertise to protect your residential and commercial assets in Bengaluru.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Image: Engineer with Hardhat holding Blueprints */}
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-2xl border border-slate-300 h-[380px] sm:h-[420px]">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80"
                alt="Zeal Construction Lead Engineer"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-700 text-white space-y-1">
                <p className="font-extrabold text-amber-400 text-sm">Lakshminarayanan & Engineering Team</p>
                <p className="text-xs text-slate-300">Supervising every waterproofing coat & civil foundation on site.</p>
              </div>
            </div>

            {/* Right Side: Grid of Clean White Pill Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChoosePills.map((pill, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3.5 hover:shadow-md hover:border-amber-400 transition-all"
                >
                  <div className={`p-2.5 rounded-xl ${pill.bgColor} flex-shrink-0`}>
                    {pill.icon}
                  </div>
                  <span className="font-extrabold text-slate-900 text-xs sm:text-sm">
                    {pill.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR PROJECTS SECTION (DARK SECTION WITH 4 PROJECT CARDS) */}
      <section className="bg-slate-950 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block mb-1">
                Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Our Projects
              </h2>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-amber-400 text-xs font-bold rounded-xl border border-slate-800 transition-colors cursor-pointer self-start sm:self-auto"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Grid of 4 Project Cards with Bottom Overlay Titles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECTS.map((proj) => (
              <div
                key={proj.id}
                onClick={() => onNavigate('projects')}
                className="group relative rounded-2xl overflow-hidden border border-slate-800 h-72 cursor-pointer shadow-xl hover:border-amber-400 transition-all duration-300"
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <span className="text-[10px] text-amber-400 font-extrabold uppercase tracking-wider block">
                    {proj.clientType} • {proj.location}
                  </span>
                  <h3 className="text-lg font-black text-white leading-tight group-hover:text-amber-300 transition-colors">
                    {proj.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 text-center">
            <button
              onClick={() => onNavigate('projects')}
              className="py-3 px-8 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-amber-400 font-bold text-xs rounded-xl border border-slate-800 transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. CLIENT TESTIMONIALS SECTION */}
      <section className="relative bg-slate-900 text-white py-16 sm:py-20 overflow-hidden">
        {/* Background building photo on right side */}
        <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block z-0 pointer-events-none opacity-20">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
            alt="Modern Architecture"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-2">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block">
              Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Client Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t, idx) => (
              <div
                key={t.id}
                className="bg-slate-800/90 backdrop-blur-md p-6 rounded-2xl border border-slate-700/80 space-y-4 flex flex-col justify-between shadow-lg hover:border-amber-500/50 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex text-amber-400 gap-1 text-sm">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-700/80 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center border border-amber-500/30">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-amber-400">{t.author}</p>
                    <p className="text-[10px] text-slate-400">{t.role} {t.location && `• ${t.location}`}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="py-3.5 px-8 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm rounded-xl shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Request a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM BANNER CTA (PLANNING A CONSTRUCTION PROJECT?) */}
      <section className="relative bg-slate-950 text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
            alt="Modern Construction Architecture"
            className="w-full h-full object-cover opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Planning a Construction Project?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Let Zeal Construction bring your vision to life with expert civil engineering and permanent waterproofing solutions.
          </p>
          <div className="pt-2 flex justify-center">
            <button
              onClick={() => onOpenQuoteModal()}
              className="py-4 px-10 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-slate-950 font-extrabold text-base rounded-xl shadow-2xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer inline-flex items-center gap-2"
            >
              <span>Request a Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
