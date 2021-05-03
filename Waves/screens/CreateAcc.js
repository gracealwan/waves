import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import {Input} from 'react-native-elements';
import {Button, Checkbox} from 'react-native-paper';
import {PRIMARY, WHITE} from '../constants/theme';

function CreateAccount({navigation}) {
  const [text, setText] = React.useState('');
  const [checked, setChecked] = React.useState(false);

  state = {
    checked: false,
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Sign up today.</Text>
      <Input
        style={styles.input}
        placeholder={'Full Name'}
        onChangeText={value => setText(value)}
      />
      <Input
        style={styles.input}
        placeholder={'Username'}
        onChangeText={value => setText(value)}
      />
      <Input
        style={styles.input}
        placeholder={'Email'}
        onChangeText={value => setText(value)}
      />
      <Input
        style={styles.input}
        placeholder={'Password'}
        onChangeText={value => setText(value)}
      />
      <View style={styles.termsRow}>
        <Checkbox
          color={PRIMARY}
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}></Checkbox>
        <Text style={styles.subtextGrey}>
          I agree with our <Text style={styles.subtextBlue}>Terms</Text> and
          <Text style={styles.subtextBlue}> Conditions</Text>
        </Text>
      </View>
      <Button
        style={styles.button}
        mode="contained"
        uppercase={false}
        onPress={() => navigation.goBack()}>
        <Text style={styles.inner}>Create Account</Text>
      </Button>
      <View style={styles.signinRow}>
        <Text style={styles.subtextGrey}>Already have an account?</Text>
        <Button
          style={styles.textButton}
          mode="text"
          uppercase={false}
          onPress={() => navigation.goBack()}>
          <Text style={styles.textButtonInner}>Sign In</Text>
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
  subtextGrey: {
    fontSize: 13,
    lineHeight: 18,
    color: 'rgba(60, 60, 67, 0.6)',
    paddingBottom: 60,
    textAlign: 'left',
  },
  subtextBlue: {
    fontSize: 13,
    lineHeight: 18,
    color: PRIMARY,
  },
  input: {
    fontSize: 17,
    lineHeight: 22,
    color: 'rgba(60, 60, 67, 0.6)',
  },
  button: {
    width: 300,
    backgroundColor: PRIMARY,
    marginTop: 50,
    marginBottom: 20,
    borderRadius: 14,
  },
  inner: {
    fontSize: 15,
    color: WHITE,
    fontWeight: '600',
  },
  termsRow: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
  },
  signinRow: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  textButton: {
    height: 35,
    marginTop: -9,
  },
  textButtonInner: {
    fontSize: 13,
    lineHeight: 18,
    color: PRIMARY,
  },
});

export default CreateAccount;
