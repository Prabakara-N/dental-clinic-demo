import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap, Briefcase, Languages, BookOpen,
  Calendar, ScanLine, Camera, Zap, Monitor, ShieldCheck, Armchair,
  CheckCircle2, Shield,
} from "lucide-react";
import { CLINIC, EQUIPMENT } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";
import MotionDiv from "@/components/motion/MotionDiv";

const equipIcons: Record<string, React.ElementType> = {
  ScanLine, Camera, Zap, Monitor, ShieldCheck, Armchair,
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
} as const;

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-blue-50 to-cyan-50/30 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-text mb-4">
              About Our Clinic
            </h1>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              World-class dental care in the heart of Tiruppur since 2018.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Section 1: About the Clinic */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <MotionDiv {...fadeInUp}>
              <span className="inline-block text-secondary font-semibold text-sm tracking-wider uppercase mb-2">
                Our Story
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text mb-6">
                About Kurinji Dental Centre
              </h2>
              <p className="text-text-light text-lg leading-relaxed mb-6">
                Kurinji Dental Centre was established in 2018 with a vision to
                provide trusted, family-friendly dental care to the people of
                Tiruppur. Our clinic in Anupparpalayam features modern equipment,
                a sterile environment, and a team dedicated to making your
                dental visit comfortable.
              </p>
              <p className="text-text-light leading-relaxed mb-8">
                With over 10,000 happy patients and a 4.7-star Google rating, we
                have earned the trust of families across Tiruppur and surrounding
                areas. Our commitment to painless procedures, transparent pricing,
                and personalized care sets us apart.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "8+", label: "Years" },
                  { value: "10K+", label: "Patients" },
                  { value: "4.7★", label: "Rating" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center bg-primary/5 rounded-xl p-4">
                    <p className="font-heading font-bold text-2xl text-primary">{stat.value}</p>
                    <p className="text-text-light text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </MotionDiv>

            <MotionDiv {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
                  <Image
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=530&fit=crop"
                    alt="Clinic reception area"
                    width={400}
                    height={530}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4] mt-8">
                  <Image
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=530&fit=crop"
                    alt="Dental treatment room"
                    width={400}
                    height={530}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Section 2: Doctor's Full Profile */}
      <section className="bg-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Photo */}
            <MotionDiv {...fadeInUp} className="lg:col-span-2">
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-[3/4] sticky top-24">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=800&fit=crop&crop=face"
                  alt={CLINIC.doctor.name}
                  fill
                  className="object-cover"
                />
              </div>
            </MotionDiv>

            {/* Details */}
            <MotionDiv {...fadeInUp} transition={{ delay: 0.2 }} className="lg:col-span-3">
              <span className="inline-block text-secondary font-semibold text-sm tracking-wider uppercase mb-2">
                Meet Our Doctor
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text mb-1">
                {CLINIC.doctor.name}
              </h2>
              <p className="text-primary font-semibold text-xl mb-6">
                {CLINIC.doctor.qualifications}
              </p>

              <p className="text-text-light text-lg leading-relaxed mb-8">
                {CLINIC.doctor.shortBio}
              </p>

              {/* Education */}
              <div className="mb-8">
                <h3 className="flex items-center gap-2 font-heading font-bold text-lg text-text mb-4">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Education
                </h3>
                <div className="space-y-3">
                  {CLINIC.doctor.education.map((edu) => (
                    <div key={edu.degree} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-text">{edu.degree}</p>
                        <p className="text-text-light text-sm">{edu.institution} ({edu.year})</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="mb-8">
                <h3 className="flex items-center gap-2 font-heading font-bold text-lg text-text mb-4">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Experience
                </h3>
                <div className="space-y-3">
                  {CLINIC.doctor.experience.map((exp) => (
                    <div key={exp.role} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-text">{exp.role}</p>
                        <p className="text-text-light text-sm">{exp.place} ({exp.period})</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specializations */}
              <div className="mb-8">
                <h3 className="font-heading font-bold text-lg text-text mb-3">Specializations</h3>
                <div className="flex flex-wrap gap-2">
                  {CLINIC.doctor.specializations.map((s) => (
                    <span key={s} className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Publications */}
              <div className="mb-8">
                <h3 className="flex items-center gap-2 font-heading font-bold text-lg text-text mb-3">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Publications
                </h3>
                <p className="text-text-light bg-white rounded-xl p-4 shadow-sm">
                  {CLINIC.doctor.publications}
                </p>
              </div>

              {/* Languages */}
              <div className="mb-8">
                <h3 className="flex items-center gap-2 font-heading font-bold text-lg text-text mb-3">
                  <Languages className="w-5 h-5 text-primary" />
                  Languages
                </h3>
                <div className="flex gap-2">
                  {CLINIC.doctor.languages.map((l) => (
                    <span key={l} className="bg-gray-100 text-text px-4 py-2 rounded-full font-medium">
                      {l}
                    </span>
                  ))}
                </div>
              </div>

              {/* Memberships */}
              <div className="mb-8">
                <h3 className="font-heading font-bold text-lg text-text mb-3">Professional Memberships</h3>
                <div className="space-y-2">
                  {CLINIC.doctor.memberships.map((m) => (
                    <div key={m} className="flex items-center gap-2 text-text-light">
                      <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                      {m}
                    </div>
                  ))}
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

      {/* Section 3: Equipment */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Modern Technology"
            title="Our Equipment"
            description="We invest in the latest dental technology to provide you with the best possible care."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EQUIPMENT.map((eq, i) => {
              const Icon = equipIcons[eq.icon] || Monitor;
              return (
                <MotionDiv
                  key={eq.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-background rounded-2xl p-6 hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-text mb-2">{eq.name}</h3>
                  <p className="text-text-light">{eq.desc}</p>
                </MotionDiv>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Hygiene & Safety */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Your Safety First"
            title="Hygiene & Safety Standards"
            description="Your safety is our priority. We follow the strictest hygiene protocols."
          />
          <MotionDiv
            {...fadeInUp}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-success" />
              </div>
              <h3 className="font-heading font-bold text-xl text-text">
                We maintain the highest safety standards
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Single-use disposable kits for every patient",
                "Hospital-grade sterilization (autoclave)",
                "UV sterilization of treatment rooms",
                "COVID-safety protocols maintained",
                "Waste disposal as per biomedical waste rules",
                "Regular equipment maintenance & calibration",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-light">{item}</span>
                </div>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>
    </>
  );
}
