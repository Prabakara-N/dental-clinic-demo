import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileBottomBar from "@/components/MobileBottomBar";
import JsonLd from "@/components/JsonLd";
import {
  SITE_URL,
  SEO,
  createLocalBusinessSchema,
  createOrganizationSchema,
  createWebSiteSchema,
} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Smile Care Dental Clinic Tiruppur | Best Dentist | Dr. Karthikeyan",
    template: "%s | Smile Care Dental Clinic",
  },
  description:
    "Advanced dental clinic in Tiruppur. Braces, implants, root canal, teeth whitening. Painless treatment by Dr. Karthikeyan (MDS). Book appointment: 96001-23456.",
  keywords: [
    "dentist in Tiruppur",
    "dental clinic Tiruppur",
    "best dentist Tiruppur",
    "braces Tiruppur",
    "implant Tiruppur",
    "root canal Tiruppur",
    "teeth whitening Tiruppur",
    "orthodontist Tiruppur",
    "pediatric dentist Tiruppur",
    "dental implants Tiruppur",
    "smile care dental",
    "Dr Karthikeyan dentist",
  ],
  authors: [{ name: "Dr. S. Karthikeyan", url: `${SITE_URL}/about` }],
  creator: "Smile Care Dental Clinic",
  publisher: "Smile Care Dental Clinic",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Smile Care Dental Clinic Tiruppur | Best Dentist",
    description:
      "Advanced dental care with a gentle touch. Braces, implants, root canal, teeth whitening. Book your appointment today.",
    url: SITE_URL,
    siteName: SEO.siteName,
    locale: SEO.locale,
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Smile Care Dental Clinic Tiruppur - Modern dental care facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smile Care Dental Clinic Tiruppur | Best Dentist",
    description:
      "Advanced dental care with a gentle touch. Book your appointment today.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "your-google-verification-code",
  },
  category: "health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <JsonLd data={createLocalBusinessSchema()} />
        <JsonLd data={createOrganizationSchema()} />
        <JsonLd data={createWebSiteSchema()} />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="pt-16 md:pt-20 pb-14 md:pb-0">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileBottomBar />
      </body>
    </html>
  );
}
