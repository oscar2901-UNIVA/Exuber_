import { Text } from 'react-native';
import theme from '../theme/theme';

export default function TextStyledRes({
  children = '',
  fontSize = '',
  color = '',
  fontFamily = '',
  fontWeight = '',
  style = {},
  ...restOfProps
}) {
  const styles = {
    text: [
      theme.stylesheets.textColors.primary,
      theme.stylesheets.fontSizes.h3,
      theme.stylesheets.fontFamily.primary,
    ],
  };

  // const styles = StyleSheet.create({
  //   text: {
  //     color: theme.colors.text_primary,
  //     fontSize: theme.fontSizes.h3,
  //     fontFamily: theme.fontFamily.primary,
  //   },
  // h1: {
  //   fontSize: theme.fontSizes.h1,
  // },
  // h2: {
  //   fontSize: theme.fontSizes.h2,
  // },
  // h3: {
  //   fontSize: theme.fontSizes.h3,
  // },
  // h4: {
  //   fontSize: theme.fontSizes.h4,
  // },
  // h5: {
  //   fontSize: theme.fontSizes.h5,
  // },
  // colorPrimary: {
  //   color: theme.colors.text_primary,
  // },
  // colorSecundary: {
  //   color: theme.colors.text_secundary,
  // },
  // fontFamilyPrimary: {
  //   fontFamily: theme.fontFamily.primaryRegular,
  // },
  // fontWeightBold: {
  //   fontWeight: theme.fontWeight.bold,
  // },
  // });
  const colorSelected = {
    primary: styles.colorPrimary,
    secundary: styles.colorSecundary,
  };

  const fontSizeSeleceted = {
    h1: theme.stylesheets.h1,
    h2: styles.h2,
    h3: styles.h3,
    h4: styles.h4,
    h5: styles.h5,
  };

  const fontFamilySelected = {
    primary: styles.fontFamilyPrimary,
    primaryBold: styles.fontFamilyPrimaryBold,
  };

  const textStyles = [
    styles.text,
    // color && colorSelected[color],
    color && theme.stylesheets.textColors[color],
    fontSize && theme.stylesheets.fontSizes[fontSize],
    fontWeight && theme.stylesheets.fontWeight[fontWeight],

    // color === 'primary' && styles.colorPrimary,
    // color === 'secundary' && styles.colorSecundary,
    // fontSize === 'h1' && styles.h1,
    // fontSize === 'h2' && styles.h2,
    // fontSize === 'h3' && styles.h3,
    // fontSize === 'h4' && styles.h4,
    // fontSize === 'h5' && styles.h5,
    // fontFamily === 'primary' && styles.fontFamilyPrimary,
    // fontFamily === 'primaryBold' && styles.fontFamilyPrimaryBold,
    // fontWeight === 'bold' && styles.fontWeightBold,
  ];

  return (
    <Text style={[textStyles, style]} {...restOfProps}>
      {children}
    </Text>
  );
}
