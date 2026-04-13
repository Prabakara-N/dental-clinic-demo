"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, CheckCircle2, Calendar } from "lucide-react";
import { CLINIC, APPOINTMENT_TYPES, TIME_SLOTS, REFERRAL_SOURCES } from "@/lib/constants";

interface FormData {
  name: string;
  phone: string;
  hasWhatsApp: boolean;
  email: string;
  age: string;
  gender: string;
  appointmentType: string;
  date: string;
  time: string;
  symptoms: string;
  referralSource: string;
}

const initialFormData: FormData = {
  name: "",
  phone: "",
  hasWhatsApp: true,
  email: "",
  age: "",
  gender: "",
  appointmentType: "",
  date: "",
  time: "",
  symptoms: "",
  referralSource: "",
};

export default function AppointmentForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const today = new Date().toISOString().split("T")[0];

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-success/5 border-2 border-success/20 rounded-2xl p-8 md:p-12 text-center"
      >
        <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-success" />
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-text mb-4">
          Appointment Request Received!
        </h2>
        <p className="text-text-light text-lg mb-6">
          We&apos;ll confirm your appointment within 1 hour via WhatsApp/call.
        </p>
        <div className="bg-white rounded-xl p-6 shadow-sm max-w-sm mx-auto mb-8 text-left">
          <h3 className="font-semibold text-text mb-3">Your Details:</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-text-light">Date:</span>
              <span className="font-medium text-text">{formData.date}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-light">Time:</span>
              <span className="font-medium text-text">{formData.time}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-light">Type:</span>
              <span className="font-medium text-text">{formData.appointmentType}</span>
            </div>
          </div>
        </div>
        <p className="text-text-light text-sm">
          For urgent dental emergencies, call:{" "}
          <a href={`tel:${CLINIC.phone}`} className="text-emergency font-bold">
            {CLINIC.phoneDisplay}
          </a>
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData(initialFormData);
          }}
          className="mt-6 text-primary font-semibold hover:underline"
        >
          Book Another Appointment
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Name & Phone */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-text mb-1.5">
            Patient Name <span className="text-emergency">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-text mb-1.5">
            Phone Number <span className="text-emergency">*</span>
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text"
            placeholder="+91 XXXXX XXXXX"
          />
          <label className="flex items-center gap-2 mt-2 text-sm text-text-light cursor-pointer">
            <input
              type="checkbox"
              checked={formData.hasWhatsApp}
              onChange={(e) => handleChange("hasWhatsApp", e.target.checked)}
              className="rounded border-gray-300 text-primary focus:ring-primary"
            />
            This number has WhatsApp
          </label>
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-text mb-1.5">
          Email <span className="text-text-light font-normal">(optional)</span>
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text"
          placeholder="your@email.com"
        />
      </div>

      {/* Age & Gender */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-text mb-1.5">
            Age <span className="text-emergency">*</span>
          </label>
          <input
            type="number"
            required
            min="1"
            max="120"
            value={formData.age}
            onChange={(e) => handleChange("age", e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text"
            placeholder="Age"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-text mb-1.5">
            Gender <span className="text-emergency">*</span>
          </label>
          <div className="flex gap-4 py-3">
            {["Male", "Female", "Other"].map((g) => (
              <label key={g} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  required
                  checked={formData.gender === g}
                  onChange={(e) => handleChange("gender", e.target.value)}
                  className="text-primary focus:ring-primary"
                />
                <span className="text-text">{g}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Appointment Type */}
      <div>
        <label className="block text-sm font-semibold text-text mb-1.5">
          Appointment Type <span className="text-emergency">*</span>
        </label>
        <select
          required
          value={formData.appointmentType}
          onChange={(e) => handleChange("appointmentType", e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text bg-white"
        >
          <option value="">Select appointment type</option>
          {APPOINTMENT_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Date & Time */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-text mb-1.5">
            Preferred Date <span className="text-emergency">*</span>
          </label>
          <input
            type="date"
            required
            min={today}
            value={formData.date}
            onChange={(e) => handleChange("date", e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-text mb-1.5">
            Preferred Time <span className="text-emergency">*</span>
          </label>
          <select
            required
            value={formData.time}
            onChange={(e) => handleChange("time", e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text bg-white"
          >
            <option value="">Select time slot</option>
            <optgroup label="Morning">
              {TIME_SLOTS.slice(0, 4).map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </optgroup>
            <optgroup label="Evening">
              {TIME_SLOTS.slice(4).map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </optgroup>
          </select>
        </div>
      </div>

      {/* Symptoms */}
      <div>
        <label className="block text-sm font-semibold text-text mb-1.5">
          Any Current Symptoms? <span className="text-text-light font-normal">(optional)</span>
        </label>
        <textarea
          value={formData.symptoms}
          onChange={(e) => handleChange("symptoms", e.target.value)}
          rows={3}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text resize-none"
          placeholder="E.g., toothache in lower right, bleeding gums, need cleaning..."
        />
      </div>

      {/* Referral */}
      <div>
        <label className="block text-sm font-semibold text-text mb-1.5">
          How Did You Hear About Us?
        </label>
        <select
          value={formData.referralSource}
          onChange={(e) => handleChange("referralSource", e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text bg-white"
        >
          <option value="">Select option</option>
          {REFERRAL_SOURCES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-cta hover:bg-cta-dark text-white py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl hover:shadow-cta/25 active:scale-[0.99] flex items-center justify-center gap-2"
      >
        <Calendar className="w-5 h-5" />
        Book Appointment
      </button>
    </motion.form>
  );
}
