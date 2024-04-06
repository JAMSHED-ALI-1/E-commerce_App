import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'

const Splesh = () => {
    const navigation=useNavigation()
    useEffect(()=>{
        const Timeout=setTimeout(() => {
            navigation.navigate('Deshbord')
        },3000);
        return ()=>clearTimeout(Timeout)
    },[navigation])
  return (
    <View style={styles.container}>
      
      <Animatable.Image animation={'slideInUp'} source={require('../../Assets/Images/Splesh.png')} style={styles.logo}/>
      <Animatable.Text animation={'slideInUp'} style={styles.AppName}>Recipe Pro</Animatable.Text>
      <Animatable.Text animation={'slideInUp'} style={styles.tagline}>Search Any Recipe with Filter</Animatable.Text>

    </View>
  )
}

export default Splesh

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#05b681',
        alignItems:'center',
        justifyContent:'center'
    },
    logo:{
        height:200,width:200
    },
    AppName:{
        fontSize:40,
        color:'black',
        fontWeight:'600',
        marginTop:10,
    },
    tagline:{
        position:'absolute',
        bottom:30,
        fontWeight:'600',
        color:'black',
        fontSize:20
    }
})