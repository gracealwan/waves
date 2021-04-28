import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, FlatList} from 'react-native';

import {Button} from 'react-native-paper';


function NotificationButton({navigation}) {
    return (
        <Button
            icon="bell-outline"
            onPress={() => navigation.push('Notifications')}
          />
    );
}

const styles = StyleSheet.create({

});

export default NotificationButton;