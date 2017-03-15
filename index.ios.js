import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';

const exNav = (props) => {
  return (
    <App
      operatingSystem="iOS"
      appId="432"
    />
  );
};

AppRegistry.registerComponent('markdownViewer', () => exNav);
