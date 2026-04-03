import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgD = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M23.5 15.8c0 2.6-.8 4.7-2.5 6.1S16.9 24 13.6 24H8.5V8h5.7q4.5 0 6.9 2.1c1.6 1.3 2.4 3.3 2.4 5.7m-4 .1c0-3.4-1.7-5.2-5.2-5.2h-2v10.5H14c3.7 0 5.5-1.7 5.5-5.3" />
  </Svg>
);
export default SvgD;
