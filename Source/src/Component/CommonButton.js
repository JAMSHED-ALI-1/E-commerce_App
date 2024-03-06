import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS } from '../Theme/Colors';


const CommonButton = ({ title, onPress, bgColor, textColor ,borderColor}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, { backgroundColor: bgColor ,borderColor:borderColor}]}
      onPress={onPress}
    >
      <Text style={[styles.textStyle, { color: textColor || COLORS.white }]}>{title}</Text>
    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
  buttonStyle: {
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    borderWidth:1
  },
  textStyle: {
    fontSize: 15,
    fontWeight: 'bold',
  
  },
});


export default CommonButton

