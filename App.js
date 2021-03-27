import React from 'react';
import { Provider } from 'react-redux';
import './firebase.config';
import configureStore from './store/configureStore';
import ConfiguredApp from './ConfigureApp';
import { TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppSecondary from './AppSecondary';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}
    style={{ backgroundColor: 'black' }}
  >
    {children}
  </TouchableWithoutFeedback>
)

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={configureStore}>
        <DismissKeyboard>
          <AppSecondary />
        </DismissKeyboard>
      </Provider >
    </NavigationContainer>
  );
}