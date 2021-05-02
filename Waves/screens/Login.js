import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import {Button} from 'react-native-paper';
function Login({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>login</Text>
            <Button onPress={() => navigation.push("Create")}>create account</Button>
            <Button onPress={() => navigation.push("Forgot")}>forgot password</Button>
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

export default Login;