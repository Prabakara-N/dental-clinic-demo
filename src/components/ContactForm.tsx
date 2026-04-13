"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { CLINIC } from "@/lib/constants";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Hi, I'm ${form.name} (Phone: ${form.phone}).\n\n${form.message}`;
    window.open(
      `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="bg-background rounded-2xl p-6 md:p-8">
        <h3 className="font-heading font-bold text-xl text-text mb-6">
          Send Us a Message
        </h3>
        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-success" />
            </div>
            <h4 className="font-heading font-bold text-lg text-text mb-2">
              Message Sent!
            </h4>
            <p className="text-text-light">
              We&apos;ll get back to you within 1 hour.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({ name: "", phone: "", message: "" });
              }}
              className="mt-4 text-primary font-semibold hover:underline"
            >
              Send Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-text mb-1.5">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text bg-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text mb-1.5">Phone</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text bg-white"
                placeholder="Your phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text mb-1.5">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text resize-none bg-white"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
}
