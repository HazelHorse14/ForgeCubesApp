import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHex = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path
      fill="#b93f4f"
      d="M20.994 24.65h-9.988L6.012 16l4.994-8.65h9.988L25.988 16zm-2.467-4.272L21.055 16l-2.528-4.378h-5.054L10.945 16l2.528 4.378z"
    />
  </Svg>
);
export default SvgHex;
