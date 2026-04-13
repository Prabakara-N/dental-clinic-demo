import type { Metadata } from "next";
import { SITE_URL, SEO } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Smile Care Dental Clinic Tiruppur | Call 96001-23456",
  description:
    "Contact Smile Care Dental Clinic Tiruppur. Call 96001-23456, WhatsApp, or visit us at Kumar Complex, Palladam Road. Open Mon-Sat with morning and evening slots.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Smile Care Dental Clinic Tiruppur",
    description:
      "Get in touch with Smile Care Dental Clinic. Call 96001-23456 or visit us at Kumar Complex, Palladam Road, Tiruppur.",
    url: `${SITE_URL}/contact`,
    siteName: SEO.siteName,
    locale: SEO.locale,
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
