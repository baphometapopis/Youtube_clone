import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../Screens/Home';
import {Subscription} from '../Screens/Subscription';
import {Library} from '../Screens/Library';
import {Shorts} from '../Screens/Shorts';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Lib from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: 'black'},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarActiveTintColor: 'white',
          tabBarIcon: ({size, focused}) => (
            <Icons
              name="home"
              size={size}
              color={focused ? 'white' : 'grey'}
            />
          ),
        }}
      />
      <Tab.Screen name="shorts" component={Shorts}
         options={{
          tabBarActiveTintColor: 'white',
          tabBarIcon: ({size, focused}) => (
            <Icons
              name="video-vintage"
              size={size}
              color={focused ? 'white' : 'grey'}
            />
          ),
        }} />
      <Tab.Screen name="Subscription" component={Subscription}
        options={{
          tabBarActiveTintColor: 'white',
          tabBarIcon: ({size, focused}) => (
            <Icons
              name="youtube-subscription"
              size={size}
              color={focused ? 'white' : 'grey'}
            />
          ),
        }}
       />
      <Tab.Screen name="Library" component={Library}
        options={{
          tabBarActiveTintColor: 'white',
          tabBarIcon: ({size, focused}) => (
            <Lib
              name="video-library"
              size={size}
              color={focused ? 'white' : 'grey'}
            />
          ),
        }} />
    </Tab.Navigator>
  );
};
