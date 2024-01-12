import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { getCurrentTheme } from '../../../styles/getCurrentTheme';

export default function Icon(
  pops: {
    color?: string;
    name?: string;
    onPress?: any;
    disabled?: boolean;
    size?: number;
    source?:
      | 'MaterialCommunityIcons'
      | 'AntDesign'
      | 'FontAwesome'
      | 'Feather'
      | 'Entypo'
      | 'Ionicons'
      | 'Foundation'
      | 'Octicons'
      | 'Zocial'
      | 'EvilIcons'
      | 'SimpleLineIcons'
      | 'MaterialIcons'
      | 'FontAwesome5'
      | 'Fontisto';
    style?: any;
  },
  ...rest: any
) {
  const theme = getCurrentTheme();
  const {
    source = 'MaterialCommunityIcons',
    name = 'bee',
    size = 24,
    color = theme.colors.foreground,
    disabled = false,
    style = {},
  } = pops;

  const onPress = disabled ? () => {} : pops.onPress;

  const iconHandler = {
    AntDesign: (
      <AntDesign
        name={name}
        size={size}
        color={color}
        style={style}
        onPress={onPress}
        {...rest}
      />
    ),
    Entypo: (
      <Entypo
        name={name}
        size={size}
        color={color}
        style={style}
        onPress={onPress}
        {...rest}
      />
    ),
    EvilIcons: (
      <EvilIcons
        name={name}
        size={size}
        color={color}
        style={style}
        onPress={onPress}
        {...rest}
      />
    ),
    Feather: (
      <Feather
        name={name}
        size={size}
        color={color}
        style={style}
        onPress={onPress}
        {...rest}
      />
    ),
    FontAwesome: (
      <FontAwesome
        name={name}
        size={size}
        color={color}
        style={style}
        onPress={onPress}
        {...rest}
      />
    ),
    FontAwesome5: (
      <FontAwesome5
        name={name}
        size={size}
        color={color}
        style={style}
        onPress={onPress}
        {...rest}
      />
    ),
    Fontisto: (
      <Fontisto
        name={name}
        size={size}
        color={color}
        style={style}
        onPress={onPress}
        {...rest}
      />
    ),
    Foundation: (
      <Foundation
        name={name}
        size={size}
        color={color}
        style={style}
        onPress={onPress}
        {...rest}
      />
    ),
    Ionicons: (
      <Ionicons
        name={name}
        size={size}
        color={color}
        style={style}
        onPress={onPress}
        {...rest}
      />
    ),
    MaterialCommunityIcons: (
      <MaterialCommunityIcons
        name={name}
        size={size}
        color={color}
        style={style}
        onPress={onPress}
        {...rest}
      />
    ),
    MaterialIcons: (
      <MaterialIcons
        name={name}
        size={size}
        color={color}
        style={style}
        onPress={onPress}
        {...rest}
      />
    ),
    Octicons: (
      <Octicons
        name={name}
        size={size}
        color={color}
        style={style}
        onPress={onPress}
        {...rest}
      />
    ),
    SimpleLineIcons: (
      <SimpleLineIcons
        name={name}
        size={size}
        color={color}
        style={style}
        onPress={onPress}
        {...rest}
      />
    ),
    Zocial: (
      <Zocial
        name={name}
        size={size}
        color={color}
        style={style}
        onPress={onPress}
        {...rest}
      />
    ),
  };

  return iconHandler[source];
}
