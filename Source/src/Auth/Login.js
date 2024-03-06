import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, commonStyle } from '../Theme/Colors'
import CommonButton from '../Component/CommonButton';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;
const Login = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topContainer} >
        <Image source={require('../../Assets/Images/SignUp.png')} style={styles.img} />
      </View>

      <View style={styles.bottomContainer} >
        <Text style={[commonStyle.heading, { fontSize: 30, marginTop: 20 }]}>Login</Text>

        <View style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.00,

          elevation: 24,
          marginTop: 40
        }}>

          <TextInput
            mode='outlined'
            activeOutlineColor='transparent'
            outlineColor='transparent'
            style={{ borderBottomColor: COLORS.black, borderBottomWidth: 3, }}
            outlineStyle={{ borderTopLeftRadius: 30, borderTopRightRadius: 30, borderBottomWidth: 1, borderBottomColor: 'red' }}
            placeholder='Enter Email'
          />
          <TextInput
            mode='outlined'
            activeOutlineColor='transparent'
            outlineColor='transparent'
            placeholder='Enter Pasword'
            outlineStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
          <Text style={[commonStyle.text, { color: COLORS.blue, fontSize: 16, fontWeight: 'bold' }]}>
            Forget Password
          </Text>
          <CommonButton
            title={'LOGIN'}
            bgColor={COLORS.black} // <-- Use bgColor instead of Bgcolor
            textColor={COLORS.white} // <-- Use textColor instead of color
            borderColor={'blue'}
            onPress={()=>navigation.navigate('BottmTab')}
            />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 50 }}>
          <TouchableOpacity>

            <Image source={require('../../Assets/Images/Email.png')}
              style={{ height: 40, width: 40 }} />
          </TouchableOpacity>
          <TouchableOpacity>

            <Image source={require('../../Assets/Images/twiter.png')}
              style={{ height: 40, width: 40 }} />
          </TouchableOpacity>
          <TouchableOpacity>

            <Image source={require('../../Assets/Images/facebook.png')}
              style={{ height: 40, width: 40 }} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    backgroundColor: COLORS.lightPurpole,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '65%',
    backgroundColor: COLORS.secondry,
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    // alignItems:'center',
    paddingHorizontal: 50,
    flex: 1
  },
  img: {
    height: Height * 0.3,
    width: Width * 0.6,
    alignSelf: 'center'
  },

})

export default Login

