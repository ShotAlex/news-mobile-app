import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../screens/HomeScreen';
import { PostScreen } from '../screens/PostScreen';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'News' }} />
        <Stack.Screen name='Post' component={PostScreen} options={{ title: 'Post' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;