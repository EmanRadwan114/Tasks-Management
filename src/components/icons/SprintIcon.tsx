import * as React from "react";
import type { SVGProps } from "react";
const SvgSprintIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.334 2v9.333M8 2v5.333M12.667 2v12"
    />
  </svg>
);
export default SvgSprintIcon;
