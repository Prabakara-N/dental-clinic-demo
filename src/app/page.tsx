import Link from "next/link";
import Image from "next/image";
import {
  Phone, Calendar, Award, Users, Star, Cpu,
  SmilePlus, Bone, Sparkles, Wrench, Baby, Stethoscope,
  Building2, Heart, Banknote, Clock, ChevronRight,
  MapPin, MessageCircle, ArrowRight, Shield, CheckCircle2,
} from "lucide-react";
import { CLINIC, SERVICES, TESTIMONIALS } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";
import MotionDiv from "@/components/motion/MotionDiv";

const iconMap: Record<string, React.ElementType> = {
  SmilePlus, Bone, Sparkles, Wrench, Baby, Stethoscope,
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
} as const;

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
} as const;

export default function HomePage() {
  return (
    <>
      {/* ──────────── SECTION 1: HERO ──────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/50 to-cyan-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left - Text */}
            <MotionDiv
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Trusted by 15,000+ patients
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] text-text mb-6">
                Your Smile Deserves{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  the Best Care
                </span>
              </h1>
              <p className="text-lg md:text-xl text-text-light leading-relaxed mb-8 max-w-lg">
                Advanced dental treatments with modern technology and a gentle,
                caring approach. Experience painless dentistry at its finest.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book-appointment"
                  className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-dark text-white px-7 py-3.5 rounded-xl text-lg font-semibold transition-all hover:shadow-xl hover:shadow-cta/25 active:scale-[0.98]"
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </Link>
                <a
                  href={`tel:${CLINIC.phone}`}
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-7 py-3.5 rounded-xl text-lg font-semibold transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call: {CLINIC.phoneDisplay}
                </a>
              </div>
            </MotionDiv>

            {/* Right - Image */}
            <MotionDiv
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop"
                  alt="Modern dental clinic interior"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              {/* Floating card */}
              <MotionDiv
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute -bottom-4 -left-4 md:-left-8 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-success" />
                </div>
                <div>
                  <p className="font-heading font-bold text-text">4.8 Rating</p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </MotionDiv>
            </MotionDiv>
          </div>
        </div>
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </section>

      {/* ──────────── SECTION 2: TRUST BADGES ──────────── */}
      <section className="relative -mt-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Award, label: "8+ Years", sub: "Experience" },
              { icon: Users, label: "15,000+", sub: "Happy Patients" },
              { icon: Star, label: "4.8 ★", sub: "Google Rating" },
              { icon: Cpu, label: "Advanced", sub: "Technology" },
            ].map((item, i) => (
              <MotionDiv
                key={item.label}
                {...stagger}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 bg-background rounded-xl p-4 md:p-5"
              >
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-bold text-lg md:text-xl text-text">{item.label}</p>
                  <p className="text-text-light text-sm">{item.sub}</p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── SECTION 3: OUR SERVICES ──────────── */}
      <section className="bg-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="What We Offer"
            title="Our Services"
            description="Comprehensive dental care for you and your family using the latest technology and techniques."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon] || Stethoscope;
              return (
                <MotionDiv
                  key={service.id}
                  {...stagger}
                  transition={{ delay: i * 0.08 }}
                  className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-text mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-light leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2.5 transition-all"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </MotionDiv>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────── SECTION 4: MEET OUR DOCTOR ──────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <MotionDiv {...fadeInUp} className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-[3/4] max-w-md mx-auto lg:mx-0">
                <Image
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=800&fit=crop&crop=face"
                  alt="Dr. S. Karthikeyan - Dentist"
                  fill
                  className="object-cover"
                />
              </div>
              <MotionDiv
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring" }}
                className="absolute -bottom-4 -right-4 md:right-4 lg:-right-8 bg-white rounded-2xl shadow-xl p-4"
              >
                <p className="text-sm text-text-light">Experience</p>
                <p className="font-heading font-bold text-3xl text-primary">8+ Years</p>
              </MotionDiv>
            </MotionDiv>

            <MotionDiv {...fadeInUp} transition={{ delay: 0.2 }}>
              <span className="inline-block text-secondary font-semibold text-sm tracking-wider uppercase mb-2">
                Meet Our Doctor
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text mb-2">
                {CLINIC.doctor.name}
              </h2>
              <p className="text-primary font-medium text-lg mb-5">
                {CLINIC.doctor.qualifications}
              </p>
              <p className="text-text-light leading-relaxed mb-6 text-lg">
                {CLINIC.doctor.shortBio}
              </p>
              <div className="space-y-3 mb-8">
                <div>
                  <p className="font-semibold text-text mb-1">Specializations</p>
                  <div className="flex flex-wrap gap-2">
                    {CLINIC.doctor.specializations.map((s) => (
                      <span
                        key={s}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-text mb-1">Memberships</p>
                  <div className="flex flex-wrap gap-2">
                    {CLINIC.doctor.memberships.map((m) => (
                      <span
                        key={m}
                        className="bg-secondary/10 text-secondary-dark px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 bg-cta hover:bg-cta-dark text-white px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                Book with {CLINIC.doctor.name.split(" ").pop()}
              </Link>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* ──────────── SECTION 5: WHY CHOOSE US ──────────── */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Why Smile Care?"
            title="Why Choose Us"
            description="We combine modern technology with a gentle, caring approach to make your dental visit comfortable."
            light
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Building2,
                title: "Modern Clinic",
                desc: "State-of-the-art equipment including digital X-ray, intraoral camera, and laser dentistry.",
              },
              {
                icon: Heart,
                title: "Pain-Free Treatments",
                desc: "We use advanced anesthesia techniques and gentle procedures for a comfortable experience.",
              },
              {
                icon: Banknote,
                title: "Affordable Pricing",
                desc: "Quality dental care at transparent prices. EMI options available for major treatments.",
              },
              {
                icon: Clock,
                title: "Convenient Timings",
                desc: "Open Mon-Sat with morning and evening slots. Sunday appointments available.",
              },
            ].map((item, i) => (
              <MotionDiv
                key={item.title}
                {...stagger}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-white/15 transition-colors"
              >
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">{item.desc}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── SECTION 6: BEFORE & AFTER GALLERY ──────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Real Results"
            title="Before & After"
            description="See the transformative results our patients have achieved. These representative images showcase what modern dentistry can do."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Teeth Whitening", before: "Before: Stained", after: "After: Bright White", gradient: "from-yellow-200 to-white" },
              { label: "Braces Treatment", before: "Before: Misaligned", after: "After: Perfectly Aligned", gradient: "from-orange-200 to-blue-100" },
              { label: "Dental Implant", before: "Before: Missing Tooth", after: "After: Natural Look", gradient: "from-red-200 to-green-100" },
              { label: "Smile Makeover", before: "Before: Uneven", after: "After: Beautiful Smile", gradient: "from-gray-200 to-pink-100" },
            ].map((item, i) => (
              <MotionDiv
                key={item.label}
                {...stagger}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <div className={`bg-gradient-to-r ${item.gradient} aspect-[4/3] flex items-center justify-center relative`}>
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 bg-gray-300/30 flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-600 bg-white/80 px-2 py-1 rounded">{item.before}</span>
                    </div>
                    <div className="w-px bg-white z-10" />
                    <div className="w-1/2 bg-blue-100/30 flex items-center justify-center">
                      <span className="text-sm font-medium text-primary bg-white/80 px-2 py-1 rounded">{item.after}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-heading font-semibold text-text text-center">{item.label}</h3>
                  <p className="text-xs text-text-light text-center mt-1">Representative images</p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── SECTION 7: TESTIMONIALS ──────────── */}
      <section className="bg-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Patient Stories"
            title="What Our Patients Say"
            description="Don't just take our word for it — hear from our happy patients."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <MotionDiv
                key={t.name}
                {...stagger}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-text-light leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-text text-sm">{t.name}</p>
                    <p className="text-text-light text-xs">{t.location}</p>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── SECTION 8: TIMING & LOCATION ──────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Visit Us"
            title="Clinic Timings & Location"
          />
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Timings */}
            <MotionDiv {...fadeInUp} className="bg-background rounded-2xl p-6 md:p-8">
              <h3 className="font-heading font-bold text-xl text-text mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Clinic Hours
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-text">Monday - Saturday</span>
                  <span className="text-text-light">{CLINIC.timings.weekday.morning}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-text">Monday - Saturday</span>
                  <span className="text-text-light">{CLINIC.timings.weekday.evening}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-text">Sunday</span>
                  <span className="text-text-light text-right text-sm">{CLINIC.timings.sunday}</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-primary/5 rounded-xl">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-text mb-1">Address</p>
                    <p className="text-text-light text-sm">{CLINIC.address}</p>
                  </div>
                </div>
              </div>
            </MotionDiv>

            {/* Map */}
            <MotionDiv {...fadeInUp} transition={{ delay: 0.2 }} className="rounded-2xl overflow-hidden shadow-lg h-80 lg:h-auto min-h-[320px]">
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
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* ──────────── SECTION 9: CTA ──────────── */}
      <section className="bg-gradient-to-r from-primary via-primary-dark to-primary py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <MotionDiv {...fadeInUp}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Don&apos;t Ignore Your Dental Health
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Book your appointment today and take the first step towards a healthier, brighter smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-appointment"
                className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-dark text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:shadow-xl hover:shadow-cta/30 active:scale-[0.98]"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`https://wa.me/${CLINIC.whatsapp}?text=Hi, I'd like to book a dental appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </MotionDiv>
        </div>
      </section>
    </>
  );
}
