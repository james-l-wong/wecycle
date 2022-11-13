import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';
import GuideCard from '../components/GuideCard';

/**
 * TODO: Multiple guides should be readable and shareable
 * TODO: Once guide card is finalised, send to James
 */

export default function TabTwoScreen() {
  return (
    <ScrollView contentContainerStyle={[styles.container]}>
      <View style={[styles.separator]} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
      <GuideCard />
      <GuideCard />
      <GuideCard />
      <GuideCard />
      <GuideCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  bottomMargin: {
    marginBottom: 400,
  },
});