import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TabNavigation} from './TabNavigation';
import {HomeChannel} from '../Screens/ChannelScreens/HomeChannel';
import {ShortsChannel} from '../Screens/ChannelScreens/ShortsChannel';
import {VideoChannel} from '../Screens/ChannelScreens/VideoChannel';
import {Color} from '../Constant';
const Tab = createMaterialTopTabNavigator();

export const TopTabNavigation = ({channelId}) => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="HomeChannel"
        screenOptions={{
          tabBarStyle: {backgroundColor: 'black'},
          tabBarInactiveTintColor: Color.TEXTDESC,
          tabBarActiveTintColor: 'white',
        }} channelId={channelId}>
        <Tab.Screen
          name="HomeChannel"
          component={HomeChannel}
          options={{
            title: 'Home',
          }} channelId={channelId}
        />
        <Tab.Screen
          name="ShortsChannel"
          component={ShortsChannel}
          options={{
            title: 'Shorts',
          }}
        />
        <Tab.Screen
          name="VideoChannel"
          component={VideoChannel}
          options={{
            title: 'Video',
          }} channelId={channelId}
        />
      </Tab.Navigator>
    </>
  );
};
