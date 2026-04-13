import type { Metadata } from "next";
import { SITE_URL, SEO } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Dr. Karthikeyan | Smile Care Dental Clinic Tiruppur",
  description:
    "Meet Dr. S. Karthikeyan (BDS, MDS Orthodontics) — 8+ years experience, 15,000+ patients treated. Learn about our advanced dental equipment and modern clinic in Tiruppur.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Dr. Karthikeyan | Smile Care Dental Clinic Tiruppur",
    description:
      "Meet Dr. S. Karthikeyan (BDS, MDS Orthodontics) — 8+ years experience, 15,000+ patients treated.",
    url: `${SITE_URL}/about`,
    siteName: SEO.siteName,
    locale: SEO.locale,
    type: "profile",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
