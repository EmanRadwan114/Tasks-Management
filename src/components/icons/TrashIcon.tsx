import * as React from "react";
import type { SVGProps } from "react";
const SvgTrashIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    {...props}
  >
    <path d="M4.875 5.25a.375.375 0 1 0 0 .75h2.25a.375.375 0 0 0 0-.75zm-3.75-3A1.125 1.125 0 0 1 2.25 1.125h7.5a1.125 1.125 0 0 1 1.125 1.125V3a1.13 1.13 0 0 1-.375.838v4.975a2.06 2.06 0 0 1-2.062 2.062H3.561A2.06 2.06 0 0 1 1.5 8.813V3.838A1.12 1.12 0 0 1 1.125 3zM2.25 4.125v4.688a1.313 1.313 0 0 0 1.313 1.312h4.874A1.313 1.313 0 0 0 9.75 8.813V4.125zm0-2.25a.375.375 0 0 0-.375.375V3a.375.375 0 0 0 .375.375h7.5A.375.375 0 0 0 10.125 3v-.75a.375.375 0 0 0-.375-.375z" />
  </svg>
);
export default SvgTrashIcon;
