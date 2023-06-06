import React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
} from 'react-native';
import {Color} from '../Constant';
import aveta from 'aveta';
import {converter} from '../function/dateConverter';
import useFetchChannel from '../Customhooks/useFetchChannel';
const windowWidth = Dimensions.get('window').width;

export default ListVideos = ({item, navigation}) => {
  const {channelImg} = useFetchChannel(item.snippet.channelId);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Details', {item});
      }}>
      <View style={styles.item}>
        {console.log(channelImg.url)}
        <Image
          source={{
            uri: `${item?.snippet.thumbnails?.high?.url}`,
          }}
          style={styles.image}
        />
        <View style={styles.descContainer}>
          <TouchableOpacity style={styles.channellogo}>
            <Image
              source={{
                uri: `${channelImg?.url||'https://yt3.ggpht.com/_P1JQ8TJ3YKBgX_1iL6QTBwY0AER5CfJo4lza9ETeKCFdierATpEvAPYv4mKVpAxSy-Xc8GvhkY=s800-c-k-c0x00ffffff-no-rj'}`,
              }}
              style={styles.logo}
            />
          </TouchableOpacity>
          <View style={styles.desc}>
            <Text numberOfLines={2} style={styles.title}>
              {item.snippet.title}
            </Text>
            <View style={styles.titleAlign}>
              <Text style={styles.titleDesc}>
                {item?.snippet?.channelTitle}
              </Text>
              <Text style={styles.titleDesc}>
                {aveta(item.statistics.viewCount, {digits: 2, lowercase: true})}
                Views
              </Text>
              <Text style={styles.titleDesc}>
                {converter(item?.snippet?.publishedAt)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Color.TEXT,
  },
  item: {
    padding: 2,
    marginVertical: 5,
    height: 260,
  },
  title: {
    color: Color.TEXT,
    fontSize: 14,
  },
  image: {
    marginTop: 10,
    width: windowWidth,
    height: 180,
  },
  desc: {
    flex: 0.85,
    padding: 10,
  },
  channellogo: {
    alignItems: 'center',
    flex: 0.15,
    justifyContent: 'center',
  },
  descContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logo: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  titleDesc: {
    color: Color.TEXTDESC,
    fontSize: 12,
    padding: 5,
  },
  titleAlign: {
    flexDirection: 'row',
  },
});
