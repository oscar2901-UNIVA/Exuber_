import React from 'react';
import { Dimensions, Text } from 'react-native';
import { useTheme } from '../../styles/useTheme';

function TextStyled(props: {
  fontScale?: boolean;
  color?:
    | 'foreground'
    | 'background'
    | 'primary1'
    | 'primary2'
    | 'primary3'
    | 'secondary1'
    | 'secondary2'
    | 'shadow1_1'
    | 'shadow1_2'
    | 'shadow2_1'
    | 'shadow2_2'
    | 'shadow3_1'
    | 'shadow3_2'
    | 'white'
    | 'black'
    | 'error';
  fontFamily?: 'primary' | 'primaryBold' | 'secondary' | 'secondaryBold';
  fontSize?: 'h1' | 'h2' | 'h3' | 'h4' | 'b1' | 'b2' | 'b3' | 'b4' | 'b5';
  spacing?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
  style?: any;
  children?: any;
}) {
  const {
    color = 'primary1',
    fontFamily = 'primary',
    fontSize = 'b1',
    spacing,
    style,
    children,
    fontScale = true,
    ...restOfProps
  } = props;
  const theme = useTheme();
  const styles = {
    text: [
      theme.stylesheets.textColors.foreground,
      theme.stylesheets.fontSizes.h3,
      theme.stylesheets.fontFamily.primary,
    ],
  };

  // Calcula el tamaño de fuente basado en el ancho de la pantalla

  const calculateFontSizeScale = () => {
    if (!fontScale) {
      return 1;
    }
    const windowWidth = Dimensions.get('window').width;
    // Define tus Media Queries aquí
    if (windowWidth <= 350) {
      return 0.7;
    } else if (windowWidth <= 400) {
      return 0.9;
    } else {
      return 1;
    }
  };
  const getFontSize = () => {
    if (fontSize) {
      return theme?.stylesheets?.fontSizes[fontSize]?.fontSize || 30;
    }
    return 30;
  };

  const textStyles = [
    styles.text,
    color && (theme.stylesheets.textColors[color] || { color: color }),
    {
      fontSize: getFontSize() * calculateFontSizeScale(),
    },
    fontFamily && theme.stylesheets.fontFamily[fontFamily],
  ];
  const objectStyles = {};

  spacing != undefined &&
    (objectStyles['marginBottom'] = theme.spacing[spacing] || spacing);

  return (
    <Text
      allowFontScaling={false}
      style={[textStyles, objectStyles, style]}
      {...restOfProps}
    >
      {children}
    </Text>
  );
}

export default TextStyled;