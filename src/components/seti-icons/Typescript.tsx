import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTypescript = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path
      fill="#529BBA"
      d="M15.6 11.8h-3.4V22H9.7V11.8H6.3V10h9.2v1.8zm7.7 7.1c0-.5-.2-.8-.5-1.1s-.9-.5-1.7-.8q-2.1-.6-3.3-1.5c-.7-.6-1.1-1.3-1.1-2.3s.4-1.8 1.3-2.4c.8-.6 1.9-.9 3.2-.9s2.4.4 3.2 1.1 1.2 1.6 1.2 2.6h-2.3c0-.6-.2-1-.6-1.4-.4-.3-.9-.5-1.6-.5-.6 0-1.1.1-1.5.4s-.5.7-.5 1.1.2.7.6 1 1 .5 2 .8q1.95.6 3 1.5c.7.6 1 1.4 1 2.4s-.4 1.9-1.2 2.4c-.8.6-1.9.9-3.2.9s-2.5-.3-3.4-1-1.5-1.6-1.4-2.9h2.4c0 .7.2 1.2.7 1.6.4.3 1.1.5 1.8.5s1.2-.1 1.5-.4c.2-.3.4-.7.4-1.1"
    />
  </Svg>
);
export default SvgTypescript;
