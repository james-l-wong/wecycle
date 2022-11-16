import { Image } from "react-native";

export function ColesLogo() {
  return (
    <Image
      style={{width: 117, height: 36}}
      source={require("../../assets/images/coles.png")}
    />
  )
}

export function WoolLogo() {
  return (
    <Image
      style={{width: 117, height: 28}}
      source={require("../../assets/images/woolworths.png")}
    />
  )
}

export function OfficeLogo() {
  return (
    <Image
      style={{width: 117, height: 31}}
      source={require("../../assets/images/officeworks.png")}
    />
  )
}

export function MyerLogo() {
  return (
    <Image
      style={{width: 117, height: 31}}
      source={require("../../assets/images/myer.png")}
    />
  )
}