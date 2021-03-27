import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppSecondary from './AppSecondary';

export default function App() {
  return (
    <Provider store={configureStore}>
      <AppSecondary />
    </Provider>
  );
}

