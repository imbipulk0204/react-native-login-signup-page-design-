import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import SignInScreen from './screens/SignInScreen/Index';
import SignUpScreen from './screens/SignUpScreen/Index';
import HomeScreen from './screens/HomeScreen/Index'

const Stack=createNativeStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="register" component={SignUpScreen} />
                <Stack.Screen name="login" component={SignInScreen} />
                <Stack.Screen name="home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({})

export default Navigation;
