import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Navigation from './Source/src/Navigation'

const App = () => {
  return (
  <>
  <StatusBar backgroundColor={'transparent'}  translucent ={true} />
<Navigation/>
  </>
  )
}

export default App

const styles = StyleSheet.create({})