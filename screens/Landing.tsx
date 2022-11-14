import { Pressable, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import Logo from "../assets/images/logo";
import Navigation from "../navigation";
import { Button } from "native-base";

export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <Logo style={{ marginTop: "60%" }} />
      <Button
        style={{ marginTop: 40, backgroundColor: "#758A77", width: 200 }}
        onPress={() => navigation.navigate("  ")}
      >
        Login
      </Button>
      <Button
        style={{ marginTop: 10, backgroundColor: "#758A77", width: 200 }}
        onPress={() => navigation.navigate("   ")}
      >
        Register
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
