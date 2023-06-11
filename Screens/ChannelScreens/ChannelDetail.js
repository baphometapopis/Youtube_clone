import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import {fetchChannel} from '../../Customhooks/useFetch';
import aveta from 'aveta';
import {Color} from '../../Constant';
import {TouchableOpacity} from 'react-native';
import { TopTabNavigation } from '../../Navigations/TopTabNavigation';
import { useDispatch } from 'react-redux';
import {setChannelId} from '../../Redux/ChannelSlice';

const windowWidth = Dimensions.get('window').width;

export const ChannelDetail = props => {
  const [channelResults, setChannelResults] = useState([]);
  const dispatch = useDispatch();
  const data = props.route.params;

  const GetChannelDetails = async () => {
    try {
      const {channelData} = await fetchChannel(data.item.snippet.channelId);
      setChannelResults(channelData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetChannelDetails();
    dispatch(setChannelId(data.item.snippet.channelId))
  }, [data.item.snippet.channelId]);
  console.log('qqqqqqqqqqqqqqqq', channelResults[0]?.id);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={{
            uri: `${channelResults[0]?.brandingSettings?.image?.bannerExternalUrl}`,
          }}
          style={styles.banner}
        />
      </View>
      <View style={styles.channelDesc}>
        <Image
          source={{
            uri: `${channelResults[0]?.snippet?.thumbnails?.high?.url}`,
          }}
          style={styles.logo}
        />
        <Text style={{color: 'white', fontSize: 23}}>
          {channelResults[0]?.snippet?.title}
        </Text>
        <Text style={{color: Color.TEXTDESC, fontSize: 12, marginVertical: 5}}>
          {channelResults[0]?.snippet?.customUrl}&nbsp;
          {aveta(channelResults[0]?.statistics?.subscriberCount || 2, {
            digits: 2,
            lowercase: false,
          })}
          subscribers&nbsp;
          {aveta(channelResults[0]?.statistics?.viewCount || 2, {
            digits: 2,
            lowercase: false,
          })}{' '}
          Videos
        </Text>
        <Text
          style={{color: Color.TEXTDESC, fontSize: 14, marginHorizontal: 4}}
          numberOfLines={1}>
          {channelResults[0]?.snippet?.description}
        </Text>
        <TouchableOpacity style={styles.subscribeButton}>
          <Text style={{color: 'black', fontWeight: 'bold' ,fontSize:18}}>Subscribe</Text>
        </TouchableOpacity>
      </View>
      {/* <Text style={{color: 'white'}}>this is Channel Details PAge</Text> */}
      <TopTabNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  banner: {
    width: windowWidth,
    height: 100,
  },
  channelDesc: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  logo: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  subscribeButton: {
    backgroundColor: 'white',
    width:windowWidth-15 ,
    alignItems: 'center', 
    marginVertical: 10,
    padding: 5,
    borderRadius: 15,
  },
});
