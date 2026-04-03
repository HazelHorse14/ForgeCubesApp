import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEjs = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path
      fill="#F1DD3F"
      d="M7.5 14.9 13.9 9v2.8L9.1 16l4.8 4.2V23l-6.4-5.9zm17 2.3-6.4 5.9v-2.8l4.9-4.2V16l-4.9-4.2V8.9l6.4 5.9z"
    />
  </Svg>
);
export default SvgEjs;
