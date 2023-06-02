import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Color} from '../Constant';
import useFetch from '../Customhooks/useFetch';
import aveta from 'aveta';
import {useNavigation} from '@react-navigation/native';
import {converter} from '../function/dateConverter';
// import {Image} from 'react-native';
const windowWidth = Dimensions.get('window').width;

const Item = ({item, navigation}) => (
  <TouchableOpacity
    onPress={() => {
      navigation.navigate('Details', {item});
    }}>
    <View style={styles.item}>
      <Image
        source={{
          uri: `${item.snippet.thumbnails.high.url}`,
        }}
        style={styles.image}
      />

      <View style={styles.descContainer}>
        <TouchableOpacity style={styles.channellogo}>
          <Image
            source={{
              uri: `${item.snippet.thumbnails.default.url}`,
            }}
            style={styles.logo}
          />
        </TouchableOpacity>
        <View style={styles.desc}>
          <Text numberOfLines={2} style={styles.title}>
            {item.snippet.title}
          </Text>
          <View style={styles.titleAlign}>
            <Text style={styles.titleDesc}>{item?.snippet?.channelTitle}</Text>
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

export const Home = () => {
  const navigate = useNavigation();
  const {data} = useFetch();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <Item item={item} navigation={navigate} />}
        keyExtractor={item => item.id}
      />

      {/* <View>
        <Text style={styles.text}>bjdbs</Text>
        <Button
          title="click me"
          onPress={
            () => {
              navigate.navigate('Details');
            }
            // FetchComments('4ykAepVkG5Y')}
          }
        />
      </View> */}
    </SafeAreaView>
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
    height: 50,
    width: 40,
    borderRadius: 60,
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
