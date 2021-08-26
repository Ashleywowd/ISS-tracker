import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from "@react-navigation/native"

import {createStackNavigator} from "@react-navigation/stack"
import "react-native-gesture-handler" 

import HomeScreen from './screens/HomeScreen';
import IssLocationScreen from './screens/IssLocationScreen';
import MetorScreen from './screens/Metorscreen';
import StackUtils from 'stack-utils';

const stack=createStackNavigator()

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions=
      {{headerShown:false}}>
<Stack.Screen name="Homescreen" component={HomeScreen}></Stack.Screen>
<Stack.Screen name="IssLoaction" component={IssLocationScreen}></Stack.Screen>
<Stack.Screen name="Metor" component={MetorScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App 