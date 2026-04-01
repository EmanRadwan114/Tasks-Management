import * as React from "react";
import type { SVGProps } from "react";
const SvgReleasesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      clipPath="url(#releases-icon_svg__a)"
    >
      <path d="M8.39 1.724c-.25-.25-.588-.39-.942-.39H2.667a1.333 1.333 0 0 0-1.333 1.333v4.781c0 .354.14.693.39.943l5.803 5.802a1.617 1.617 0 0 0 2.28 0l4.387-4.386a1.617 1.617 0 0 0 0-2.28z" />
      <path
        fill="currentColor"
        d="M5 5.333a.333.333 0 1 0 0-.666.333.333 0 0 0 0 .666"
      />
    </g>
    <defs>
      <clipPath id="releases-icon_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgReleasesIcon;
