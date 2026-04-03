import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCpp = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path
      fill="#529BBA"
      d="M8.3 15.5c0-1.3.2-2.4.6-3.4s.9-1.8 1.6-2.5S12 8.4 12.9 8s1.9-.5 2.9-.5 1.9.2 2.7.6 1.5.9 2 1.4L18.3 12c-.4-.3-.7-.6-1.1-.7s-.8-.3-1.4-.3c-.5 0-.9.1-1.3.3s-.8.5-1.1.9-.5.8-.7 1.4-.3 1.2-.3 1.9c0 1.5.3 2.6 1 3.3.7.8 1.5 1.2 2.6 1.2.5 0 1-.1 1.4-.3s.8-.5 1.1-.9l2.2 2.5c-.7.8-1.4 1.3-2.2 1.7q-1.2.6-2.7.6c-1.5 0-2-.2-2.9-.5s-1.7-.8-2.4-1.5-1.1-1.7-1.5-2.7c-.5-1-.7-2.1-.7-3.4"
    />
    <Path
      fill="#529BBA"
      d="M18.2 12.9h-1.4v1.7h-1.6V16h1.6v1.8h1.4V16h1.6v-1.4h-1.6zm6 1.6v-2h-1.7v2h-1.9v1.7h1.9v2.1h1.7v-2.1h1.9v-1.7z"
    />
  </Svg>
);
export default SvgCpp;
