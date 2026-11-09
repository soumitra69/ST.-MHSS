import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';

interface AdmissionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdmissionsModal: React.FC<AdmissionsModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [applicationId, setApplicationId] = useState<string>('');

  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    gender: 'Female',
    targetClass: 'Class XI Science',
    previousSchool: '',
    previousPercentage: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    address: '',
    needsBus: false,
    agreeRules: false,
  });

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomId = `SMHSS-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setApplicationId(randomId);
    setSubmitted(true);
  };

  const handlePrint = () => {
    window.print();
  };

  const resetForm = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={resetForm}
    >
      <div
        className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border-2 border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-[#0c2d57] to-[#1d4ed8] text-white flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold uppercase tracking-tight">
              <i className="fas fa-user-graduate mr-2 text-amber-300" aria-hidden="true"></i>
              Academic Session 2026–27 Admission
            </h3>
            <p className="text-xs text-slate-200">{SCHOOL_INFO.name}</p>
          </div>
          <button
            type="button"
            onClick={resetForm}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <i className="fas fa-times text-base" aria-hidden="true"></i>
          </button>
        </div>

        {/* Step Indicator */}
        {!submitted && (
          <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs">
            <span className={`font-bold ${step === 1 ? 'text-[#1B365D]' : 'text-slate-400'}`}>
              <i className="fas fa-id-card mr-1" aria-hidden="true"></i>1. Student Details
            </span>
            <i className="fas fa-chevron-right text-[10px] text-slate-300" aria-hidden="true"></i>
            <span className={`font-bold ${step === 2 ? 'text-[#1B365D]' : 'text-slate-400'}`}>
              <i className="fas fa-users mr-1" aria-hidden="true"></i>2. Guardian &amp; Contact
            </span>
            <i className="fas fa-chevron-right text-[10px] text-slate-300" aria-hidden="true"></i>
            <span className={`font-bold ${step === 3 ? 'text-[#1B365D]' : 'text-slate-400'}`}>
              <i className="fas fa-check-double mr-1" aria-hidden="true"></i>3. Submit
            </span>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center space-y-4 py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <i className="fas fa-check-circle text-3xl" aria-hidden="true"></i>
              </div>
              <h4 className="text-xl font-extrabold text-[#1B365D]">
                Application Successfully Registered!
              </h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Your online admission enquiry has been filed with the {SCHOOL_INFO.name} Admissions
                Secretariat.
              </p>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-left max-w-md mx-auto text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Application Number:</span>
                  <span className="font-bold text-[#D97706]">{applicationId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Applicant:</span>
                  <span className="font-bold text-slate-800">{formData.studentName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Target Level:</span>
                  <span className="font-bold text-[#1B365D]">{formData.targetClass}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Status:</span>
                  <span className="text-emerald-700 font-bold">
                    Provisional Verification Pending
                  </span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="py-2.5 px-5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <i className="fas fa-print text-[#1B365D]" aria-hidden="true"></i>
                  <span>Print Acknowledgement Slip</span>
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="py-2.5 px-6 bg-[#1B365D] text-white text-xs font-bold uppercase tracking-wider rounded-lg cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* STEP 1: STUDENT INFORMATION */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Candidate Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      placeholder="As per Birth Certificate / MBOSE record"
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:ring-2 focus:ring-[#1B365D]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        required
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:ring-2 focus:ring-[#1B365D]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Gender *
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:ring-2 focus:ring-[#1B365D]"
                      >
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Seeking Admission To Class / Stream *
                    </label>
                    <select
                      name="targetClass"
                      value={formData.targetClass}
                      onChange={handleChange}
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-bold text-[#1B365D] focus:ring-2 focus:ring-[#1B365D]"
                    >
                      <option value="Nursery / Kindergarten">Nursery / Kindergarten</option>
                      <option value="Class I to V (Primary)">Class I to V (Primary)</option>
                      <option value="Class VI to VIII (Upper Primary)">
                        Class VI to VIII (Upper Primary)
                      </option>
                      <option value="Class IX (Secondary)">Class IX (Secondary)</option>
                      <option value="Class X (SSLC Board)">Class X (SSLC Board)</option>
                      <option value="Class XI Science">
                        Class XI Science (Higher Secondary)
                      </option>
                      <option value="Class XI Arts">Class XI Arts (Higher Secondary)</option>
                      <option value="Class XI Commerce">
                        Class XI Commerce (Higher Secondary)
                      </option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Previous School Attended
                      </label>
                      <input
                        type="text"
                        name="previousSchool"
                        value={formData.previousSchool}
                        onChange={handleChange}
                        placeholder="School name and location"
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:ring-2 focus:ring-[#1B365D]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Previous Aggregate %
                      </label>
                      <input
                        type="text"
                        name="previousPercentage"
                        value={formData.previousPercentage}
                        onChange={handleChange}
                        placeholder="e.g., 84.5%"
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:ring-2 focus:ring-[#1B365D]"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      disabled={!formData.studentName || !formData.dob}
                      className="py-2.5 px-6 bg-[#1B365D] hover:bg-[#0F1D38] disabled:opacity-50 text-white text-xs font-bold uppercase tracking-wider rounded-lg flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Proceed to Guardian Info</span>
                      <i className="fas fa-chevron-right text-xs" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: PARENT & CONTACT */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Parent / Legal Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="Full name of Father / Mother / Guardian"
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:ring-2 focus:ring-[#1B365D]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Primary Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        name="parentPhone"
                        value={formData.parentPhone}
                        onChange={handleChange}
                        placeholder="10 digit mobile"
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:ring-2 focus:ring-[#1B365D]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="parentEmail"
                        value={formData.parentEmail}
                        onChange={handleChange}
                        placeholder="guardian@example.com"
                        className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:ring-2 focus:ring-[#1B365D]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Residential Address (Village / Locality / District) *
                    </label>
                    <textarea
                      rows={2}
                      required
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="e.g., Umsning Patarim, Ri Bhoi District, Meghalaya"
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:ring-2 focus:ring-[#1B365D]"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700">
                      <i className="fas fa-bus-alt mr-1.5 text-[#1B365D]" aria-hidden="true"></i>
                      Require School Bus Service?
                    </span>
                    <input
                      type="checkbox"
                      name="needsBus"
                      checked={formData.needsBus}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#1B365D] rounded focus:ring-[#1B365D]"
                    />
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg flex items-center gap-1.5 cursor-pointer"
                    >
                      <i className="fas fa-chevron-left text-xs" aria-hidden="true"></i>
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      disabled={!formData.parentName || !formData.parentPhone}
                      className="py-2.5 px-6 bg-[#1B365D] hover:bg-[#0F1D38] disabled:opacity-50 text-white text-xs font-bold uppercase tracking-wider rounded-lg flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Review &amp; Confirm</span>
                      <i className="fas fa-chevron-right text-xs" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: CONFIRMATION & SUBMIT */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
                    <div className="font-bold text-[#1B365D] uppercase pb-1 border-b border-slate-200">
                      <i className="fas fa-clipboard-check mr-1.5" aria-hidden="true"></i>
                      Summary of Application
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-slate-700">
                      <div>
                        <strong className="text-slate-900">Applicant:</strong>{' '}
                        {formData.studentName}
                      </div>
                      <div>
                        <strong className="text-slate-900">Seeking:</strong> {formData.targetClass}
                      </div>
                      <div>
                        <strong className="text-slate-900">Parent/Guardian:</strong>{' '}
                        {formData.parentName}
                      </div>
                      <div>
                        <strong className="text-slate-900">Contact:</strong> {formData.parentPhone}
                      </div>
                      <div>
                        <strong className="text-slate-900">Bus Service:</strong>{' '}
                        {formData.needsBus ? 'Yes' : 'No'}
                      </div>
                      <div>
                        <strong className="text-slate-900">Date of Birth:</strong> {formData.dob}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="agree"
                      required
                      name="agreeRules"
                      checked={formData.agreeRules}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 text-[#1B365D] rounded focus:ring-[#1B365D]"
                    />
                    <label htmlFor="agree" className="text-xs text-slate-600 leading-snug">
                      I declare that the information provided is correct to the best of my
                      knowledge, and agree to abide by the school rules, uniform code, and MBOSE
                      regulations.
                    </label>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg flex items-center gap-1.5 cursor-pointer"
                    >
                      <i className="fas fa-chevron-left text-xs" aria-hidden="true"></i>
                      <span>Back</span>
                    </button>
                    <button
                      type="submit"
                      disabled={!formData.agreeRules}
                      className="py-2.5 px-7 bg-[#D97706] hover:bg-[#B45309] disabled:opacity-50 text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow cursor-pointer"
                    >
                      <i className="fas fa-paper-plane mr-1.5" aria-hidden="true"></i>
                      Submit Official Application
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
