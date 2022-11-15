import { useNavigation } from "@react-navigation/native";
import { flexbox } from "native-base/lib/typescript/theme/styled-system";
import { StyleSheet, Image } from "react-native";
import { Text, View } from "../components/Themed";

export default function TabTwoScreen({ route }: { route: any }) {
  return (
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
      {/* <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      /> */}
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
});
