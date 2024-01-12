// SearchBar.js
import React, { useState } from "react";
import { View, TextInput } from "react-native";
import theme from "../../../theme/theme";
import Icon from "../Icon";

const SearchBar = ({
  onSearch,
  editable = true,
  placeholder = "",
  value = "",
  onChangeText = (text) => {
    console.log("text", text);
  },
  style = {},
  styleText = {},
  control = null,
  name = null,
  icon = null,

  ...restOfProps
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { field } = control
    ? useController({
        control,
        name: name || placeholder,
      })
    : { field: { value, onChangeText } };
  const handleSearch = (text) => {
    setSearchTerm(text);
    onSearch(text);
  };

  return (
    <View
      style={{
        width: "100%",
        paddingVertical: 10,
        backgroundColor: editable ? theme.colors.white : "#f2f2f2",
        borderWidth: 1,
        borderColor: theme.colors.lightGray,
        elevation: 5,
        borderRadius: 10,
        marginVertical: 10,
        flexDirection: "row",
        ...style,
      }}
    >
      {icon && (
        <Icon
          name={icon}
          size={25}
          color={theme.colors.gray}
          style={{ marginHorizontal: 10 }}
        />
      )}
      <TextInput
        placeholder="Buscar artículos"
        value={searchTerm}
        onChangeText={handleSearch}
      />
    </View>
  );
};

export default SearchBar;
