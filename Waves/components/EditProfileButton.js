import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';

import {Button} from 'react-native-paper';


function EditProfileButton({navigation}) {
    return (
        <Button
          style={styles.button}
          mode="outlined"
          compact
          onPress={() => navigation.push('Edit')}>
          Edit Profile
        </Button>
    );
}

const styles = StyleSheet.create({
    button: {
        alignSelf: 'flex-end',
      },
});

export default EditProfileButton;