import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMakefile = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M10.2 7 7 7.8v16h4.2v-9.9l3.6 3.9h2.4l3.6-3.9v9.9H25v-16L21.8 7 16 13.3z" />
  </Svg>
);
export default SvgMakefile;
