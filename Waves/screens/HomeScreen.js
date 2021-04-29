import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';

import RecordButton from '../components/RecordButton';

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <RecordButton />
      <Text>Hold to start recording</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
