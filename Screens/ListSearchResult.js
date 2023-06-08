import React from 'react';
import { TouchableOpacity, View, StyleSheet, Image, Text } from 'react-native';

export default function ListSearchResult({ item, navigation }) {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <Image source={{ uri: item.snippet?.thumbnails?.high?.url }} style={styles.image} />
        <View style={styles.descContainer}>
          <View style={styles.desc}>
            <Text numberOfLines={2} style={styles.title}>
              {item.snippet?.title}
            </Text>
            <Text style={styles.channelTitle}>{item.snippet?.channelTitle}</Text>
            <Text style={styles.publishTime}>{item.snippet?.publishTime}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 2,
    marginVertical: 5,
    height: 260,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 180,
  },
  descContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  desc: {
    padding: 10,
  },
  channelTitle: {
    fontSize: 12,
    color: 'gray',
  },
  publishTime: {
    fontSize: 12,
    color: 'gray',
  },
});