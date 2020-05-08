import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './pages/Home';
import Details from './pages/Details';
import HeaderHome from './components/HeaderHome';

const Stack = createStackNavigator();

export default () => {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header:() => <HeaderHome />
        }}
      />

      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          header:() => <HeaderHome />
        }}
      />
    </Stack.Navigator>
  )
};

