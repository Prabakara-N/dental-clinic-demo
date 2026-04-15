import { Phone, Calendar } from "lucide-react";
import { CLINIC } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden z-50 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="grid grid-cols-3 divide-x divide-gray-200">
        <a
          href={`tel:${CLINIC.phone}`}
          className="flex flex-col items-center justify-center py-2.5 gap-0.5 text-primary hover:bg-primary/5 active:bg-primary/10 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[11px] font-semibold">Call Now</span>
        </a>
        <a
          href="/book-appointment"
          className="flex flex-col items-center justify-center py-2.5 gap-0.5 bg-cta text-white hover:bg-cta-dark active:bg-cta-dark transition-colors"
        >
          <Calendar className="w-5 h-5" />
          <span className="text-[11px] font-semibold">Book Online</span>
        </a>
        <a
          href={`https://wa.me/${CLINIC.whatsapp}?text=Hi, I'd like to book a dental appointment.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2.5 gap-0.5 text-green-600 hover:bg-green-50 active:bg-green-100 transition-colors"
        >
          <WhatsAppIcon className="w-5 h-5" />
          <span className="text-[11px] font-semibold">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
