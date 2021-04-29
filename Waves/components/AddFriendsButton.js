import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-paper';
import { MED_GRAY, SECONDARY } from '../constants/theme';


function AddFriendsButton({navigation}) {
    return (
        <Button
            icon={() => <Icon name="user-plus" size={30} color={"black"} />}
            onPress={() => navigation.push('Add')}
          />
    );
}


export default AddFriendsButton;