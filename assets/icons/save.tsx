import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={16}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13.714 0H2.286C1.029 0 .01 1 .01 2.222L0 20l8-3.333L16 20V2.222C16 1 14.971 0 13.714 0Z"
      fill="#040404"
    />
  </Svg>
)

export default SvgComponent
