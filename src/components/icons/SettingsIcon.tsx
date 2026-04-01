import * as React from "react";
import type { SVGProps } from "react";
const SvgSettingsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="M6.448 2.757a1.56 1.56 0 0 1 3.106 0 1.56 1.56 0 0 0 2.212 1.277 1.56 1.56 0 0 1 1.553 2.689 1.56 1.56 0 0 0 0 2.554 1.56 1.56 0 0 1-1.553 2.688 1.56 1.56 0 0 0-2.212 1.277 1.56 1.56 0 0 1-3.106 0 1.56 1.56 0 0 0-2.214-1.277 1.56 1.56 0 0 1-1.553-2.688 1.56 1.56 0 0 0 0-2.554 1.56 1.56 0 0 1 1.553-2.689 1.56 1.56 0 0 0 2.212-1.277"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
    />
  </svg>
);
export default SvgSettingsIcon;
