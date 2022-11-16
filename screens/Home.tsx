import React from "react";
import { Dimensions, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import Carousel from "react-native-reanimated-carousel";
import DeviceTile from "../components/DeviceTile";
import { Button } from "native-base";
import PointsDisplay from "../components/PointsDisplay";

export default function TabOneScreen({
  navigation, points, vouchers
}: {navigation: RootTabScreenProps<"TabOne">, points: number, vouchers: number}) {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <PointsDisplay points={points} vouchers={vouchers} />
      <Text style={styles.title}>Pending Devices</Text>
      <Carousel
        style={{ marginLeft: 20, width: width, overflow: "visible" }}
        loop={false}
        width={145}
        height={150}
        data={["Add", "iPhone", "fridge"]}
        scrollAnimationDuration={500}
        onSnapToItem={(index) => {}}
        renderItem={(array) => <DeviceTile title={array.item} />}
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
