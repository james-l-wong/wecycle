import React from "react";
import { Dimensions, Pressable, StyleSheet, Image } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function DeviceTile({
  // navigation,
  title,
}: {
  // RootTabScreenProps: any;
  title: string;
}) {
  const width = Dimensions.get("window").width;
  return (
    <View>
      <View style={styles.container}>
        <Pressable
          onPress={() => {
            // navigation.navigate("Device", { title: title });
            console.log("hihi");
          }}
        >
          <Image
            style={{
              width: 80,
              height: 150,
              marginTop: 40,
            }}
            source={require("../assets/images/iphone.png")}
          />
        </Pressable>
      </View>
      <View style={{ alignItems: "center", width: 120, marginTop: 5 }}>
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
});
