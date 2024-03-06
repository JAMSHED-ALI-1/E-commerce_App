import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../Theme/Colors'
import CommonHeader from '../Component/CommonHeader'
import { Searchbar } from 'react-native-paper'
import CommonCard from '../Card/CommonCard'
import Slider from '../Card/Slider'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'


const Home = () => {
  const navigation=useNavigation()
  const [searchQuery, setSearchQuery] = useState('');
  const [data,setData]=useState([])
  const [clothData,setClothData]=useState([])
const FetchApiData=async ()=>{
  try {
    const res=await axios.get('https://fakestoreapi.com/products')
    console.log(res.data)
    setClothData(res.data)
  } catch (error) {
    console.log(error)
  }
}



const ApiData=async()=>{
 try {
  const res=await axios.get('https://dummyjson.com/products')
  // console.log(res.data)
  setData(res.data.products);
 } catch (error) {
  console.log(error)
 }
}
useEffect(()=>{
ApiData();
FetchApiData()
},[])


  return (
    <View style={styles.container}>
      <CommonHeader left={true} right={true}   text={true} />
      
      <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
      style={{marginTop:10}}
    />
      <ScrollView showsVerticalScrollIndicator={false}>
     <View style={{marginTop:10}}>

     
     <Slider/>
      </View>
     <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:10}}>
        <Text style={styles.text}>Featured</Text>
        <Text style={[styles.text,{color:COLORS.blue}]} onPress={()=>navigation.navigate('Product',{data:data})}>See All</Text>
    </View>
    <CommonCard renderid={1}   data={clothData} />
    <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:10}}>
        <Text style={styles.text}>Most Popular</Text>
        <Text style={[styles.text,{color:COLORS.blue}]} onPress={()=>navigation.navigate('Product',{data:data})}>See All</Text>
    </View>
   
    <CommonCard renderid={1} data={data}/>
    <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:10}}>
        <Text style={styles.text}>Upcoming Product</Text>
        <Text style={[styles.text,{color:COLORS.blue}]} onPress={()=>navigation.navigate('Product',{data:data})}>See All</Text>
    </View>
   
    <CommonCard renderid={1}  data={data}/>
    </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:15,
    backgroundColor:COLORS.white
  },
  text:{
    fontSize:16,
    color:COLORS.black,
    fontWeight:'bold',
  },

})