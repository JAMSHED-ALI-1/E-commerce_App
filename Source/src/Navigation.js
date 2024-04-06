import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Deshbord/Home';
import Login from './Auth/Login';
import BottmTab from './Deshbord/BottmTab';
import Product from './Deshbord/Product';
import DetailItem from './Deshbord/DetailItem';
import OnBoardSwiper from './Deshbord/OnBoardSwiper';
// import Test from './Deshbord/Test';
import TestHeade from './Component/TestHeade';
import Splesh from './Deshbord/Splesh';
import Deshbord from './Deshbord/ResipeDehBord/Deshbord';
import DetailReciepee from './Deshbord/ResipeDehBord/DetailReciepee';
import SearchScreen from './Deshbord/ResipeDehBord/SearchScreen';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer >
    <Stack.Navigator screenOptions={{headerShown:false,}} initialRouteName='Splesh'>
     {/* ----------------------reciepee Start---------------- */}
      <Stack.Screen name="Splesh" component={Splesh} />
      <Stack.Screen name="Deshbord" component={Deshbord} />
      <Stack.Screen name="DetailReciepee" component={DetailReciepee} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
        {/* ----------------------reciepee End---------------- */}

        
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BottmTab" component={BottmTab} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="DetailItem" component={DetailItem} />
      <Stack.Screen name="OnBoardSwiper" component={OnBoardSwiper} />
      {/* jhsjgdgsgdgsuo */}
      {/* <Stack.Screen name="Test" component={Test} /> */}
      <Stack.Screen name="TestHeade" component={TestHeade} />
      
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})