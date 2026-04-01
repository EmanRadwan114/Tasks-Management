import * as React from "react";
import type { SVGProps } from "react";
const SvgBellIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.845 14a1.333 1.333 0 0 0 2.31 0m-6.98-3.783a.667.667 0 0 0 .492 1.116h10.666a.666.666 0 0 0 .494-1.115C12.94 9.304 12 8.333 12 5.333a4 4 0 1 0-8 0c0 3-.94 3.971-1.825 4.884"
    />
  </svg>
);
export default SvgBellIcon;
