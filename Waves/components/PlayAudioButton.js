import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-paper';
import { PRIMARY, SECONDARY, WHITE } from '../constants/theme';

function PlayAudioButton(props) {
  return (
      <Button mode="contained" style={styles.button}>Replay Audio</Button>
  );
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    height: 40,
    width: 150,
    margin: 50,
    backgroundColor: PRIMARY,
  },
});

export default PlayAudioButton;