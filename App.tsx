import React from 'react';
import useFetch from './Customhooks/useFetch';
import {NavigationContainer} from '@react-navigation/native';

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Button,
} from 'react-native';
import fetchVideo from './Customhooks/useFetch';
import FetchComments from './Customhooks/useFetchComments';
import {StackNavigation} from './Navigations/StackNavigation';

function App() {
  // const {data, loading, error} = useFetch(url);

  // console.log(fetchVideo());

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

export default App;
