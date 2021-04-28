import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';

function AddFriendsScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>AddFriendsScreen</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default AddFriendsScreen;