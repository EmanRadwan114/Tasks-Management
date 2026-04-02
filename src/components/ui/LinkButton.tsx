import React, { forwardRef } from "react";
import Link, { LinkProps } from "next/link";

export interface LinkButtonProps
  extends LinkProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {
  variant?:
    | "primary"
    | "secondary"
    | "danger"
    | "ghost"
    | "outline"
    | "info"
    | "success"
    | "warning";
  size?: "sm" | "md" | "lg" | "icon";
  children: React.ReactNode;
}

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    { className = "", variant = "primary", size = "md", children, ...props },
    ref,
  ) => {
    // These styles mirror the Button component identically
    const baseStyles =
      "inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] hover:-translate-y-1 hover:shadow-md";

    const variants = {
      primary:
        "bg-primary text-primary-background hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] focus:ring-primary/20",
      secondary:
        "bg-secondary-background text-secondary-foreground focus:ring-secondary-background/50 border border-transparent",
      danger:
        "bg-danger-background text-danger-foreground border border-danger-foreground/10 focus:ring-danger-foreground/20 hover:opacity-90",
      ghost:
        "bg-transparent hover:bg-secondary-background text-secondary-foreground shadow-none hover:shadow-none hover:-translate-y-0",
      outline:
        "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-background focus:ring-primary/20",
      info: "bg-info-background text-info-foreground border border-info-foreground/10 focus:ring-info-foreground/20 hover:opacity-90",
      success:
        "bg-success-background text-success-foreground border border-success-foreground/10 focus:ring-success-foreground/20 hover:opacity-90",
      warning:
        "bg-warning-background text-warning-foreground border border-warning-foreground/10 focus:ring-warning-foreground/20 hover:opacity-90",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs md:text-sm rounded-xl",
      md: "px-6 py-3.5 text-sm md:text-[15px]",
      lg: "px-8 py-4 text-[15px] md:text-[16px]",
      icon: "p-3 aspect-square",
    };

    // Construct final classes dynamically
    const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
      <Link ref={ref} className={styles.trim()} {...props}>
        {children}
      </Link>
    );
  },
);

LinkButton.displayName = "LinkButton";

export { LinkButton };
