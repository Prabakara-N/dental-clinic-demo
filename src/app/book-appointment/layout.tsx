import type { Metadata } from "next";
import { SITE_URL, SEO } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Book Dental Appointment Online | Smile Care Dental Clinic Tiruppur",
  description:
    "Book your dental appointment online at Smile Care Dental Clinic Tiruppur. Choose your preferred date, time, and treatment. Quick confirmation via WhatsApp.",
  alternates: {
    canonical: `${SITE_URL}/book-appointment`,
  },
  openGraph: {
    title: "Book Dental Appointment Online | Smile Care Dental Clinic",
    description:
      "Book your dental appointment online. Choose your preferred date, time, and treatment type. Quick confirmation via WhatsApp.",
    url: `${SITE_URL}/book-appointment`,
    siteName: SEO.siteName,
    locale: SEO.locale,
    type: "website",
  },
};

export default function BookAppointmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
