import { useNavigation } from "@react-navigation/native";
import { Text, Container, Flex } from "native-base";
import { flexbox } from "native-base/lib/typescript/theme/styled-system";
import React from "react";
import { StyleSheet, Image, TouchableOpacity,ScrollView } from "react-native";
import MapView from "react-native-maps";
import { View } from "../components/Themed";

export default function TabTwoScreen({ route }: { route: any }) {
  const navigation = useNavigation();
  return (
    <ScrollView> 
    <View style={styles.container}>
      <Text style={styles.title}>Device Information</Text>
      <Text style={styles.text}>View information about device</Text>
      <View
        style={{
          backgroundColor: "#F8F8F8",
          borderRadius: 15,
          marginTop: 10,
          marginLeft: 20,
          marginRight: 20,
          padding: 20,
          display: "flex",
          flexDirection: "row",
        }}
      >
        {route.params.test === "iPhone" ? (
          <>
            <Image
              style={{
                width: 47.5,
                height: 100,
                borderRadius: 0,
              }}
              source={require("../assets/images/iphone.png")}
            />

            <View style={{ backgroundColor: "#F8F8F8" }}>
              <View style={{ backgroundColor: "#F8F8F8" }}>
                <Text style={styles.text}>Company: Apple</Text>
                <Text style={styles.text}>
                  Make:&nbsp;
                  {route.params.test}
                  &nbsp;14 Pro
                </Text>
                <Text style={styles.text}>Age: 2 years 4 months</Text>
                <Text style={styles.text}>Condition: Fully Functioning</Text>
              </View>
              <View>
                <Text style={styles.textBold}>Status: Awaiting Disposal</Text>
              </View>
            </View>
          </>
        ) : (
          <>
            <Image
              style={{
                width: 47.5,
                height: 100,
                borderRadius: 0,
              }}
              source={require("../assets/images/fridge.png")}
            />

            <View style={{ backgroundColor: "#F8F8F8" }}>
              <View style={{ backgroundColor: "#F8F8F8" }}>
                <Text style={styles.text}>Company: Samsung</Text>
                <Text style={styles.text}>Make: SRT3300B 326L</Text>
                <Text style={styles.text}>Age: 5 years 9 months</Text>
                <Text style={styles.text}>Condition: Freezer Broken</Text>
              </View>
              <View>
                <Text style={styles.textBold}>Status: Awaiting Quote</Text>
              </View>
            </View>
          </>
        )}
      </View>
      <Text style={styles.title}>Service Selected</Text>
      <TouchableOpacity
        accessible={true}
        accessibilityLabel="Tap me for details"
        style={styles.notif}
        onPress={() => navigation.navigate("Details")}
      >
        <Flex direction="row">
          <Image
            source={require("../assets/images/council_logo.png")}
            style={styles.img}
          ></Image>
          <Container>
            <Flex direction="column">
              <Text
                accessible={true}
                accessibilityLabel="Parramatta Council E-waste Collection Event"
                fontSize="sm"
                margin={1}
                marginBottom={0}
              >
                Parramatta city council E-waste collection event
              </Text>
              <View style={{ backgroundColor: "#EFEFEF" }}>
                <Flex direction="row" justifyContent="space-between">
                  <Text
                    accessible={true}
                    accessibilityLabel="In 2 days"
                    marginLeft={1}
                    fontSize="2xs"
                    color="#8A8A8A"
                  >
                    In 2 days
                  </Text>
                  <Text
                    accessible={true}
                    accessibilityLabel="4 km away"
                    fontSize="2xs"
                    color="#8A8A8A"
                  >
                    4km away
                  </Text>
                </Flex>
              </View>
            </Flex>
          </Container>
        </Flex>
      </TouchableOpacity>
      <View style={styles.mapContainer}>
        <MapView
          provider={undefined}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}
        />
      </View>
      {/* <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      /> */}
    </View>
    </ScrollView>
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
  text: {
    fontSize: 16,
    fontWeight: "normal",
    marginLeft: 20,
  },
  textBold: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 5,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  notif: {
    borderRadius: 12,
    backgroundColor: "#EFEFEF",
    marginTop: 5,
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    // paddingVertical: 5,
    // paddingLeft: 5
  },
  img: {
    width: 50,
    height: 50,
    margin: 5,
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    height: 390,
    width: 390,
    marginTop: 370,
    borderRadius: 15,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    margin: 20,
  },
});
