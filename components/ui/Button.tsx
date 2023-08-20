import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-block text-center px-6 py-3 rounded-xl border font-medium active:scale-105 ",
  {
    variants: {
      variant: {
        default: "",
      },
      size: {
        auto: "",
        full: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "auto",
    },
  }
);

interface Buttonprops
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: React.FC<Buttonprops> = ({
  children,
  type,
  disabled,
  onClick,
  variant,
  size,
}) => {
  return <button >{children}</button>;
};

export default Button;
