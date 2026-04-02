import React, { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      "flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 disabled:opacity-50 cursor-pointer disabled:pointer-events-none active:scale-[0.98] text-size-regular";

    const variants = {
      primary:
        "bg-primary text-primary-background hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] focus:ring-primary/20 hover:-translate-y-0.5 hover:shadow-md",
      secondary:
        "bg-secondary-background text-secondary-foreground hover:bg-muted-background focus:ring-secondary-background/50 border border-transparent hover:border-black/5 hover:-translate-y-0.5 hover:shadow-md",
      danger:
        "bg-danger-background text-danger-foreground border border-danger-foreground/10 focus:ring-danger-foreground/20 hover:opacity-90",
      ghost:
        "bg-transparent hover:bg-secondary-background text-secondary-foreground shadow-none hover:shadow-none hover:-translate-y-0",
      outline:
        "bg-white border border-secondary-background text-secondary-foreground hover:text-muted-foreground",
      info: "bg-info-background text-info-foreground border border-info-foreground/10 focus:ring-info-foreground/20 hover:opacity-90",
      success:
        "bg-success-background text-success-foreground border border-success-foreground/10 focus:ring-success-foreground/20 hover:opacity-90",
      warning:
        "bg-warning-background text-warning-foreground border border-warning-foreground/10 focus:ring-warning-foreground/20 hover:opacity-90",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs md:text-sm rounded-xl",
      md: "px-4 py-2.5 text-sm md:text-[15px]",
      lg: "px-8 py-4 text-[15px] md:text-[16px]",
      icon: "p-3 aspect-square",
    };

    // Construct final classes dynamically
    const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
      <button
        ref={ref}
        className={styles.trim()}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2.5 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
