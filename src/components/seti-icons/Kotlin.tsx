import * as React from "react";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgKotlin = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-25 -25 110 110"
    width={24}
    height={24}
    {...props}
  >
    <LinearGradient
      id="kotlin_svg__a"
      x1={15.959}
      x2={44.307}
      y1={-13.014}
      y2={15.333}
      gradientTransform="matrix(1 0 0 -1 0 61)"
      gradientUnits="userSpaceOnUse"
    >
      <Stop offset={0.097} stopColor="#0095d5" />
      <Stop offset={0.301} stopColor="#238ad9" />
      <Stop offset={0.621} stopColor="#557bde" />
      <Stop offset={0.864} stopColor="#7472e2" />
      <Stop offset={1} stopColor="#806ee3" />
    </LinearGradient>
    <Path fill="url(#kotlin_svg__a)" d="m0 60 30.1-30.1L60 60z" />
    <LinearGradient
      id="kotlin_svg__b"
      x1={4.209}
      x2={20.673}
      y1={48.941}
      y2={65.405}
      gradientTransform="matrix(1 0 0 -1 0 61)"
      gradientUnits="userSpaceOnUse"
    >
      <Stop offset={0.118} stopColor="#0095d5" />
      <Stop offset={0.418} stopColor="#3c83dc" />
      <Stop offset={0.696} stopColor="#6d74e1" />
      <Stop offset={0.833} stopColor="#806ee3" />
    </LinearGradient>
    <Path fill="url(#kotlin_svg__b)" d="M0 0h30.1L0 32.5z" />
    <LinearGradient
      id="kotlin_svg__c"
      x1={-10.102}
      x2={45.731}
      y1={5.836}
      y2={61.669}
      gradientTransform="matrix(1 0 0 -1 0 61)"
      gradientUnits="userSpaceOnUse"
    >
      <Stop offset={0.107} stopColor="#c757bc" />
      <Stop offset={0.214} stopColor="#d0609a" />
      <Stop offset={0.425} stopColor="#e1725c" />
      <Stop offset={0.605} stopColor="#ee7e2f" />
      <Stop offset={0.743} stopColor="#f58613" />
      <Stop offset={0.823} stopColor="#f88909" />
    </LinearGradient>
    <Path fill="url(#kotlin_svg__c)" d="M30.1 0 0 31.7V60l30.1-30.1L60 0z" />
  </Svg>
);
export default SvgKotlin;
