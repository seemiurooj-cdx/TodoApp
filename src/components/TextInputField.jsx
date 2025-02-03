// src/components/TextInputField.js
import React from "react";
import { Input, InputField } from "@gluestack-ui/themed";

const TextInputField = ({ placeholder, value, onChangeText }) => {
  return (
    <Input variant="outline" size="lg" isFullWidth>
      <InputField placeholder={placeholder} value={value} onChangeText={onChangeText} />
    </Input>
  );
};

export default TextInputField;
