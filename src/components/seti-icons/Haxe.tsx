import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHaxe = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path
      fill="#231f20"
      d="m24.9 20-2-4 2-4 .1-.1V7h-4.9l-.1.1-4 2-4-2-.1-.1H7v4.9l.1.1 2 4-2 4-.1.1V25h4.9l.1-.1 4-2 4 2 .1.1H25v-4.9zM22 15.6 16.4 10l7.5-1.9zm-12 0L8.1 8.1l7.5 1.9zm0 .8 5.6 5.6-7.5 1.9zm12 0 1.9 7.5-7.5-1.9z"
    />
  </Svg>
);
export default SvgHaxe;
