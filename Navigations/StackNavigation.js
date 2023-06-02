import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../Components/Home';
import {Details} from '../Components/Details';
import {TabNavigation} from './TabNavigation';

export const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home_Tab"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home_Tab" component={TabNavigation} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};
