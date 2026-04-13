import type { Metadata } from "next";
import { SITE_URL, SEO, createFAQSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Dental Health Blog & FAQs | Smile Care Dental Clinic Tiruppur",
  description:
    "Expert dental health tips, guides, and FAQs from Dr. Karthikeyan. Learn about braces, teeth whitening, oral hygiene, and common dental treatments.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "Dental Health Blog & FAQs | Smile Care Dental Clinic Tiruppur",
    description:
      "Expert dental health tips and FAQs from Dr. Karthikeyan. Learn about braces, whitening, oral hygiene, and dental treatments.",
    url: `${SITE_URL}/blog`,
    siteName: SEO.siteName,
    locale: SEO.locale,
    type: "website",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={createFAQSchema()} />
      {children}
    </>
  );
}
