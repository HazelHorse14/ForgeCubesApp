import * as React from "react";
import Svg, { Rect, G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgElm = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <Rect width="100%" height="100%" fill="none" />
    <G className="elm_svg__currentLayer">
      <Path fill="#5FB4CB" d="m16 16.533-9.181 9.181H25.18z" />
      <Path fill="#EEA400" d="m21.641 21.108 4.073 4.073v-8.146z" />
      <Path fill="#596277" d="M15.467 16 6.286 6.819V25.18z" />
      <Path fill="#5FB4CB" d="M25.714 14.923V6.286h-8.637z" />
      <Path
        fill="#8CD636"
        d="m21.13 11.403 4.575 4.576-4.597 4.596L16.533 16zM6.819 6.286l4.229 4.229h9.193l-4.23-4.23z"
      />
      <Path fill="#EEA400" d="m16 15.467 4.199-4.198H11.8z" />
    </G>
  </Svg>
);
export default SvgElm;
