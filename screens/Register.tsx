import { Pressable, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import Logo from "../assets/images/logo";
import { Button, Input } from "native-base";

export default function TabTwoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Logo style={{ marginTop: "40%" }} />
      <Input
        style={{ marginTop: 40 }}
        w="70%"
        variant="underlined"
        placeholder="name"
      />
      <Input
        style={{ marginTop: 20 }}
        w="70%"
        variant="underlined"
        placeholder="email"
      />
      <Input
        style={{ marginTop: 20 }}
        w="70%"
        variant="underlined"
        placeholder="password"
      />
      <Input
        style={{ marginTop: 20 }}
        w="70%"
        variant="underlined"
        placeholder="confirm password"
      />
      <Button
        style={{ marginTop: 40, backgroundColor: "#758A77", width: 275 }}
        onPress={() => navigation.navigate("Root")}
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
