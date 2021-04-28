import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Button } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import FeedList from './FeedList';
const Stack = createStackNavigator();

function FeedScreen({navigation}) {
    return (
      <Stack.Navigator>
          <Stack.Screen name="Listen" component={FeedList} />
      </Stack.Navigator>

   
    );
}

export default FeedScreen;