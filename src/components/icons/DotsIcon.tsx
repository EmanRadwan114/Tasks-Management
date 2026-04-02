import * as React from "react";
import type { SVGProps } from "react";
const SvgDotsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <circle cx={8} cy={3} r={1.5} />
    <circle cx={8} cy={8} r={1.5} />
    <circle cx={8} cy={13} r={1.5} />
  </svg>
);
export default SvgDotsIcon;
