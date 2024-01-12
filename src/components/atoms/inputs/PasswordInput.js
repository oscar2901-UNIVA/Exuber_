import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Asegúrate de tener instalada la biblioteca react-native-vector-icons
import { useController } from 'react-hook-form';
import { useTheme } from '../../../../styles/useTheme';

const PasswordInput = ({
  editable = true,
  placeholder = '',
  value = '',
  onChangeText = (text) => {
    console.log('text', text);
  },
  style = {},
  styleText = {},
  control = null,
  name = null,
  ...restOfProps
}) => {
  const { field } = control
    ? useController({
        control,
        name: name || placeholder,
      })
    : { field: { value, onChangeText } };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const theme = useTheme();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

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
        alignItems: 'center',
        ...style,
      }}
    >
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
        secureTextEntry={!isPasswordVisible} 
        {...restOfProps}
      />
      <TouchableOpacity onPress={togglePasswordVisibility}>
        <Ionicons
          name={isPasswordVisible ? 'eye-off' : 'eye'}
          size={25}
          color={theme.colors.gray}
          style={{ marginHorizontal: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;
