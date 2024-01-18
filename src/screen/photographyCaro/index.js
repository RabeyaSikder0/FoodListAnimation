import React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SalonList from './src/screen/photographyCaro/SalonList';
import SalonListDetails from './src/screen/photographyCaro/SalonListDetails';


const Stack= createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SalonList'>
          <Stack.Screen name="SalonList" component={SalonList} />
          <Stack.Screen name="SalonListDetails" component={SalonListDetails} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App
