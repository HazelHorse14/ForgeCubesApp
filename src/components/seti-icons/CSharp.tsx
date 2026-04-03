import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCSharp = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <G fill="#529BBA">
      <Path d="M7.1 15.9c0-1.3.2-2.4.6-3.4s.9-1.8 1.6-2.5 1.5-1.2 2.4-1.6 1.9-.5 2.9-.5 1.9.2 2.7.6 1.5.9 2 1.4l-2.2 2.5c-.4-.3-.7-.6-1.1-.7s-.8-.3-1.4-.3c-.5 0-.9.1-1.3.3s-.8.5-1.1.9-.5.8-.7 1.4-.3 1.2-.3 1.9c0 1.5.3 2.6 1 3.3.7.8 1.5 1.2 2.6 1.2.5 0 1-.1 1.4-.3s.8-.5 1.1-.9l2.2 2.5c-.7.8-1.4 1.3-2.2 1.7q-1.2.6-2.7.6c-1.5 0-2-.2-2.9-.5S10 22.7 9.3 22s-1.1-1.7-1.5-2.7c-.5-.9-.7-2.1-.7-3.4" />
      <Path d="M21.8 17.1h-1l-.4 2.4h-1.2l.4-2.4h-1.2V16h1.5l.2-1.6h-1.3v-1.1h1.5l.4-2.4h1.2l-.4 2.4h1l.4-2.4h1.2l-.4 2.4H25v1.1h-1.6l-.2 1.6h1.3v1.1h-1.6l-.4 2.4h-1.2c0 .1.5-2.4.5-2.4m-.8-1h1l.2-1.6h-1z" />
    </G>
  </Svg>
);
export default SvgCSharp;
