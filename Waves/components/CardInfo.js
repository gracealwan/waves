import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Card} from 'react-native-paper';
import { TabRouter } from '@react-navigation/routers';
import UserAvatar from './UserAvatar';
import { DARK_GRAY, PRIMARY } from '../constants/theme';



function CardInfo({item}) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.poster}>{item.poster}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container : {
        display: 'flex',
        paddingLeft: 10,
    },
    title: {
        fontSize: 15,
        fontWeight: '600',
        color: PRIMARY,
        paddingBottom: 10,
    },
    poster: {
        fontSize: 13,
        fontWeight: '400',
        color: DARK_GRAY,
    },
  });

  export default CardInfo;