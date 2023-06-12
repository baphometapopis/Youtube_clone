import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import {useSelector} from 'react-redux';
import {fetchChannelPlaylist} from '../../Customhooks/useFetchChannelData';
import {converter} from '../../function/dateConverter';
import {Color} from '../../Constant';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { PlayListItemList } from './PlaylistItemList';



export const VideoChannel = () => {
  const [playlist, setPlaylist] = useState([]);
  const navigate= useNavigation();

  const {channelId} = useSelector(state => state.channel);
  const fetchData = async () => {
    console.log('Fetching playlist...');
    const data = await fetchChannelPlaylist(channelId);
    setPlaylist(data.items);
  };

  useEffect(() => {
    // const fetchData = async () => {
    // try {

    // } catch (error) {
    // console.log(error);
    // }
    // };

    fetchData();
  }, [channelId]);

  // console.log(playlist);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={playlist}
        renderItem={({item}) => <PlayListItemList items={item} navigate={navigate} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
  },
  item: {
    paddingLeft: 8,
    marginVertical: 2,
    marginHorizontal: 1,
  },
  image: {
    // marginVertical: 10,
    width: 180,
    height: 80,
    borderRadius: 8,
  },
  videocount: {
    position: 'absolute',
    width: 180,
    backgroundColor: 'rgba(50,25,25,0.6)',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    top: 62,
    flexDirection:'row',
    justifyContent:'center'
  },
  desc: {
    color: Color.TEXTDESC,
    fontSize: 12,
  },
});
