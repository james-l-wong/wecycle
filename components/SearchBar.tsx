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
        maxW="300px"
        divider={
        <Box px="2">
            <Divider />
        </Box>}
    >
      <VStack w="100%" space={5} alignSelf="center">
        <Input
            placeholder="Search"
            // onSubmitEditing={props.onSubmit}
            onChangeText={newText => setText(newText)}
            variant="filled"
            width="100%"
            borderRadius="10"
            py="1"
            px="2"
            InputLeftElement={
                <Icon
                    ml="2"
                    size="4"
                    color="gray.400"
                    as={<SearchIcon name="search" />}
                />
            } />
      </VStack>
    </VStack>;
}

export default SearchBar;
