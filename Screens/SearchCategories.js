import React, {useState, useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Dimensions,
  Text,
} from 'react-native';
import {Color} from '../Constant';
import useFetch, {FetchVideo, Search} from '../Customhooks/useFetch';
import {useNavigation} from '@react-navigation/native';
import ListVideos from './ListVideos';
import {Header} from '../Components/Header';
import {Categories} from '../Components/Categories';
const windowWidth = Dimensions.get('window').width;

export const SearchCategories = item => {
  const navigate = useNavigation();
  const [data, setData] = useState([]);

  const searchHAnder = useCallback(async () => {
    const heef = await Search(item.route.params);
    console.log('<><<><>', heef);
  }, [item.route.params]);

  useEffect(() => {
    searchHAnder();
    // setData(Search(item.route.params));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {/* <Header/> */}
      <Text>this is Search Categories</Text>
      {/* <Categories/> */}

      {/* {console.log(data._z)} */}
      {/* <FlatList
        data={res}
        renderItem={({item}) => <ListVideos item={item} navigation={navigate} />}
        keyExtractor={item => item.id}
      /> */}

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
