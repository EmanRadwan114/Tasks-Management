import Image from "next/image";
import Error404Image from "@/assets/images/error-404.png";
import { LinkButton } from "@/components/ui/LinkButton";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center p-6 h-full bg-primary-background text-primary-foreground relative overflow-hidden rounded-2xl z-0">
      {/* Decorative background blurs for premium glassmorphism feel */}
      <div className="absolute top-[10%] left-[20%] w-[35vw] h-[35vw] max-w-100 max-h-100 bg-info-background rounded-full blur-[80px] md:blur-[120px] -z-10 opacity-70"></div>
      <div className="absolute bottom-[10%] right-[20%] w-[35vw] h-[35vw] max-w-100 max-h-100 bg-purple-background rounded-full blur-[80px] md:blur-[120px] -z-10 opacity-70"></div>

      <div className="w-full flex flex-col items-center text-center space-y-4 z-10">
        {/* Image with subtle hover animation */}
        <div className="relative w-full max-w-70 md:max-w-96 transition-transform duration-700 hover:scale-[1.05] drop-shadow-2xl group cursor-pointer mb-8">
          <Image
            src={Error404Image}
            alt="404 Not Found"
            width={400}
            height={400}
            priority
            className="object-contain transition-transform duration-700 ease-in-out group-hover:-translate-y-4"
          />
        </div>

        <div className="space-y-4 px-4">
          <h1 className="text-size-xl font-bold tracking-tight text-primary-foreground drop-shadow-sm">
            Lost in Space
          </h1>
          <p className="text-size-md text-secondary-foreground max-w-125 mx-auto leading-relaxed">
            We couldn&apos;t locate the page you&apos;re looking for. It might
            have been moved or permanently removed.
          </p>
        </div>

        <LinkButton href="/" variant="default">
          <svg
            className="size-3 transition-transform duration-300 group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </LinkButton>
      </div>
    </div>
  );
}
