import { View, Text } from "../../components/Themed";
import { Image } from "react-native";

export default function Barcode({route}) {
  const {Logo, cost} = route?.params || {};
  return (
    <View style={{padding: 30, paddingHorizontal: 50, height: "100%"}}>
      <View style={{flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", paddingBottom: 20}}>
        <Logo/>
        <Text style={{fontSize: 30, fontWeight: "bold", width: 60, textAlign: "center"}}>${cost}</Text>
      </View>
      <Text style={{fontSize: 24, textAlign: "center"}}>Scan barcode to{"\n"}redeem your voucher</Text>
      <Image
        style={{width: 300, height: 496, marginTop: 30}}
        source={require("../../assets/images/barcodeImage.png")}
      />
    </View>
  )
}