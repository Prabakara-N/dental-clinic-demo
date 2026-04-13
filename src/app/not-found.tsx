import Link from "next/link";
import { Home, ArrowLeft, Phone, Calendar } from "lucide-react";
import MotionDiv from "@/components/motion/MotionDiv";
import { CLINIC } from "@/lib/constants";

export default function NotFound() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-blue-50 to-cyan-50/30 min-h-[70vh] flex items-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 md:py-24">
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Tooth illustration */}
            <div className="text-8xl md:text-9xl mb-6 select-none" aria-hidden="true">
              🦷
            </div>

            <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary mb-4">
              404
            </h1>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-text mb-4">
              Page Not Found
            </h2>
            <p className="text-text-light text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
              Looks like this page has been extracted! Don&apos;t worry, let us
              guide you back to a healthy path.
            </p>
          </MotionDiv>

          {/* Action buttons */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3.5 rounded-xl transition-colors shadow-lg shadow-primary/25"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 bg-cta hover:bg-cta-dark text-white font-semibold px-8 py-3.5 rounded-xl transition-colors shadow-lg shadow-cta/25"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Link>
          </MotionDiv>

          {/* Quick links */}
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-14"
          >
            <p className="text-text-light text-sm mb-4">
              Or try one of these pages:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { href: "/services", label: "Our Services" },
                { href: "/about", label: "About Us" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 text-primary hover:text-primary-dark font-medium text-sm bg-white px-4 py-2 rounded-lg border border-primary/15 hover:border-primary/30 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  {link.label}
                </Link>
              ))}
            </div>
          </MotionDiv>

          {/* Emergency contact */}
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 bg-white rounded-2xl p-6 shadow-sm border border-primary/10 inline-block"
          >
            <p className="text-text-light text-sm mb-2">
              Need urgent dental care?
            </p>
            <a
              href={`tel:${CLINIC.phone}`}
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              {CLINIC.phone}
            </a>
          </MotionDiv>
        </div>
      </section>
    </>
  );
}
