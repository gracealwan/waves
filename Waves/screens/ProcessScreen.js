import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import {Button} from 'react-native-paper';
import NewWaveCard from '../components/NewWaveCard';
import PostingButtonsGroup from '../components/PostingButtonsGroup';
function ProcessScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <NewWaveCard />
            <PostingButtonsGroup navigation={navigation}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
    },
});

export default ProcessScreen;