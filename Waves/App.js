/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
//import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './screens/HomeScreen';
import {Provider as PaperProvider} from 'react-native-paper';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import ProfileNavScreen from './screens/ProfileNavScreen';
import FeedScreen from './screens/FeedScreen';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Tab = createMaterialTopTabNavigator();
  const HomeRoute = () => (
    <NavigationContainer independent={true}>
      <HomeScreen />
    </NavigationContainer>
  );

  const ProfileRoute = () => (
    <NavigationContainer independent={true}>
      <ProfileNavScreen />
    </NavigationContainer>
  );
  const FeedRoute = () => (
    <NavigationContainer independent={true}>
      <FeedScreen />
    </NavigationContainer>
  );
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar barStyle={'dark-content'} />

        <Tab.Navigator tabBarPosition="bottom" initialRouteName="Home">
          <Tab.Screen name="Feed" component={FeedRoute} />
          <Tab.Screen name="Home" component={HomeRoute} />
          <Tab.Screen name="Profile" component={ProfileRoute} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
