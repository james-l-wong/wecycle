import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
  Text,
  Flex,
  Container,
  Spacer,
  Heading
} from 'native-base';

import { View } from '../components/Themed';


export default function Details() {
  return (
    <View style={{ height: '100%' }}>
      <Flex direction='row'>
        <Heading></Heading>
      </Flex>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: '85%',
    alignSelf: 'center'
  },
});