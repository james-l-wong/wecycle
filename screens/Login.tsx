import { Pressable, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import Logo from "../assets/images/logo";

export default function TabTwoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Logo />
      <Pressable
        onPress={() => {
          navigation.navigate("Root");
        }}
      >
        <Text>Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
