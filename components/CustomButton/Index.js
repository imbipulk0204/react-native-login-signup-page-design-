import React from 'react';
import {View, StyleSheet, Button, Text,Pressable} from 'react-native';

const CustomButton = ({onPress,text,type="PRIMARY",bgColor,fgColor}) => {
    return (
        <Pressable onPress={onPress}
         style={[styles.container,
         styles[`container_${type}`],
         bgColor ?{backgroundColor:bgColor}:{}
        ]}>
            <Text 
            style={[styles.text,
            styles[`text_${type}`],
            fgColor ? {color:fgColor} :{}
            ]}>
                {text}
            </Text>
        </Pressable>
    );
}
// #d5e8d7
// 159e20
const styles = StyleSheet.create({
    container:{
        width:"100%",
        padding:15,
        marginVertical:5,
        alignItems:"center",
        borderRadius:5
    },
    text:{
        fontWeight:"bold",
        color:"white",
    },
    container_PRIMARY:{
        backgroundColor:"#3B71F3",
    },
    container_TERITARY:{
        // backgroundColor:"gray",
    },
    container_SECONDARY:{
        borderColor:"#3871F3",
        borderWidth:2
    },
    text_TERITARY:{
        color:"gray",
    },
    text_SECONDARY:{
        color:"#3871F3",
    },
})

export default CustomButton;
