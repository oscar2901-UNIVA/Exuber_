import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../../styles/useTheme';
import TextStyled from '../../TextStyled';

export default function ButtonPrimary({
  text = 'Text',
  onPress = () => {
    console.info('ButtonPrimary Pressed');
  },
  loading = false,
  loadingElement = null,
  style = {},
  textStyle = {},
  secondary = false,
  children,
  ...restOfProps
}) {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: '100%',
        backgroundColor: secondary ? 'transparent' : theme.colors.primary1,
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: 15,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: theme.colors.primary1,
        minHeight: 45,
        justifyContent: 'center',
        ...style,
      }}
      {...restOfProps}
    >
      {children ? (
        children
      ) : loading ? (
        loadingElement || (
          <ActivityIndicator color={theme.colors.white}></ActivityIndicator>
        )
      ) : (
        <TextStyled
          fontSize='h3'
          color={secondary ? 'primary1' : 'white'}
          fontWeight='bold'
          style={textStyle}
        >
          {text}
        </TextStyled>
      )}
    </TouchableOpacity>
  );
}
