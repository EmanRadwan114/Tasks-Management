"use client";

import { useEffect } from "react";
import Image from "next/image";
import ErrorImage from "@/assets/images/error.png";
import { Button } from "@/components/ui/Button";
import { LinkButton } from "@/components/ui/LinkButton";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="flex items-center justify-center p-6 bg-primary-background text-primary-foreground relative overflow-hidden rounded-2xl z-0">
      <div className="absolute top-[10%] right-[15%] w-[40vw] h-[40vw] max-w-100 max-h-100 bg-danger-background rounded-full blur-[80px] md:blur-[120px] -z-10 opacity-70"></div>
      <div className="absolute bottom-[10%] left-[10%] w-[40vw] h-[40vw] max-w-100 max-h-100 bg-warning-background rounded-full blur-[80px] md:blur-[120px] -z-10 opacity-70"></div>

      <div className="w-full flex flex-col items-center justify-center text-center z-10">
        {/* Graphic Side */}
        <div className="relative w-full aspect-square max-w-70 md:max-w-80 mb-8 md:mb-0 drop-shadow-2xl transition-all duration-700 hover:scale-[1.03] group md:flex-1 shrink-0">
          <div className="absolute inset-x-0 bottom-0 top-1/2 bg-linear-to-t from-danger-background/40 to-transparent blur-2xl -z-10 rounded-full mix-blend-multiply opacity-50 transition-opacity duration-500 group-hover:opacity-80"></div>
          <Image
            src={ErrorImage}
            alt="Unexpected Error"
            width={400}
            height={400}
            priority
            className="object-contain transition-transform duration-700 ease-in-out group-hover:-translate-y-3 group-hover:rotate-1"
          />
        </div>

        {/* Interactive / Content Side */}
        <div className="space-y-4 md:flex-1 w-full flex flex-col items-center group px-md">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-danger-background text-danger-foreground font-semibold tracking-wide mb-2 shadow-sm border border-danger-foreground/10">
              <span className="w-2 h-2 rounded-full bg-danger-foreground me-2 animate-pulse"></span>
              System Error
            </div>

            <h1 className="text-size-xl font-bold tracking-tight text-primary-foreground drop-shadow-sm leading-tight">
              Oops! Something <br className="hidden md:block" /> went wrong.
            </h1>

            <p className="text-size-md text-secondary-foreground leading-relaxed sm:w-3/4 sm:m-auto">
              We&apos;ve encountered an unexpected issue while processing your
              request. Don&apos;t worry, our team has been notified.
            </p>
          </div>

          <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0 w-full pt-2">
            <Button
              variant="primary"
              size="md"
              className="w-full sm:w-auto group/btn px-8 hover:-translate-y-1.5"
              onClick={() => reset()}
            >
              <svg
                className="w-5 h-5 me-2.5 transition-transform duration-500 group-hover/btn:-rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Try again
            </Button>

            <LinkButton
              href="/"
              variant="secondary"
              size="md"
              className="w-full sm:w-auto"
            >
              Return Home
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}
