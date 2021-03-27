import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swipe from "./screens/Swipe";
import Body from "./components/Body";
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

export default function App() {
  return (
      <Provider store={configureStore}>
        <View>
          <Body>
              <Swipe />
          </Body>
          <StatusBar style="auto"/>
        </View>
      </Provider>
  );
}
