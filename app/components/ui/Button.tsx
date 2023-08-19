import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-block text-center px-6 py-3 rounded-xl border font-medium active:scale-105 "
);
