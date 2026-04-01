import * as React from "react";
import type { SVGProps } from "react";
const SvgSearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.167}
      d="M11.083 11.083 8.552 8.552M5.25 9.917a4.667 4.667 0 1 0 0-9.334 4.667 4.667 0 0 0 0 9.334"
    />
  </svg>
);
export default SvgSearchIcon;
