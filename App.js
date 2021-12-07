import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigation';

export default function App() {
  return (
    <View style={styles.container}>
       <Navigation />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFC',
    // backgroundColor: 'lightgray',
    justifyContent:"center",
    
  },
});
