import type { Metadata } from "next";
import { SITE_URL, SEO } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Dental Services in Tiruppur | Braces, Implants, Root Canal | Kurinji Dental",
  description:
    "Comprehensive dental services: orthodontics/braces, dental implants, cosmetic dentistry, root canal, pediatric dentistry, and general dentistry. Affordable pricing with EMI options.",
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: "Dental Services in Tiruppur | Braces, Implants, Root Canal",
    description:
      "Comprehensive dental services: orthodontics, implants, cosmetic dentistry, root canal, pediatric and general dentistry at affordable prices.",
    url: `${SITE_URL}/services`,
    siteName: SEO.siteName,
    locale: SEO.locale,
    type: "website",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
