import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Foodlist from './src/screen/Foodlist';
import FoodDetails from './src/screen/FoodDetails';

const Stack = createNativeStackNavigator();
const index = () => {
  return (

    <NavigationContainer initialRouteName="Foodlist">
      <Stack.Navigator>
        <Stack.Screen name="Foodlist" component={Foodlist} />
        <Stack.Screen name="FoodDetails" component={FoodDetails} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default index
