import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgIllustrator = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M25 8H7v17h18zm-7.6 12.3h-1c-.2 0-.2 0-.3-.2-.2-.7-.5-1.5-.7-2.2 0-.1-.1-.2-.3-.2H13c-.2 0-.2.1-.3.2-.2.7-.4 1.5-.6 2.2 0 .1-.1.2-.2.2h-1.1c-.2 0-.2-.1-.2-.2.4-1.3.7-2.6 1.1-3.9.4-1.5.9-3.1 1.3-4.6.1-.2.1-.3.3-.2h1.5c.1 0 .2 0 .2.2.5 1.5.9 3.1 1.4 4.6l1.2 3.9c.1.2.1.2-.2.2m3-.5c0 .5 0 .5-.5.5h-.7c-.2 0-.2 0-.2-.2v-6.5c0-.2.1-.3.2-.2h.9c.2 0 .2.1.2.2.1 2.1.1 4.2.1 6.2m-.7-7.1c-.4 0-.8-.3-.8-.7s.3-.8.8-.8c.4 0 .8.3.8.7 0 .5-.3.8-.8.8" />
    <Path d="M14.2 13.3c0-.1-.1-.1-.2 0 0 .1-.1.2-.1.3-.2.9-.4 1.8-.7 2.6 0 .1 0 .2.1.2h1.4c.2 0 .2-.1.1-.2-.1-1-.3-2-.6-2.9" />
  </Svg>
);
export default SvgIllustrator;
