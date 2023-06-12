import React, {useCallback, useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {Color} from '../Constant';
import aveta from 'aveta';
import {converter} from '../function/dateConverter';
import {useNavigation} from '@react-navigation/native';
import useFetch, {FetchVideo} from '../Customhooks/useFetch';
const windowWidth = Dimensions.get('window').width;
import WebView from 'react-native-webview';
import Modal from 'react-native-modal';
import {ScrollView} from 'react-native';
export const Details = prop => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [statistic, setStatistics] = useState(0);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const navigate = useNavigation();
  const {data} = FetchVideo();
  const {title, tags, localized, publishedAt, channelTitle} =
    prop.route.params.item.snippet;
  const {statistics, id} = prop.route.params.item;
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 200);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 200],
    outputRange: [0, -200],
  });

   console.log(id)

  useEffect(() => {
    if (prop.route.params.item.kind == 'youtube#video') {
      setStatistics(statistics?.viewCount);
    } else {
      setStatistics(prop.route.params.item.items[0]?.statistics?.viewCount);
      console.log(prop.route.params.item.items[0]?.statistics?.viewCount);
    }
  }, [statistic]);


  return (
    <View style={styles.container}>
      <View style={styles.screenContainer}>
        <WebView
          style={{width: windowWidth, height: 230}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{uri: `https://www.youtube.com/embed/${id}`}}
        />
      </View>
      {/* <Animated.View
        style={[
          styles.descContainer,
          {transform: [{translateY: translateY}], elevation: 2, zIndex: -1},
        ]}> */}
      <ScrollView>
        <View style={styles.descContainer}>
          <Text style={styles.ctitle}>{title}</Text>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text numberOfLines={1} style={styles.cdesc}>
                {aveta(statistic, {digits: 2, lowercase: true})}
                Views &nbsp;
                {converter(publishedAt)}
                &nbsp;
                {tags ? `#${tags}` : null}
              </Text>
            </View>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={styles.more}>..More</Text>
            </TouchableOpacity>
          </View>
          <Text style={{color: 'green'}}></Text>
        </View>
        <View style={styles.commentContainer}>
          <Text>this is comment page</Text>
        </View>
        {/* </Animated.View> */}
      </ScrollView>
      <View style={styles.contentContainer}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <ListVideos item={item} navigation={navigate} />
          )}
          keyExtractor={item => item.id}
          onScroll={e => {
            scrollY.setValue(e.nativeEvent.contentOffset.y);
          }}
        />
      </View>
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
          <View style={styles.center}>
            <View style={styles.barIcon} />
            <Text style={styles.text}>Welcome To My Bottom Sheet</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
  },
  text: {
    color: Color.TEXT,
  },
  screenContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 0.3,
    // backgroundColor: 'red',
    height: 250,
    width: windowWidth,
  },
  descContainer: {
    //  flex: ,
    padding: 10,
    backgroundColor: 'green',
  },
  commentContainer: {
    flex: 0.1,
    backgroundColor: 'blue',
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
    marginRight: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },

  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: '#161616',
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // minHeight: 555,
    flex: 0.69,
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
  },
});
