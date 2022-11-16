import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text } from "./Themed";

export default function TabButtons({label1, label2, showView1, setShowView1}) {
  return (
    <View style={{flexDirection: "row", justifyContent: "center"}}>
      <TouchableOpacity
        onPress={()=>setShowView1(true)}
        style={[{borderRadius: 15, height: 50, width: 150, justifyContent: "center", alignItems: "center"},{backgroundColor: showView1 ?"#708B75": "#D9D9D9"}]}>
        <Text style={{color: showView1 ? "white" : "black", fontWeight: "bold", fontSize: 18}}>{label1}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>setShowView1(false)}
        style={[{borderRadius: 15, height: 50, width: 150, justifyContent: "center", alignItems: "center"},{backgroundColor: !showView1 ?"#708B75": "#D9D9D9"}]}>
        <Text style={{color: !showView1 ? "white" : "black", fontWeight: "bold", fontSize: 18}}>{label2}</Text>
      </TouchableOpacity>
    </View>
  )
}