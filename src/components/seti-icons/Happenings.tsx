import * as React from "react";
import Svg, { G, Path, Ellipse } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHappenings = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <G fill="#0055d4">
      <G transform="translate(.147 -44.7)">
        <Path d="M11.213 48.85h17.37v6.45h-17.37z" />
        <Ellipse cx={5.717} cy={52.075} rx={2.638} ry={2.785} />
      </G>
      <G transform="translate(.22 -35.905)">
        <Path d="M11.213 48.85h17.37v6.45h-17.37z" />
        <Ellipse cx={5.717} cy={52.075} rx={2.638} ry={2.785} />
      </G>
      <G transform="translate(.22 -27.11)">
        <Path d="M11.213 48.85h17.37v6.45h-17.37z" />
        <Ellipse cx={5.717} cy={52.075} rx={2.638} ry={2.785} />
      </G>
    </G>
  </Svg>
);
export default SvgHappenings;
