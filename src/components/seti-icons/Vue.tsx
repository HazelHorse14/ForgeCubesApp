import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVue = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 1000"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m600 495.9 159.1-275.4h-84.4L600 349.7l-74.6-129.2h-84.5z" />
    <Path d="M793.7 220.5 600 555.9 406.3 220.5H277l323 559 323-559z" />
  </Svg>
);
export default SvgVue;
