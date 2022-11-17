import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={19}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3.821 7.79c1.52 2.83 3.969 5.14 6.956 6.59l2.322-2.2c.285-.27.708-.36 1.077-.24 1.182.37 2.46.57 3.768.57.581 0 1.056.45 1.056 1V17c0 .55-.475 1-1.056 1C8.033 18 0 10.39 0 1c0-.55.475-1 1.056-1H4.75c.58 0 1.056.45 1.056 1 0 1.25.21 2.45.601 3.57.116.35.032.74-.264 1.02l-2.322 2.2Z"
      fill="#0A0909"
    />
  </Svg>
)

export default SvgComponent
