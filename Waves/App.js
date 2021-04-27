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

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import ProfileScreen from './screens/ProfileScreen';
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
      <ProfileScreen />
    </NavigationContainer>
  )
  const FeedRoute = () => (
    <NavigationContainer independent={true}>
      <FeedScreen />
    </NavigationContainer>
  );
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} />

      <Tab.Navigator tabBarPosition='bottom' initialRouteName='Home'>
        <Tab.Screen name="Feed" component={FeedRoute} />
        <Tab.Screen name="Home" component={HomeRoute} />
        <Tab.Screen name="Profile" component={ProfileRoute}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
