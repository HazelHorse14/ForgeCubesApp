import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBazel = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}
  >
    <Path
      fill="#43a047"
      d="m184 112 72 72 72-72 72 72v72L256 400 112 256v-72z"
    />
  </Svg>
);
export default SvgBazel;
