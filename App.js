import React from "react";
import { View } from "react-native";
import MainStack from "./src/navigation/MainStack";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <MainStack/>
    </View>
  );
}

