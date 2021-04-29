import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import WaveCardCompact from './WaveCardCompact';

const DATA = [
    {
      id: '1',
      title: 'First Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    },
  ];

function CompactList({navigation}) {
    const renderItem = ({item}) => {
        return (
          <WaveCardCompact item={item} navigation={navigation} />
        );
      };
      return (
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.list}
        />
      );
}


const styles = StyleSheet.create({
    list: {
      width: '100%',
    },
  });

export default CompactList;