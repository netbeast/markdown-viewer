import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

import HTMLView from 'react-native-htmlview';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const AppleView = (props) => {
  props.readMD();
  return (
    <View style={styles.container}>
      <HTMLView value={props.mdData} />
    </View>
  )
}

export default AppleView
