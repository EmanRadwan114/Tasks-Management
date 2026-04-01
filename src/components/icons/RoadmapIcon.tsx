import * as React from "react";
import type { SVGProps } from "react";
const SvgRoadmapIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 3.843c-.207 0-.41-.049-.596-.141L6.596 2.298A1.3 1.3 0 0 0 6 2.158m4 1.685c.207 0 .41-.049.596-.141l2.44-1.22a.667.667 0 0 1 .964.597v8.51a.67.67 0 0 1-.369.596l-3.035 1.518c-.185.092-.39.14-.596.14m0-10v10m0 0c-.207 0-.41-.048-.596-.14l-2.808-1.404a1.33 1.33 0 0 0-1.192 0l-2.44 1.22A.667.667 0 0 1 2 12.92V4.412a.67.67 0 0 1 .369-.596l3.035-1.518c.185-.092.39-.14.596-.14m0 0v10"
    />
  </svg>
);
export default SvgRoadmapIcon;
