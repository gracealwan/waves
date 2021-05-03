import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, Image} from 'react-native';
import {Button} from 'react-native-paper';
import {Input} from 'react-native-elements';
import {PRIMARY, WHITE} from '../constants/theme';

function Login({navigation}) {
  const [text, setText] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Waves</Text>
      <Text style={styles.subtitle}>Make your voice heard</Text>
      <Image
        source={require('../images/login.png')}
        style={styles.image}></Image>
      <Input
        style={styles.input}
        placeholder={'Email'}
        onChangeText={value => setText(value)}
      />
      <View style={styles.passRow}>
        <Input
          style={styles.input}
          placeholder={'Password'}
          onChangeText={value => setText(value)}
        />
        <Button
          style={styles.forgotButton}
          uppercase={false}
          onPress={() => navigation.push('Forgot')}>
          <Text style={styles.smallButtonText}>Forgot Password?</Text>
        </Button>
      </View>
      <Button
        style={styles.signInButton}
        uppercase={false}
        mode="contained"
        onPress={() => navigation.goBack()}>
        <Text style={styles.largeButtonText}>Sign In</Text>
      </Button>
      <View style={styles.createRow}>
        <Text style={styles.bottomSubtext}>Don't have an account?</Text>
        <Button
          style={styles.createButton}
          uppercase={false}
          mode="text"
          onPress={() => navigation.push('Create')}>
          <Text style={styles.smallButtonText}>Create Account</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  passRow: {
    display: 'flex',
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  createRow: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 70,
  },
  title: {
    fontSize: 34,
    lineHeight: 41,
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingTop: 100,
  },
  subtitle: {
    fontSize: 17,
    lineHeight: 22,
    color: 'rgba(60, 60, 67, 0.6)',
    paddingBottom: 60,
  },
  subtext: {
    fontSize: 15,
    lineHeight: 20,
    color: 'rgba(60, 60, 67, 0.6)',
    paddingBottom: 60,
  },
  image: {
    marginBottom: 60,
    width: '100%',
  },
  input: {
    fontSize: 17,
    lineHeight: 22,
    color: 'rgba(60, 60, 67, 0.6)',
  },
  signInButton: {
    width: '80%',
    borderRadius: 14,
    backgroundColor: PRIMARY,
  },
  forgotButton: {
    width: 190,
    backgroundColor: WHITE,
    height: 30,
    marginTop: 5,
  },
  largeButtonText: {
    fontSize: 15,
    color: WHITE,
    fontWeight: '600',
  },
  smallButtonText: {
    fontSize: 12,
    color: PRIMARY,
    fontWeight: '600',
  },
  createButton: {
    width: 138,
    backgroundColor: WHITE,
    height: 30,
    marginTop: -7,
  },
  bottomSubtext: {
    fontSize: 15,
    lineHeight: 20,
    color: 'rgba(60, 60, 67, 0.6)',
  },
});

export default Login;
