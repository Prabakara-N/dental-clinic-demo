import Link from "next/link";
import {
  SmilePlus, Bone, Sparkles, Wrench, Baby, Stethoscope,
  ChevronRight, Calendar, CheckCircle2, Clock, CreditCard,
} from "lucide-react";
import { SERVICES, PRICING_TABLE } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";
import MotionDiv from "@/components/motion/MotionDiv";
import FAQAccordion from "@/components/FAQAccordion";

const iconMap: Record<string, React.ElementType> = {
  SmilePlus, Bone, Sparkles, Wrench, Baby, Stethoscope,
};

const accentColors = [
  { icon: "bg-blue-500/10 text-blue-600", border: "border-blue-100", tag: "bg-blue-50 text-blue-700" },
  { icon: "bg-purple-500/10 text-purple-600", border: "border-purple-100", tag: "bg-purple-50 text-purple-700" },
  { icon: "bg-amber-500/10 text-amber-600", border: "border-amber-100", tag: "bg-amber-50 text-amber-700" },
  { icon: "bg-emerald-500/10 text-emerald-600", border: "border-emerald-100", tag: "bg-emerald-50 text-emerald-700" },
  { icon: "bg-pink-500/10 text-pink-600", border: "border-pink-100", tag: "bg-pink-50 text-pink-700" },
  { icon: "bg-indigo-500/10 text-indigo-600", border: "border-indigo-100", tag: "bg-indigo-50 text-indigo-700" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-blue-50 to-cyan-50/30 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-text mb-4">
              Our Services
            </h1>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              Comprehensive dental care using the latest technology. From routine
              check-ups to advanced treatments — we&apos;ve got you covered.
            </p>
          </MotionDiv>

          {/* Quick nav pills */}
          <MotionDiv
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-wrap justify-center gap-2"
          >
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon] || Stethoscope;
              return (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="inline-flex items-center gap-2 bg-white/80 hover:bg-white text-text hover:text-primary px-4 py-2 rounded-full text-sm font-medium border border-gray-200 hover:border-primary/30 transition-all shadow-sm hover:shadow"
                >
                  <Icon className="w-4 h-4" />
                  {service.title}
                </a>
              );
            })}
          </MotionDiv>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-background py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Stethoscope;
            const color = accentColors[i % accentColors.length];
            return (
              <MotionDiv
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className={`rounded-2xl bg-white border ${color.border} shadow-sm overflow-hidden`}
              >
                {/* Card header */}
                <div className="px-6 md:px-10 pt-8 md:pt-10 pb-6 flex flex-col md:flex-row md:items-start gap-4 md:gap-5">
                  <div className={`w-14 h-14 ${color.icon} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-text mb-2">
                      {service.title}
                    </h2>
                    <p className="text-text-light text-base leading-relaxed">
                      {service.fullDesc}
                    </p>
                  </div>
                </div>

                {/* Card body */}
                <div className="px-6 md:px-10 pb-8 md:pb-10 space-y-6">
                  {/* Orthodontics types */}
                  {"types" in service && (
                    <div className="grid sm:grid-cols-3 gap-4">
                      {service.types.map((t) => (
                        <div key={t.name} className="bg-background rounded-xl p-5 border border-gray-100">
                          <h4 className="font-heading font-semibold text-text mb-1">{t.name}</h4>
                          <p className="text-text-light text-sm mb-3">{t.desc}</p>
                          <p className="text-primary font-bold">{t.price}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {"duration" in service && (
                    <div className="flex items-center gap-2 text-text-light">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm">Treatment duration: <strong className="text-text">{service.duration}</strong></span>
                    </div>
                  )}

                  {/* Implant steps */}
                  {"steps" in service && (
                    <div>
                      <h4 className="font-semibold text-text mb-3 text-sm uppercase tracking-wide">Treatment Process</h4>
                      <div className="flex flex-wrap gap-2 items-center">
                        {service.steps.map((step, j) => (
                          <span key={step} className="flex items-center gap-2">
                            <span className={`${color.tag} px-4 py-2 rounded-full text-sm font-medium`}>
                              {j + 1}. {step}
                            </span>
                            {j < service.steps.length - 1 && (
                              <ChevronRight className="w-4 h-4 text-text-light/50 hidden sm:block" />
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {"benefits" in service && (
                    <div>
                      <h4 className="font-semibold text-text mb-3 text-sm uppercase tracking-wide">Benefits</h4>
                      <div className="grid sm:grid-cols-2 gap-2.5">
                        {service.benefits.map((b) => (
                          <div key={b} className="flex items-center gap-2.5 text-text-light text-sm">
                            <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                            {b}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Cosmetic treatments */}
                  {"treatments" in service && (
                    <div className="grid sm:grid-cols-3 gap-4">
                      {service.treatments.map((t) => (
                        <div key={t.name} className="bg-background rounded-xl p-5 border border-gray-100">
                          <h4 className="font-heading font-semibold text-text mb-1">{t.name}</h4>
                          <p className="text-text-light text-sm mb-3">{t.desc}</p>
                          <p className="text-primary font-bold text-sm">{t.price}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {"highlight" in service && (
                    <div className="bg-success/10 rounded-xl px-5 py-3.5 flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="font-medium text-sm text-success">{service.highlight}</span>
                    </div>
                  )}

                  {"price" in service && typeof service.price === "string" && (
                    <div className="flex items-center gap-2 text-primary font-bold">
                      <CreditCard className="w-4 h-4" />
                      {service.price}
                    </div>
                  )}

                  {"services" in service && (
                    <div className="flex flex-wrap gap-2">
                      {service.services.map((s) => (
                        <span key={s} className={`${color.tag} px-3.5 py-1.5 rounded-full text-sm font-medium`}>
                          {s}
                        </span>
                      ))}
                    </div>
                  )}

                  {"pricing" in service && (
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.pricing.map((p) => (
                        <div key={p.name} className="bg-background rounded-xl px-5 py-3.5 flex justify-between items-center border border-gray-100">
                          <span className="text-text text-sm">{p.name}</span>
                          <span className="text-primary font-bold text-sm">{p.price}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* FAQs */}
                  {"faqs" in service && (
                    <div>
                      <h4 className="font-semibold text-text mb-3 text-sm uppercase tracking-wide">Common Questions</h4>
                      <div className="space-y-2">
                        {service.faqs.map((faq) => (
                          <FAQAccordion key={faq.q} q={faq.q} a={faq.a} variant="compact" />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="pt-2">
                    <Link
                      href="/book-appointment"
                      className="inline-flex items-center gap-2 bg-cta hover:bg-cta-dark text-white px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-cta/20 active:scale-[0.98]"
                    >
                      <Calendar className="w-5 h-5" />
                      Book Consultation
                    </Link>
                  </div>
                </div>
              </MotionDiv>
            );
          })}
        </div>
      </section>

      {/* Pricing Table */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Transparent Pricing"
            title="Treatment Price Guide"
            description="We believe in transparent pricing. Below are indicative prices — actual costs depend on individual case complexity."
          />
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left px-6 py-4 font-heading font-semibold">Treatment</th>
                    <th className="text-right px-6 py-4 font-heading font-semibold">Price Range</th>
                  </tr>
                </thead>
                <tbody>
                  {PRICING_TABLE.map((row, i) => (
                    <tr key={row.treatment} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-background"}`}>
                      <td className="px-6 py-4 text-text">{row.treatment}</td>
                      <td className="px-6 py-4 text-right text-primary font-bold">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </MotionDiv>

          <div className="mt-6 bg-primary/5 rounded-2xl p-6 text-sm text-text-light border border-primary/10">
            <p className="mb-3">
              <strong className="text-text">Note:</strong> Prices are indicative. Actual cost depends on individual
              case complexity. EMI options available for treatments above ₹10,000.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-medium text-text">EMI Partners:</span>
              {["Bajaj Finserv", "HDFC", "ICICI"].map((partner) => (
                <span key={partner} className="bg-white px-4 py-1.5 rounded-lg text-xs font-semibold text-primary border border-primary/10">
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
