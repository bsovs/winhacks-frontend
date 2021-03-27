import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import ConfiguredApp from './ConfigureApp';

export default function App() {
  return (
    <Provider store={configureStore}>
      <ConfiguredApp />
    </Provider >
  );
}