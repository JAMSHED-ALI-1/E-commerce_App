import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';
const OnBoardSwiper = () => {
  const navigation=useNavigation()
  return (
    <Onboarding
    onSkip={()=>navigation.navigate('Login')}
    onDone={()=>navigation.navigate('Login')}
  pages={[
    {
      backgroundColor: '#ffafcc',
      image: <Image source={require('../../Assets/Images/onboarding-img1.png')} />,
      title: 'Shopping',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
        backgroundColor: '#cbeef3',
        image: <Image source={require('../../Assets/Images/onboarding-img2.png')} />,
        title: 'Onboarding2',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#f4e4ba',
        image: <Image source={require('../../Assets/Images/onboarding-img3.png')} />,
        title: 'Onboarding3',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
  ]}
/>
  )
}

export default OnBoardSwiper

const styles = StyleSheet.create({})