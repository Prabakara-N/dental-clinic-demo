import {
  Phone, AlertTriangle, Shield, Smartphone, Banknote, CreditCard, Wifi,
} from "lucide-react";
import { CLINIC } from "@/lib/constants";
import MotionDiv from "@/components/motion/MotionDiv";
import AppointmentForm from "@/components/AppointmentForm";

export default function BookAppointmentPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-blue-50 to-cyan-50/30 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-text mb-4">
              Book Your Appointment
            </h1>
            <p className="text-text-light text-lg">
              Fill the form below or call us at{" "}
              <a href={`tel:${CLINIC.phone}`} className="text-primary font-semibold underline">
                {CLINIC.phoneDisplay}
              </a>
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AppointmentForm />
        </div>
      </section>

      {/* Emergency */}
      <section className="bg-white py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-emergency/5 border-2 border-emergency/20 rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emergency/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-emergency" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-text mb-2">
                  Dental Emergency?
                </h3>
                <p className="text-text-light mb-4">
                  Severe toothache, broken tooth, or dental injury?
                </p>
                <a
                  href={`tel:${CLINIC.phone}`}
                  className="inline-flex items-center gap-2 bg-emergency hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Immediately: {CLINIC.phoneDisplay}
                </a>
                <p className="text-text-light text-sm mt-3">
                  Walk-ins accepted for emergencies during clinic hours.
                </p>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="bg-background py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="font-heading font-bold text-xl text-text mb-6">
              Insurance & Payment Options
            </h3>
            <p className="text-text-light mb-6">
              We accept all major dental insurance. Multiple payment options for your convenience.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                { icon: Shield, label: "All Insurance" },
                { icon: Banknote, label: "Cash" },
                { icon: Smartphone, label: "UPI" },
                { icon: CreditCard, label: "Card" },
                { icon: Wifi, label: "Net Banking" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl shadow-sm"
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-text">{item.label}</span>
                </div>
              ))}
            </div>
            <p className="text-text-light text-sm">
              EMI available for treatments above ₹10,000 via Bajaj Finserv, HDFC & ICICI
            </p>
          </MotionDiv>
        </div>
      </section>
    </>
  );
}
