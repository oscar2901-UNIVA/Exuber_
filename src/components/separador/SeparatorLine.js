import React from 'react';
import { View, StyleSheet } from 'react-native';

const SeparatorLine = () => {
  return <View style={styles.separator}></View>;
};

const styles = StyleSheet.create({
  separator: {
    borderBottomColor: '#B68EFF', // Puedes cambiar el color según tus preferencias
    borderBottomWidth: 1,
    marginVertical: 10, // Ajusta la separación vertical según tus necesidades
  },
});

export default SeparatorLine;
