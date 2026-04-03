import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgProject = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path fill="#D4E3E5" d="M8.7 23H16v1.9H8.7z" />
    <Path fill="#5099D3" d="M17.3 15.4h6.4v1.9h-6.4z" />
    <Path fill="#9FC955" d="M7 7.1h6.6V9H7z" />
    <Path fill="#9F75B3" d="M10.9 15.4h5v1.9h-5z" />
    <Path fill="#5099D3" d="M10.9 19.3h6.2v1.9h-6.2z" />
    <Path fill="#9F75B3" d="M21.8 19.3H25v1.9h-3.2z" />
    <Path fill="#D4E3E5" d="M8.7 11.3H16v1.9H8.7z" />
    <Path fill="#9FC955" d="M18.5 19.3h2v1.9h-2z" />
  </Svg>
);
export default SvgProject;
