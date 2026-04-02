import * as React from "react";
import type { SVGProps } from "react";
const SvgFilterIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 1.5H1l4 4.73V9.5l2 1V6.23z"
    />
  </svg>
);
export default SvgFilterIcon;
