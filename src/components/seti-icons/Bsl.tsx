import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBsl = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M16.8 19v3H27v-3zM7 10h3v12H7zm-2 1h2v3H5z" />
    <Path d="M14 16c0-1.7 1.3-3 3-3 1.3 0 2.4.8 2.8 2h3.1c-.5-2.8-2.9-5-5.9-5-3.3 0-6 2.7-6 6s2.7 6 6 6c2.2 0 4.2-1.2 5.2-3H17c-1.7 0-3-1.3-3-3" />
  </Svg>
);
export default SvgBsl;
