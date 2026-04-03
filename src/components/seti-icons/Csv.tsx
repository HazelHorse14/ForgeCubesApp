import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCsv = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path
      fill="#8CC148"
      d="M7 7.1v17.8h18V7.1zm2.9 3.7H15v1.3H9.9zm7 0H22v1.3h-5.1zm-7 3H15v1.3H9.9zm7 0H22v1.3h-5.1zm-7 3H15v1.3H9.9zm7 0H22v1.3h-5.1zm-7 3H15v1.3H9.9zm7 0H22v1.3h-5.1z"
    />
  </Svg>
);
export default SvgCsv;
