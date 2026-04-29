"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { CLINIC, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/80 backdrop-blur-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M12 2C9.5 2 7.5 3.5 7 6C6.5 8.5 5 10 4 11C3 12 2.5 14 3.5 16C4.5 18 6 18.5 7.5 18C9 17.5 10 16.5 12 16.5C14 16.5 15 17.5 16.5 18C18 18.5 19.5 18 20.5 16C21.5 14 21 12 20 11C19 10 17.5 8.5 17 6C16.5 3.5 14.5 2 12 2Z" fill="currentColor" />
              </svg>
            </div>
            <div>
              <span className="font-heading font-bold text-lg text-primary leading-tight block">
                Kurinji
              </span>
              <span className="text-[10px] text-text-light leading-none hidden sm:block">
                Dental Centre
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${pathname === link.href
                  ? "text-primary font-semibold"
                  : "text-text hover:text-primary"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/book-appointment"
              className="bg-cta hover:bg-cta-dark text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:shadow-lg hover:shadow-cta/30 active:scale-95"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-text hover:text-primary hover:bg-primary/5"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t mt-3 space-y-2">
                <a
                  href={`tel:${CLINIC.phone}`}
                  className="flex items-center gap-2 px-4 py-3 text-primary font-medium"
                >
                  <Phone className="w-5 h-5" />
                  Call: {CLINIC.phoneDisplay}
                </a>
                <Link
                  href="/book-appointment"
                  className="block text-center bg-cta text-white px-6 py-3 rounded-xl font-semibold"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
