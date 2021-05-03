import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import WaveCardCompact from '../components/WaveCardCompact';

function CardExpandedScreen({item, route}) {
    let profile;
    if (route) {
        item = route.params.item;
        profile = route.params.profile;
    }
    return (
        <SafeAreaView style={styles.container}>
            <WaveCardCompact item={item} profile={profile} />
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