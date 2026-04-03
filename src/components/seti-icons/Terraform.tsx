import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTerraform = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <Path
      fill="#7B42BC"
      fillRule="evenodd"
      d="m12.507 8.015 6.73 4.092v8.182l-6.73-4.09zM20.03 12.107v8.182l7.126-4.09V8.015zM4.588 3.66v7.919l7.127 3.96v-7.92zM12.507 25.04l6.73 3.96v-7.918l-6.73-3.96z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTerraform;
