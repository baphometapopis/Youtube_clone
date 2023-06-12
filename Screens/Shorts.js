import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, SafeAreaView, Dimensions} from 'react-native';
import {Search} from '../Customhooks/useFetch';
import WebView from 'react-native-webview';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Shorts = params => {
  // console.log(params.route.params.videoId)
  const [videoId, setVideoId] = useState();

  useEffect(() => {
    if (params.route.params !== undefined) {
      setVideoId(params.route.params.videoId);
    }
    else{
      setVideoId('xFFmpLNV8BE')
    }
  }, [videoId]);
  console.log(videoId)

  // const performSearch = async () => {
  //   try {

  //     const results = await Search("Shorts");
  //     setSearchResults(results);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {

  //   performSearch();
  // }, []);
  // console.log('qqqqqqqqqqqqqq0',searchResults)

  return (
    <SafeAreaView style={style.container}>
      <WebView
        style={{width: windowWidth, height: 230}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{uri: `https://www.youtube.com/shorts/${videoId}`}}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
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
