import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCheckbox = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M13.2 19.9c.2-.2.2-.3.3-.3 2.9-4.3 5.9-8.7 8.8-12.9.6-.8 1.1-.9 2-.3.5.3 1.1.8 1.5 1.1.6.5.8 1.1.3 1.7-3.7 5.3-7.3 10.7-11 16-.8 1.1-1.8 1.2-2.7.3l-.3-.3L6 19.1q-.9-.9 0-1.8c.5-.6 1-1 1.3-1.3.8-.8 1.2-.8 2 0l3.8 3.8c0-.2.1 0 .1.1" />
  </Svg>
);
export default SvgCheckbox;
