import React, { useState } from 'react';
import {
  Droplets,
  CheckCircle2,
  ArrowRight,
  Shield,
  Layers,
  Sparkles,
  Award,
  Building,
  Check,
} from 'lucide-react';
import {
  ALL_SERVICES,
  WATERPROOFING_APPLICATIONS,
  PROJECTS,
} from '../data/companyData';
import { PageRoute } from '../types';

interface ServicesPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'waterproofing' | 'construction'>('all');

  const filteredServices = ALL_SERVICES.filter((s) => {
    if (selectedCategory === 'all') return true;
    return s.category === selectedCategory;
  });

  return (
    <div className="space-y-16 pb-16">
      {/* PAGE HERO */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.12),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Droplets className="w-4 h-4 text-amber-500" />
            Your Vision, Our Expertise
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Transforming Spaces with Quality Craftsmanship
          </h1>
          <p className="text-slate-300 max-w-3xl text-base leading-relaxed">
            Discover how we bring your construction ideas to life with innovative solutions and dedicated service.
          </p>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 space-y-4 text-center max-w-4xl mx-auto shadow-sm">
          <span className="text-amber-600 font-extrabold text-xs uppercase tracking-widest block">
            Construction & Waterproofing Solutions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Expert Residential Construction & Structural Protection
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We provide comprehensive solutions in residential construction, focusing on quality and durability. Our waterproofing services ensure that your spaces are protected from moisture, enhancing the longevity and safety of your projects.
          </p>
        </div>
      </section>

      {/* SERVICE FILTER & GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-2xl font-black text-slate-900">Key Offerings</h3>
            <p className="text-xs text-slate-500">Comprehensive list of specialized services in Bengaluru</p>
          </div>

          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200 text-xs font-bold">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Offerings
            </button>
            <button
              onClick={() => setSelectedCategory('waterproofing')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                selectedCategory === 'waterproofing'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Waterproofing
            </button>
            <button
              onClick={() => setSelectedCategory('construction')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                selectedCategory === 'construction'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Construction
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="px-2 py-0.5 bg-amber-500 text-slate-950 font-black text-[10px] uppercase rounded mb-1 inline-block">
                    {service.category}
                  </span>
                  <h4 className="text-lg font-extrabold text-white">
                    {service.title}
                  </h4>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <p className="text-slate-700 text-xs font-bold italic">
                    "{service.shortDesc}"
                  </p>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {service.fullDesc}
                  </p>
                </div>

                {service.keyFeatures && (
                  <ul className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                    {service.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <button
                  onClick={() => onOpenQuoteModal(service.title)}
                  className="w-full py-2.5 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Quote for Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE OUR SERVICES SECTION */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">
              Service Guarantees
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Why Choose Our Services?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                01
              </div>
              <h4 className="text-lg font-bold text-white">Quality Craftsmanship</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                We prioritize quality in every project. Using premium materials and skilled professionals, we ensure long-lasting results you can depend on.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                02
              </div>
              <h4 className="text-lg font-bold text-white">Innovative Solutions</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our approach combines modern technology and creative processes to deliver unique and efficient solutions tailored to your needs.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                03
              </div>
              <h4 className="text-lg font-bold text-white">Transparent Communication</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                We keep you informed throughout the project, providing updates and listening to your feedback to ensure your satisfaction.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                04
              </div>
              <h4 className="text-lg font-bold text-white">Timely Project Delivery</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                We respect your time and commitment. Our team works efficiently to ensure projects are completed on schedule and with minimal disruption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS IN SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-amber-600 font-bold text-xs uppercase tracking-widest">
            Proven Performance
          </span>
          <h2 className="text-3xl font-black text-slate-900">
            Explore Our Latest Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
            <span className="px-3 py-1 bg-amber-500 text-slate-950 text-xs font-bold rounded-md uppercase">
              Landmark Project
            </span>
            <h3 className="text-2xl font-bold text-slate-900">Modern VR MALL</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We are proud to have delivered specialized services for VR Mall Chennai, one of South India’s most architecturally significant and high-traffic landmarks.
            </p>
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:underline cursor-pointer"
            >
              <span>View Full Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
            <span className="px-3 py-1 bg-amber-500 text-slate-950 text-xs font-bold rounded-md uppercase">
              Commercial Office
            </span>
            <h3 className="text-2xl font-bold text-slate-900">TRAYA Commercial Office Bangalore</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              This urban apartment reflects innovative design trends, maximizing space while ensuring a welcoming atmosphere.
            </p>
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:underline cursor-pointer"
            >
              <span>View Full Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="pt-6 text-center">
          <button
            onClick={() => onOpenQuoteModal()}
            className="py-4 px-8 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-base rounded-xl shadow-lg transition-all cursor-pointer"
          >
            Get Your Free Quote Today
          </button>
        </div>
      </section>
    </div>
  );
};
