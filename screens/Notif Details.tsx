import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
  Text,
  Flex,
  Container,
  Spacer,
} from 'native-base';

import { View } from '../components/Themed';


export default function Details() {
  return (
    <View style={{ height: '100%' }}>
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
    // height: ,
    marginTop: 5
  },
  img: {
    width: 50,
    height: 50,
    margin: 5,
    // marginLeft: 10,
  }
});
