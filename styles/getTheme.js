import { StyleSheet } from "react-native";

export default getTheme = (themeSelected) => {
  const staticPalette = {
    white: "#FFFFFF",
    black: "#000000",

    //colors
    grayDark: "#3B3B3B",
    grayUltraLight: "#DEDEDE",
    gray: "#3B3B3B",
    grayLight: "#5C5C5C",
    backgroundTranslucent: "#5a5a5a80",
  };

  const common = {
    primary1: "#3321A7",
    primary2: "#26A2BD",
    secondary1: "#191970",
    secondary2: "#F050EA",
    shadow1_1: "#156467",
    shadow1_2: "#95E3EE",
    shadow2_1: "#957532",
    shadow2_2: "#FBE1A9",
    shadow3_1: "#350D53",
    shadow3_2: "#C190E7",

    success: "#96F83C",
    success2: "#00C853",
    warning: "#FFCE00",
    error: "#F8423B",

    backgroundTranslucent: "#5a5a5a80",

    gray: "#0E0E0E",
    white: "#FFFFFF",
    black: "#000000",

    //components
    textLink: "#26a2bd",
  };

  const components = {
    header: "header",
    headerIcon: "headerIcon",
    cardHistoryPoints: "cardHistoryPoints",
    placeHolderTextInput: "placeHolderTextInput",
    text: "text",
    textInput: "textInput",
    textNegativePoints: "textNegativePoints",
    textPositivePoints: "textPositivePoints",
  };

  const lightTheme = {
    primary3: "#a0a0a0",
    background: "#ffffff",
    foreground: staticPalette.black,

    //components
    cp_header: "#f8f8f8",
    cp_cardHistoryPoints: "#f8f8f8",
    cp_placeHolderTextInput: "#767676",
    cp_text: "#ffffff",
    cp_textInput: "#ffffff",
    cp_textNegativePoints: "#a72141",
    cp_headerIcon: "#374957",
    cp_textSecondary: "#767676",
    cp_textButtonOutlined: "#3321A7",
  };

  const darkTheme = {
    primary3: "#b0b0b0",
    background: "#282828",
    foreground: staticPalette.white,

    //components
    cp_header: "#3F3F3F",
    cp_cardHistoryPoints: "#3F3F3F",
    cp_placeHolderTextInput: "#ffffff",
    cp_text: "#838383",
    cp_textInput: "#838383",
    cp_textNegativePoints: "#a72141",
    cp_headerIcon: "#ffffff",
    cp_textSecondary: "#ffffff",
    cp_textButtonOutlined: "#ffffff",
  };

  const themeColors =
    themeSelected === "light"
      ? { ...common, ...lightTheme, themeSelected }
      : { ...common, ...darkTheme, themeSelected };
  const fontFamilies = {
    // primary: 'RobotoRegular',
    primaryBold: "RobotoBold",
    // secondary: 'RobotoRegular',
    secondaryBold: "RobotoBold",
  };

  const theme = {
    colors: {
      ...themeColors,
    },

    spacing: {
      xs: 8,
      s: 12,
      m: 16,
      l: 22,
      xl: 30,
      xxl: 40,
    },
    fontFamilies,

    stylesheets: {
      textColors: StyleSheet.create({
        primary1: { color: themeColors.background },
        primary2: { color: themeColors.foreground },
        primary3: { color: themeColors.cp_textSecondary },
        secondary1: { color: themeColors.primary1 },
        secondary2: { color: themeColors.primary2 },
        shadow1_1: { color: themeColors.shadow1_1 },
        shadow1_2: { color: themeColors.shadow1_2 },
        shadow2_1: { color: themeColors.shadow2_1 },
        shadow2_2: { color: themeColors.shadow2_2 },
        shadow3_1: { color: themeColors.shadow3_1 },
        shadow3_2: { color: themeColors.shadow3_2 },
        white: { color: themeColors.white },
        black: { color: themeColors.black },
        foreground: { color: themeColors.foreground },
        background: { color: themeColors.background },
        error: { color: themeColors.error },
      }),

      fontSizes: StyleSheet.create({
        h1: { fontSize: 36 },
        h2: { fontSize: 28 },
        h3: { fontSize: 24 },
        h4: { fontSize: 20 },
        b1: { fontSize: 18 },
        b2: { fontSize: 16 },
        b3: { fontSize: 14 },
        b4: { fontSize: 12 },
        b5: { fontSize: 8 },
      }),

      fontFamily: StyleSheet.create({
        primary: { fontFamily: fontFamilies.primary },
        primaryBold: { fontFamily: fontFamilies.primaryBold },
        secondary: { fontFamily: fontFamilies.secondary },
        secondaryBold: { fontFamily: fontFamilies.secondaryBold },
      }),
    },
  };
  return theme;
};

export const useTheme = () => {
  return theme();
};
