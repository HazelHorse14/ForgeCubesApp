import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgZig = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-43 -50 240 240"
    width={24}
    height={24}
    {...props}
  >
    <G fill="#F7A41D">
      <Path d="M46 22 28 44l-9-14z" />
      <Path d="M46 22 33 33l-5 11h-6v51h9l-11 5-8 17H0V22z" />
      <Path d="m31 95-19 22-8-11zm25-73 6 14-25 8z" />
      <Path d="M56 22h55v22H37l19-12zm60 73-19 22-7-13z" />
      <Path d="m116 95-16 9-3 13H42V95z" />
      <Path d="M150 0 52 117 3 140l98-118zm-9 22-1 18-18 5z" />
      <Path d="M153 22v95h-47l14-12 5-10h6V45h-9l10-9 9-14z" />
      <Path d="m125 95 5 15-24 7z" />
    </G>
  </Svg>
);
export default SvgZig;
