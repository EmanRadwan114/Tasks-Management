import * as React from "react";
import type { SVGProps } from "react";
const SvgListIcon = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.167}
      d="M1.75 2.917h.006M1.75 7h.006m-.006 4.083h.006m2.91-8.166h7.584M4.667 7h7.583m-7.583 4.083h7.583"
    />
  </svg>
);
export default SvgListIcon;
