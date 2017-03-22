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

import HTMLView from 'react-native-htmlview';

const AndroidView = (props) => {
  props.readMD();
  return (
    <View style={styles.container}>
      <HTMLView value={props.mdData} />
    </View>
  )
}

export default AndroidView
