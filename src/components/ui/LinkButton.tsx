import React from "react";
import Link, { LinkProps } from "next/link";
import { buttonVariants } from "./Button";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";

export interface LinkButtonProps
  extends LinkProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </Link>
    );
  },
);

LinkButton.displayName = "LinkButton";

export { LinkButton };
