import React from 'react'
import {Text,View,StyleSheet} from 'react-native'

export const ChannelPlaylistList = (prop) => {
   prop.route.params.PlaylistID
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
           {prop.route.params.PlaylistID}
        </Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',flex:1
    }
,
    text:{
        color:'white'
    }
}
)


