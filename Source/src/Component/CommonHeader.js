import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS } from '../Theme/Colors';


const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const CommonHeader = ({ title, left, right, back, OnPress, text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {left && (
          <TouchableOpacity style={styles.iconContainer} onPress={OnPress}>
            <Image source={back ? require('../../Assets/Images/Backarrow.png') : require('../../Assets/Images/UserImage.png')} style={back ? styles.icon : styles.User} />
          </TouchableOpacity>


        )}
        {text && (
          <Text style={{fontSize:20,fontWeight:'bold'}}>
            Hello {'\n'}
            Jamshed Ali
          </Text>
        )}

      </View>

      <View style={styles.centerContainer}>
        {title &&
          <Text style={styles.text}>{title}</Text>
        }
      </View>

      <View style={styles.rightContainer}>
        {right &&
          <TouchableOpacity style={styles.iconContainer}>
            <Image source={require('../../Assets/Images/BellIcon.png')} style={styles.icon} />
          </TouchableOpacity>
        }
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: 20, 
    marginBottom: 10
  },
  text: {
    // fontFamily: Platform.OS === 'ios' ? Font.regular : Font.medium,
    fontSize: 16,
    color: COLORS.black,
    fontWeight: 'bold'
  },
  iconContainer: {
    width: Width * 0.06,
    height: Height * 0.038,
    justifyContent: 'center',
  },
  icon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  User: {
    width: Width * 0.16,  // Adjust the width to increase the size
    height: Width * 0.3, // Adjust the height to increase the size
    resizeMode: 'contain',
  },
  
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    alignItems: "center",
    gap: 50
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
});


export default CommonHeader

