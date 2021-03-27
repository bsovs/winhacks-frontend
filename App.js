import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppSecondary from './AppSecondary';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ConfiguredApp from './ConfigureApp';

export default function App() {
  return (
    <Provider store={configureStore}>
      <ConfiguredApp />
    </Provider >
  );
}