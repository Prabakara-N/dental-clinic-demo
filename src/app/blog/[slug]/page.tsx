import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Tag, ChevronRight } from "lucide-react";
import { getAllSlugs, getPostBySlug, getPostsByCategory } from "@/lib/blog";
import { SITE_URL, createBlogPostingSchema, createBreadcrumbSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import MotionDiv from "@/components/motion/MotionDiv";

interface PageProps {
  readonly params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Kurinji Dental Centre`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: [{ url: post.image, width: 600, height: 400, alt: post.title }],
      url: `${SITE_URL}/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

const categoryLabels: Record<string, string> = {
  "preventive-care": "Preventive Care",
  "orthodontics": "Orthodontics",
  "cosmetic-dentistry": "Cosmetic Dentistry",
  "oral-health-tips": "Oral Health Tips",
  "dental-procedures": "Dental Procedures",
  "pediatric-dentistry": "Pediatric Dentistry",
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getPostsByCategory(post.category)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const breadcrumbItems = [
    { name: "Home", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: post.title, url: `${SITE_URL}/blog/${post.slug}` },
  ];

  return (
    <>
      <JsonLd data={createBlogPostingSchema(post)} />
      <JsonLd data={createBreadcrumbSchema(breadcrumbItems)} />

      {/* Breadcrumb */}
      <div className="bg-background border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-text-light">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-text font-medium truncate">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="bg-white py-10 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-primary font-medium text-sm mb-8 hover:gap-2.5 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mb-6">
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                {categoryLabels[post.category] ?? post.category}
              </span>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-[42px] font-bold text-text leading-tight mb-4">
                {post.title}
              </h1>
              <p className="text-text-light text-lg leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-text-light mb-8 pb-8 border-b border-gray-100">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </MotionDiv>

          {/* Featured Image */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-lg mb-10"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </MotionDiv>

          {/* Content */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="blog-content prose prose-lg max-w-none
              prose-headings:font-heading prose-headings:text-text prose-headings:font-bold
              prose-h2:text-2xl prose-h3:text-xl
              prose-p:text-text-light
              prose-li:text-text-light
              prose-strong:text-text
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-table:border-collapse prose-td:border prose-td:border-gray-200 prose-td:px-4 prose-td:py-2
              prose-ol:list-decimal prose-ul:list-disc"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-10 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-text-light" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-background text-text-light px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-white text-center">
            <h3 className="font-heading text-2xl font-bold mb-3">
              Need Dental Care?
            </h3>
            <p className="text-white/80 mb-6 max-w-md mx-auto">
              Book an appointment at Kurinji Dental Centre, Tiruppur. Compassionate care with a gentle touch.
            </p>
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 bg-cta hover:bg-cta-dark text-white px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-background py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-text mb-8">
              Related Articles
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-bold text-text group-hover:text-primary transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-text-light text-sm mt-2 line-clamp-2">
                      {related.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
