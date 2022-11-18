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
    title: "The e-waste problem",
    image: {
      uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
      alt: 'alt-text'
    },
    author: 'John Doe',
    date: '12/11/2022',
  },
  {
    title: "What's being done about e-waste",
    image: {
      uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
      alt: 'alt-text'
    },
    author: 'Joe Blow',
    date: '15/11/2022',
  },
  {
    title: "How to deal with e-waste",
    image: {
      uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
      alt: 'alt-text'
    },
    author: 'Jane Doe',
    date: '16/11/2022',
  },
  {
    title: "More tips and information for recycling e-waste",
    image: {
      uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
      alt: 'alt-text'
    },
    author: 'John Smith',
    date: '17/11/2022',
  },
  {
    title: "How to securely remove data before disposing of e-waste",
    image: {
      uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
      alt: 'alt-text'
    },
    author: 'Bob Brown',
    date: '18/11/2022',
  },
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
    <NativeBaseText fontWeight="400">
    Bengaluru (also called Bangalore) is the center of India's high-tech
    industry. The city is also known for its parks and nightlife.
    </NativeBaseText>
  )
};


const GuideContent2 = () => {
  return (
    <NativeBaseText fontWeight="400">
    Bengaluru (also called Bangalore) is the center of India's high-tech
    industry. The city is also known for its parks and nightlife.
    </NativeBaseText>
  )
};

const GuideContent3 = () => {
  return (
    <NativeBaseText fontWeight="400">
    Bengaluru (also called Bangalore) is the center of India's high-tech
    industry. The city is also known for its parks and nightlife.
    </NativeBaseText>
  )
};

const GuideContent4 = () => {
  return (
    <NativeBaseText fontWeight="400">
    Bengaluru (also called Bangalore) is the center of India's high-tech
    industry. The city is also known for its parks and nightlife.
    </NativeBaseText>
  )
};

const Guide = ({route}) => {
  const {id} = route.params;
  let RenderGuideContent = null
  console.log(id)
  console.log(guideDetails);

  if (id === 0) {
    RenderGuideContent = GuideContent0;
  } else if (id === 1) {
    RenderGuideContent = GuideContent1;
  } else if (id === 2) {
    RenderGuideContent = GuideContent1;
  } else if (id === 3) {
    RenderGuideContent = GuideContent1;
  } else if (id === 4) {
    RenderGuideContent = GuideContent1;
  } else {
    RenderGuideContent = "Error: This guide has no content, please visit another gudie"
  }
  /**
   * TODO Do the same for the rest of the id to render the content in a guide
   * Do the same for guideDetails to render details of a guide
   * Then insert elements into return below e.g. for id == 0:
   * guideContent[0].title and renderGuideContent would be GuideContent0 from
   * if/else statements so just put {renderGuideContent} in the right section
   * 
   * Do the same thing for guide cards, but no need for GuideContent
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
                {guideDetails[id].title}
            </Heading>
            <HStack alignItems="center" space={4} justifyContent="space-between">
              <HStack alignItems="center" fontSize={10}>
                  <NativeBaseText
                  color="#708B75"
                  _dark={{
                      color: "warmGray.200"
                  }}
                  fontWeight="400"
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
            <NativeBaseText fontWeight="400">
              <RenderGuideContent />
            </NativeBaseText>
        </Stack>
    </Box>);
  };
export default Guide;

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
