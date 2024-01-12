import { TouchableOpacity, ImageBackground, View } from 'react-native';

export default function ButtonImageBackground({
  source = require('../../../assets/images/bg_button.png'),
  style = {},
  styleImage = {},
  onPress = () => {},
  children,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 120,
        width: 300,
        borderRadius: 20,
        overflow: 'hidden',
        ...style,
      }}
    >
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          padding: 10,
          ...styleImage,
        }}
        source={source}
      >
        {children}
      </ImageBackground>
    </TouchableOpacity>
  );
}
