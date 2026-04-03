import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVideo = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M16 25c-4.9 0-9.1-4.1-9-9.2C7.1 11 11 7 16.1 7c4.9 0 9 4.1 8.9 9.2-.1 4.8-4.1 8.8-9 8.8m-3.2-14.6v11.1h.1l8.1-5.4c.1-.1.1-.1 0-.1-2.7-1.8-5.4-3.6-8.2-5.4.1-.1.1-.2 0-.2" />
  </Svg>
);
export default SvgVideo;
