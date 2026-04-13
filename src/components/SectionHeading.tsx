import MotionDiv from "@/components/motion/MotionDiv";

interface SectionHeadingProps {
  readonly subtitle?: string;
  readonly title: string;
  readonly description?: string;
  readonly centered?: boolean;
  readonly light?: boolean;
}

export default function SectionHeading({ subtitle, title, description, centered = true, light = false }: SectionHeadingProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`mb-10 md:mb-14 ${centered ? "text-center" : ""}`}
    >
      {subtitle && (
        <span className={`inline-block font-semibold text-sm tracking-wider uppercase mb-2 ${light ? "text-white/60" : "text-secondary"}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight ${light ? "text-white" : "text-text"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg max-w-2xl mx-auto leading-relaxed ${light ? "text-white/80" : "text-text-light"}`}>
          {description}
        </p>
      )}
    </MotionDiv>
  );
}
