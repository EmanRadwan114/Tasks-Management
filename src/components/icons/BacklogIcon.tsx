import * as React from "react";
import type { SVGProps } from "react";
const SvgBacklogIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 2H2a.667.667 0 0 0-.667.667v2c0 .368.299.666.667.666h12a.667.667 0 0 0 .667-.666v-2A.667.667 0 0 0 14 2M2.667 5.333v7.334A1.333 1.333 0 0 0 4 14h8a1.333 1.333 0 0 0 1.334-1.333V5.333M6.667 8h2.667"
    />
  </svg>
);
export default SvgBacklogIcon;
