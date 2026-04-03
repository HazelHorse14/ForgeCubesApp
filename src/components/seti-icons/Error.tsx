import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgError = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M6 24c1.9-3 3.7-5.9 5.6-8.9 1.5-2.3 2.9-4.7 4.4-7v.1c2 3.2 4 6.4 6 9.5 1.3 2.1 2.7 4.2 4 6.4-6.7-.1-13.3-.1-20-.1m9-11.1v6h2v-6zm2 9v-2h-2v2z" />
  </Svg>
);
export default SvgError;
