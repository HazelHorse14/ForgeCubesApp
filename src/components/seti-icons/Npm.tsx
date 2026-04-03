import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgNpm = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path
      fill="#CD3F45"
      d="M4 11.3v8h6.8v1.4h5.3v-1.3H28v-8.1zm6.6 6.7H9.3v-3.9H8V18H5.3v-5.3h5.3zm6.6 0h-2.7v1.4h-2.7v-6.6h5.3c.1 1.6.1 3.4.1 5.2m9.4 0h-1.3v-3.9H24V18h-1.4v-3.9h-1.3V18h-2.7v-5.3h8zm-10.7-3.9h-1.3v2.6h1.3z"
    />
  </Svg>
);
export default SvgNpm;
