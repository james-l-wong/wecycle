import React, { useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import { Button, Text } from "native-base";

export default function Settings() {
  const [counter, setCounter] = useState(12);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.textNormal}>Accessibility</Text>
      <Text style={{ marginTop: 10, marginLeft: 20, fontSize: 25 }}>
        {counter}
      </Text>
      <View>
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
  },
});
