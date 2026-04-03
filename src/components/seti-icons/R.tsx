import * as React from "react";
import Svg, { Defs, LinearGradient, Stop, G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgR = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Defs>
      <LinearGradient
        id="R_svg__a"
        x1={7.1}
        x2={25}
        y1={10.197}
        y2={22.185}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#CBCED0" />
        <Stop offset={1} stopColor="#84838B" />
      </LinearGradient>
      <LinearGradient
        id="R_svg__b"
        x1={14.475}
        x2={24.355}
        y1={13.919}
        y2={24}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#276DC3" />
        <Stop offset={1} stopColor="#165CAA" />
      </LinearGradient>
    </Defs>
    <G fillRule="evenodd">
      <Path
        fill="url(#R_svg__a)"
        d="M16.05 22.185c-4.943 0-8.95-2.684-8.95-5.994s4.007-5.994 8.95-5.994S25 12.88 25 16.19s-4.007 5.994-8.95 5.994zm1.37-9.645c-3.757 0-6.803 1.835-6.803 4.098s3.046 4.098 6.803 4.098 6.53-1.254 6.53-4.098-2.773-4.098-6.53-4.098"
        transform="translate(-.05 -1.098)"
      />
      <Path
        fill="url(#R_svg__b)"
        d="M20.73 19.48s.542.163.856.323c.109.055.298.166.434.3s.199.285.199.285l2.135 3.599-3.45.002-1.614-3.03s-.33-.568-.534-.732c-.17-.137-.242-.186-.4-.186h-.82v3.957l-3.053.001v-10.08h6.13s2.793.05 2.793 2.707-2.67 2.855-2.67 2.855zm-1.328-3.375-1.848-.001-.001 1.714 1.849-.001s.856-.003.856-.872c0-.887-.856-.84-.856-.84"
        transform="translate(-.05 -1.098)"
      />
    </G>
  </Svg>
);
export default SvgR;
