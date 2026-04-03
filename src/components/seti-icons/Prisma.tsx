import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPrisma = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    {...props}
  >
    <Path
      fill="#00BFA5"
      fillRule="evenodd"
      d="m23.208 22.209-9.76 2.812c-.299.086-.584-.165-.522-.458l3.487-16.27c.065-.304.497-.352.633-.07l6.456 13.356a.45.45 0 0 1-.294.63m1.674-.663L17.407 6.08a1.2 1.2 0 0 0-1.023-.666 1.2 1.2 0 0 0-1.092.552L7.185 18.759a1.17 1.17 0 0 0 .014 1.284l3.963 5.982c.236.357.645.563 1.07.563a1.3 1.3 0 0 0 .362-.05l11.504-3.315c.352-.102.64-.345.791-.667.15-.322.148-.69-.007-1.01"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPrisma;
