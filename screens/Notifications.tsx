import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
  Text,
  Flex,
  Container,
  Spacer,
} from 'native-base';

import { View } from '../components/Themed';


export default function Notifications({ navigation }) {
  return (
    <View style={{ height: '100%' }}>
      <View style={styles.body}>
        <Text
          fontSize="xl"
          marginTop={5}
          accessible={true}
          accessibilityLabel="Upcoming notifications">
          Upcoming
        </Text>
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Tap me for details"
          style={styles.notif}
          onPress={() => navigation.navigate("NotifDetails")}>
          <Flex direction='row'>
            <Image source={require('../assets/images/council_logo.png')} style={styles.img}></Image>
            <Container>
              <Flex direction='column'>
                <Text
                  accessible={true}
                  accessibilityLabel="Parramatta Council E-waste Collection Event"
                  fontSize="xs"
                  margin={1}>
                  Parramatta Council E-waste Collection Event
                </Text>
                <Container>
                  <Flex direction='row' alignItems="space-between">
                    <Text
                      accessible={true}
                      accessibilityLabel="In 2 days"
                      marginLeft={1}
                      fontSize="2xs"
                      color="#8A8A8A">
                      In 2 days
                    </Text>
                    <Spacer />
                    <Text
                      accessible={true}
                      accessibilityLabel="4 km away"
                      fontSize="2xs"
                      color="#8A8A8A">
                      4km away
                    </Text>
                  </Flex>
                </Container>
              </Flex>
            </Container>
          </Flex>
        </TouchableOpacity>
        <View style={styles.notif}>
          <Flex direction='row'>
            <Image source={require('../assets/images/recycle.png')} style={styles.img}></Image>
            <Container>
              <Flex direction='column'>
                <Text
                  accessible={true}
                  accessibilityLabel="Drop off old electronic items at Officeworks e-waste bin"
                  fontSize="xs"
                  margin={1}>
                  Drop off old electronic items at Officeworks e-waste bin
                </Text>
                <Container>
                  <Flex direction='row' alignItems="space-between">
                    <Text
                      accessible={true}
                      accessibilityLabel="In 1 month"
                      marginLeft={1}
                      fontSize="2xs"
                      color="#8A8A8A">
                      In 1 month
                    </Text>
                    <Spacer />
                    <Text
                      accessible={true}
                      accessibilityLabel="3km away"
                      fontSize="2xs"
                      color="#8A8A8A">
                      3km away
                    </Text>
                  </Flex>
                </Container>
              </Flex>
            </Container>
          </Flex>
        </View>
        <Text
          accessible={true}
          accessibilityLabel="Past notifications"
          fontSize="xl"
          marginTop={5}>
          Past
        </Text>
        <View style={styles.notif}>
          <Flex direction='row'>
            <Image source={require('../assets/images/council_logo.png')} style={styles.img}></Image>
            <Container>
              <Flex direction='column'>
                <Text
                  accessible={true}
                  accessibilityLabel="Parramatta Council E-waste Collection Event"
                  fontSize="xs"
                  margin={1}>
                  Parramatta Council E-waste Collection Event
                </Text>
                <Container>
                  <Flex direction='row' alignItems="space-between">
                    <Text
                      accessible={true}
                      accessibilityLabel="3 months ago"
                      marginLeft={1}
                      fontSize="2xs"
                      color="#8A8A8A">
                      3 months ago
                    </Text>
                  </Flex>
                </Container>
              </Flex>
            </Container>
          </Flex>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: '85%',
    alignSelf: 'center'
  },
  notif: {
    borderRadius: 12,
    backgroundColor: '#EFEFEF',
    marginTop: 5
  },
  img: {
    width: 50,
    height: 50,
    margin: 5,
  }
});
