import React from 'react';
import {
  Building2,
  CheckCircle2,
  Shield,
  Award,
  Users,
  Clock,
  ArrowRight,
  Star,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';
import { COMPANY_INFO, TESTIMONIALS } from '../data/companyData';
import { PageRoute } from '../types';

interface AboutUsPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  return (
    <div className="space-y-16 pb-16">
      {/* PAGE HERO */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.12),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Building2 className="w-4 h-4 text-amber-500" />
            Company Profile
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            About Us
          </h1>
          <p className="text-amber-400 font-extrabold text-lg">
            Zeal Construction • Water Proofing, Engineers & Contractors
          </p>
        </div>
      </section>

      {/* FEATURED PROJECT SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl overflow-hidden border border-slate-800 shadow-xl grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 relative min-h-[320px]">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
              alt="Zeal Construction Traya Commercial Project"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="px-2.5 py-1 bg-amber-500 text-slate-950 text-[10px] font-black uppercase rounded mb-1 inline-block">
                Project Milestone
              </span>
              <h3 className="text-2xl font-black text-white">Traya Commercial</h3>
              <p className="text-xs text-amber-300 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> Bangalore Landmark Build
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-center space-y-4">
            <h3 className="text-xl font-bold text-amber-400">Pioneering Engineering Standards</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              At Zeal Construction, under the direct technical stewardship of Lakshminarayanan, we combine advanced civil engineering practices with state-of-the-art waterproofing formulations.
            </p>
            <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Specialized Structural Waterproofing Chemistry</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Dedicated Bengalurean On-Site Supervision</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Transparent Milestone Pricing & Zero Hidden Costs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR JOURNEY THROUGH TIME */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-wider">
            <Clock className="w-4 h-4" />
            Our History
          </div>
          <h2 className="text-3xl font-black text-slate-900">
            Our Journey Through Time
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
            Founded several years ago, our company has established a strong reputation in residential construction. From modest beginnings, we have steadily expanded our expertise, delivering quality homes that meet client needs. Our commitment to innovation and excellence has led to numerous successful projects, showcasing our growth and dedication to the craft.
          </p>
        </div>
      </section>

      {/* HEAR FROM OUR SATISFIED CLIENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-amber-600 font-bold text-xs uppercase tracking-widest">
            Client Testimonials
          </span>
          <h2 className="text-3xl font-black text-slate-900">
            Hear From Our Satisfied Clients
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-4"
            >
              <div className="flex text-amber-500 gap-1 text-sm">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>
              <p className="text-slate-700 text-xs sm:text-sm italic leading-relaxed">
                "{t.quote}"
              </p>
              <div className="pt-2 border-t border-slate-100">
                <p className="font-extrabold text-slate-900 text-sm">— {t.author}</p>
                <p className="text-xs text-slate-500">{t.role} {t.location && `• ${t.location}`}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-6 max-w-3xl mx-auto shadow-xl">
          <h2 className="text-3xl font-black text-white">
            Ready to bring your vision to life?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Contact Zeal Construction today for expert residential construction, structural waterproofing, and site inspections in Bengaluru.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="py-3.5 px-8 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm rounded-xl shadow-md transition-all cursor-pointer"
            >
              Contact Us
            </button>
            <button
              onClick={() => onOpenQuoteModal()}
              className="py-3.5 px-8 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm rounded-xl border border-slate-700 transition-all cursor-pointer"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
