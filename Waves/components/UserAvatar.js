import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function UserAvatar() {
  return (
    <View style={styles.container}>
      <Icon name="user" color={'#FFC0CB'} size={50} />
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
    borderWidth: 1,
  },
});
export default UserAvatar;
