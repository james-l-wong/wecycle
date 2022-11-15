import React from "react";
import { Pressable, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import AddIcon from "../assets/icons/Add";

export default function DeviceTile({ title }: { title: string }) {
  const navigation = useNavigation();
  return (
    <View>
      <View style={[title === "Add" ? styles.addContainer : styles.container]}>
        <Pressable
          onPress={() => {
            navigation.navigate("DeviceDetails");
            console.log("hihi");
          }}
        >
          {title === "Add" ? (
            <>
              {console.log("add")}
              <AddIcon />
            </>
          ) : title === "iPhone" ? (
            <Image
              style={{
                width: 47,
                height: 100,
              }}
              source={require("../assets/images/iphone.png")}
            />
          ) : (
            <Image
              style={{
                width: 47,
                height: 100,
              }}
              source={require("../assets/images/fridge.png")}
            />
          )}
        </Pressable>
      </View>
      <View style={{ alignItems: "center", width: 130, marginTop: 5 }}>
        <Text>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 130,
    width: 130,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "#758A77",
  },
  addContainer: {
    height: 130,
    width: 130,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "#C3D1C3",
  },
});
