import type { Metadata } from "next";
import { SITE_URL, SEO } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Kurinji Dental Centre Tiruppur | Call 96001-23456",
  description:
    "Contact Kurinji Dental Centre Tiruppur. Call 96001-23456, WhatsApp, or visit us opposite Kovai Departmental Store, Anupparpalayam. Open Mon-Sat with morning and evening slots.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Kurinji Dental Centre Tiruppur",
    description:
      "Get in touch with Kurinji Dental Centre. Call 96001-23456 or visit us opposite Kovai Departmental Store, Anupparpalayam, Tiruppur.",
    url: `${SITE_URL}/contact`,
    siteName: SEO.siteName,
    locale: SEO.locale,
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
