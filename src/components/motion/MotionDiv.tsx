"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type MotionDivProps = HTMLMotionProps<"div"> & {
  readonly children?: React.ReactNode;
};

export default function MotionDiv({ children, ...props }: MotionDivProps) {
  return <motion.div {...props}>{children}</motion.div>;
}

export function MotionArticle({
  children,
  ...props
}: HTMLMotionProps<"article"> & { readonly children?: React.ReactNode }) {
  return <motion.article {...props}>{children}</motion.article>;
}
