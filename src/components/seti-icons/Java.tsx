import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgJava = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path
      fill="#CC3E44"
      d="M22.003 18.236c-.023.764.018 1.78-.282 2.64a5.76 5.76 0 0 1-1.348 2.304 6.6 6.6 0 0 1-2.19 1.46c-.825.3-1.453.36-2.585.36s-2.135-.116-3.146-.528a6.9 6.9 0 0 1-2.472-1.91l2.022-2.584a4.4 4.4 0 0 0 1.517 1.236q.9.45 1.967.449 1.404 0 2.19-.899.787-.955.787-2.809V7h3.54z"
    />
  </Svg>
);
export default SvgJava;
