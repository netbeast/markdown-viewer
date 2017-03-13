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

class App extends Component {
  render() {
    return (
      <NavigationProvider router={AppRouter}>
        <StackNavigation initialRoute={AppRouter.getRoute('markDownPage')} />
      </NavigationProvider>
    );
  }
}

export default App;
