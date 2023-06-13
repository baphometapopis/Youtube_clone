import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
// import FetchCategories from '../Customhooks/useFetchCategories';
import { FetchCategories } from '../Customhooks/useFetch';
const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.snippet.title}</Text>
  </TouchableOpacity>
);

export const Categories = () => {
    const {data} = FetchCategories();

    const [selectedId, setSelectedId] = useState();
  const renderItem = ({item}) => {

    const backgroundColor = item.id === selectedId ? 'white' : '#323130';
    const color = item.id === selectedId ? 'black' : 'white';
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.Categories}>
        {data &&
      <FlatList
        horizontal={true}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        showsHorizontalScrollIndicator={false}

        
      />
        }
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding:5,
width:'100%'    
  },
  item: {
    padding:4,
    marginHorizontal: 6,
    borderRadius:8,
  },
  title: {
  },
  Categories:{
    height:30,
    justifyContent:'flex-start',
}
});
