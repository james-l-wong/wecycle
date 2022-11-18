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

 const guideTitles = [
  "The e-waste problem",
  "What's being done about e-waste",
  "How to deal with e-waste",
  "More tips and information for recycling e-waste",
  "How to securely remove data before disposing of e-waste",
];

const RenderGuides = (indexes) => {
  if (indexes.length === 0) {
    return null;
  } else if (indexes.length === 1) {
    return (<>
      <GuideCard id={indexes[0]} />
    </>)
  } else if (indexes.length === 2) {
    return (<>
      <GuideCard id={indexes[0]} />
      <GuideCard id={indexes[1]} />
    </>)
  } else if (indexes.length === 3) {
    return (<>
      <GuideCard id={indexes[0]} />
      <GuideCard id={indexes[1]} />
      <GuideCard id={indexes[2]} />
    </>)
  } else if (indexes.length === 4) {
    return (<>
      <GuideCard id={indexes[0]} />
      <GuideCard id={indexes[1]} />
      <GuideCard id={indexes[2]} />
      <GuideCard id={indexes[3]} />
    </>)
  } else if (indexes.length === 5 ) {
    return (<>
      <GuideCard id={indexes[0]} />
      <GuideCard id={indexes[1]} />
      <GuideCard id={indexes[2]} />
      <GuideCard id={indexes[3]} />
      <GuideCard id={indexes[4]} />
    </>)
  }
};

export default function TabTwoScreen() {
  const [searchPhrase, setSearchPhrase] = useState(null);

  const search = (input) => {
    if (!input) {
      console.log(input)
      return -1; // return an array instead
    }

    console.log(input);
  }

  useEffect(() => {
    const indexes = search(searchPhrase);
  }, [searchPhrase])

  return (
    <ScrollView contentContainerStyle={[styles.container]}>
      <Text style={styles.title}>Guides</Text>
      <SearchBar setText={newText => setSearchPhrase(newText)}/>
      <View style={[styles.separator]} lightColor="#fff" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
      <GuideCard id={0} />
      <GuideCard id={1} />
      <GuideCard id={2} />
      <GuideCard id={3} />
      <GuideCard id={4} />
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
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
  bottomMargin: {
    marginBottom: 400,
  },
});