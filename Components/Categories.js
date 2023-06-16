import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { FetchCategories } from '../Customhooks/useFetch';
import { useDispatch } from 'react-redux';
import { setCategoryId } from '../Redux/CategorySlice';

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
    <Text style={[styles.title, { color: textColor }]}>{item.snippet.title}</Text>
  </TouchableOpacity>
);

export const Categories = () => {
  const { data } = FetchCategories();
  const dispatch = useDispatch();

  const [selectedId, setSelectedId] = useState();

  const [itemPushed, setItemPushed] = useState(false); // Flag to track if the new item has been pushed or not

  useEffect(() => {
    if (!itemPushed && data && data.length > 0) {
      const newItem = {
        etag: 'newETag',
        id: 0,
        kind: 'newKind',
        snippet: {
          assignable: true,
          channelId: 'newChannelID',
          title: 'All',
        },
      };
      data.unshift(newItem);
      setItemPushed(true);
    }
  }, [data, itemPushed]);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? 'white' : '#323130';
    const color = item.id === selectedId ? 'black' : 'white';
    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          dispatch(setCategoryId(item.id));
        }}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.Categories}>
        {data && data.length > 0 && (
          <FlatList
            horizontal={true}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            extraData={selectedId}
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    width: '100%',
  },
  item: {
    padding: 4,
    marginHorizontal: 6,
    borderRadius: 8,
  },
  title: {},
  Categories: {
    height: 30,
    justifyContent: 'flex-start',
  },
});
