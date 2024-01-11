import { ScrollView, View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../styles/useTheme';

export default function SimpleLayout({
  children,
  hasScroll = true,
  style = {},
}) {
  const theme = useTheme();
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: theme.colors.background,
        paddingHorizontal: 20,
        paddingTop: 10,
        ...style,
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {hasScroll ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            {children}
          </ScrollView>
        ) : (
          children
        )}
      </SafeAreaView>
    </View>
  );
}
