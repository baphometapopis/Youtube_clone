import React from 'react';
import {StyleSheet, Text, View,SafeAreaView} from 'react-native';
import { Header } from '../Components/Header';

export const Subscription = () => {
  return (
    <SafeAreaView style={style.Container}>
          <Header/>

      <Text style={style.text}>this is Subscription page</Text> 
    </SafeAreaView>
  );
};

const style=StyleSheet.create({
  Container:{
    flex:1,
    backgroundColor:'black'
  },
  text:{
    color:'white'
  }

})