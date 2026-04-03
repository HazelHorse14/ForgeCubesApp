import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDefault = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 1000"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M394.1 537.8h411.7v54.7H394.1zm0-130.3H624v54.7H394.1zm0-130.3h411.7v54.7H394.1zm0 390.9H700v54.7H394.1z" />
  </Svg>
);
export default SvgDefault;
