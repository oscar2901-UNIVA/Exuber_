import { StyleSheet } from 'react-native';
const dark = false;

const palette = {
  black: '#000000',
  white: '#ffffff',
  grayLight: '#c9ccce',
  gray: '#7f808e',
  grayDark: '#666666',
  greenDark: '#00bc84',
  redLight: '#ed4683',
  gray2: '#646574',

  rose: '#ff6969',
  lightGreen: '#9bed8c',
};

const common = {
  white: palette.white,
  black: palette.black,
  gray: palette.gray,
  grayLight: palette.grayLight,
  darkGray: palette.grayDark,
  success: palette.lightGreen,
  error: palette.rose,
  notification: palette.rose,
};

const light = {
  primary: palette.greenDark,
  secondary: palette.gray,
  tertiary: palette.gray2,
  quartiary: palette.grayLight,

  backgroundWhite: palette.white,

  text_primary: palette.black,
  text_secondary: palette.greenDark,
  text_tertiary: palette.grayLight,
  text_quaternary: palette.white,
  text_fifth: palette.gray2,
};
const themeColors = true ? { ...common, ...light } : {};
export default {
  colors: {
    ...themeColors,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  stylesheets: {
    textColors: StyleSheet.create({
      primary: { color: themeColors.text_primary },
      secondary: { color: themeColors.text_secondary },
      tertiary: { color: themeColors.text_tertiary },
      quartiary: { color: themeColors.text_quaternary },
      fifth: { color: themeColors.text_fifth },
      white: { color: palette.white },
      black: { color: palette.black },
      error: { color: themeColors.error },
    }),

    fontSizes: StyleSheet.create({
      h1: { fontSize: 54 },
      h2: { fontSize: 40 },
      h3: { fontSize: 30 },
      h4: { fontSize: 24 },
      h5: { fontSize: 18 },
      h6: { fontSize: 14 },
      h7: { fontSize: 12 },
      h8: { fontSize: 10 },
    }),
    fontFamily: StyleSheet.create({
      primary: { fontFamily: 'Poppins-Regular' },
      primaryBold: { fontFamily: 'Poppins-Bold' },
      primarySemiBold: { fontFamily: 'Poppins-SemiBold' },
    }),
    fontWeight: StyleSheet.create({
      bold: { fontWeight: 'bold' },
    }),
  },
};
