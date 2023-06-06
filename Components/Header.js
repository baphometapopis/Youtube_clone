import React from 'react'
import { View,Text,Image,TouchableOpacity } from 'react-native'
import Logo from '../assets/logo/android/drawable-hdpi/Youtube.png'
import profile from '../assets/profile.png'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

import Search from 'react-native-vector-icons/AntDesign'
export const Header = () => {
  return (
    <View style={{flexDirection: 'row'}}>
    <View style={{justifyContent: 'center',marginLeft:10,flex:0.3,padding:5}}>
    <Image
        source={Logo}
        style={{ height: 30,width:75}}
      />
      </View>
    <View style={{flex: 1,flexDirection:'row',alignItems:'center',justifyContent:'flex-end',}}>
        <Icons name='cast-connected'
        color='white'
        size={23}
        style={{paddingHorizontal:10}}
        />   
          <Icons name='bell-badge-outline'
        color='white'
        size={23}
        style={{paddingHorizontal:10}}
        />  
         <Search name='search1'
        color='white'
        size={23}
        style={{paddingHorizontal:10}}
        /> 
        <TouchableOpacity style={{paddingHorizontal:5}} >
        <Image
        source={profile}
        style={{ height: 30,width:30,borderRadius:50}}
      />
            
        </TouchableOpacity>
    </View>

  </View>
  )
}

