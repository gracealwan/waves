import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from './ProfileScreen';
import Notifications from './Notifications';
import EditProfileScreen from './EditProfileScreen';
import AddFriendsScreen from './AddFriendsScreen';
import CardExpandedScreen from './CardExpandedScreen';

const Stack = createStackNavigator();


function ProfileNavScreen({navigation}) {
  return (
    <Stack.Navigator headerMode={'float'} >
      <Stack.Screen name="My Waves" component={ProfileScreen} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Edit" component={EditProfileScreen} />
      <Stack.Screen name="Add" component={AddFriendsScreen} />
      <Stack.Screen name="Wave" component={CardExpandedScreen} />
    </Stack.Navigator>
  );
}

export default ProfileNavScreen;
