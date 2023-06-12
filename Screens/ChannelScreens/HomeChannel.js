import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {fetchChannelPlaylist} from '../../Customhooks/useFetchChannelData';
import {PlayListItemList} from './PlaylistItemList';
import {useNavigation} from '@react-navigation/native';
import { HomeChannelList } from '../../Components/FLatlistItemRendering/HomeChannelList';

export const HomeChannel = () => {
  const [playlist, setPlaylist] = useState([]);
  const navigate = useNavigation();
  const {channelId} = useSelector(state => state.channel);
  const fetchData = async () => {
    console.log('Fetching playlist...');
    const data = await fetchChannelPlaylist(channelId);
    setPlaylist(data.items);
  };
  useEffect(() => {
    fetchData();
  }, [channelId]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={playlist}
        renderItem={({item}) => (
          <HomeChannelList items={item} navigate={navigate} />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
  },
});
