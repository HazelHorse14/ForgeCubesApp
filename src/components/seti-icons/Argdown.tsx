import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArgdown = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={1.414}
    clipRule="evenodd"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path
      fill="#579ebc"
      d="M20.451 16.65h3.55l-8 8.975-8-8.975h3.56V6.375l3 1.875v11.765l1.44 1.615 1.45-1.628V8.25l3-1.875z"
    />
  </Svg>
);
export default SvgArgdown;
