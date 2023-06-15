import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import Close from 'react-native-vector-icons/EvilIcons';
import profile from '../../assets/profile.png';
import {ListComments} from '../FLatlistItemRendering/ListComments';
import {Color} from '../../Constant';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CommentModal = ({isModalVisible, toggleModal, comments, Replies}) => {
  console.log(comments);
  return (
    <Modal
      onBackdropPress={toggleModal}
      onBackButtonPress={toggleModal}
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
        <View style={styles.header}>
          <Text style={styles.headerText}>Comments</Text>
          <Close name="close" color="white" size={30} onPress={toggleModal} />
        </View>
        <View>
          <View style={styles.commentContainer}>
            <Image source={profile} style={styles.profileImage} />
            <TextInput
              style={styles.textInput}
              placeholder="Add a Comment...."
              placeholderTextColor="grey"
            />
          </View>
          <View style={styles.separator} />
          <FlatList
            data={comments}
            renderItem={({item}) => <ListComments item={item} />}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
  },
  commentContainer: {
    padding: 10,
    flexDirection: 'row',
    gap: 10,
  },
  profileImage: {
    height: 30,
    width: 30,
    borderRadius: 50,
  },
  textInput: {
    backgroundColor: Color.Top_Tab,
    width: windowWidth - 80,
    borderRadius: 6,
    height: 35,
    color: 'white',
    padding: 7,
  },
  separator: {
    borderBottomColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default CommentModal;
