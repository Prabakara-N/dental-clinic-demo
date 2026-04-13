"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQAccordionProps {
  readonly q: string;
  readonly a: string;
  readonly variant?: "default" | "compact";
}

export default function FAQAccordion({ q, a, variant = "default" }: FAQAccordionProps) {
  const [open, setOpen] = useState(false);

  if (variant === "compact") {
    return (
      <div className={`rounded-xl transition-colors duration-200 ${open ? "bg-white shadow-sm" : "bg-white/60"}`}>
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-5 py-4 text-left gap-3"
        >
          <span className={`font-medium text-sm transition-colors ${open ? "text-primary" : "text-text"}`}>
            {q}
          </span>
          <span className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${open ? "bg-primary text-white" : "bg-gray-100 text-text-light"}`}>
            {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
          </span>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-4 text-text-light text-sm leading-relaxed">
                {a}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl border transition-all duration-200 ${open ? "border-primary/20 bg-primary/[0.02] shadow-sm" : "border-gray-100 bg-white"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
      >
        <span className={`font-semibold transition-colors ${open ? "text-primary" : "text-text"}`}>
          {q}
        </span>
        <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${open ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}>
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-text-light leading-relaxed">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
