import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';
import {Color} from '../Constant';
import aveta from 'aveta';
import {FetchComments} from '../Customhooks/useFetch';
const windowWidth = Dimensions.get('window').width;
import AntDesign from 'react-native-vector-icons/AntDesign';
import {decode} from 'html-entities';
const windowHeight = Dimensions.get('window').height;
import Modal from 'react-native-modal';
import {TouchableOpacity} from 'react-native';
import Close from 'react-native-vector-icons/EvilIcons';
import profile from '../assets/profile.png';
import {ListComments} from './FLatlistItemRendering/ListComments';

export const Comments = props => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    console.log('clicked');
  };

  const [comments, setComments] = useState([]);
  console.log(props.count);
  const GetComments = async () => {
    try {
      if (props.id !== undefined) {
        const response = await FetchComments(props.id);
        console.log('hit');
        console.log(response);

        if (response !== undefined) {
          setComments(response);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetComments();
  }, []);
  console.log(
    'qhhhnmnbvcdsdfghjj',
    comments[0]?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl,
  );

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={toggleModal}>
        <View style={{flexDirection: 'row', gap: 5}}>
          <Text style={{color: 'white'}}>Comments</Text>
          <Text style={{color: Color.TEXTDESC}}>
            {aveta(props.count || 2, {
              digits: 2,
              lowercase: false,
            })}
          </Text>
        </View>
        <View
          style={{
            borderRadius: 15,
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: `${comments[0]?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}`,
            }}
            style={style.channelLogo}
          />
          <Text
            numberOfLines={2}
            style={{color: 'white', width: 250, fontSize: 12}}>
            {decode(
              `${comments[0]?.snippet?.topLevelComment?.snippet?.textDisplay}`,
            )}
          </Text>
          <AntDesign name="down" size={15} color="white" />
        </View>
      </TouchableOpacity>
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
        style={style.modal}>
        <View style={style.modalContent}>
          <View style={style.barIcon} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 5,
            }}>
            <Text style={{color: 'white', fontSize: 18}}>Comments</Text>

            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Close name="close" color="white" size={30} />
            </TouchableOpacity>
          </View>
          <View>
            <View style={{padding: 10, flexDirection: 'row', gap: 10}}>
              <Image
                source={profile}
                style={{height: 30, width: 30, borderRadius: 50}}
              />
              <TextInput
                style={style.textInput}
                placeholder="Add a Comment...."
                placeholderTextColor={'grey'}
              />
            </View>
            <View
              style={{
                borderBottomColor: 'white',
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />

            <FlatList
              data={comments}
              renderItem={({item}) => {
                 return <ListComments item={item} />;
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    borderRadius: 10,
    width: windowWidth - 20,
    backgroundColor: Color.Top_Tab,
    height: 80,
    margin: 1,
    padding: 5,
  },
  channelLogo: {
    height: 25,
    width: 25,
    borderRadius: 15,
    marginVertical: 5,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: '#161616',
    paddingTop: 12,
    paddingHorizontal: 12,

    height: windowHeight - 220,

    paddingBottom: 20,
  },
  barIcon: {
    width: 60,
    height: 5,
    backgroundColor: Color.TEXTDESC,
    borderRadius: 3,
    alignSelf: 'center',
  },
  textInput: {
    backgroundColor: Color.Top_Tab,
    width: windowWidth - 80,
    borderRadius: 6,
    height: 35,
    color: 'white',
    padding: 7,
  },
});
