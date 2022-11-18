import React from "react";
import { Dimensions, StyleSheet } from "react-native";

import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import Carousel from "react-native-reanimated-carousel";
import DeviceTile from "../components/DeviceTile";
import { Text } from "native-base";
import PointsDisplay from "../components/PointsDisplay";
import GuideCard from "../components/GuideCard";

export default function TabOneScreen({
  navigation,
  points,
  vouchers,
}: {
  navigation: RootTabScreenProps<"TabOne">;
  points: number;
  vouchers: number;
}) {
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <PointsDisplay points={points} vouchers={vouchers} />
      <Text
        accessible={true}
        accessibilityLabel="Pending Devices"
        style={styles.title}
      >
        Pending Devices
      </Text>
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
      <Text accessible={true} accessibilityLabel="Guides" style={styles.title}>
        Featured Guide
      </Text>
      <View accessible={true} accessibilityLabel="Featured Guide">
        <GuideCard id={2}/>
      </View>
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
