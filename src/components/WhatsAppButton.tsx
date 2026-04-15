"use client";

import { motion } from "framer-motion";
import { CLINIC } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${CLINIC.whatsapp}?text=Hi, I'd like to book a dental appointment.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full hidden md:flex items-center justify-center shadow-lg shadow-green-500/30 transition-colors group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7 text-white" />
      {/* Tooltip */}
      <span className="absolute right-16 bg-white text-gray-800 px-3 py-1.5 rounded-lg shadow-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us
      </span>
      {/* Ping animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
    </motion.a>
  );
}
