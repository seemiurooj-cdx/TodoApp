// src/components/Dropdown.js
import React, { useState } from "react";
import { Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectItem } from "@gluestack-ui/themed";

const Dropdown = ({ selectedValue, onValueChange }) => {
  return (
    <Select selectedValue={selectedValue} onValueChange={onValueChange}>
      <SelectTrigger>
        <SelectInput placeholder="Select an option" />
        <SelectIcon name="chevron-down" />
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectItem label="Option 1" value="option1" />
          <SelectItem label="Option 2" value="option2" />
          <SelectItem label="Option 3" value="option3" />
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};

export default Dropdown;
