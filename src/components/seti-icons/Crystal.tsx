import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCrystal = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path
      fill="#dfdfdf"
      d="m16 3.851-5.26 3.037-5.261 3.038v12.148l5.26 3.037L16 28.15l5.26-3.038 5.261-3.037V9.926l-5.26-3.038z"
    />
    <Path
      fill="#fff"
      d="m13.244 20.697-2.748-4.76-2.749-4.76h10.994l-2.749 4.76z"
    />
  </Svg>
);
export default SvgCrystal;
