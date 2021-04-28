import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, FlatList} from 'react-native';

import {Button} from 'react-native-paper';


function AddFriendsButton({navigation}) {
    return (
        <Button
            icon="account-plus-outline"
            onPress={() => navigation.push('Add')}
          />
    );
}

const styles = StyleSheet.create({

});

export default AddFriendsButton;