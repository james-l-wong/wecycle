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

const GuideCard = ({id}: {id: number}) => {
  const navigation = useNavigation();
  console.log(id)

    return (
    <Pressable
      onPress={() => {
        navigation.navigate("GuideArticle", {id: id})
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
                  Guide title
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
                  The Silicon Valley of India.
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
                    style={styles.smallTextMargin}
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
          </Box>
        </Box>)
          {/* <Box
            maxW="96"
            borderWidth="1"
            borderColor="coolGray.300"
            shadow="3"
            bg={isPressed
              ? 'coolGray.200'
              : isHovered
                ? 'coolGray.200'
                : 'coolGray.100'}
            p="5"
            rounded="8"
            style={{
              transform: [{
                scale: isPressed ? 0.96 : 1
              }]
            }}
          >
              <Box>
                <AspectRatio w="100%" ratio={16 / 9}>
                  <Image
                    source={{
                      uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                    }} alt="blog-card-image" />
                </AspectRatio>
              </Box>
              <HStack alignItems="center">
                <Badge
                  colorScheme="darkBlue"
                  _text={{
                    color: 'white'
                  }}
                  variant="solid"
                  rounded="4"
                >
                  Business
                </Badge>
                <Spacer />
                <NativeBaseText fontSize={10} color="coolGray.800">
                  1 month ago
                </NativeBaseText>
              </HStack>
              <NativeBaseText color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                Marketing License
              </NativeBaseText>
              <NativeBaseText mt="2" fontSize="sm" color="coolGray.700">
                Unlock powerfull time-saving tools for creating email delivery and
                collecting marketing data
              </NativeBaseText>
              <Flex>
                {isFocused ? <NativeBaseText mt="2" fontSize={12} fontWeight="medium" textDecorationLine="underline" color="darkBlue.600" alignSelf="flex-start">
                  Read More
                </NativeBaseText> : <NativeBaseText mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                  Read More
                </NativeBaseText>}
              </Flex>
            </Box> */}
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
