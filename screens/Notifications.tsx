import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Heading,
} from 'native-base';

import { Text, View } from '../components/Themed';


export default function Notifications({ navigation }) {
  return (
    <View style={styles.body}>
      <Heading>Upcoming</Heading>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: '80%',
  },
});
