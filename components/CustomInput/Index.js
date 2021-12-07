import React, { useState } from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

const CustomInput = ({value,setValue,placeholder,secureTextEntry,error,onKeyUp,textType}) => {
    
    return (
        <>
         {
                error? (<Text style={{color:"red"}}>{error}</Text>):(<></>)
            }
        <View style={styles.container}>
           
            <TextInput 
             textContentType={textType}
             placeholder={placeholder}
             style={styles.TextInput} 
             value={value}
             onChangeText={setValue}
             secureTextEntry={secureTextEntry}
             onKeyPress={onKeyUp}
             
             />
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        // marginTop:"20%",
        backgroundColor:'white',
        width:"100%",
        borderColor:"#e8e8e8",
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:10,
        marginVertical:10,
        // padding:2
    },
    TextInput:{
        padding:7,
    }

})

export default CustomInput;
