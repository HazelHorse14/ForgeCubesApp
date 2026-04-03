import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFirebase = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    baseProfile="tiny"
    {...props}
  >
    <Path
      fill="#FFA000"
      d="m297.036 205.578-36.334 33.809-33.716-68.005 17.446-39.108c4.416-7.84 11.621-7.855 16.037 0z"
    />
    <Path
      fill="#F57F17"
      d="M260.702 239.386 124.924 365.697l102.062-194.316z"
    />
    <Path
      fill="#FFCA28"
      d="M336.776 153.901c6.491-6.239 13.202-4.111 14.912 4.729l35.342 205.375-117.157 70.215c-4.1 2.264-14.957 3.246-14.957 3.246s-9.91-1.185-13.687-3.281L124.92 365.69z"
    />
    <Path
      fill="#FFA000"
      d="M226.986 171.381 124.924 365.697l45.46-283.998c1.674-8.847 6.71-9.699 11.203-1.89z"
    />
  </Svg>
);
export default SvgFirebase;
