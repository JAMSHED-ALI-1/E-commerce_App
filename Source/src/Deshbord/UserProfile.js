import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../Theme/Colors'
import CommonHeader from '../Component/CommonHeader'
const data=[
  {
    id:1,
    Image:require('../../Assets/Images/Frame.png'),
    text:'Profile',
    left:require('../../Assets/Images/Left.png')
  },
  {
    id:2,
    Image:require('../../Assets/Images/BellIcon.png'),
    text:'Notification',
    left:require('../../Assets/Images/Left.png')
  },
  {
    id:3,
    Image:require('../../Assets/Images/Language.png'),
    text:'Language',
    left:require('../../Assets/Images/Left.png')
  },
  {
    id:4,
    Image:require('../../Assets/Images/Privacy.png'),
    text:'Privacy Policy',
    left:require('../../Assets/Images/Left.png')
  },
  {
    id:5,
    Image:require('../../Assets/Images/Help.png'),
    text:'Help Center',
    left:require('../../Assets/Images/Left.png')
  },
  {
    id:6,
    Image:require('../../Assets/Images/about.png'),
    text:'About',
    left:require('../../Assets/Images/Left.png')
  },

]

const UserProfile = () => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.listItemContainer}>
        <View style={styles.listItemContent}>
          <Image source={item.Image} style={{ height: 30, width: 30 }} resizeMode='contain' />
          <Text style={styles.listItemText}>{item.text}</Text>
        </View>
        <Image source={item.left} style={{ height: 30, width: 30 }} resizeMode='contain' />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View>
        <CommonHeader back={true} left={true} title={'User'}/>
      </View>
      <View style={{alignItems:'center'}}>
      <Image source={require('../../Assets/Images/UserImage.png')} 
      style={{height:100,width:100}} />
      <Text style={styles.textHeading}>Jamshed Ali</Text>
      <Text style={[styles.textHeading,{fontSize:16,fontWeight:'500'}]}>alij@123gmail.xom</Text>
      </View>
      <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item)=>item.id.toString()}/>
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 15
  },
  textHeading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: COLORS.black
  },
  listItemContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderRadius: 12,
    alignItems:'center',
    padding:10,
    marginTop:10,
    borderWidth:0.8
  },
  listItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:10
  },
  listItemText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  userImage: {
    height: 100,
    width: 100,
    alignItems: 'center'
  },
  commonHeaderContainer: {
    alignItems: 'center'
  }
})