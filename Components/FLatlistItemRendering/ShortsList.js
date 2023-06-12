import React from 'react'
import { SafeAreaView,Text,View,StyleSheet,Image,TouchableOpacity } from 'react-native'

export const ShortsList = ({items,navigate}) => {
    console.log(items.id.videoId)
    const videoId= items.id.videoId
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={()=>{navigate.navigate('shorts',{videoId})}}>
        <Image
            source={{
              uri: `${items?.snippet?.thumbnails?.high?.url}`,
            }}
            style={styles.image}
          />
          </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
    container:{
        
    },
    image:{
      height:150,
      width:120,
      margin:1
    }
})
