import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSvg = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path
      d="M11.5 11.4H17c0-2-2.3-4.9-5.1-4.9s-5.3 2.4-5.3 5.2 2.9 5.2 4.9 5.2z"
      opacity={0.5}
    />
    <Path d="M13.6 13.7h11.8v11.8H13.6z" />
  </Svg>
);
export default SvgSvg;
