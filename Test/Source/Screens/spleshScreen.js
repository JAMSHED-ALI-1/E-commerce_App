import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const spleshScreen = () => {
  return (
    <View style={styles.container}>
      <Text>spleshScreen</Text>
    </View>
  )
}

export default spleshScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'pink',
    padding:20,
  }
})