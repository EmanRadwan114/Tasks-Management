import * as React from "react";
import type { SVGProps } from "react";
const SvgActivityIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.167}
        d="M12.833 7h-1.447a1.17 1.17 0 0 0-1.125.852L8.89 12.728a.146.146 0 0 1-.228.076.15.15 0 0 1-.052-.076L5.39 1.272a.146.146 0 0 0-.28 0L3.739 6.148A1.17 1.17 0 0 1 2.619 7H1.166"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path d="M0 0h14v14H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgActivityIcon;
