import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import   store  from './Redux/Store'
import { Provider } from 'react-redux'


import {StackNavigation} from './Navigations/StackNavigation';

function App() {
  return (
    <Provider store={store}>  

    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
    </Provider>
  );
}

export default App;
