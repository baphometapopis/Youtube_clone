import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../Components/Home';
import {Subscription} from '../Components/Subscription';
import {Library} from '../Components/Library';
import {Shorts} from '../Components/Shorts';
const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="shorts" component={Shorts} />
      <Tab.Screen name="Subscription" component={Subscription} />
      <Tab.Screen name="Library" component={Library} />
    </Tab.Navigator>
  );
};
