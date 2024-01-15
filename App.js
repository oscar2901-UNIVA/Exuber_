import React from "react";
import { View } from "react-native";
import MainStack from "./src/navigation/MainStack";
import { Provider } from "react-redux";
import { store } from './src/reduxStore/store';
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <MainStack />
      </Provider>
    </View>
  );
}
