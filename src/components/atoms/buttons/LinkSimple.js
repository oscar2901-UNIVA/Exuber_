import { TouchableOpacity } from 'react-native';
import TextStyled from '../../TextStyled';

export default function LinkSimple({
  text = 'text',
  onPress = () => {},
  style = {},
  styleText = {},
}) {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={{
        paddingHorizontal: 50,
        paddingVertical: 20,
        ...style,
      }}
    >
      <TextStyled
        fontSize='h5'
        fontWeight='bold'
        style={{
          ...styleText,
        }}
      >
        {text}
      </TextStyled>
    </TouchableOpacity>
  );
}
