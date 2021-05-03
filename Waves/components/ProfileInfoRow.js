import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function ProfileDataItem({number, text}) {
  return (
    <View style={styles.box}>
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

function ProfileInfoRow() {
  return (
    <View style={styles.infoRow}>
      <ProfileDataItem number={30} text={'Friends'} />
      <ProfileDataItem number={4} text={'Recordings'} />
    </View>
  );
}

const styles = StyleSheet.create({
  infoRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 120,
    width: '60%',
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '30%',
  },
  number: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    fontSize: 12,
    color: 'rgba(60, 60, 67, 0.6);',
  },
});
export default ProfileInfoRow;
