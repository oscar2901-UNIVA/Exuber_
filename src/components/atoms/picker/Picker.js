import React from "react";
import { View, Text } from "react-native";
import { Picker as RNPicker } from "@react-native-picker/picker"; // Cambia el nombre a RNPicker
import TextStyled from "../../TextStyled";
import { useTheme } from "../../../../styles/useTheme";
const CustomPicker = ({ label, selectedValue, onValueChange, options }) => {
  const theme = useTheme();

  return (
    <View style={{ marginVertical: 0 }}>
      <TextStyled color="primary2">{label}</TextStyled>
      <RNPicker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={{ width: "100%", margin: 0 }}
      >
        {options.map((option, index) => (
          <RNPicker.Item
            color={theme.colors.primary3}
            key={index}
            label={option.label}
            value={option.value}
          />
        ))}
      </RNPicker>
    </View>
  );
};

export default CustomPicker;
