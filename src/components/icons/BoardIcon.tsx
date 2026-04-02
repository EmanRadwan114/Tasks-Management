import * as React from "react";
import type { SVGProps } from "react";
const SvgBoardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.167}
      d="M11.083 1.75H2.917c-.645 0-1.167.522-1.167 1.167v8.166c0 .645.522 1.167 1.167 1.167h8.166c.645 0 1.167-.522 1.167-1.167V2.917c0-.645-.522-1.167-1.167-1.167M5.25 1.75v10.5m3.5-10.5v10.5"
    />
  </svg>
);
export default SvgBoardIcon;
