import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import OnBoards from './src/screens/onBoards/OnBoards';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <SafeAreaView style={{flex: 1,padding:0,marginTop:50}} >
       <StatusBar style='auto'/>
    <NavigationContainer>
      <OnBoards/>
    
  </NavigationContainer>
  </SafeAreaView>
  );
}


