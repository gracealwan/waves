import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';

function EditProfileScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>EditProfileScreen</Text>
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

export default EditProfileScreen;