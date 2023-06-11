import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../Screens/Home';
import {Details} from '../Screens/Details';
import {TabNavigation} from './TabNavigation';
import SuggestQueriesComponent from '../Screens/SearchSuggestion';
import { SearchCategories } from '../Screens/SearchCategories';
import { ChannelDetail } from '../Screens/ChannelScreens/ChannelDetail';
import { ChannelPlaylistList } from '../Screens/ChannelScreens/ChannelPlaylistList';

export const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home_Tab"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home_Tab" component={TabNavigation} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name='Search' component={SuggestQueriesComponent}/>
      <Stack.Screen name='SearchCategories' component={SearchCategories}/>
      <Stack.Screen name='ChannelDetail' component={ChannelDetail}/>
      <Stack.Screen name='listPlaylistItem' component={ChannelPlaylistList}/>

    </Stack.Navigator>
  );
};
