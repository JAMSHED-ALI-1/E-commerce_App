import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../Theme/Colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').height

const data = [
  {
    id: 1,
    image: require('../../Assets/Images/Item.png'),
    text: 'Watch',
    price: '$20',
  },
  {
    id: 2,
    image: require('../../Assets/Images/Item.png'),
    text: 'Watch',
    price: '$20',
  },
  {
    id: 3,
    image: require('../../Assets/Images/Item.png'),
    text: 'Watch',
    price: '$20',
  }
]
const CommonCard = ({ renderid, onPress, data }) => {
const navigation=useNavigation()

  const renderItem = ({ item }) => {

    if (renderid === 1) {
      return (
        <TouchableOpacity style={styles.cardContainer}
        onPress={() => navigation.navigate('DetailItem', { item })}>
          <Image
            source={{ uri: item.thumbnail ? item.thumbnail : item.image }}
            style={{
              height: Height * 0.1,
              width: Width * 0.15,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              resizeMode:'contain'
            }}
          />

          <Text style={styles.headingtext}>{item.title.length > 10 ? item.title.substring(0, 10) + ".." : item.title}</Text>

          <Text style={styles.text}>{`$${item.price}`}</Text>
          {/* <TouchableOpacity style={{ position: 'absolute' }}>
          <Image source={require('../../Assets/Images/heart.png') }style={{ height: 25, width: 25 }}  tintColor={heartColor}  />
        </TouchableOpacity> */}
        </TouchableOpacity>
      )
    }
    else if (renderid === 2) {
      return (
        <TouchableOpacity style={[styles.cardContainer, { marginHorizontal: 6 }]} >
          <Image source={{ uri: item.thumbnail }} style={{ height: Height * 0.22, width: Width * 0.22, borderTopRightRadius: 22, borderTopLeftRadius: 22 }} />
          <Text style={styles.headingtext}>
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

          <Text style={styles.text}>{item.price}</Text>
          {/* <TouchableOpacity style={{ position: 'absolute' }}>
          <Image source={require('../../Assets/Images/heart.png') }style={{ height: 25, width: 25 }}  tintColor={heartColor}  />
        </TouchableOpacity> */}
        </TouchableOpacity>
      )
    }
    else {
      null
    }
  }
  return (
    <View>
      {renderid === 2 ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.listContentContainer, {}]}
        />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          horizontal
          contentContainerStyle={[styles.listContentContainer,]}
        />
      )}
    </View>
  )
}

export default CommonCard

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    borderWidth: 1



  },
  headingtext: {
    fontSize: 16,
    color: COLORS.black,
    fontWeight: 'bold',
    left: 15
  },
  text: {
    fontSize: 16,
    color: COLORS.blue,
    fontWeight: 'bold',
    left: 15
  },
  listContentContainer: {
    gap: 10, // Add padding to the left of the FlatList
  },
})