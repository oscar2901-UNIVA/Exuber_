import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { getCurrentTheme } from '../../../styles/getCurrentTheme';
import Icon from './Icon';

export default function SwitchPrimary({ state = false, onPress = () => {} }) {
  const theme = getCurrentTheme();
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: theme.colors.backgroundTranslucent,
        width: 100,
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 50,
          height: 40,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: state
            ? theme.colors.primary1
            : theme.colors.background,
        }}
      >
        <Icon onPress={onPress} name='minus'></Icon>
      </View>
      <View
        style={{
          width: 50,
          height: 40,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: !state
            ? theme.colors.primary1
            : theme.colors.background,
        }}
      >
        <Icon onPress={onPress} name='checkbox-blank-circle-outline'></Icon>
      </View>
    </TouchableOpacity>
  );
}
