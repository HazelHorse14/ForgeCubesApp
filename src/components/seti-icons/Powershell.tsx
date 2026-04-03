import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPowershell = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path
      fill="#487edc"
      d="m7.205 19.83 7.286-3.933-7.27-4.419.008-4.668 12.29 7.931-.005 2.685-12.317 7.041.008-4.636zm18.594 5.205H15.137v-2.662h10.662z"
    />
  </Svg>
);
export default SvgPowershell;
