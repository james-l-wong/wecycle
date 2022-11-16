import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text } from '../components/Themed';

import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';
import GuideCard from '../components/GuideCard';
import SearchBar from '../components/SearchBar';

/**
 * TODO: Multiple guides should be readable and shareable
 * TODO: Once guide card is finalised, send to James
 */



export default function TabTwoScreen() {
  const [searchPhrase, setSearchPhrase] = useState(null);

  const search = (input) => {
    console.log(input);
  }

  useEffect(() => {
    search(searchPhrase)
  }, searchPhrase)

  return (
    <ScrollView contentContainerStyle={[styles.container]}>
      <Text style={styles.title}>Guides</Text>
      <SearchBar setText={newText => setSearchPhrase(newText)}/>
      <View style={[styles.separator]} lightColor="#fff" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
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