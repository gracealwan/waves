import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Button} from 'react-native-paper';
import { LIGHT_GRAY, MED_GRAY, SECONDARY } from '../constants/theme';


function NotificationButton({navigation}) {
    return (
        <Button
            icon={() => <Icon name="bell" size={30} color={MED_GRAY} />}
            onPress={() => navigation.push('Notifications')}
          />
    );
}

const styles = StyleSheet.create({

});

export default NotificationButton;