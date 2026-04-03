import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCheckboxUnchecked = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M25.8 8.5q-.75-2.1-3-2.4H9.4c-.3 0-.7 0-.9.1-1.4.6-2.2 1.6-2.5 3v13.4c.1.3.1.6.2.9q.75 2.1 3 2.4h13.4c.3-.1.6-.1.9-.2q2.1-.75 2.4-3V9.3c0-.2 0-.6-.1-.8m-2.2 13c0 1.1-.6 1.9-1.6 2.1H10.5c-1.1 0-1.9-.6-2.1-1.6V10.5c0-.8.3-1.4 1-1.8.3-.2.7-.3 1.1-.3h11.1c1 0 1.8.6 2 1.6z" />
  </Svg>
);
export default SvgCheckboxUnchecked;
