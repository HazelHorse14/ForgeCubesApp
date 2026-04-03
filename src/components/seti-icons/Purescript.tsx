import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPurescript = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={2}
    clipRule="evenodd"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path
      fillRule="nonzero"
      d="M18.786 19.079h-7.217l1.644 1.535h7.218zm-7.217-2.312h7.217l1.644-1.534h-7.218zm7.217-5.381h-7.217l1.643 1.535h7.218zm-7.977 3.054-1.086-1.086-4.026 4.026a.766.766 0 0 0 0 1.086l4.026 4.027 1.086-1.086-3.483-3.487zm15.493-.906-4.025-4.027-1.085 1.086 3.481 3.487-3.481 3.483 1.085 1.086 4.025-4.025a.77.77 0 0 0 0-1.09"
    />
  </Svg>
);
export default SvgPurescript;
