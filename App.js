import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

import AppRouter from './navigation/AppRouter';


const App = (props) =>
  <NavigationProvider router={AppRouter}>
    <StackNavigation
      initialRoute={AppRouter.getRoute('markDownPage', {
        appId: props.appId,
        operatingSystem: props.operatingSystem,
        markdownLink: props.markdownLink
      })}
    />
  </NavigationProvider>;

export default App;
