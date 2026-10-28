"use client";

import { useState } from "react";
import { X, CheckCircle, Calendar, Clock, Sparkles, User, Mail, Phone } from "lucide-react";

export default function ConsultationModal({ isOpen, onClose, initialType = "diet-plan", selectedDietitian = null }) {
  const [activeTab, setActiveTab] = useState(initialType);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "Weight Loss",
    dietType: "Vegetarian",
    dietitian: selectedDietitian?.name || "Dr. Ananya Sen",
    date: "",
    timeSlot: "10:00 AM - 10:45 AM",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all">
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-[#10793f] to-[#0c592e] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-1.5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-emerald-200" />
            <span className="text-xs uppercase font-bold tracking-wider text-emerald-200">
              DietNexa Healthcare Portal
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
            {activeTab === "diet-plan" || activeTab === "get-started"
              ? "Get Your Personalized Diet Plan"
              : activeTab === "login"
              ? "Welcome to DietNexa"
              : "Book an Expert Consultation"}
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100/90 mt-1">
            Certified nutrition guidance tailored to your body and lifestyle
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-100 text-[#10793f] rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Thank You, {formData.name || "Valued User"}!
              </h4>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Your request has been received. Our senior clinical nutritionist will reach out to you within 2 business hours at <b>{formData.email || formData.phone}</b>.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#10793f] text-white rounded-full font-semibold text-sm hover:bg-[#0b5e30] transition-colors"
              >
                Back to Website
              </button>
            </div>
          ) : activeTab === "login" ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Email / Phone Number
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="name@example.com or +91 9876543210"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#10793f] focus:ring-1 focus:ring-[#10793f]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#10793f] focus:ring-1 focus:ring-[#10793f]"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#10793f] hover:bg-[#0b5e30] text-white font-semibold rounded-xl text-sm shadow-md transition-all cursor-pointer mt-2"
              >
                Log In to Your Account
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Aditi Rao"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#10793f]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#10793f]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="aditi@example.com"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#10793f]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Primary Goal
                  </label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#10793f] bg-white"
                  >
                    <option value="Weight Loss">Weight Loss & Fat Reduction</option>
                    <option value="Diabetes Management">Diabetes / Pre-Diabetes</option>
                    <option value="PCOS / PCOD">PCOS / Hormonal Balance</option>
                    <option value="Sports Performance">Sports & Muscle Gain</option>
                    <option value="Thyroid Management">Thyroid Care</option>
                    <option value="General Health">General Wellness</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Diet Preference
                  </label>
                  <select
                    value={formData.dietType}
                    onChange={(e) => setFormData({ ...formData, dietType: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#10793f] bg-white"
                  >
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Eggetarian">Eggetarian</option>
                    <option value="Non-Vegetarian">Non-Vegetarian</option>
                    <option value="Vegan">Vegan / Plant-based</option>
                    <option value="Jain">Jain Friendly</option>
                  </select>
                </div>
              </div>

              {activeTab === "consultation" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Preferred Dietitian
                    </label>
                    <select
                      value={formData.dietitian}
                      onChange={(e) => setFormData({ ...formData, dietitian: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#10793f] bg-white"
                    >
                      <option value="Dr. Ananya Sen">Dr. Ananya Sen (Clinical)</option>
                      <option value="Ms. Riya Kapoor">Ms. Riya Kapoor (Sports)</option>
                      <option value="Dr. Neha Malhotra">Dr. Neha Malhotra (Women's Health)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#10793f] bg-white"
                    >
                      <option value="10:00 AM - 10:45 AM">10:00 AM - 10:45 AM</option>
                      <option value="02:00 PM - 02:45 PM">02:00 PM - 02:45 PM</option>
                      <option value="06:00 PM - 06:45 PM">06:00 PM - 06:45 PM</option>
                    </select>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 bg-[#10793f] hover:bg-[#0b5e30] text-white font-semibold rounded-xl text-sm shadow-md shadow-emerald-700/20 transition-all hover:scale-[1.01] active:scale-[0.98] cursor-pointer mt-3"
              >
                {activeTab === "consultation" ? "Confirm Consultation Booking" : "Generate My Custom Diet Plan"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
