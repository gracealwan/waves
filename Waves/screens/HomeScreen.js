import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import RecordButton from '../components/RecordButton';
import {LIGHT_GRAY, SECONDARY, WHITE} from '../constants/theme';

function HomeScreen({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPressIn={() => console.log('startpress')}
        onPressOut={() => navigation.push("Process")}>
        <RecordButton />
      </TouchableOpacity>

      <Text style={styles.text}>Hold to start recording</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: '700',
    color: SECONDARY,
  },
});

export default HomeScreen;
