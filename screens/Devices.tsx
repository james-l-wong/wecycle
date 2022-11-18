import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
  Text,
  Flex,
  Container,
  Spacer,
  Progress,
  Box,
  View
} from 'native-base';

// import { View } from '../components/Themed';
import DeviceTile from '../components/DeviceTile';

export default function TabTwoScreen() {
  return (
    <View style={{ height: '100%', backgroundColor: 'white' }}>
      <View style={styles.body}>
        <Text marginTop={5} marginBottom={4} fontSize="md">View information about all devices</Text>
        {/* TODO: change to navigate to pending devices */}
        <View
          accessible={true}
          accessibilityLabel="Tap me for details on this device">
          {/* onPress={() => navigation.navigate("DeviceDetails")}> */}
          <Flex direction='row'>
            <DeviceTile title="iPhone" />
            <View style={{ marginLeft: 20 }}>
              <Text
                accessible={true}
                accessibilityLabel="Company: Apple">
                Company: Apple
              </Text>
              <Text
                accessible={true}
                accessibilityLabel="Model: iPhone 14">
                Model: iPhone 14
              </Text>
              <Text
                accessible={true}
                accessibilityLabel="Age: 2 years 4 months">
                Age: 2 years 4 months
              </Text>
              <Text
                accessible={true}
                accessibilityLabel="Condition: Fully functional">
                Condition: Fully functional
              </Text>
              <Box marginTop={3}>
                <Progress value={70} colorScheme="emerald" />
              </Box>
              <Text
                accessible={true}
                accessibilityLabel="Status: Resolving enquiries">
                Status: Resolving enquiries
              </Text>
            </View>
          </Flex>
        </View>
        <View
          accessible={true}
          accessibilityLabel="Tap me for details on this device"
          marginTop={5}>
          {/* onPress={() => navigation.navigate("DeviceDetails")}> */}
          <Flex direction='row'>
            <DeviceTile title="Fridge" />
            <View style={{ marginLeft: 20 }}>
              <Text
                accessible={true}
                accessibilityLabel="Company: Samsung">
                Company: Samsung
              </Text>
              <Text
                accessible={true}
                accessibilityLabel="Model: Fridge">
                Model: Fridge
              </Text>
              <Text
                accessible={true}
                accessibilityLabel="Age: 5 years 2 months">
                Age: 5 years 2 months
              </Text>
              <Text
                accessible={true}
                accessibilityLabel="Condition: broken light">
                Condition: broken light
              </Text>
              <Box marginTop={3}>
                <Progress value={30} colorScheme="emerald" />
              </Box>
              <Text
                accessible={true}
                accessibilityLabel="Status: Awaiting callback">
                Status: Awaiting callback
              </Text>
            </View>
          </Flex>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    width: '90%',
    alignSelf: 'center'
  },
});