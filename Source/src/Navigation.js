import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Deshbord/Home';
import Login from './Auth/Login';
import BottmTab from './Deshbord/BottmTab';
import Product from './Deshbord/Product';
import DetailItem from './Deshbord/DetailItem';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer >
    <Stack.Navigator screenOptions={{headerShown:false,}} initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BottmTab" component={BottmTab} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="DetailItem" component={DetailItem} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})