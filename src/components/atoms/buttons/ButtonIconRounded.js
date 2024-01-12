import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import React from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import theme from '../../../theme/theme';
import { getCurrentTheme } from '../../../../styles/getCurrentTheme';

export default function ButtonIconRounded({
  onPress = () => {},
  icon = 'bee',
  size = 30,
  isActive = false,
  colorActive = getCurrentTheme().colors.primary1,
  colorInactive = getCurrentTheme().colors.backgroundPrimary,
  colorIconActive = getCurrentTheme().colors.white,
  colorIconInactive = getCurrentTheme().colors.primary1,
  styleIcon = {},
  disabled = false,
  style = {},
}) {
  const theme = getCurrentTheme();
  const styles = StyleSheet.create({
    tabbar: {
      width: '90%',
      paddingVertical: 10,
      position: 'absolute',
      bottom: 15,
      alignSelf: 'center',
      backgroundColor: theme.colors.white,
      elevation: 10,
      borderRadius: 40,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      flex: 1,
      alignItems: 'center',
      borderRadius: size / 2,
      overflow: 'hidden',
      ...style,
    },
  });
  return (
    <TouchableOpacity
      disabled={disabled}
      style={styles.button}
      onPress={onPress}
    >
      <View
        style={{
          borderRadius: size,
          overflow: 'hidden',
        }}
      >
        <Icon
          name={icon}
          size={size}
          color={isActive ? colorIconActive : colorIconInactive}
          style={{
            backgroundColor: isActive ? colorActive : colorInactive,
            padding: 5,
            ...styleIcon,
            borderRadius: 10,
          }}
        />
      </View>
    </TouchableOpacity>
  );
}
