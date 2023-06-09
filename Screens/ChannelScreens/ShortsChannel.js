import React from 'react'
import { SafeAreaView,Text,StyleSheet } from 'react-native'

export const ShortsChannel = () => {
  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.text}>This Is ShortsChannel</Text>
</SafeAreaView>
)
}

const styles= StyleSheet.create({
container:{
justifyContent:'center',
alignItems:"center",
flex:1,
backgroundColor:'black'
}, text:{
    color:'white'
  }
})
