import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swipe from "./screens/Swipe";
import Body from "./components/Body";

export default function App() {
  return (
    <View>
      <Body>
          <Swipe />
      </Body>
      <StatusBar style="auto" />
    </View>
  );
}
