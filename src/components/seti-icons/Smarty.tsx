import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSmarty = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M16 19.7h-2.1c-.7 0-.8 0-.9-.7q-.45-2.25-1.5-4.2c-.4-.7-.7-1.4-1-2.2-.4-1.1-.5-2.2-.3-3.4.2-1.6 1.2-2.8 2.6-3.4 2.2-1 4.5-1 6.7.1 2 .9 2.9 3 2.5 5.3-.2 1.5-.8 2.7-1.5 4-.6 1.2-1.1 2.4-1.3 3.7-.2.9-.2.9-1.1.9-.8-.1-1.5-.1-2.1-.1m-.1 7.3h-2.4c-.4 0-.6-.1-.6-.6 0-1.3-.2-1.2 1.2-1.2h4.3c.5 0 .6.2.6.6 0 1.1 0 1.1-1.1 1.1-.6.1-1.3.1-2 .1m.1-3.6h-2.5c-.4 0-.5-.1-.5-.5 0-1.3-.1-1.2 1.1-1.2h4.3q.6 0 .6.6c0 1.2.1 1.1-1.1 1.1z" />
  </Svg>
);
export default SvgSmarty;
