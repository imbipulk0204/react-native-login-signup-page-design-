import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
const HomeScreen = ({route,navigator}) => {
    const {id,name}=route.params;
    return (
        <View style={styles.container}>
        
            <Text>Welcome to Home page <Text style={styles.name}>{name} </Text> </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        flex:1
    },
    name:{
        color:"green",
        fontSize:25
    }
})

export default HomeScreen;
