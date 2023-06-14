import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {convertToAtFormat, converter} from '../../function/dateConverter';
import {Color} from '../../Constant';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {decode} from 'html-entities';

export const ListComments = ({item}) => {
  return (
    <View>
      <View style={{flexDirection: 'row', gap: 15}}>
        <Image
          source={{
            uri: `${item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}`,
          }}
          style={styles.channelLogo}
        />

        <View>
          <View style={{flexDirection: 'row', gap: 15}}>
            <Text style={{color: Color.TEXTDESC, fontSize: 12}}>
              {convertToAtFormat(
                item?.snippet?.topLevelComment?.snippet?.authorDisplayName,
              )}
              .{' '}
              {converter(item?.snippet?.topLevelComment?.snippet?.publishedAt)}
            </Text>
          </View>
          <Text style={{color: 'white', marginBottom: 10, marginTop: 5}}>
            {decode(item?.snippet?.topLevelComment?.snippet?.textDisplay)}
          </Text>
          <View style={{flexDirection: 'row', gap: 15, marginBottom: 20}}>
            <AntDesign name="like2" size={15} color="white" />
            <AntDesign name="dislike2" size={15} color="white" />
            {item?.replies?.comments && (
              <>
                <MaterialIcon name="insert-comment" size={15} color="white" />
                <Text style={{color: 'red'}}>
                  {item?.replies?.comments?.length}
                </Text>
              </>
            )}
          </View>
        </View>
      </View>
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
