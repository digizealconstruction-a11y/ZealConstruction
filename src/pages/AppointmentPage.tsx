import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  FileText,
  CheckCircle2,
  ShieldCheck,
  Building2,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { COMPANY_INFO, ALL_SERVICES } from '../data/companyData';
import { AppointmentFormData, PageRoute } from '../types';

interface AppointmentPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AppointmentPage: React.FC<AppointmentPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    service: 'Terrace Waterproofing',
    date: '',
    time: '10:00 AM',
    name: '',
    email: '',
    phone: '',
    note: '',
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

  const timeSlots = [
    '09:00 AM',
    '10:30 AM',
    '12:00 PM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM',
  ];

  return (
    <div className="space-y-12 pb-16">
      {/* PAGE HERO */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.12),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Calendar className="w-4 h-4 text-amber-500" />
            Schedule Site Consultation
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Make an Appointment
          </h1>
          <p className="text-slate-300 max-w-2xl text-sm sm:text-base">
            Book an on-site technical inspection with Zeal Construction civil engineers in Bengaluru.
          </p>
        </div>
      </section>

      {/* CONTENT CONTAINER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT SIDE: "Get in Touch" Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-1">
                  Get in Touch
                </span>
                <h2 className="text-2xl font-black text-white">
                  {COMPANY_INFO.name}
                </h2>
                <p className="text-xs text-slate-400 font-semibold mt-0.5">
                  {COMPANY_INFO.tagline}
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Direct Call</span>
                    <a href={`tel:${COMPANY_INFO.phoneClean}`} className="font-extrabold text-white hover:text-amber-400 text-base">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Official Email</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="font-bold text-slate-200 hover:text-amber-400 break-all">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Office Address</span>
                    <p className="text-slate-300 leading-relaxed text-xs">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Free Initial Site Evaluation</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Our team visits your property in BTM, JP Nagar, HSR, Indiranagar, Whitefield, or greater Bengaluru for leak detection and moisture meter readings.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Booking Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            <div>
              <h3 className="text-2xl font-black text-slate-900">Book Appointment</h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill in your preferred date and contact details to confirm your consultation.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-extrabold text-slate-900">Appointment Requested!</h4>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. Your appointment for <span className="font-bold text-amber-700">{formData.service}</span> on <span className="font-bold text-slate-900">{formData.date || 'your chosen date'}</span> at <span className="font-bold text-slate-900">{formData.time}</span> has been logged.
                </p>
                <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs text-left max-w-md mx-auto space-y-1">
                  <p><span className="font-bold">Confirmation Ref:</span> #APT-{Math.floor(1000 + Math.random() * 9000)}</p>
                  <p><span className="font-bold">Phone:</span> {formData.phone}</p>
                  <p><span className="font-bold">Email:</span> {formData.email}</p>
                </div>
                <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.phoneClean}?text=Hi%20Zeal%20Construction,%20I%20booked%20an%20appointment%20for%20${encodeURIComponent(formData.service)}%20on%20${formData.date}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
                  >
                    Confirm via WhatsApp
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="py-3 px-6 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs rounded-xl transition-colors"
                  >
                    Book Another Appointment
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Select Service *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    required
                  >
                    {ALL_SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Residential Construction Consultation">Residential Construction Consultation</option>
                    <option value="General Site Inspection">General Site Inspection</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Time Slot *
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lakshminarayanan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98866 30779"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="lakshminarayanan@zealconstruction.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Note (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention any specific address details, site landmarks, or leak issues..."
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-slate-950 font-extrabold text-base rounded-xl shadow-lg shadow-amber-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Scheduling...</span>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      Book Appointment
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
