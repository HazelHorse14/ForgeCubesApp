import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRescript = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path
      fill="#e6484f"
      d="M25.3 11.1c0 2.1-1.7 3.9-3.9 3.9s-3.9-1.7-3.9-3.9 1.7-3.9 3.9-3.9c2.1 0 3.9 1.7 3.9 3.9m-10.8-4v14.3c0 1 0 1.5-.2 2s-.7 1-1.2 1.2c-.4.2-.9.2-2 .2-1 0-1.5 0-2-.2s-1-.7-1.2-1.2c-.2-.4-.2-.9-.2-2V10.6c0-1.2 0-1.9.2-2.3s.6-.8 1-1c.5-.2 1.1-.2 2.3-.2z"
    />
  </Svg>
);
export default SvgRescript;
