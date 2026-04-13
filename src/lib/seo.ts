import { CLINIC, SERVICES, FAQS } from "./constants";
import type { BlogPost } from "./blog";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://smilecaretiruppur.com";

export const SEO = {
  siteName: CLINIC.name,
  locale: "en_IN",
  twitterHandle: "@smilecaretiruppur",
} as const;

export function createLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${SITE_URL}/#dentist`,
    name: CLINIC.name,
    description:
      "Advanced dental clinic in Tiruppur offering braces, implants, root canal, teeth whitening, and pediatric dentistry. Painless treatment by Dr. Karthikeyan (MDS).",
    url: SITE_URL,
    telephone: CLINIC.phone,
    email: CLINIC.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 12, 2nd Floor, Kumar Complex, Palladam Road",
      addressLocality: "Tiruppur",
      addressRegion: "Tamil Nadu",
      postalCode: "641604",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 11.1,
      longitude: 77.34,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "13:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "17:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "13:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: CLINIC.stats.rating,
      bestRating: "5",
      ratingCount: "250",
    },
    priceRange: "₹₹",
    image: `${SITE_URL}/og-image.jpg`,
    founder: {
      "@type": "Person",
      name: CLINIC.doctor.name,
      jobTitle: "Chief Dentist & Orthodontist",
      description: CLINIC.doctor.shortBio,
    },
    medicalSpecialty: ["Orthodontics", "Implantology", "CosmeticDentistry", "Endodontics", "PediatricDentistry"],
    availableService: SERVICES.map((s) => ({
      "@type": "MedicalProcedure",
      name: s.title,
      description: s.shortDesc,
    })),
    hasMap: "https://www.google.com/maps?q=Smile+Care+Dental+Clinic+Tiruppur",
    sameAs: [],
  };
}

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: CLINIC.name,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CLINIC.phone,
      contactType: "customer service",
      availableLanguage: ["Tamil", "English", "Hindi"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 12, 2nd Floor, Kumar Complex, Palladam Road",
      addressLocality: "Tiruppur",
      addressRegion: "Tamil Nadu",
      postalCode: "641604",
      addressCountry: "IN",
    },
  };
}

export function createFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function createBreadcrumbSchema(items: ReadonlyArray<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function createBlogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.qualifications,
    },
    publisher: {
      "@type": "Organization",
      name: CLINIC.name,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    wordCount: post.content.replace(/<[^>]*>/g, "").split(/\s+/).length,
    articleSection: post.category,
    keywords: post.tags.join(", "),
  };
}

export function createWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: CLINIC.name,
    url: SITE_URL,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
