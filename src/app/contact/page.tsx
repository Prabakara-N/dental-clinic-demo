import {
  Phone, Mail, MapPin, Clock, MessageCircle,
} from "lucide-react";
import { CLINIC } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";
import MotionDiv from "@/components/motion/MotionDiv";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-blue-50 to-cyan-50/30 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-text mb-4">
              Contact Us
            </h1>
            <p className="text-text-light text-lg">
              We&apos;d love to hear from you. Reach out anytime!
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left - Contact Info */}
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-text mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-1">Visit Us</h3>
                    <p className="text-text-light leading-relaxed">{CLINIC.address}</p>
                    <p className="text-text-light text-sm mt-1">Near Kumar Complex, Palladam Road</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-1">Call Us</h3>
                    <a
                      href={`tel:${CLINIC.phone}`}
                      className="text-primary text-2xl font-bold hover:text-primary-dark transition-colors"
                    >
                      {CLINIC.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-2">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${CLINIC.whatsapp}?text=Hi, I'd like to book a dental appointment.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all text-lg"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Message us on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-1">Email</h3>
                    <a
                      href={`mailto:${CLINIC.email}`}
                      className="text-primary hover:underline"
                    >
                      {CLINIC.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Timings */}
              <div className="bg-background rounded-2xl p-6">
                <h3 className="font-heading font-bold text-lg text-text mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Clinic Hours
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-medium text-text">Mon - Sat (Morning)</span>
                    <span className="text-text-light">{CLINIC.timings.weekday.morning}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-medium text-text">Mon - Sat (Evening)</span>
                    <span className="text-text-light">{CLINIC.timings.weekday.evening}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-medium text-text">Sunday</span>
                    <span className="text-text-light">{CLINIC.timings.sunday}</span>
                  </div>
                </div>
              </div>
            </MotionDiv>

            {/* Right - Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-background py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Find Us on the Map" />
          <div className="rounded-2xl overflow-hidden shadow-lg h-80 md:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.8!2d77.34!3d11.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPalladam+Road%2C+Tiruppur!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Smile Care Dental Clinic Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
