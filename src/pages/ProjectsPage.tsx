import React, { useState } from 'react';
import {
  Building2,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Compass,
  FileText,
  CheckCircle,
  Filter,
} from 'lucide-react';
import { PROJECTS, PROCESS_STEPS } from '../data/companyData';
import { PageRoute } from '../types';

interface ProjectsPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filterCategory === 'All') return true;
    if (filterCategory === 'Commercial') return p.clientType === 'Commercial' || p.clientType === 'Urban Mall';
    if (filterCategory === 'Residential') return p.clientType === 'Residential';
    return true;
  });

  return (
    <div className="space-y-16 pb-16">
      {/* PAGE HERO */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.12),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Building2 className="w-4 h-4 text-amber-500" />
            Engineering Case Studies
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Explore Our Project Expertise
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm sm:text-base leading-relaxed">
            At the forefront of residential construction, we bring your visions to life through our extensive project portfolio. From initial planning to final touches, our dedicated team ensures quality and innovation in every endeavor. We invite you to discover the exceptional value we provide in transforming spaces.
          </p>
        </div>
      </section>

      {/* PORTFOLIO SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-1">
            <span className="text-amber-600 font-extrabold text-xs uppercase tracking-widest block">
              Our Portfolio • A Showcase of Distinctive Builds
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              Our Completed Projects
            </h2>
            <p className="text-slate-600 text-sm">
              Discover our completed projects that highlight our commitment to quality and innovation.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200 text-xs font-bold self-start md:self-auto">
            <Filter className="w-4 h-4 text-slate-500 ml-2" />
            <button
              onClick={() => setFilterCategory('All')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                filterCategory === 'All'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Builds
            </button>
            <button
              onClick={() => setFilterCategory('Commercial')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                filterCategory === 'Commercial'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Commercial / Malls
            </button>
            <button
              onClick={() => setFilterCategory('Residential')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                filterCategory === 'Residential'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Residential
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-2xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {proj.categories.map((cat, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-900/90 text-amber-400 text-xs font-black uppercase rounded-lg backdrop-blur-md border border-amber-500/20"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-extrabold uppercase tracking-wider mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {proj.location}
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    {proj.title}
                  </h3>
                </div>
              </div>

              <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {proj.description}
                  </p>

                  {proj.highlights && (
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
                      <span className="font-bold text-slate-900 block uppercase tracking-wider text-[10px]">
                        Engineering Highlights
                      </span>
                      <ul className="space-y-1.5 text-slate-700">
                        {proj.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    {proj.status}
                  </span>
                  <button
                    onClick={() => onOpenQuoteModal(`Similar to ${proj.title}`)}
                    className="py-2.5 px-4 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Request Similar Build</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT PROCESS SECTION (TIMELINE) */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block">
              Execution Methodology
            </span>
            <h2 className="text-3xl font-black text-white">
              Project Process
            </h2>
            <p className="text-slate-300 text-sm">
              Our structured 3-step workflow ensures flawless execution on time and within budget.
            </p>
          </div>

          {/* Timeline Grid (Horizontal Desktop, Vertical Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {PROCESS_STEPS.map((proc, index) => (
              <div
                key={proc.step}
                className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative space-y-4 hover:border-amber-500 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black text-amber-500/80 font-mono">
                    {proc.step}
                  </span>
                  <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400 border border-amber-500/20">
                    {index === 0 && <Compass className="w-6 h-6" />}
                    {index === 1 && <FileText className="w-6 h-6" />}
                    {index === 2 && <CheckCircle className="w-6 h-6" />}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white">{proc.title}</h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {proc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="bg-slate-50 border border-slate-200 p-8 sm:p-12 rounded-3xl space-y-4 max-w-3xl mx-auto">
          <h3 className="text-2xl font-black text-slate-900">
            Have a Similar Construction or Waterproofing Project?
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Consult directly with Lakshminarayanan and our lead civil engineers for site evaluation, structural chemical specification, and cost estimations.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={() => onOpenQuoteModal()}
              className="py-3.5 px-7 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm rounded-xl shadow-md transition-all cursor-pointer"
            >
              Get a Free Quote
            </button>
            <button
              onClick={() => onNavigate('appointment')}
              className="py-3.5 px-7 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl transition-all cursor-pointer"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
