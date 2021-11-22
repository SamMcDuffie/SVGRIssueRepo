import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgConfirmedCircle(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.25 10a8.75 8.75 0 1117.501.001A8.75 8.75 0 011.25 10zm12.291-3.4a.4.4 0 01.567.002l.611.615a.4.4 0 010 .565l-6.103 6.102a.4.4 0 01-.566 0l-2.767-2.768a.4.4 0 010-.565l.61-.61a.4.4 0 01.565 0l1.875 1.867 5.208-5.207z"
        fill="#1A1A1A"
      />
    </Svg>
  );
}

export default SvgConfirmedCircle;
