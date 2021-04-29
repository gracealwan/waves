import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PRIMARY, WHITE } from '../constants/theme';

function UserAvatar({size}) {
  iconSize = 50;
  if (size == 'small') {
    iconSize = 20;
  }
  return (
    <View style={size === 'small' ? styles.smaller : styles.container}>
      <Icon name="user" color={WHITE} size={iconSize} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    height: 100,
    width: 100,

    backgroundColor: PRIMARY,
  },
  smaller: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: PRIMARY,
    height: 50,
    width: 50,
  },
});
export default UserAvatar;
