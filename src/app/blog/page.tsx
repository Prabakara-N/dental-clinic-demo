import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Calendar, Clock } from "lucide-react";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import { FAQS } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";
import MotionDiv, { MotionArticle } from "@/components/motion/MotionDiv";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Dental Tips & Blog | Smile Care Dental Clinic Tiruppur",
  description:
    "Expert dental tips, guides, and articles from Dr. Karthikeyan. Learn about braces, implants, whitening, children's dentistry, and oral health care.",
};

const categoryLabels: Record<string, string> = {
  "preventive-care": "Preventive Care",
  "orthodontics": "Orthodontics",
  "cosmetic-dentistry": "Cosmetic Dentistry",
  "oral-health-tips": "Oral Health Tips",
  "dental-procedures": "Dental Procedures",
  "pediatric-dentistry": "Pediatric Dentistry",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-blue-50 to-cyan-50/30 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-text mb-4">
              Patient Resources & Tips
            </h1>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              Helpful dental tips, guides, and answers to common questions.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span
                key={cat.slug}
                className="bg-primary/5 text-primary px-3 py-1.5 rounded-full text-sm font-medium"
              >
                {cat.label} ({cat.count})
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Dental Tips"
            title="Read Our Latest Articles"
            description="Stay informed about your dental health with our expert guides."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <MotionArticle
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <span className="absolute top-3 left-3 bg-white/90 text-primary px-2.5 py-1 rounded-full text-xs font-medium">
                      {categoryLabels[post.category] ?? post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-text text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-text-light text-sm leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-text-light">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readingTime} min
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-1.5 transition-all">
                        <BookOpen className="w-3.5 h-3.5" />
                        Read
                      </span>
                    </div>
                  </div>
                </Link>
              </MotionArticle>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-background py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Got Questions?"
            title="Frequently Asked Questions"
            description="Find quick answers to common questions about our treatments and clinic."
          />
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <FAQAccordion key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
