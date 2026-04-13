"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type MotionFormProps = HTMLMotionProps<"form"> & {
  readonly children?: React.ReactNode;
};

export default function MotionForm({ children, ...props }: MotionFormProps) {
  return <motion.form {...props}>{children}</motion.form>;
}
