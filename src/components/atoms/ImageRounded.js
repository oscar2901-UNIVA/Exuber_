import { Pressable, Image, StyleSheet } from 'react-native';

export default function ({
  onPress = () => {},
  source = require('../../assets/images/icons/isotipo.png'),
  size = 50,
  style = {},
  ...restOfProps
}) {
  return (
    <Pressable
      onPress={() => {
        onPress();
      }}
      style={{
        width: size,
        height: size,
        ...style,
      }}
    >
      <Image
        source={source}
        resizeMode='cover'
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 100,
        }}
        {...restOfProps}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({});
