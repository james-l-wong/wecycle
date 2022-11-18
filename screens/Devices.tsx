import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
  Text,
  Flex,
  Container,
  Spacer,
  Progress,
  Box
} from 'native-base';

import { View } from '../components/Themed';
import DeviceTile from '../components/DeviceTile';

export default function TabTwoScreen(navigation) {
  return (
    <View style={{ height: '100%' }}>
      <View style={styles.body}>
        <Text marginTop={5} marginBottom={4} fontSize="md">View information about all devices</Text>
        {/* TODO: change to navigate to pending devices */}
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Tap me for details on this device"
          onPress={() => navigation.navigate("Guides")}>
          <Flex direction='row'>
            <DeviceTile title="iPhone" />
            <Container marginLeft={7}>
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
              <Box w="100%" maxW="400">
                <Progress value={60} mx="4" colorScheme="emerald" />
              </Box>
            </Container>
          </Flex>
        </TouchableOpacity>
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