import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, FlatList} from 'react-native';
import {Card} from 'react-native-paper';
import { TabRouter } from '@react-navigation/routers';

function WaveCardCompact({item, navigation, route}) {
    item = item ? item : route?.params.item;
  return (
    <Card style={styles.card} onPress={() => navigation?.push("Wave", {item: item})}>
      <Card.Title title={item.title} />
    </Card>
  );
}

const styles = StyleSheet.create({
    card: {
        height: 100,
    },
  });

  export default WaveCardCompact;