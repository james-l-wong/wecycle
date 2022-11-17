import { Image } from "react-native";

export function ColesLogo() {
  return (
    <Image
      accessible={true}
      accessibilityLabel="Coles logo"
      style={{width: 117, height: 36}}
      source={require("../../assets/images/coles.png")}
    />
  )
}

export function WoolLogo() {
  return (
    <Image
      accessible={true}
      accessibilityLabel="Woolworths logo"
      style={{width: 117, height: 28}}
      source={require("../../assets/images/woolworths.png")}
    />
  )
}

export function OfficeLogo() {
  return (
    <Image
      accessible={true}
      accessibilityLabel="Officeworks logo"
      style={{width: 117, height: 31}}
      source={require("../../assets/images/officeworks.png")}
    />
  )
}

export function MyerLogo() {
  return (
    <Image
      accessible={true}
      accessibilityLabel="Myers logo"
      style={{width: 117, height: 31}}
      source={require("../../assets/images/myer.png")}
    />
  )
}