import * as React from "react";
import type { SVGProps } from "react";
const SvgLogoutIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.667 11.333 14 8m0 0-3.333-3.333M14 8H6m0 6H3.333A1.334 1.334 0 0 1 2 12.667V3.333A1.333 1.333 0 0 1 3.333 2H6"
    />
  </svg>
);
export default SvgLogoutIcon;
