import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-paper';
import { PRIMARY, WHITE } from '../constants/theme';

function RecordButton() {
  return (

      <Button mode="contained" style={styles.button} onLongPress={() => console.log('record')}>
        <Icon name="microphone" color={WHITE} size={100} />
      </Button>

  );
}

const styles = StyleSheet.create({
    button: {
      display: 'flex',
      justifyContent: 'center',
      borderRadius: 100,
      height: 150,
      width: 150,
      margin: 50,
      backgroundColor: PRIMARY,
      color: WHITE,
    },
});
export default RecordButton;