import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import {Input} from 'react-native-elements';
import {Button} from 'react-native-paper';
import {PRIMARY, WHITE} from '../constants/theme';

function ForgotPass({navigation}) {
  const [text, setText] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Forgot Password?</Text>
      <Text style={styles.subtitle}>
        Enter your email and we'll send you a link to get back into your
        account.
      </Text>
      <Input
        style={styles.input}
        placeholder={'Email'}
        onChangeText={value => setText(value)}
      />
      <Button
        style={styles.button}
        mode="contained"
        uppercase={false}
        onPress={() => navigation.goBack()}>
        <Text style={styles.inner}>Continue</Text>
      </Button>
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
  title: {
    fontSize: 34,
    lineHeight: 41,
    fontWeight: 'bold',
    paddingBottom: 15,
    paddingTop: 100,
  },
  subtitle: {
    fontSize: 17,
    lineHeight: 22,
    color: 'rgba(60, 60, 67, 0.6)',
    paddingBottom: 60,
    textAlign: 'center',
  },
  input: {
    fontSize: 17,
    lineHeight: 22,
    color: 'rgba(60, 60, 67, 0.6)',
  },
  button: {
    width: 300,
    backgroundColor: PRIMARY,
    marginTop: 300,
    marginBottom: 100,
    borderRadius: 14,
  },
  inner: {
    fontSize: 15,
    color: WHITE,
    fontWeight: '600',
  },
});

export default ForgotPass;
