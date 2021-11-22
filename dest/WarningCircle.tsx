import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgWarningCircle(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 1.25a8.75 8.75 0 10.001 17.501A8.75 8.75 0 0010 1.25zm-.625 4.531c0-.086.07-.156.156-.156h.938c.086 0 .156.07.156.156v5.313c0 .086-.07.156-.156.156H9.53a.157.157 0 01-.156-.156V5.78zM10 14.375a.938.938 0 010-1.875.938.938 0 010 1.875z"
        fill="#1A1A1A"
      />
    </Svg>
  );
}

export default SvgWarningCircle;
