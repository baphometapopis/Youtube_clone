import React from 'react';
import {SafeAreaView, StyleSheet, FlatList, Dimensions} from 'react-native';
import {Color} from '../Constant';
import {FetchVideo} from '../Customhooks/useFetch';
import {useNavigation} from '@react-navigation/native';
import ListVideos from './ListVideos';
import {Header} from '../Components/Header';
import {Categories} from '../Components/Categories';
import {useSelector} from 'react-redux';
const windowWidth = Dimensions.get('window').width;

const Home = () => {
  // const [category, setCategoryId] = useState(0);
  const {categoryId} = useSelector(state => state.category);
  console.log(categoryId);

  const navigate = useNavigation();
  const {data} = FetchVideo();
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <Categories />

      <FlatList
        data={data}
        renderItem={({item}) => (
          <ListVideos item={item} navigation={navigate} />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export {Home};

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
