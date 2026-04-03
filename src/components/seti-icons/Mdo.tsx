import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMdo = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M18 17.7c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8c.7 0 1.4.4 1.7 1.1h1.5c-.4-1.5-1.7-2.5-3.2-2.5-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3h4.7v-1.5H18zm-5.5-5H14v6.5h-1.5zm-1.4 1.1h1.5v1.5h-1.5z" />
    <Path d="M22.9 9.1H9.4L6 16s3.4 6.8 3.4 6.9h13.5c1.7 0 3.1-1.4 3.1-3.1v-7.7c0-1.6-1.3-3-3.1-3m1.6 10.8c0 .9-.7 1.5-1.5 1.5H10.6s-3.1-4.9-3.1-5.2l3.1-5.5H23c.9 0 1.5.7 1.5 1.5z" />
  </Svg>
);
export default SvgMdo;
