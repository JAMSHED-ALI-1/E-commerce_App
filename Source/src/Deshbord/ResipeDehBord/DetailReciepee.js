import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';
const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity)
const DetailReciepee = () => {
  const [selectTabe, setselectTabe] = useState(0)
  const navigation = useNavigation()
  const route = useRoute()
  // console.log('route.params', route.params)
  return (
    <View style={styles.container}>
      <Animatable.Image source={{ uri: route.params.image }} style={styles.banner}
        animation={'slideInUp'} />
      <AnimatedBtn style={styles.backbtn} onPress={() => navigation.goBack()}
        animation={'slideInUp'}>
        <Image source={require('../../../Assets/Images/Right.png')} style={styles.backImage} />
      </AnimatedBtn>
      <Animatable.Text animation={'slideInUp'} style={styles.title}>{route.params.name}</Animatable.Text>
      <View style={styles.information}>

        <Animatable.Text animation={'slideInUp'} style={styles.calories}>{'Calories: '}<Text style={{ color: 'red' }}>{route.params.caloriesPerServing}</Text></Animatable.Text>
        <View>

          <Animatable.Text animation={'slideInUp'} style={[styles.calories, { fontSize: 16 }]}>{'PrepTimeMinutes: '}<Text style={{ color: 'red' }}>{route.params.prepTimeMinutes}</Text></Animatable.Text>
          <Animatable.Text animation={'slideInUp'} style={[styles.calories, { fontSize: 16 }]}>{'CookTimeMinutes: '}<Text style={{ color: 'red' }}>{route.params.cookTimeMinutes}</Text></Animatable.Text>
        </View>

      </View>
      <Animatable.Text animation={'slideInUp'} style={[styles.calories, { fontSize: 12, paddingLeft: 15 }]}>{'Rating: '}<Text style={{ color: 'red' }}>{route.params.rating + '/5'}</Text></Animatable.Text>
      <View >
        <FlatList
          horizontal
          contentContainerStyle={{ marginTop: 20 }}
          showsHorizontalScrollIndicator={false}
          data={['Ingredients', 'Instructions', 'PrepTimeMinutes', 'Cuisine', 'Tags']}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity style={[styles.selectList, { borderRadius: 8, borderWidth: selectTabe == index ? 0 : .5, backgroundColor: selectTabe === index ? '#05b681' : 'white' }]}
                onPress={() => {
                  setselectTabe(index)
                }}>
                <Text style={{ color: selectTabe === index ? 'white' : 'black', fontSize: selectTabe === index ? 18 : 14 }}>{item}</Text>
              </TouchableOpacity>
            )

          }} />

      </View>
      <FlatList
        data={selectTabe === 0 ? route.params.ingredients :
          selectTabe === 1 ? route.params.instructions :
            selectTabe === 2 ? [route.params.prepTimeMinutes.toString()] :
              selectTabe === 3 ? [route.params.cuisine.toString()] :
                selectTabe === 4 ? route.params.tags : []}
        renderItem={({ item, index }) => {
          return (
            <Animatable.View style={styles.labels} animation={'slideInUp'}>
              <Text style={{ fontSize: 16, color: 'black' }}>{item}</Text>
            </Animatable.View>
          )
        }} />
    </View>
  )
}

export default DetailReciepee

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  banner: {
    height: 300,
    width: '100%',
    resizeMode: 'stretch'
  },
  backbtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 50,
    left: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backImage: {
    height: 45,
    width: 45,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    width: '90%',
    marginTop: 10,
    alignSelf: 'center',
    color: 'black'
  },
  selectList: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10

  },
  labels: {
    width: '94%',
    alignSelf: 'center',
    height: 50,
    justifyContent: 'center',
    borderColor: '#9e9e9e',
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 10,

  },
  calories: {
    fontSize: 20,
    color: 'black', fontWeight: '500',
    marginTop: 10,

  },
  information: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    paddingHorizontal: 15
  }
})