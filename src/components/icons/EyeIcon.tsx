import * as React from "react";
import type { SVGProps } from "react";
const SvgEyeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.03 6.174a.5.5 0 0 1 0-.348 5.375 5.375 0 0 1 9.939 0 .5.5 0 0 1 0 .348 5.375 5.375 0 0 1-9.938 0"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
    />
  </svg>
);
export default SvgEyeIcon;
