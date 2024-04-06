import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import spleshScreen from './Source/Screens/spleshScreen';
const Stack = createNativeStackNavigator();
const Navigatior = () => {
  return (
    <NavigationContainer >
    <Stack.Navigator screenOptions={{headerShown:false,}} initialRouteName='Splesh'>
    <Stack.Screen name="spleshScreen" component={spleshScreen} />
      </Stack.Navigator>
  </NavigationContainer>
  )
  
}

export default Navigatior

