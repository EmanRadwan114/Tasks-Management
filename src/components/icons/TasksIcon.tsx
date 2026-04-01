import * as React from "react";
import type { SVGProps } from "react";
const SvgTasksIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 7.104v5.563A1.334 1.334 0 0 1 12.667 14H3.333A1.334 1.334 0 0 1 2 12.667V3.333A1.333 1.333 0 0 1 3.333 2h8.23"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="m6 7.333 2 2 6.667-6.666"
    />
  </svg>
);
export default SvgTasksIcon;
