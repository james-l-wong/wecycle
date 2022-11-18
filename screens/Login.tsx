import { Pressable, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import Logo from "../assets/images/logo";
import { Button, Input } from "native-base";

export default function TabTwoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Logo style={{ marginTop: "50%" }} />
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
        placeholder="password"
      />
      <Button
        style={{ marginTop: 40, backgroundColor: "#758A77", width: 275 }}
        onPress={() => navigation.navigate("Home")}
      >
        Login
      </Button>
      <View style={{flexDirection: "row", justifyContent: "center", paddingTop: 20}}>
        <Text>Don't have an account? </Text>
        <Text
          style={{color: "#758A77", textDecorationLine: "underline"}}
          onPress={()=>navigation.navigate("Register")}
        >
          Register
        </Text>
      </View>
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
