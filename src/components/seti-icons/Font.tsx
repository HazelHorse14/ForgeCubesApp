import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFont = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path
      d="M21.1 18.3h-3.3l-.4.9c-.1.3-.2.5-.2.7q0 .45.3.6c.1.1.4.1.9.2v.3h-3.1v-.3c.3-.1.6-.2.8-.4s.5-.7.8-1.4l3.3-7.4h.1l3.3 7.6c.3.7.6 1.2.8 1.4.2.1.4.2.7.2v.3h-4.5v-.3h.4c.4 0 .6-.1.8-.2.1-.1.2-.2.2-.3v-.3s-.1-.2-.2-.5zm-.2-.6-1.4-3.2-1.4 3.2z"
      opacity={0.6}
    />
    <Path d="M6.7 22.4c.5 0 .9-.3 1.2-.7.2-.3.5-.8.8-1.7l4.4-10.9h.6l4.5 10.5c.5 1.2.9 1.9 1.1 2.3s.6.5 1.1.5v.5h-6.5v-.5c.7 0 1.1-.1 1.3-.2q.3-.15.3-.6c0-.2-.1-.4-.2-.7-.1-.2-.2-.4-.3-.7l-.5-1.2H10c-.3.8-.5 1.3-.6 1.6-.2.5-.3.9-.3 1.1q0 .45.6.6c.2.1.6.1 1 .1v.5h-4zm7.5-4.2-1.9-4.6h-.2l-1.8 4.6z" />
  </Svg>
);
export default SvgFont;
