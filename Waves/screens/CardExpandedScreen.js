import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import WaveCardCompact from '../components/WaveCardCompact';

function CardExpandedScreen({item}) {

    return (
        <SafeAreaView style={styles.container}>
            <WaveCardCompact item={item} />
            <Text>Comments and stuff</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        
        
    },
});

export default CardExpandedScreen;