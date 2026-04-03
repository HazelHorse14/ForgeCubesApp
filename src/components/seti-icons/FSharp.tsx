import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFSharp = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path
      d="m7 15 8.5-8.5v4.3L11.3 15l4.3 4.3v4.3z"
      style={{
        fill: "#231f20",
      }}
    />
    <Path
      d="m12.5 15 3.1-3.1V18zM25 15l-8.8-8.5v4.3l4.3 4.3-4.3 4.3v4.3z"
      style={{
        fill: "#231f20",
      }}
    />
  </Svg>
);
export default SvgFSharp;
