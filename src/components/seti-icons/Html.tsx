import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHtml = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path
      fill="#EF7623"
      d="m8 15 6-5.6V12l-4.5 4 4.5 4v2.6L8 17zm16 2.1-6 5.6V20l4.6-4-4.6-4V9.3l6 5.6z"
    />
  </Svg>
);
export default SvgHtml;
