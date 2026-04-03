import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHacklang = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M15.8 5v6.3c0 .1 0 .2-.1.3L9.3 18s0 .1-.1.1v-6.4c0-.1 0-.1.1-.1 2.2-2.2 4.3-4.4 6.5-6.6m8 9.2v6.4c0 .1 0 .1-.1.1l-6.5 6.5h-.1v-6.4c0-.1 0-.1.1-.1 2.2-2.1 4.3-4.3 6.6-6.5q-.15 0 0 0m-.3-1.5-6.4 6.4v-6.3c0-.1 0-.1.1-.1zm-7.6.3v6.3c0 .1 0 .1-.1.1H9.5c2.1-2.2 4.2-4.3 6.4-6.4M9.2 27s0-.1 0 0v-6.3c0-.1 0-.1.1-.1h6.3c-2.1 2.1-4.2 4.3-6.4 6.4" />
  </Svg>
);
export default SvgHacklang;
