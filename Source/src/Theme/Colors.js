import { StyleSheet } from "react-native"
import { create } from "react-test-renderer"

export  const COLORS ={
    white: "#fff",
    black: "#000000",
    blue:'#4287f5',
    red:'#FF0000',
    green:'#30ee00',
    lightPurpole:'#C4BAFE',
    secondry:'#F5F6FF'
} 
export const commonStyle=StyleSheet.create({
    text:{
        fontSize:14,
        color:COLORS.black,
    },
    heading:{
        fontSize:20,
        color:COLORS.black,
        fontWeight:'bold'
    },
    heading1:{
        fontSize:20,
        color:COLORS.black,
        fontWeight:'bold'
    }
})