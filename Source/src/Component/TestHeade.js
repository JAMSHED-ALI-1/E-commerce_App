import { StyleSheet, Text, View } from 'react-native'
import React ,{useState}from 'react'

const TestHeade = () => {
    
    const [searchQuery, setSearchQuery] = useState('');
    const [data,setData]=useState([])
    const [clothData,setClothData]=useState([])
    
  return (

    <View>
      <Text style={{fontSize:30,textAlign:'right',padding:10,backgroundColor:'red'}}>0</Text>
     
    </View>
  )
}

export default TestHeade

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})