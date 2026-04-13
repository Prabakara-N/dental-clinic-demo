import Link from "next/link";
import { Phone, Mail, MapPin, Clock, AlertTriangle } from "lucide-react";
import { CLINIC, NAV_LINKS } from "@/lib/constants";

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
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.592-.84-6.313-2.24l-.44-.37-3.065 1.028 1.028-3.065-.37-.44A9.953 9.953 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</p>
          <p>
            {CLINIC.doctor.name} | {CLINIC.doctor.qualifications}
          </p>
        </div>
      </div>
    </footer>
  );
}
