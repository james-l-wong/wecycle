import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
  <Svg width={44} height={44} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 .917C10.356.917.917 10.357.917 22c0 11.644 9.44 21.083 21.083 21.083 11.644 0 21.083-9.44 21.083-21.083C43.083 10.356 33.643.917 22 .917Zm1.917 28.75a1.917 1.917 0 1 1-3.834 0v-5.75h-5.75a1.917 1.917 0 0 1 0-3.834h5.75v-5.75a1.917 1.917 0 0 1 3.834 0v5.75h5.75a1.917 1.917 0 0 1 0 3.834h-5.75v5.75Z"
      fill="#708B75"
    />
  </Svg>
);

export default SvgComponent;
