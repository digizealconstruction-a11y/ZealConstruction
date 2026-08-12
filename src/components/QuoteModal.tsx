import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import { COMPANY_INFO, ALL_SERVICES } from '../data/companyData';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Terrace Waterproofing',
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    service: defaultService,
    propertyType: 'Residential',
    areaSqFt: '',
    name: '',
    phone: '',
    email: '',
    location: 'Bengaluru',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            onClick={resetAndClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            Fast Response Guaranteed
          </div>
          <h3 className="text-2xl font-extrabold text-white">Get a Free Inspection & Quote</h3>
          <p className="text-sm text-slate-300 mt-1">
            Zero obligation. Our civil engineers inspect your site and provide an itemized quote.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-2">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Quote Request Submitted!</h4>
              <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Our lead technical engineer at Zeal Construction will call you shortly at <span className="font-semibold text-slate-900">{formData.phone}</span>.
              </p>

              <div className="bg-slate-50 p-4 rounded-xl text-left border border-slate-200 space-y-2 text-sm mt-4">
                <div className="flex justify-between text-xs text-slate-500 font-semibold uppercase">
                  <span>Service Requested</span>
                  <span className="text-amber-600 font-bold">Ref: #ZC-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <p className="font-bold text-slate-900">{formData.service}</p>
                <div className="flex items-center gap-4 text-xs text-slate-600 pt-1">
                  <span>Location: {formData.location}</span>
                  <span>Property: {formData.propertyType}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${COMPANY_INFO.phoneClean}?text=Hi%20Zeal%20Construction,%20I%20just%20submitted%20a%20quote%20request%20for%20${encodeURIComponent(formData.service)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Connect on WhatsApp Now
                </a>
                <button
                  onClick={resetAndClose}
                  className="py-3 px-6 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-xl text-sm transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Select Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                  required
                >
                  {ALL_SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="General Construction & Building">General Construction & Building</option>
                  <option value="Other Custom Waterproofing">Other Custom Waterproofing</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        propertyType: e.target.value as any,
                      })
                    }
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                  >
                    <option value="Residential">Residential House / Flat</option>
                    <option value="Villa">Villa / Standalone Home</option>
                    <option value="Commercial">Commercial Building / Mall</option>
                    <option value="Industrial">Industrial Facility</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Approx Area (Sq. Ft.)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 1,200 sq ft"
                    value={formData.areaSqFt}
                    onChange={(e) => setFormData({ ...formData, areaSqFt: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98866 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="yourname@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Locality / City
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. BTM Stage 1, Bengaluru"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Additional Details / Leakage Description
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe your project, seepage symptoms, or construction timeline..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Your information is confidential and used solely for providing your quote.</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-slate-950 font-extrabold rounded-xl text-base shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {loading ? (
                  <span>Processing Estimate...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Request Free Quote Now
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
