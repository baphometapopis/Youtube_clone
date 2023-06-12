import React, {useState} from 'react';
import {View, TextInput, FlatList, Text, StyleSheet} from 'react-native';
import BackArrow from 'react-native-vector-icons/MaterialCommunityIcons';
import {Color} from '../Constant';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Search from 'react-native-vector-icons/EvilIcons'

const SuggestQueriesComponent = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigation();

  const fetchSuggestions = async inputQuery => {
    try {
      const url = `http://suggestqueries.google.com/complete/search?client=firefox&q=${inputQuery}`;
      const response = await fetch(url);
      const data = await response.json();

      setSuggestions(data[1]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleQueryChange = text => {
    setQuery(text);
    fetchSuggestions(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={() => navigate.pop()}>
          <BackArrow name="keyboard-backspace" color="white" size={23} />
        </TouchableOpacity>
        <TextInput
          style={styles.TextInput}
          placeholder="Youtube Search"
          value={query}
          onChangeText={handleQueryChange}
          placeholderTextColor={"white"}
        />
        <TouchableOpacity style={styles.mic}>
          <BackArrow name="microphone-outline" color="white" size={23} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={suggestions}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.suggestion} onPress={()=>{navigate.navigate('SearchCategories',item)}}>
            <Search name="search" color="white" size={23} style={{marginHorizontal:10}}/>

            <Text style={{fontSize: 20, marginRight: 10,color:'white'}}>{item}</Text>
            <BackArrow name="arrow-top-left" color="white" size={23} />

          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SuggestQueriesComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  TextInput: {
    backgroundColor: Color.Top_Tab,
    color: 'white',
    flex: 1,
    marginHorizontal: 15,
    borderRadius: 30,
    height: 35,
    padding: 5,
    paddingLeft: 15,
    fontSize: 16,
    
    // tintColor:'white'
  },

  searchContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  mic: {
    backgroundColor: Color.Top_Tab,
    padding: 5,
    borderRadius: 50,
  },
  suggestion: {
    flexDirection: 'row',
    padding: 5,
    justifyContent:'space-between'
  },
});
