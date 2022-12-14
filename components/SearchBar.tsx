import React, { useState } from "react";
import {
    Box,
    Divider,
    Icon,
    Input,
    SearchIcon,
    VStack
} from "native-base";

const SearchBar = ({ setText }: { setText: (newText: string) => void}) => {
    return <VStack
        my="4"
        space={5}
        w="100%"
        maxW="375px"
        divider={
        <Box px="2">
            <Divider />
        </Box>}
    >
      <VStack w="100%"  space={5} alignSelf="center">
        <Input
            placeholder="Search"
            onChangeText={newText => setText(newText)}
            variant="filled"
            width="100%"
            borderRadius="10"
            borderColor={"gray.400"}
            py="1"
            px="2"
        />
      </VStack>
    </VStack>;
}

export default SearchBar;
