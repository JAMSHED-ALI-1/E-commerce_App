import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../Theme/Colors'
import CommonCard from '../Card/CommonCard'
import CommonHeader from '../Component/CommonHeader'
import { useNavigation, useRoute } from '@react-navigation/native'

const Product = () => {
  const route=useRoute()
  console.log('apijdhgddjhsh----', route.params.data)
  const data = route.params.data;
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
        <View style={{paddingVertical:10,paddingHorizontal:5}}>

        <CommonHeader back={true} title={'Product'} left={true} right={true} OnPress={()=>navigation.goBack()}/>
        </View>
      <CommonCard renderid={2} data={data}/>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white,
        padding:10
        
    }
})