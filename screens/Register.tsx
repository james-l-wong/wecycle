import { Pressable, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import Logo from "../assets/images/logo";
import { Button, Icon, Input } from "native-base";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabTwoScreen({ navigation }) {
  const [show, setShow] = React.useState(false);
  return (
    <View style={styles.container}>
      <Logo style={{ marginTop: "40%" }} />
      <Input
        style={{ marginTop: 40 }}
        w="70%"
        variant="underlined"
        placeholder="Name"
      />
      <Input
        style={{ marginTop: 20 }}
        w="70%"
        variant="underlined"
        placeholder="Email"
      />
      <View style={{ marginTop: 20 }}>
        <Input
          w={{
            base: "70%",
            md: "25%",
          }}
          variant="underlined"
          type={show ? "text" : "password"}
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={
                  <MaterialIcons
                    name={show ? "visibility" : "visibility-off"}
                  />
                }
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          }
          placeholder="Password"
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Input
          w={{
            base: "70%",
            md: "25%",
          }}
          variant="underlined"
          type={show ? "text" : "password"}
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={
                  <MaterialIcons
                    name={show ? "visibility" : "visibility-off"}
                  />
                }
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          }
          placeholder="Confirm Password"
        />
      </View>
      <Button
        style={{ marginTop: 40, backgroundColor: "#758A77", width: 275 }}
        onPress={() => navigation.navigate("Home")}
      >
        Register
      </Button>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 20,
        }}
      >
        <Text>Have an account? </Text>
        <Text
          style={{ color: "#758A77", textDecorationLine: "underline" }}
          onPress={() => navigation.navigate("Login")}
        >
          Login
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
