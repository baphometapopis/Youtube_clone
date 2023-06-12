import React, { useEffect, useState } from 'react'
import { SafeAreaView,Text,StyleSheet,FlatList } from 'react-native'
import { useSelector } from 'react-redux';
import { FetchChannelsShort } from '../../Customhooks/useFetchChannelData';
import { ShortsList } from '../../Components/FLatlistItemRendering/ShortsList';
import { useNavigation } from '@react-navigation/native';

export const ShortsChannel = () => {
  const navigate= useNavigation();
  const [searchResults, setSearchResults] = useState([]);
  const {channelId,channelName} = useSelector(state => state.channel);
  const channelinfo=[];

  const performSearch = async () => {
    try {
      channelinfo.push({channelId,channelName})

      
      const results = await FetchChannelsShort(channelinfo); 
      setSearchResults(results.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
 
    performSearch();
  }, [channelId,channelName]);

console.log(searchResults)
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      numColumns={3}
        data={searchResults}
        renderItem={({item}) => <ShortsList items={item} navigate={navigate} />}
        keyExtractor={item => item?.id?.videoId}
      />

</SafeAreaView>
)
}

const styles= StyleSheet.create({
container:{

flex:1,
backgroundColor:'black'
}, text:{
    color:'white'
  }
})
