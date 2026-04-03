import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEthereum = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path
      d="m12.4 16.8 3.6 2.1h.1c1.8-1.1 3.6-2.2 5.5-3.2v-.1c-.5-.9-1-1.7-1.6-2.6-1.3-2.2-2.6-4.3-3.9-6.5-.1.2-.2.3-.3.5-.6 1-1.2 1.9-1.7 2.9-.5.9-1.1 1.8-1.6 2.7-.6 1-1.2 2-1.8 2.9v.1c.4.5 1.1.8 1.7 1.2"
      style={{
        fill: "#231f20",
      }}
    />
    <Path
      d="M16.7 20.6c-.2.1-.5.3-.7.4-.8-.5-1.6-.9-2.4-1.4-.9-.5-1.8-1.1-2.7-1.6-.1-.1-.2-.1-.4-.2.3.4.5.7.8 1.1.7 1 1.4 2 2.2 3 .8 1.2 1.7 2.3 2.5 3.5 0 0 0 .1.1.1 1.2-1.7 2.5-3.5 3.7-5.2.6-.8 1.2-1.7 1.8-2.5-1.7.9-3.3 1.8-4.9 2.8"
      style={{
        fill: "#231f20",
      }}
    />
  </Svg>
);
export default SvgEthereum;
