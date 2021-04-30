import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Button} from 'react-native-paper';
import {DARK_GRAY, MED_GRAY, PRIMARY, WHITE} from '../constants/theme';

function PostingButtonsGroup({navigation}) {
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        mode="outlined"
        compact
        onPress={() => navigation.goBack()}>
        <Icon name="paper-plane" color={WHITE} size={20} />
        <Text> </Text>
        <Text style={styles.inner}>Post to Feed</Text>
      </Button>
      <Button
        style={styles.button2}
        mode="outlined"
        compact
        onPress={() => navigation.goBack()}>
        <Text style={styles.inner2}>Save to Memory</Text>
      </Button>
      <Button mode="text" compact onPress={() => navigation.goBack()}>
        <Text style={styles.inner3}>Discard</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  button: {
    width: '70%',
    backgroundColor: PRIMARY,
  },
  button2: {
    width: '70%',
    backgroundColor: WHITE,
    margin: 10,
  },
  inner: {
    fontSize: 15,
    color: WHITE,
    fontWeight: '600',
  },
  inner2: {
    fontSize: 15,
    color: PRIMARY,
    fontWeight: '600',
  },
  inner3: {
    color: DARK_GRAY,
  },
});

export default PostingButtonsGroup;
