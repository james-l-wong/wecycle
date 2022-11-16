import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from './Themed';

import {
  AspectRatio,
  Center,
  HStack,
  Stack,
  Box,
  Heading,
  Text as NativeBaseText,
  Image,
} from 'native-base';


const GuideCard = () => {
    return (
      <Box alignItems="center">
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
          _light={{
            backgroundColor: "gray.50"
          }}
        >
          <Text style={styles.title}>Guides</Text>
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{
                  uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                }} alt="blog-card-image"
              />
            </AspectRatio>
            <Center
              bg="violet.500"
              _dark={{
                bg: "violet.400"
              }} _text={{
                color: "warmGray.50",
                fontWeight: "700",
                fontSize: "xs"
              }}
              position="absolute"
              bottom="0"
              px="3"
              py="1.5"
            >
              PHOTOS
            </Center>
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
                The Silicon Valley of India.
              </NativeBaseText>
            </Stack>
            <NativeBaseText fontWeight="400">
              Bengaluru (also called Bangalore) is the center of India's high-tech
              industry. The city is also known for its parks and nightlife.
            </NativeBaseText>
            <HStack alignItems="center" space={4} justifyContent="space-between">
              <HStack alignItems="center">
                <NativeBaseText
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200"
                  }}
                  fontWeight="400"
                >
                  6 mins ago
                </NativeBaseText>
              </HStack>
            </HStack>
          </Stack>
        </Box>
      </Box>    
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
    bottomMargin: {
      marginBottom: 400,
    },
  });