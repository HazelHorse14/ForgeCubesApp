import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgImage = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path
      fill="#9F74B3"
      d="M21.3 17.2c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8-1.8.8-1.8 1.8.8 1.8 1.8 1.8m-11.1-5.5v12.4h15.3V11.7zm.7.7h13.9v10.8l-3.6-4.1-2.2 2.6-4.4-4.7-3.7 4.6zm9.8-4.5H6.5v10.8h1.9V9.6h12.3z"
    />
  </Svg>
);
export default SvgImage;
