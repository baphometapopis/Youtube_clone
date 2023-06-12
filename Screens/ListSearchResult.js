import React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import {Color} from '../Constant';
import aveta from 'aveta';
import {converter} from '../function/dateConverter';
const windowWidth = Dimensions.get('window').width;

export default function ListSearchResult({item, navigation}) {
  // console.log('BBBBBBBBBBBBBBBBBBBBBBBB', item);
  return (
    <>
      {item.id.kind === 'youtube#channel' ? (
        <TouchableOpacity style={styles.channelContainer}>
          <View
            style={{flex: 0.4, justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={{
                uri: `${item[0]?.url}`,
              }}
              style={styles.channel}
            />
          </View>
          <View style={{flex: 0.5}}>
            <Text style={{fontSize: 18, color: 'white'}}>
              {item.snippet.channelTitle}
            </Text>
            <Text
              style={{fontSize: 14, color: Color.TEXTDESC, marginVertical: 5}}>
              {item[0]?.customUrl}
            </Text>
            <Text style={{fontSize: 14, color: Color.TEXTDESC}}>
              {aveta(item[0]?.subscriberCount, {digits: 2, lowercase: false})}{' '}
              subscribers
            </Text>
            <TouchableOpacity style={styles.subscribeButton}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Subscribe
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Details', {item});
          }}>
          <View style={styles.item}>
            <Image
              source={{
                uri: `${item?.snippet?.thumbnails?.high?.url}`,
              }}
              style={styles.image}
            />
            <View style={styles.descContainer}>
              <TouchableOpacity  onPress={()=>{navigation.navigate('ChannelDetail', {item});}} style={styles.channellogo}>
                <Image
                  source={{
                    uri: `${item[0]?.url}`,
                  }}
                  style={styles.logo}
                />
              </TouchableOpacity>
              <View style={styles.desc}>
                <Text numberOfLines={2} style={styles.title}>
                  {item?.snippet?.title}
                </Text>
                <View style={styles.titleAlign}>
                  <Text style={styles.titleDesc}>
                    {item?.snippet?.channelTitle}
                  </Text>
                  <Text style={styles.titleDesc}>
                    {aveta(item?.items[0]?.statistics?.viewCount, {
                      digits: 2,
                      lowercase: true,
                    })}
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
      )}
    </>
  );
}

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
  channel: {
    height: 90,
    width: 90,
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
  channelContainer: {
    flexDirection: 'row',
    width: windowWidth,
    height: 120,
    padding: 10,
  },
  subscribeButton: {
    backgroundColor: 'white',
    width: 80,
    alignItems: 'center',
    marginVertical: 5,
    padding: 5,
    borderRadius: 15,
  },
});

//   return (
//     <TouchableOpacity>
//       <View style={styles.item}>
//         <Image source={{ uri: item.snippet?.thumbnails?.high?.url }} style={styles.image} />
//         <View style={styles.descContainer}>
//           <View style={styles.desc}>
//             <Text numberOfLines={2} style={styles.title}>
//               {item.snippet?.title}
//             </Text>
//             <Text style={styles.channelTitle}>{item.snippet?.channelTitle}</Text>
//             <Text style={styles.publishTime}>{item.snippet?.publishTime}</Text>
//           </View>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   item: {
//     padding: 2,
//     marginVertical: 5,
//     height: 260,
//   },
//   title: {
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   image: {
//     width: '100%',
//     height: 180,
//   },
//   descContainer: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   desc: {
//     padding: 10,
//   },
//   channelTitle: {
//     fontSize: 12,
//     color: 'gray',
//   },
//   publishTime: {
//     fontSize: 12,
//     color: 'gray',
//   },
// });
