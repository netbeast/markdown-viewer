import React from 'react'
import {
  View,
  StyleSheet,
  Text,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

import store from 'app-store-scraper';

const AppleView = (props) => {
  return (
    <View style={styles.container}>
      <Text>yo.</Text>
    </View>
  )
}

export default AppleView
