import * as React from "react";
import type { SVGProps } from "react";
const SvgPlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.5 6h7M6 2.5v7"
    />
  </svg>
);
export default SvgPlusIcon;
