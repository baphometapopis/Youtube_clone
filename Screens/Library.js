import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Header} from '../Components/Header';
import {SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Library = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <View style={styles.historyContainer}>
          <TouchableOpacity style={styles.historyIcon}>
            <Icons name="history" size={32} color="white" />
          </TouchableOpacity>
          <View>
          <Text style={{color:'white',fontSize:18,padding:5}}>History</Text>
          <Text style={{padding:5}}>This list has no videos</Text>
          </View>
          <View style={{
            justifyContent:'center',
            alignContent:'center'
          }}>
            <Text style={{color:'#4C59FB'}}>View</Text>
          </View>
         
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  historyIcon: {
    margin: 10,
  },
  historyContainer: {
    flexDirection: 'row',
  },
});
