import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEslint = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M21.8 7H10.5l-5.1 9 5.1 9h11.3l4.7-9zM16 23.3l-6.3-3.6v-7.1L16 8.7l6.3 3.9v7.1z" />
    <Path d="M11.8 13.7v4.8l4.2 2.4 4.2-2.4v-4.8L16 11.1z" />
  </Svg>
);
export default SvgEslint;
