import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import {Button} from 'react-native-paper';

function ProcessScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>ProcessScreen</Text>
            <Button onPress={() => navigation.goBack()}>go back</Button>
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

export default ProcessScreen;