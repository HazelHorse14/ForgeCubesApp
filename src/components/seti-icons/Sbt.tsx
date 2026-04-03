import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSbt = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M26 17c0 .5-.1.9-.2 1.4H12.6c-.9 0-1.3.5-1.3 1.3 0 .7.5 1.1 1.4 1.1h12.2c-1.6 3-4.2 4.8-7.6 5.2-5.3.6-10.2-3-11.1-8.1-1-5.3 2.3-10.3 7.4-11.6 4.2-1.1 8.8.8 11 4.5-.2.1-.5.1-.8.1h-6.5c-.7 0-1.2.5-1.2 1.2s.4 1.1 1.1 1.1h8.4q.3.75.3 1.5H15c-.9 0-1.4.4-1.4 1.2 0 .7.5 1.1 1.4 1.1h10.1q.45-.15.9 0" />
  </Svg>
);
export default SvgSbt;
