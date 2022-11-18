import React from "react";
import { Dimensions, StyleSheet } from "react-native";

import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import Carousel from "react-native-reanimated-carousel";
import DeviceTile from "../components/DeviceTile";
import { Pressable, Text } from "native-base";
import PointsDisplay from "../components/PointsDisplay";
import GuideCard from "../components/GuideCard";
import { useNavigation } from "@react-navigation/native";

export default function TabOneScreen({
  points,
  vouchers,
}: {
  points: number;
  vouchers: number;
}) {
  const width = Dimensions.get("window").width;
  // const navigation = useNavigation();
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
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          accessible={true}
          accessibilityLabel="Guides"
          style={styles.title}
        >
          Featured Guide
        </Text>
        {/* <Pressable onPress={() => navigation.navigate("TabThree")}>
          <Text style={{ textDecorationLine: true, marginRight: 20 }}>
            See All
          </Text>
        </Pressable> */}
      </View>
      <View accessible={true} accessibilityLabel="Featured Guide">
        <GuideCard />
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
