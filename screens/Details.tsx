import React from 'react';
import { StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import {
  Text,
  Flex,
  Container,
  Spacer,
  Heading,
  ScrollView
} from 'native-base';

import { View } from '../components/Themed';


export default function Details() {
  return (
    <View style={{ height: '100%' }}>
      <View style={styles.body}>
        <Flex direction='column'>
          <Container>
            <Flex direction='row'>
              <Heading marginTop={5} size="lg">Parramatta Council e-waste Collection Event</Heading>
              <Image source={require('../assets/images/council_logo.png')} style={styles.img}></Image>
            </Flex>
          </Container>
          <View>
            <Text
              accessible={true}
              accessibilityLabel="Date: 29th January 2023"
              marginTop={4}
              fontSize="md">
              <Text bold>Date: </Text>29th January 2023
            </Text>
            <Text
              accessible={true}
              accessibilityLabel="Time: 9am to 3pm"
              marginTop={1} fontSize="md">
              <Text bold>Time: </Text>9am to 3pm
            </Text>
            <Text
              accessible={true}
              accessibilityLabel="Location: City of Parramatta Rydalmere Operations Centre,
            316 Victoria Rd Rydalmere"
              marginTop={1}
              fontSize="md">
              <Text bold>Location: </Text>City of Parramatta Rydalmere Operations Centre,
              316 Victoria Rd Rydalmere</Text>
            <Text
              marginTop={3}
              fontSize="md"
              accessible={true}
              accessibilityLabel="E-waste cannot be recycled via the yellow lid recycling bin system. You can drop-off your old electronics for recycling!">
              E-waste cannot be recycled via the yellow lid recycling bin system. You can drop-off your old electronics for recycling!
            </Text>
            <Text marginTop={2} fontSize="md">Accepted Items:</Text>
            <View style={{ paddingLeft: 20 }}>
              <FlatList
                data={[
                  { key: 'computers, monitors and peripherals' },
                  { key: 'printers and cartridges' },
                  { key: 'fax machines' },
                  { key: 'scanners' },
                  { key: 'TVs, VCRs and DVD players' },
                  { key: 'projectors' },
                  { key: 'mobile phones' },
                  { key: 'tablets' },
                  { key: 'batteries' },
                  { key: 'cables' },
                  { key: 'electronic games and toys' },
                  { key: 'stereos' },
                  { key: 'cameras' },
                  { key: 'MP3 Players' },
                  { key: 'CDs/DVDs' },
                ]}
                renderItem={({ item }) => {
                  return (
                    <View style={{ marginBottom: 3 }}>
                      <Text fontSize="md">{`\u2022 ${item.key}`}</Text>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </Flex>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: '90%',
    alignSelf: 'center'
  },
  img: {
    width: 70,
    height: 70,
    margin: 10,
    marginLeft: 30
  }
});
