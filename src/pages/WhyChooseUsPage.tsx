import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  Clock,
  MessageSquare,
  Lightbulb,
  Users,
  Shield,
  ArrowRight,
  UserCheck,
  Trophy,
  HardHat,
  Star,
} from 'lucide-react';
import {
  WHY_CHOOSE_REASONS,
  TESTIMONIALS,
  TRUST_BADGES,
} from '../data/companyData';
import { PageRoute } from '../types';

interface WhyChooseUsPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export const WhyChooseUsPage: React.FC<WhyChooseUsPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Award':
        return <Award className="w-6 h-6 text-amber-500" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-amber-500" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-amber-500" />;
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-amber-500" />;
      case 'Users':
        return <Users className="w-6 h-6 text-amber-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-amber-500" />;
      default:
        return <Shield className="w-6 h-6 text-amber-500" />;
    }
  };

  const getBadgeIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-amber-500" />;
      case 'UserCheck':
        return <UserCheck className="w-8 h-8 text-amber-500" />;
      case 'Trophy':
        return <Trophy className="w-8 h-8 text-amber-500" />;
      case 'HardHat':
        return <HardHat className="w-8 h-8 text-amber-500" />;
      default:
        return <Award className="w-8 h-8 text-amber-500" />;
    }
  };

  return (
    <div className="space-y-16 pb-16">
      {/* PAGE HERO */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.15),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-amber-500" />
            Engineering Excellence
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Building Dreams into Reality
          </h1>
          <p className="text-xl text-amber-400 font-semibold">
            Your trusted partner in residential construction.
          </p>
          <p className="text-slate-300 max-w-3xl text-sm sm:text-base leading-relaxed pt-2">
            Our specialized treatments are specifically formulated to protect Bengaluru properties against heavy monsoon cycles, keeping your terraces, basements, and sumps dry and secure.
          </p>
        </div>
      </section>

      {/* TRUST LABELS DISPLAY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {TRUST_BADGES.map((badge, idx) => (
            <div
              key={idx}
              className="p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 text-center space-y-3 flex flex-col items-center justify-center shadow-lg hover:border-amber-500/50 transition-all"
            >
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                {getBadgeIcon(badge.icon)}
              </div>
              <h4 className="text-sm font-extrabold text-slate-100">{badge.label}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 6 FEATURE CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-amber-600 font-bold text-xs uppercase tracking-widest block">
            Why Choose Us
          </span>
          <h2 className="text-3xl font-black text-slate-900">
            Our Core Pillars of Service
          </h2>
          <p className="text-slate-600 text-sm">
            Every project undertaken by Zeal Construction adheres strictly to these six foundational promises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_REASONS.map((reason) => (
            <div
              key={reason.id}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all space-y-4"
            >
              <div className="p-3.5 rounded-xl bg-amber-50 text-amber-600 inline-block border border-amber-200">
                {getIcon(reason.iconName)}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{reason.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">
              Verified Feedback
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Hear From Our Satisfied Clients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-slate-800/90 p-6 sm:p-8 rounded-2xl border border-slate-700 space-y-4 relative flex flex-col justify-between"
              >
                <div className="flex text-amber-400 gap-1 text-sm">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-200 text-sm italic leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="pt-2 border-t border-slate-700/80">
                  <p className="font-extrabold text-amber-400 text-sm">{t.author}</p>
                  <p className="text-xs text-slate-400">{t.role} {t.location && `• ${t.location}`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRONG CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white p-8 sm:p-12 rounded-3xl border border-slate-800 text-center max-w-4xl mx-auto space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-black text-amber-400">
            Start Your Project Today!
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Ready to build your vision? Our expert team is here to guide you through every step of your construction journey. Let’s transform your ideas into reality.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenQuoteModal()}
              className="py-3.5 px-8 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm rounded-xl shadow-lg transition-all cursor-pointer"
            >
              Get a Free Quote
            </button>
            <button
              onClick={() => onNavigate('appointment')}
              className="py-3.5 px-8 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm rounded-xl border border-slate-700 transition-colors cursor-pointer"
            >
              Make an Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
