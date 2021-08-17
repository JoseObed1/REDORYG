import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home'
import DetailsScreen from './screens/Details'
import RostroRecScreen from './screens/RostroRec'
import GestoRecScreen from './screens/GestoRec'

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'REDORYG' }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="RostroRec" component={RostroRecScreen} />
        <Stack.Screen name="GestoRec" component={GestoRecScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack

