// src/components/Wrapper.js
import React from "react";
import { Box } from "@gluestack-ui/themed";

const Wrapper = ({ children }) => {
  return (
    <Box p="$4" bg="$white" borderRadius="$md" shadow="md">
      {children}
    </Box>
  );
};

export default Wrapper;
