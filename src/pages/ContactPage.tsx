import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  Building2,
  ShieldCheck,
  MessageSquare,
} from 'lucide-react';
import { COMPANY_INFO, ALL_SERVICES } from '../data/companyData';
import { ContactFormData, PageRoute } from '../types';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: 'General Construction Query',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* PAGE HERO */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.12),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <MessageSquare className="w-4 h-4 text-amber-500" />
            Direct Communication
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Contact Us
          </h1>
          <p className="text-slate-300 max-w-2xl text-base leading-relaxed">
            Reach out to Lakshminarayanan and the Zeal Construction engineering team for project consultations, site evaluations, or waterproofing estimates across Bengaluru and Chennai.
          </p>
        </div>
      </section>

      {/* CONTACT INFO + FORM GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT: Contact Info Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6">
              <div>
                <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-1">
                  Headquarters
                </span>
                <h2 className="text-2xl font-black text-white">{COMPANY_INFO.name}</h2>
                <p className="text-xs text-amber-400 font-bold">{COMPANY_INFO.tagline}</p>
              </div>

              <div className="space-y-5 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-bold uppercase block">Address</span>
                    <p className="text-slate-200 leading-relaxed text-xs sm:text-sm">{COMPANY_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-bold uppercase block">Phone / Mobile</span>
                    <a
                      href={`tel:${COMPANY_INFO.phoneClean}`}
                      className="text-white hover:text-amber-400 font-extrabold text-base transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-bold uppercase block">Email</span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-slate-200 hover:text-amber-400 font-semibold text-xs sm:text-sm transition-colors break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-bold uppercase block">Working Hours</span>
                    <p className="text-slate-200 text-xs sm:text-sm font-medium">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-emerald-400 text-xs">Emergency Site Inspections Available</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs rounded-xl shadow-md transition-all cursor-pointer"
                >
                  Get a Free Quote
                </button>
                <button
                  onClick={() => onNavigate('appointment')}
                  className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 transition-colors cursor-pointer"
                >
                  Book an Appointment
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            <div>
              <h3 className="text-2xl font-black text-slate-900">Send Us a Message</h3>
              <p className="text-xs text-slate-500 mt-1">
                Have a question about waterproofing chemical specs, site fees, or residential construction? Send us your enquiry.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-bold text-slate-900">Message Delivered!</h4>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
                  Thank you for contacting Zeal Construction. Our team will review your query and get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="py-2.5 px-6 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Reddy"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98866 30779"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
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
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Subject / Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    >
                      <option value="General Construction Query">General Construction Query</option>
                      <option value="Waterproofing Inspection Request">Waterproofing Inspection Request</option>
                      <option value="Commercial Project Consultation">Commercial Project Consultation</option>
                      <option value="Vendor / Partnership Enquiry">Vendor / Partnership Enquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your project requirements or specific site issues..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 bg-slate-900 hover:bg-slate-800 text-amber-400 font-extrabold text-sm rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* OFFICE LOCATION DETAILS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bengaluru HQ */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg p-6 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>Bengaluru Headquarters</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">Bangalore (BTM 1st Stage)</h3>
            <p className="text-sm text-slate-600">
              {COMPANY_INFO.address}
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 space-y-1">
              <p>🗓 <strong>Hours:</strong> Mon – Sat: 9:00 AM – 7:00 PM</p>
              <p>📍 <strong>Landmark:</strong> Near Dharmaram College, 7th B Main</p>
            </div>
          </div>

          {/* Chennai Hub */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg p-6 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>Chennai Regional Division</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">Chennai Operations Hub</h3>
            <p className="text-sm text-slate-600">
              Serving Anna Nagar, OMR, Adyar, Velachery, Guindy, T. Nagar, Porur, and all surrounding areas in Tamil Nadu.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 space-y-1">
              <p>🗓 <strong>Consultations:</strong> On-Site Site Audits & Inspection</p>
              <p>📞 <strong>Direct Line:</strong> +91 98866 30779</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
