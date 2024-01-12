import { TextInput, View, Text } from 'react-native';
import React from 'react';
import { useController } from 'react-hook-form';
// import Icon from '../Icon';
import { useTheme } from '../../../../styles/useTheme';

export default function InputPrimary({
  editable = true,
  placeholder = '',
  value = '',
  onChangeText = (text) => {
    console.log("text",text);
  },
  style = {},
  styleText = {},
  control = null,
  name = null,
  icon = null,

  ...restOfProps
}) {
  const { field } = control
    ? useController({
        control,
        name: name || placeholder,
      })
    : { field: { value, onChangeText } };


    const theme = useTheme();
  return (
    <View
      style={{
        width: '100%',
        paddingVertical: 10,
        backgroundColor: editable ? theme.colors.white : '#f2f2f2',
        borderWidth: 1,
        borderColor: theme.colors.lightGray,
        elevation: 5,
        borderRadius: 10,
        marginVertical: 10,
        flexDirection: 'row',
        ...style,
      }}
    >
      {/* {icon && (
        <Icon
          name={icon}
          size={25}
          color={theme.colors.gray}
          style={{ marginHorizontal: 10 }}
        />
      )} */}
      <TextInput
        editable={editable}
        style={{
          textAlign: 'center',
          flex: 1,
          marginRight: 10,
          fontSize: 20,
          ...styleText,
        }}
        placeholderTextColor={theme.colors.gray}
        placeholder={placeholder}
        onChangeText={field.onChange}
        value={field.value}
        {...restOfProps}
      />
    </View>
  );
}