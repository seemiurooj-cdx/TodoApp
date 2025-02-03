// src/screens/HomeScreen.js
import React, { useState } from "react";
import { Box, VStack, Heading } from "@gluestack-ui/themed";
import Wrapper from "../components/Wrapper";
import TextInputField from "../components/TextInputField";
import Dropdown from "../components/Dropdown";

const HomeScreen = () => {
  const [text, setText] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <Box flex={1} alignItems="center" justifyContent="center" bg="$gray100">
      <Wrapper>
        <VStack space="md">
          <Heading size="lg">Gluestack UI Example</Heading>
          <TextInputField placeholder="Enter text..." value={text} onChangeText={setText} />
          <Dropdown selectedValue={selectedOption} onValueChange={setSelectedOption} />
        </VStack>
      </Wrapper>
    </Box>
  );
};

export default HomeScreen;
