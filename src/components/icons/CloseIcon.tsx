import * as React from "react";
import type { SVGProps } from "react";
const SvgCloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 9 9"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.5 4.5 8 8M4.5 4.5 1 1m3.5 3.5L1 8m3.5-3.5L8 1"
    />
  </svg>
);
export default SvgCloseIcon;
