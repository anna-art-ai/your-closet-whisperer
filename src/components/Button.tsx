import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const styles = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary: "border border-border bg-transparent text-foreground hover:bg-secondary",
  light: "bg-background text-foreground hover:bg-background/90",
} as const;

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: keyof typeof styles;
  children: ReactNode;
};

export function Button({ asChild, variant = "primary", className = "", ...props }: Props) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${styles[variant]} ${className}`}
      {...props}
    />
  );
}
