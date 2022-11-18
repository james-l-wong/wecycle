import React, { useState } from "react";
import { Dimensions, Pressable, StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import { Button, Icon, Input, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default function Settings() {
  const [counter, setCounter] = useState(12);
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const [show3, setShow3] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.textNormal}>Accessibility</Text>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 10,
          width: 180,
        }}
      >
        <Text
          style={{
            marginTop: 10,
            marginLeft: 20,
            fontSize: 25,
            lineHeight: 28,
            marginRight: 5,
          }}
        >
          {counter}pts
        </Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Button
            style={styles.fontButton}
            onPress={() => setCounter(counter + 1)}
          >
            +
          </Button>
          <Button
            style={styles.fontButton}
            onPress={() => {
              if (counter > 1) setCounter(counter - 1);
            }}
          >
            -
          </Button>
        </View>
      </View>
      <Text
        style={{
          fontSize: 16,
          marginLeft: 20,
          marginTop: 20,
        }}
      >
        Update Postcode
      </Text>

      <View
        style={{
          marginLeft: 20,
          marginTop: 10,
          display: "flex",
          flexDirection: "row",
          height: 50,
        }}
      >
        <Input
          size="md"
          w={{
            base: "70%",
          }}
          variant="outline"
          placeholder="Postcode"
        />
        <Button
          size="sm"
          style={{ marginLeft: 10, backgroundColor: "#8E8E90" }}
          // style={styles.postcodeButton}
        >
          Update
        </Button>
      </View>

      <Text
        style={{
          fontSize: 16,
          marginLeft: 20,
          marginTop: 20,
        }}
      >
        Reset Password
      </Text>

      <View
        style={{
          marginLeft: 20,
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          height: 50,
        }}
      >
        <Input
          w={{
            base: "70%",
            md: "25%",
          }}
          type={show1 ? "text" : "password"}
          InputRightElement={
            <Pressable onPress={() => setShow1(!show1)}>
              <Icon
                as={
                  <MaterialIcons
                    name={show1 ? "visibility" : "visibility-off"}
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
        <View style={{ marginTop: 10, marginBottom: 10 }}>
          <Input
            w={{
              base: "70%",
              md: "25%",
            }}
            type={show2 ? "text" : "password"}
            InputRightElement={
              <Pressable onPress={() => setShow2(!show2)}>
                <Icon
                  as={
                    <MaterialIcons
                      name={show2 ? "visibility" : "visibility-off"}
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
        <View style={{ marginBottom: 10 }}>
          <Input
            w={{
              base: "70%",
              md: "25%",
            }}
            type={show3 ? "text" : "password"}
            InputRightElement={
              <Pressable onPress={() => setShow3(!show3)}>
                <Icon
                  as={
                    <MaterialIcons
                      name={show3 ? "visibility" : "visibility-off"}
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
        <Button
          size="md"
          style={{ backgroundColor: "#8E8E90", width: 150 }}
          // style={styles.postcodeButton}
        >
          Reset
        </Button>
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
  textNormal: {
    fontSize: 16,
    marginLeft: 20,
  },
  fontButton: {
    width: 40,
    height: 40,
    margin: 5,
    backgroundColor: "#8E8E90",
  },
  postcodeButton: {
    width: 45,
    height: 45,
    margin: 5,
    backgroundColor: "#8E8E90",
  },
});
