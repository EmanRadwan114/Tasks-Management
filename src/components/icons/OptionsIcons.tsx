import * as React from "react";
import type { SVGProps } from "react";
const SvgOptionsIcons = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 2.5H1.5m4.5 7H1.5m5.5-8v2m1 5v2M10.5 6H6m4.5 3.5H8m2.5-7H7M4 5v2m0-1H1.5"
    />
  </svg>
);
export default SvgOptionsIcons;
