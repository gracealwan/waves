import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from './ProfileScreen';
import Notifications from './Notifications';
import EditProfileScreen from './EditProfileScreen';
import AddFriendsScreen from './AddFriendsScreen';
import CardExpandedScreen from './CardExpandedScreen';
import HomeScreen from './HomeScreen';
import ProcessScreen from './ProcessScreen';

const Stack = createStackNavigator();

function HomeNavScreen({navigation}) {
  return (
    <Stack.Navigator headerMode={'none'} >
      <Stack.Screen name="Record" component={HomeScreen} />
      <Stack.Screen name="Process" component={ProcessScreen} />
    </Stack.Navigator>
  );
}

export default HomeNavScreen;
