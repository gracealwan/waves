import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function ProfileDataItem({number, text}) {
    return (
      <View style={styles.box}>
        <Text>{number}</Text>
        <Text>{text}</Text>
      </View>
    );
  }

function ProfileInfoRow() {
  return (
    <View style={styles.infoRow}>
          <ProfileDataItem number={30} text={'Friends'} />
          <ProfileDataItem number={4} text={'Recordings'} />
          <ProfileDataItem number={300} text={'Listens'} />
        </View>
  );
}

const styles = StyleSheet.create({
  infoRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 120,
    width: '100%',
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',

    width: '30%',
  },
});
export default ProfileInfoRow;
