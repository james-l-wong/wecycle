import React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  AspectRatio,
  Center,
  HStack,
  Stack,
  Box,
  Heading,
  Text as NativeBaseText,
  Image,
  Pressable,
  Badge,
  Spacer,
  Flex,
} from 'native-base';
import { background } from 'native-base/lib/typescript/theme/styled-system';

/**
 * Each guide will have a title, body, summary, thumbnail, author and date
 * Cards will display title, summary, thumnmail, author and date
 * Articles have everything except summary as well as a share button
 * 
 * TODO guide article screen is given a blog id (could be title or an id)
 * If/else statements are run to see which blog to display
 * blog id is given by guide card, onClick => display article given id
 * 
 * Guide cards are given their title in the Guides screen to search bar
 * can use titles in search
 * 
 * 
 * Cards and articles should be passed these props or just make them
 * static elements? Since there is no backend/way or need to add in props?
 */

 const guideDetails = [
  {
    title: "The e-waste problem",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRz64GdTI0Tlic4IsdJLtbQAeAPMshW7TEmw&usqp=CAU",
      alt: 'alt-text'
    },
    summary: 'E-waste has a negative impact on our environment and is putting pressure on limited landfill capacity in Australia and around the world.',
    author: 'John Doe',
    date: '12/11/2022',
  },
  {
    title: "What's being done about e-waste",
    image: {
      uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
      alt: 'alt-text'
    },
    summary: 'summary text 1',
    author: 'Joe Blow',
    date: '15/11/2022',
  },
  {
    title: "How to deal with e-waste",
    image: {
      uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
      alt: 'alt-text'
    },
    summary: 'summary text 2',
    author: 'Jane Doe',
    date: '16/11/2022',
  },
  {
    title: "More tips and information for recycling e-waste",
    image: {
      uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
      alt: 'alt-text'
    },
    summary: 'another summary text 3',
    author: 'John Smith',
    date: '17/11/2022',
  },
  {
    title: "How to securely remove data before disposing of e-waste",
    image: {
      uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
      alt: 'alt-text'
    },
    summary: 'summary text 4',
    author: 'Bob Brown',
    date: '18/11/2022',
  },
];

const GuideCard = ({id}: {id: number}) => {
  const navigation = useNavigation();
  console.log(id)

    return (
    <Pressable
      onPress={() => {
        navigation.navigate("Guide", {id: id})
      }}
    >
      {({
        isHovered,
        isPressed
      }) => {
        return ( <Box alignItems="center">
          <Box
            maxW="80"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700"
            }}
            _web={{
              shadow: 2,
              borderWidth: 0
            }}
            bg={isPressed
              ? 'coolGray.200'
              : isHovered
                ? 'coolGray.200'
                : 'coolGray.100'}
            _light={{
              backgroundColor: "gray.50"
            }}
            style={[
              styles.card,
              {transform: [{
                scale: isPressed ? 0.96 : 1
              }]}
            ]}
          >
            <Box>
              <AspectRatio w="100%" ratio={16 / 9}>
                <Image
                  source={{
                    uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                  }} alt="blog-card-image" />
              </AspectRatio>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  {guideDetails[id].title}
                </Heading>
              </Stack>
              <NativeBaseText fontWeight="400">
                {guideDetails[id].summary}
              </NativeBaseText>
              <HStack alignItems="center" space={4} justifyContent="space-between">
                <HStack alignItems="center" fontSize={10}>
                  <NativeBaseText
                    color="#708B75"
                    _dark={{
                      color: "warmGray.200"
                    }}
                    fontWeight="400"
                    style={styles.smallTextMargin}
                  >
                    {guideDetails[id].date}
                  </NativeBaseText>
                  <Spacer />
                  <NativeBaseText color="coolGray.800" _dark={{color: "warmGray.200"}}>
                  {guideDetails[id].author}
                  </NativeBaseText>
                </HStack>
              </HStack>
            </Stack>
          </Box>
        </Box>)
      }}
    </Pressable>
    );
  };
export default GuideCard;

const styles = StyleSheet.create({
    container: {
      flex: 1,
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
    card: {
      marginTop: 10,
      marginBottom: 10,
    },
    smallTextMargin: {
      marginTop: 5,
    },
  });
