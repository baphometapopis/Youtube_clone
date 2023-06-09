import React from 'react'
import { SafeAreaView,Text,StyleSheet } from 'react-native'

export const HomeChannel = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>This Is HomeChannel</Text>
    </SafeAreaView>
    )
}

const styles= StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:"center",
    flex:1,
    backgroundColor:'black'
  },
  text:{
    color:'white'
  }
})
