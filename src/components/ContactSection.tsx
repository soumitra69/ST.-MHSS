import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Sparkles, Navigation } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Academic Enquiry',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: 'General Academic Enquiry',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container Mention Tag */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] font-bold text-[#1B365D] uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded border border-slate-300">
              [ CONTAINER: CAMPUS REACH, NH-6 TRANSIT & ENQUIRIES ]
            </span>
          </div>
          <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            Open Mon-Fri 8:30 AM - 3:30 PM
          </span>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase font-mono tracking-wider text-[#D97706] font-bold block mb-2">
            Campus Visit & Communications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B365D] tracking-tight">
            Connect with our administrative office
          </h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            We welcome parents, transfer guardians, alumni, and prospective students to visit our campus in Umsning or get in touch online.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-slate-50 rounded-2xl border-2 border-slate-200 space-y-5 shadow-xs">
              <h3 className="text-base font-bold text-[#1B365D] pb-3 border-b border-slate-200">
                School Administrative Desk
              </h3>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Campus Address</span>
                    <span>St. Michael's Higher Secondary School, Umsning Town, Ri Bhoi District, Meghalaya 793105, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Helpline & Office Phone</span>
                    <span>+91 94361 02845 / 03638 264218</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Official Institutional Email</span>
                    <span>stmichaelumsning@gmail.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Administrative Office Hours</span>
                    <span>Monday to Friday: 08:30 AM to 03:30 PM • Saturday: 08:30 AM to 12:30 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Highway Access Card */}
            <div className="p-6 bg-[#1B365D] text-white rounded-2xl border border-[#0F1D38] shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Navigation className="w-5 h-5 text-[#F59E0B]" />
                <h4 className="text-sm font-bold text-white">NH-6 Transit Location</h4>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-normal">
                Conveniently located 30 kilometers from Shillong and 70 kilometers from Guwahati on the main 4-lane Asian Highway corridor with direct school bus connectivity.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-slate-50 p-8 rounded-2xl border-2 border-slate-200 shadow-xs">
            <h3 className="text-lg font-bold text-[#1B365D] mb-1">
              Submit an Online Admission or Academic Enquiry
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Our administrative desk responds to all enquiries within one business day.
            </p>

            {sent ? (
              <div className="p-6 bg-emerald-50 border border-emerald-300 rounded-xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-emerald-900">Enquiry Dispatched Successfully</h4>
                <p className="text-xs text-emerald-700">Thank you. The St. Michael's office will reach out to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Parent or Student Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Wanbiang Nongkynrih"
                      className="w-full p-2.5 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1B365D]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Contact Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g., +91 98765 43210"
                      className="w-full p-2.5 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1B365D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g., name@domain.com"
                      className="w-full p-2.5 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1B365D]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Subject of Inquiry</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full p-2.5 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1B365D]"
                    >
                      <option value="Admission 2026-27">Admission 2026-27</option>
                      <option value="Higher Secondary Stream Counseling">Higher Secondary Stream Counseling</option>
                      <option value="Bus Transport Service">Bus Transport Service</option>
                      <option value="Fee Concession & Scholarship">Fee Concession & Scholarship</option>
                      <option value="General Academic Enquiry">General Academic Enquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Message or Specific Query</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide candidate class level, previous school, or transport requirement..."
                    className="w-full p-2.5 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1B365D]"
                  />
                </div>

                <button
                  type="submit"
                  className="py-3 px-6 bg-[#1B365D] hover:bg-[#0F1D38] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#F59E0B]" />
                  <span>Send Official Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
