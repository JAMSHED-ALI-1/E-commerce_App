import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { COLORS } from '../Theme/Colors';
import CommonHeader from '../Component/CommonHeader';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').height;

const data = [
  {
    id: 1,
    image: require('../../Assets/Images/Item.png'),
    text: 'Watch',
    price: '$20',
    title: 'iphone',
  },
  {
    id: 2,
    image: require('../../Assets/Images/Item.png'),
    text: 'Watch',
    price: '$20',
    title: 'iphone',
  },
  {
    id: 3,
    image: require('../../Assets/Images/Item.png'),
    text: 'Watch',
    title: 'iphone',
    price: '$20',
  }
];

const Shopping = () => {
    const [data,setData]=useState([])
    
    const ApiData=async()=>{
        try {
         const res=await axios.get('https://dummyjson.com/products')
        //  console.log(res.data)
         setData(res.data.products);
        } catch (error) {
         console.log(error)
        }
       }
       useEffect(()=>{
       ApiData();
       },[])
       
    const navigation=useNavigation()
  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.thumbnail }}  style={styles.image} />
          <View style={styles.textContainer}>
          <Text style={styles.headingText}>
            {item.title.length > 17 ? (
              <>
                <Text>{item.title.substring(0, 17)}</Text>
                {"\n"}
                <Text>{item.title.substring(17)}</Text>
              </>
            ) : (
              item.title
            )}
          </Text>
            <Text style={styles.text}>{`$${item.price}`}</Text>
            <Text style={styles.headingText}>
            {
                item.brand.length> 8 ?(
                    <>
                    <Text>{item.brand.substring(0,8)}</Text>
                    {"\n"}
                    <Text>{item.brand.substring(0,8)}</Text>
                    </>
                ):(
                    item.title
                )}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Track Order</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <CommonHeader left={true} right={true} title={'Product List'} back={true} OnPress={()=>navigation.goBack()}/>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Shopping;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 15,
  },
  itemContainer: {
    backgroundColor: COLORS.white,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15,
    borderWidth:1,
    borderColor:COLORS.black
  },
  imageContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  image: {
    height: Height * 0.15,
    width: Width * 0.15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  textContainer: {
    gap: 10,
    marginTop:15
  },
  headingText: {
    fontSize: 14,
    color: COLORS.black,
    fontWeight: 'bold',
    left: 15,
  },
  text: {
    fontSize: 16,
    color: COLORS.blue,
    fontWeight: 'bold',
    left: 15,
  },
  button: {
    alignSelf: 'flex-end',
    right: 20,
    bottom: 25,
  },
  buttonText: {
    padding: 13,
    backgroundColor: COLORS.blue,
    borderRadius: 10,
    color: COLORS.white,
  },
});
