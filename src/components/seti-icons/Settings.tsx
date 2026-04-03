import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSettings = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M11.7 8.2c-1.1 0-2 .8-2.1 1.9v2c.1 1.1 1 1.9 2.1 1.9s2-.8 2.1-1.9v-2c-.1-1.1-1-1.9-2.1-1.9M7 10.8v.6c0 .4.3.7.7.7H9v-2H7.7c-.4 0-.7.3-.7.7m17.3-.7h-9.8v2h9.8c.4 0 .7-.3.7-.7v-.6c0-.4-.3-.7-.7-.7m-4 4c-1.1 0-2 .8-2.1 1.9v2c.1 1.1 1 1.9 2.1 1.9s2-.8 2.1-1.9v-2c-.1-1.1-1-1.9-2.1-1.9M7 16.7v.6c0 .4.3.7.7.7h9.8v-2H7.7c-.4 0-.7.3-.7.7m17.3-.7H23v2h1.3c.4 0 .7-.3.7-.7v-.6c0-.4-.3-.7-.7-.7M15 20c-1.1 0-2 .8-2.1 1.9v2c.1 1.1 1 1.9 2.1 1.9s2-.8 2.1-1.9v-2c-.1-1.1-1-1.9-2.1-1.9m9.3 1.9h-6.6v2h6.6c.4 0 .7-.3.7-.7v-.6c0-.4-.3-.7-.7-.7M7 22.6v.6c0 .4.3.7.7.7h4.6v-2H7.7c-.4 0-.7.3-.7.7" />
  </Svg>
);
export default SvgSettings;
