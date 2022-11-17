import React from 'react';
import { StyleSheet } from 'react-native';

import {
  AspectRatio,
  HStack,
  Stack,
  Box,
  Heading,
  Text as NativeBaseText,
  Image,
  Pressable,
  Spacer,
} from 'native-base';

/**
 * Each guide will have a title, body, summary, thumbnail, author and date
 * Cards will display title, summary, thumnmail, author and date
 * Articles have everything except summary as well as a share button
 * TODO guide article screen is given a blog id (could be title or an id)
 * If/else statements are run to see which blog to display
 * blog id is given by guide card, onClick => display article given id
 * 
 * Cards and articles should be passed these props or just make them
 * static elements? Since there is no backend/way or need to add in props?
 */

const guideDetails = [
  {
    title: 'title1',
    image: {
      uri: 'uri',
      alt: 'alt-text'
    },
    summary: 'summary text',
    author: 'bob brwom',
    postedOn: '18/11/2022',
  },
  {
    title: 'title2',
    image: {
      uri: 'uri',
      alt: 'alt-text'
    },
    summary: 'another summary text',
    author: 'jane brwom',
    postedOn: '17/11/2022',
  }
];

const GuideContent0 = () => {
  return (
    <Box>
      paragraphs and stuff
    </Box>
  )
};

const GuideContent1 = () => {
  return (
    <Box>
      paragraphs and stuff
    </Box>
  )
};

const GuideArticle = ({route}) => {
  const {id} = route.params;
  let renderGuideContent = null;
  console.log(id)
  console.log(guideDetails);

  if (id === 0) {
    renderGuideContent = GuideContent0;
  } else if (id === 1) {
    renderGuideContent = GuideContent1;
  }
  /**
   * Do the same for the rest of the id to render the content in a guide
   * Do the same for guideDetails to render details of a guide
   * Then insert elements into return below e.g. for id == 0:
   * guideContent[0].title and renderGuideContent would be GuideContent0 from
   * if/else statements so just put {renderGuideContent} in the right section
   */
    return (<Box alignItems="center">
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
                The Garden City
            </Heading>
            <NativeBaseText
                fontSize="xs"
                _light={{
                color: "violet.500"
                }} _dark={{
                color: "violet.400"
                }}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
            >
                The Silicon Valley of India. Remove this and make heading colour green?
            </NativeBaseText>
            </Stack>
            <NativeBaseText fontWeight="400">
            Bengaluru (also called Bangalore) is the center of India's high-tech
            industry. The city is also known for its parks and nightlife.
            </NativeBaseText>
            <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center" fontSize={10}>
                <NativeBaseText
                color="coolGray.600"
                _dark={{
                    color: "warmGray.200"
                }}
                fontWeight="400"
                >
                6 mins ago
                </NativeBaseText>
                <Spacer />
                <NativeBaseText color="coolGray.800" _dark={{color: "warmGray.200"}}>
                Author name
                </NativeBaseText>
            </HStack>
            </HStack>
        </Stack>
    </Box>);
  };
export default GuideArticle;

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
  });
