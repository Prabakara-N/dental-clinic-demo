import type { Metadata } from "next";
import { SITE_URL, SEO } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Dr. Umamaheshwari | Kurinji Dental Centre Tiruppur",
  description:
    "Meet Dr. Umamaheshwari S (BDS) — 8+ years experience, 10,000+ patients treated. Learn about our advanced dental equipment and modern clinic in Anupparpalayam, Tiruppur.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Dr. Umamaheshwari | Kurinji Dental Centre Tiruppur",
    description:
      "Meet Dr. Umamaheshwari S (BDS) — 8+ years experience, 10,000+ patients treated.",
    url: `${SITE_URL}/about`,
    siteName: SEO.siteName,
    locale: SEO.locale,
    type: "profile",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
