import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Share from 'react-native-vector-icons/MaterialCommunityIcons';
import Add from 'react-native-vector-icons/MaterialIcons';
import Download from 'react-native-vector-icons/Octicons';
import Shuffle from 'react-native-vector-icons/Ionicons';

import {fetchChannelPlaylistItems} from '../../Customhooks/useFetchChannelData';
import {Color} from '../../Constant';
import { PlayListItemList } from './PlaylistItemList';
import { PlayListVideo } from './PlayListVideo';
const windowWidth = Dimensions.get('window').width;

const Item = ({item}) => (
  <View style={styles.item}>
    <Text style={styles.text}>{item?.snippet?.title}</Text>
  </View>
);

export const ChannelPlaylistList = prop => {
  const [playlistItem, setPlaylistItem] = useState();
  // console.log(data);

  const GetPlaylistItems = async () => {
    try {
      const data = await fetchChannelPlaylistItems(
        prop.route.params.PlaylistID,
      );
      setPlaylistItem(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetPlaylistItems();
  }, [prop.route.params.PlaylistID]);
  console.log(playlistItem);
  return (
    <SafeAreaView style={styles.container}>
      {playlistItem ? (
        <>
          <View
            style={{
              backgroundColor: 'black',
              width: windowWidth,
              alignItems: 'center',
            }}>
            <Image
              resizeMode="stretch"
              resizeMethod="auto"
              source={{
                uri: `${
                  playlistItem[`${playlistItem.length - 1 || 1}`]?.snippet
                    ?.thumbnails?.maxres?.url
                }`,
              }}
              style={styles.image}
            />
            <View style={{alignSelf: 'baseline', marginHorizontal: 20}}>
              <Text numberOfLines={1} style={{fontSize: 20, color: 'white'}}>
                {
                  playlistItem[`${playlistItem.length - 1 || 1}`]?.snippet
                    ?.title
                }
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 20,
                }}>
                <View>
                  <Text style={{color: 'white'}}>
                    {
                      playlistItem[`${playlistItem.length - 1 || 1}`]?.snippet
                        ?.channelTitle
                    }
                  </Text>
                  <Text style={{color: Color.TEXTDESC}}>
                    {`${playlistItem.length || 2}`} videos
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 22,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#565659',
                      borderRadius: 50,
                      padding: 5,
                    }}>
                    <Add name="add-to-photos" size={22} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#565659',
                      borderRadius: 50,
                      padding: 5,
                    }}>
                    <Download name="download" size={20} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#565659',
                      borderRadius: 50,
                      padding: 5,
                    }}>
                    <Share name="share-outline" size={22} color="white" />
                  </TouchableOpacity>
                </View>

              </View>
              <Text numberOfLines={1} style={{color:'white',marginBottom:20}}>{playlistItem[`${playlistItem.length - 1 || 1}`]?.snippet
                    ?.description}</Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  gap: 10,
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 50,
                    padding: 5,
                    flex: 0.5,
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <Share name="play" size={26} color="black" />

                  <Text style={{color: 'black', fontWeight: 'bold', margin: 5}}>
                    Play All
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#565659',
                    borderRadius: 50,
                    padding: 5,
                    flex: 0.5,
                    justifyContent: 'center',
                    flexDirection:'row'
                  }}>
                  <Shuffle name="shuffle" size={26} color="white" />

                  <Text style={{color: 'white', margin: 5}}>Shuffle</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <FlatList
            data={playlistItem}
            renderItem={({item}) => <PlayListVideo item={item} />}
            keyExtractor={item => item.id}
          />
        </>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
  },
  text: {
    color: 'white',
  },
  image: {
    marginVertical: 10,
    height: 150,
    width: windowWidth - 20,
    borderRadius: 10,
  },
});
