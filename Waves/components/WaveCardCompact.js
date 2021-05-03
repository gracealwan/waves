import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, FlatList} from 'react-native';
import {Card} from 'react-native-paper';
import { TabRouter } from '@react-navigation/routers';
import UserAvatar from './UserAvatar';
import CardInfo from './CardInfo';

function WaveCardCompact({item, navigation, profile}) {
  return (
    <Card style={styles.card} onPress={() => navigation?.push("Wave", {item: item, profile: profile})}>
      <Card.Content style={styles.content}>
        <UserAvatar size='small' style={styles.avatar}/>
        <CardInfo item={item} profile={profile}/>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
    card: {
        height: 100,
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        
    },

  });

  export default WaveCardCompact;