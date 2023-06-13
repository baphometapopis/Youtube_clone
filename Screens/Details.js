import React, {useCallback, useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Animated,
  Image,
} from 'react-native';
import {Color} from '../Constant';
import aveta from 'aveta';
import {converter, getDateFormatted, getYear} from '../function/dateConverter';
import {useNavigation} from '@react-navigation/native';
import useFetch, {FetchVideo} from '../Customhooks/useFetch';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import WebView from 'react-native-webview';
import Modal from 'react-native-modal';
import {ScrollView} from 'react-native';
import {Categories} from '../Components/Categories';

import Close from 'react-native-vector-icons/EvilIcons';

export const Details = prop => {
  const [scrollY] = useState(new Animated.Value(0));

  const [isModalVisible, setModalVisible] = useState(false);
  const [statistic, setStatistics] = useState(0);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const navigate = useNavigation();
  const {data} = FetchVideo();
  const {title,description, tags, localized, publishedAt, channelTitle} =
    prop.route.params.item.snippet;
  const {statistics, id} = prop.route.params.item;
  console.log(description);

  const AnimatedHeaderValue = new Animated.Value(0);
  const HEADER_MAX_HEIGHT = 150;
  const HEADER_MIN_HEIGHT = 40;

  const animatedHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const fadeAnimCategories = AnimatedHeaderValue.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  const fadeoutAnim = AnimatedHeaderValue.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    if (prop.route.params.item.kind == 'youtube#video') {
      setStatistics(statistics?.viewCount);
    } else {
      setStatistics(prop.route.params.item.items[0]?.statistics?.viewCount);
      // console.log(prop.route.params.item.irtems[0]?.statistics?.viewCount);
    }
  }, [statistic]);

  return (
    <View style={styles.container}>
      <View style={styles.screenContainer}>
        <WebView
          style={{width: windowWidth, height: 200}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{uri: `https://www.youtube.com/embed/${id}`}}
        />
      </View>
      <Animated.View style={[{height: animatedHeaderHeight}]}>
        <Animated.View style={[styles.descContainer, {opacity: fadeoutAnim}]}>
          <Text style={styles.ctitle}>{title}</Text>
          <View
            style={{flexDirection: 'row', marginRight: 10, flexWrap: 'wrap'}}>
            <>
              <Text numberOfLines={1} style={styles.cdesc}>
                {aveta(statistic, {digits: 2, lowercase: true})}
                Views &nbsp;
                {converter(publishedAt)}
                &nbsp;
                {tags ? `#${tags}` : null}
              </Text>
            </>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={styles.more}>..More</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity>
                <Image
                  source={{
                    uri: `${prop.route.params.item[0]?.url}`,
                  }}
                  style={styles.channelLogo}
                />
              </TouchableOpacity>
              <Text
                numberOfLines={1}
                style={{color: 'white', maxWidth: 200, marginHorizontal: 5}}>
                {channelTitle}
              </Text>
              <Text style={{color: Color.TEXTDESC}}>
                {' '}
                {aveta(prop.route.params.item[0]?.subscriberCount || 2, {
                  digits: 2,
                  lowercase: false,
                })}
              </Text>
            </View>
            <TouchableOpacity
              style={{backgroundColor: 'white', padding: 5, borderRadius: 25}}>
              <Text style={{color: 'black'}}>Subscribe</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
        <Animated.View
          style={[{opacity: fadeAnimCategories}, styles.categoryContainer]}>
          <Categories />
        </Animated.View>
      </Animated.View>

      <FlatList
        initialNumToRender={5}
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: AnimatedHeaderValue}}}],
          {useNativeDriver: false},
        )}
        data={data}
        renderItem={({item}) => (
          <ListVideos item={item} navigation={navigate} />
        )}
      />
      <Modal
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        isVisible={isModalVisible}
        swipeDirection="down"
        onSwipeComplete={toggleModal}
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        backdropColor="transparent"
        style={styles.modal}>
        <View style={styles.modalContent}>
          <View style={styles.barIcon} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 5,
            }}>
            <Text style={{color: 'white', fontSize: 20}}>Description</Text>
   
            <TouchableOpacity onPress={()=>setModalVisible(false)}>
            <Close  name="close" color="white" size={30} />
            </TouchableOpacity>
          
          </View>
          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <Text style={{color: 'white', fontSize: 18}}> `{title}</Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 25,
              marginBottom:15,
            }}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <Text style={{color: 'white'}}> {aveta(statistics?.likeCount, {
                  digits: 2,
                  lowercase: true,
                })}</Text>
              <Text style={{color: Color.TEXTDESC,textAlign:'center'}}>Likes</Text>
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <Text style={{color: 'white'}}>{aveta(statistics?.viewCount, {
                  digits: 2,
                  lowercase: true,
                })}</Text>
              <Text style={{color: Color.TEXTDESC,textAlign:'center'}}>Views</Text>
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <Text style={{color: 'white'}}>{getDateFormatted(prop.route.params.item.snippet.publishedAt)}</Text>
              <Text style={{color: Color.TEXTDESC}}>{getYear(prop.route.params.item.snippet.publishedAt)}</Text>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />

          <View>
            <Text style={{color:'white'}}>{title}</Text>

            <Text numberOfLines={3} style={{color:'white',marginTop:25}}>{description}</Text>


          </View>

          
          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 4,
            }}
          />
          <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity>
                <Image
                  source={{
                    uri: `${prop.route.params.item[0]?.url}`,
                  }}
                  style={styles.channelModalLogo}
                />
              </TouchableOpacity>
              <View style={{margin:10}}>
              <Text
                numberOfLines={1}
                style={{color: 'white', maxWidth: 200}}>
                {channelTitle}
              </Text>
              <Text style={{color: Color.TEXTDESC}}>
                
                {aveta(prop.route.params.item[0]?.subscriberCount || 2, {
                  digits: 2,
                  lowercase: false,
                })} Subscriber
              </Text>
              </View>
            </View>
           
          </View>
          <TouchableOpacity
              style={{backgroundColor: 'white', padding: 5, borderRadius: 25 ,width:100,alignItems:'center'}}>
              <Text style={{color: 'black'}}>Video</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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

    height: 200,
    width: windowWidth,
  },
  descContainer: {
    padding: 10,
    // backgroundColor: 'green',
    height: 150,
  },
  commentContainer: {
    flex: 0.1,
    // backgroundColor: 'blue',
  },
  contentContainer: {
    flex: 0.6,
    //  backgroundColor: 'yellow',
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  cdesc: {
    color: Color.TEXTDESC,
    marginTop: 10,
    fontSize: 12,
    textAlign: 'left',
    width: 250,
  },
  more: {
    marginTop: 10,
    color: 'white',
    fontSize: 12,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  categoryContainer: {
    position: 'absolute',
  },

  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: '#161616',
    paddingTop: 12,
    paddingHorizontal: 12,

    minHeight: windowHeight - 200,
    //  flex: 0.69,
    paddingBottom: 20,
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  barIcon: {
    width: 60,
    height: 5,
    backgroundColor: Color.TEXTDESC,
    borderRadius: 3,
    alignSelf: 'center',
  },

  channelLogo: {
    height: 35,
    width: 35,
    borderRadius: 50,
    marginVertical: 10,
  },
  channelModalLogo:{
    height: 50,
    width: 50,
    borderRadius: 50,
    marginVertical: 10,
  }
});
