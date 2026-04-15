import Link from "next/link";
import { Phone, Mail, MapPin, Clock, AlertTriangle } from "lucide-react";
import { CLINIC, NAV_LINKS } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Emergency Strip */}
      <div className="bg-emergency/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-center gap-2 text-sm">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            <span className="font-semibold">Dental Emergency?</span>
          </div>
          <a href={`tel:${CLINIC.phone}`} className="font-bold underline">
            Call Now: {CLINIC.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M12 2C9.5 2 7.5 3.5 7 6C6.5 8.5 5 10 4 11C3 12 2.5 14 3.5 16C4.5 18 6 18.5 7.5 18C9 17.5 10 16.5 12 16.5C14 16.5 15 17.5 16.5 18C18 18.5 19.5 18 20.5 16C21.5 14 21 12 20 11C19 10 17.5 8.5 17 6C16.5 3.5 14.5 2 12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <div className="font-heading font-bold text-lg">{CLINIC.name.split(" ").slice(0, 2).join(" ")}</div>
                <div className="text-xs text-gray-400">Dental Clinic, Tiruppur</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {CLINIC.tagline}. Providing world-class dental care to Tiruppur since {CLINIC.established}.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4 flex-shrink-0 text-secondary" />
              <span>{CLINIC.address}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinic Hours */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Clinic Hours</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-300">Monday - Saturday</p>
                  <p className="text-gray-400">{CLINIC.timings.weekday.morning}</p>
                  <p className="text-gray-400">{CLINIC.timings.weekday.evening}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-300">Sunday</p>
                  <p className="text-gray-400">{CLINIC.timings.sunday}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href={`tel:${CLINIC.phone}`}
                className="flex items-center gap-2 text-gray-400 hover:text-secondary transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-secondary" />
                {CLINIC.phoneDisplay}
              </a>
              <a
                href={`mailto:${CLINIC.email}`}
                className="flex items-center gap-2 text-gray-400 hover:text-secondary transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-secondary" />
                {CLINIC.email}
              </a>
              <a
                href={`https://wa.me/${CLINIC.whatsapp}?text=Hi, I'd like to book a dental appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors mt-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-8 pb-16 md:pb-0 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</p>
          <p>
            {CLINIC.doctor.name} | {CLINIC.doctor.qualifications}
          </p>
        </div>
      </div>
    </footer>
  );
}
