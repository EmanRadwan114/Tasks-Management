import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("relative overflow-hidden rounded-md bg-muted", className)}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 skeleton-shimmer bg-linear-to-r from-transparent via-primary/12 to-transparent"
        aria-hidden
      />
    </div>
  )
}

export { Skeleton }
