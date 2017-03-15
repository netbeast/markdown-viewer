import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';

const exNav = (props) => {
  return (
    <App
      operatingSystem="android"
      appId="123"
    />
  );
};
AppRegistry.registerComponent('markdownViewer', () => exNav);
