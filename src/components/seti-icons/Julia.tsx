import * as React from "react";
import Svg, { G, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgJulia = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <G fill="#9F74B3">
      <Circle cx={11.3} cy={20.3} r={3.9} />
      <Circle cx={20.7} cy={20.3} r={3.9} />
      <Circle cx={16} cy={11.7} r={3.9} />
    </G>
  </Svg>
);
export default SvgJulia;
