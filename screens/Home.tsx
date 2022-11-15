import React from "react";
import { Dimensions, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import Carousel from "react-native-reanimated-carousel";
import DeviceTile from "../components/DeviceTile";
import { Button } from "native-base";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pending Devices</Text>
      <Carousel
        style={{ marginLeft: 20 }}
        loop={false}
        width={width}
        height={150}
        data={["iPhone", "Fridge", 3]}
        scrollAnimationDuration={1000}
        // onSnapToItem={(index) => {}}
        renderItem={(item) => (
          <>
            {console.log(item)}
            {/* <DeviceTile title={index} /> */}
          </>
        )}
      />
      <Text style={styles.title}>Guides</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20,
  },
});
