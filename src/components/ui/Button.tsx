import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-1.5 shrink-0 font-medium rounded-lg border border-transparent transition-all duration-200 outline-none select-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:border-ring disabled:cursor-not-allowed disabled:opacity-50 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 ",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90",
        secondary:
          "bg-secondary-background text-secondary-foreground hover:bg-secondary-background/80",
        outline:
          "border-secondary-background bg-transparent text-secondary-foreground hover:bg-muted-background hover:text-foreground",
        ghost:
          "bg-transparent text-secondary-foreground hover:bg-secondary-background hover:text-foreground",
        destructive:
          "bg-danger-background text-danger-foreground border-danger-foreground/10 hover:opacity-90",
        success:
          "bg-success-background text-success-foreground border-success-foreground/10 hover:opacity-90",
        warning:
          "bg-warning-background text-warning-foreground border-warning-foreground/10 hover:opacity-90",
        info: "bg-info-background text-info-foreground border-info-foreground/10 hover:opacity-90",
        link: "text-primary underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-8 p-3.5",
        xs: "h-6 px-2 text-xs rounded-md",
        sm: "h-7 px-2.5 text-xs",
        md: "h-9 px-4 py-2 text-sm",
        lg: "h-10 px-6 py-2.5 text-sm",
        xl: "h-12 px-8 py-3 text-size-regular",
        icon: "size-8 p-0",
        "icon-sm": "size-7 p-0",
        "icon-xs": "size-6 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
