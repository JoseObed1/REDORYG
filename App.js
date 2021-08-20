import 'react-native-gesture-handler';
import React from 'react';
import {View,Button,Text, SafeAreaView, ScrollView, StyleSheet, Alert, ImageBackground} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home'
import DetailsScreen from './screens/Details'
import RostroRecScreen from './screens/RostroRec'
import GestoRecScreen from './screens/GestoRec'
import RegistroScreen from './screens/Registro'

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false}}>
        
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="RostroRec" component={RostroRecScreen} />
        <Stack.Screen name="GestoRec" component={GestoRecScreen} />
        <Stack.Screen name="Registro" component={RegistroScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingTop:100,
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    backgroundColor:'red'
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize:100,
    color:'red',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  
});

export default MyStack

