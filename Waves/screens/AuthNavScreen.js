import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
import CreateAccount from './CreateAcc';
import ForgotPass from './ForgotPass';
const Stack = createStackNavigator();

function AuthNavScreen({navigation}) {
  return (
    <Stack.Navigator headerMode={'float'}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Create" component={CreateAccount} />
      <Stack.Screen name="Forgot" component={ForgotPass} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AuthNavScreen;
