import * as React from "react";
import type { SVGProps } from "react";
const SvgDashboardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="M4.667.667H1.333a.667.667 0 0 0-.666.666V6c0 .368.298.667.666.667h3.334A.667.667 0 0 0 5.333 6V1.333a.667.667 0 0 0-.667-.666M12 .667H8.667A.667.667 0 0 0 8 1.333v2c0 .369.298.667.667.667H12a.667.667 0 0 0 .667-.667v-2A.667.667 0 0 0 12 .667M12 6.667H8.667A.667.667 0 0 0 8 7.333V12c0 .368.298.667.667.667H12a.667.667 0 0 0 .667-.667V7.333A.667.667 0 0 0 12 6.667M4.667 9.333H1.333A.667.667 0 0 0 .667 10v2c0 .368.298.667.666.667h3.334A.667.667 0 0 0 5.333 12v-2a.667.667 0 0 0-.667-.667"
    />
  </svg>
);
export default SvgDashboardIcon;
