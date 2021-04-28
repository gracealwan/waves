import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-paper';

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Button mode="contained" style={styles.button} onLongPress={() => console.log('record')}>
        <Icon name="microphone" color={'#FFC0CB'} size={100} />
      </Button>
      <Text>Hold to start recording</Text>

      {/* <Button title="Go back" onPress={() => navigation.navigate("Profile")}/> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 100,
    height: 150,
    width: 150,
    margin: 50,
  }
});

export default HomeScreen;
