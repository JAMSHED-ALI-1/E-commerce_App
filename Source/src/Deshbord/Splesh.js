import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Splesh = () => {
    const navigation=useNavigation()
    // useEffect(()=>{
    //     const Timeout=setTimeout(() => {
    //         navigation.navigate('Home')
    //     },200);
    //     return ()=>clearTimeout(Timeout)
    // },[navigation])
  return (
    <View>
      <Text>Splesh</Text>
    </View>
  )
}

export default Splesh

const styles = StyleSheet.create({})