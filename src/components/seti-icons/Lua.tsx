import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLua = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M14.7 26C9.9 26 6 22.1 6 17.3s3.9-8.8 8.9-8.7c4.7.1 8.5 3.9 8.5 8.7S19.5 26 14.7 26m3.6-14.9c-1.4 0-2.6 1.2-2.6 2.6s1.1 2.6 2.6 2.6c1.4 0 2.6-1.1 2.6-2.6 0-1.4-1.1-2.6-2.6-2.6m5.1 0c-1.4 0-2.6-1.1-2.5-2.6C20.9 7.1 22 6 23.5 6 24.9 6 26 7.2 26 8.6s-1.2 2.5-2.6 2.5" />
  </Svg>
);
export default SvgLua;
