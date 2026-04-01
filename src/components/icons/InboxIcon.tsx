import * as React from "react";
import type { SVGProps } from "react";
const SvgInboxIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={12}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="M14 6h-4L8.666 8H6L4.667 6h-4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="M2.967 1.407.667 6v4A1.333 1.333 0 0 0 2 11.333h10.667A1.333 1.333 0 0 0 14 10V6l-2.3-4.593a1.33 1.33 0 0 0-1.193-.74H4.16a1.33 1.33 0 0 0-1.194.74"
    />
  </svg>
);
export default SvgInboxIcon;
