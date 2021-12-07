import React from 'react';
import {View, StyleSheet} from 'react-native';
import CustomButton from '../CustomButton/Index';
const SocialSignInButton = () => {

    
    const onSignInFacebook=()=>{
        console.warn(`facebook`)
    }

    const onSignInGoogle=()=>{
        console.warn(`Google`)
    }

    const onSignInEmail=()=>{
        console.warn(`Email`)
    }
    return (
        <>
            <CustomButton text="Sign In with Facebook" onPress={onSignInFacebook} bgColor="#E7EAF4" fgColor="#4765A9" />
                <CustomButton text="Sign In with Google" onPress={onSignInGoogle} bgColor="#d5e8d7" fgColor="#159e20"/>
                <CustomButton text="Sign In with Email" onPress={onSignInEmail} bgColor="#FAE9EA" fgColor="#DD4D44"/>
        </>
    );
}

const styles = StyleSheet.create({})

export default SocialSignInButton;
