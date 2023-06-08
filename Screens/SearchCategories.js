import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, FlatList, Dimensions, Text } from 'react-native';
import { Color } from '../Constant';
import { Search } from '../Customhooks/useFetch';
import { useNavigation } from '@react-navigation/native';
import ListSearchResult from './ListSearchResult';
const windowWidth = Dimensions.get('window').width;

export const SearchCategories = (item) => {
  const [searchResults, setSearchResults] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const performSearch = async () => {
      try {
        
        const results = await Search(item.route.params); 
        setSearchResults(results);
      } catch (error) {
        console.log(error);
      }
    };

    performSearch();
  }, [item.route.params]);

  return (
    <SafeAreaView style={styles.container}>

      {/* {console.log(searchResults,'>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')} */}
      <Text style={{ color: 'white' }}></Text>
      <FlatList
        data={searchResults}
        renderItem={({ item }) => (
          <ListSearchResult item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id.videoId}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
