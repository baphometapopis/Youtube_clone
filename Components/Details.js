import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {create} from 'react-test-renderer';
import {Color} from '../Constant';
import Video from 'react-native-video';
import aveta from 'aveta';
import {converter} from '../function/dateConverter';
const windowWidth = Dimensions.get('window').width;

export const Details = prop => {
  // const {channelTitle} =

  const {title, tags, localized, publishedAt, channelTitle} =
    prop.route.params.item.snippet;

  const {statistics} = prop.route.params.item;

  return (
    <View style={styles.container}>
      <View style={styles.screenContainer}>
        <Video
          source={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
          }}
          controls={true}
          video
          style={styles.backgroundVideo}
        />
      </View>
      <View style={styles.descContainer}>
        <Text style={styles.ctitle}>{title}</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{width:300}}>
            <Text numberOfLines={1} style={styles.cdesc}>
              {aveta(statistics.viewCount, {digits: 2, lowercase: true})} Views
              &nbsp;
              {converter(publishedAt)}
              &nbsp; 
              {`#${tags}`}
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.more}>..More</Text>
          </TouchableOpacity>
        </View>
        <Text style={{color: 'green'}}></Text>
      </View>
      <View style={styles.commentContainer}>
        <Text>this is comment page</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text>this is Bottom page</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  text: {
    color: Color.TEXT,
  },
  screenContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.3,
    backgroundColor: 'red',
  },
  descContainer: {
    flex: 0.25,
    padding: 10,
    // backgroundColor: 'green',
  },
  commentContainer: {
    flex: 0.15,
    // backgroundColor: 'blue',
  },
  contentContainer: {
    flex: 0.3,
    // backgroundColor: 'yellow',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  ctitle: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
  },
  cdesc: {
    color: Color.TEXTDESC,
    marginTop: 10,
    fontSize: 12,
  },
  more: {
    marginTop: 10,
    color: 'white',
    fontSize: 12,
    marginRight:20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
});
