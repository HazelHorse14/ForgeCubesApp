import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWindows = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <Path
      fill="#00adef"
      d="m6 8.81 8.173-1.114.004 7.884-8.17.047zm8.17 7.68.006 7.89-8.17-1.124v-6.82zm.99-8.94 10.837-1.58v9.51l-10.837.086zM26 16.564l-.003 9.468L15.16 24.5l-.015-7.955L26 16.563z"
    />
  </Svg>
);
export default SvgWindows;
