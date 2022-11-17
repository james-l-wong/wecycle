import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={24}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M21.333.667H2.667A2.33 2.33 0 0 0 .345 3L.333 17a2.34 2.34 0 0 0 2.334 2.333h18.666A2.34 2.34 0 0 0 23.667 17V3A2.34 2.34 0 0 0 21.333.667Zm0 4.666L12 11.167 2.667 5.333V3L12 8.833 21.333 3v2.333Z"
      fill="#000"
    />
  </Svg>
)

export default SvgComponent
