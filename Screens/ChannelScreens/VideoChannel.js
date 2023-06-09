import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { fetchChannelPlaylist } from '../../Customhooks/useFetchChannelData';

export const VideoChannel = () => {
  const [playlist, setPlaylist] = useState([]);

  // const fetchPlaylist = async () => {
  //   try {
    //   const data = fetchChannelPlaylist();
    //   setPlaylist(data);
    // // } catch (error) {
    //   console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchPlaylist();
  // }, []);


  return (
    <SafeAreaView style={styles.container}>
      {console.log(playlist)}
      <Text style={styles.text}>This is VideoChannel</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
  },
});
