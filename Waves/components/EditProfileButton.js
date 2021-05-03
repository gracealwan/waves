import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {Button} from 'react-native-paper';
import { DARK_GRAY, LIGHT_GRAY, MED_GRAY } from '../constants/theme';

function EditProfileButton({navigation}) {
    return (
        <Button
          style={styles.button}
          mode="outlined"
          compact
          onPress={() => navigation.push('Edit Profile')}>
            <Text style={styles.inner}>Edit Profile</Text>
        </Button>
    );
}

const styles = StyleSheet.create({
    button: {
        alignSelf: 'flex-end',
        borderColor: MED_GRAY,
      },
      inner: {
        fontSize: 13,
        color: DARK_GRAY,
      }
});

export default EditProfileButton;