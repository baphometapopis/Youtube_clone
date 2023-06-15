import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {convertToAtFormat, converter} from '../../function/dateConverter';
import {Color} from '../../Constant';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {decode} from 'html-entities';
import CommentModal from '../Modals/CommentModals';

export const ListComments = ({item}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [checkReplies, setCheckReplies] = useState(false);
  console.log('sssssssssssss', item.kind);
  console.log(item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    console.log('clicked');
  };

  useEffect(()=>{ if (item.kind == 'youtube#comment') {
    setCheckReplies(true);
  }})
 

  return (
    <View>
      {checkReplies ?<View style={{flexDirection: 'row', gap: 15}}>
          <Image
            source={{
              uri: `${item?.snippet?.authorProfileImageUrl}`,
            }}
            style={styles.channelLogo}
          />
          <View>
            <View style={{flexDirection: 'row', gap: 15}}>
              {item?.snippet?.authorDisplayName && (
                <Text style={{color: Color.TEXTDESC, fontSize: 12}}>
                  {convertToAtFormat(
                    item?.snippet?.authorDisplayName,
                  )}
                  .
                  {converter(
                    item?.snippet?.publishedAt,
                  )}
                </Text>
              )}
            </View>
            <Text style={{color: 'white', marginBottom: 10, marginTop: 5}}>
              {decode(item?.snippet?.textDisplay)}
            </Text>
            <View style={{flexDirection: 'row', gap: 15, marginBottom: 20}}>
              <AntDesign name="like2" size={15} color="white" />
              <AntDesign name="dislike2" size={15} color="white" />
              <MaterialIcon name="insert-comment" size={15} color="white" />
            </View>
           
          </View>
       
        </View> :
        <View style={{flexDirection: 'row', gap: 15}}>
          <Image
            source={{
              uri: `${item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}`,
            }}
            style={styles.channelLogo}
          />
          <View>
            <View style={{flexDirection: 'row', gap: 15}}>
              {item?.snippet?.topLevelComment?.snippet?.authorDisplayName && (
                <Text style={{color: Color.TEXTDESC, fontSize: 12}}>
                  {convertToAtFormat(
                    item?.snippet?.topLevelComment?.snippet?.authorDisplayName,
                  )}
                  .
                  {converter(
                    item?.snippet?.topLevelComment?.snippet?.publishedAt,
                  )}
                </Text>
              )}
            </View>
            <Text style={{color: 'white', marginBottom: 10, marginTop: 5}}>
              {decode(item?.snippet?.topLevelComment?.snippet?.textDisplay)}
            </Text>
            <View style={{flexDirection: 'row', gap: 15, marginBottom: 20}}>
              <AntDesign name="like2" size={15} color="white" />
              <AntDesign name="dislike2" size={15} color="white" />
              <MaterialIcon name="insert-comment" size={15} color="white" />
            </View>
            {item?.replies?.comments && (
              <TouchableOpacity
                onPress={toggleModal}
                style={{flexDirection: 'row', gap: 10}}>
                <Text style={{color: 'white', marginBottom: 10}}>
                  {item?.replies?.comments?.length}
                </Text>
                <Text style={{color: '#5F9EF9', fontWeight: 'bold'}}>
                  Reply
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <CommentModal
            isModalVisible={isModalVisible}
            toggleModal={toggleModal}
            comments={item?.replies?.comments}
            Replies={true}
          />
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  channelLogo: {
    height: 25,
    width: 25,
    borderRadius: 50,
    marginVertical: 10,
  },
});
