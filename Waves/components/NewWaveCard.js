import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, FlatList} from 'react-native';
import {Card, TextInput} from 'react-native-paper';
import { TabRouter } from '@react-navigation/routers';
import UserAvatar from './UserAvatar';
import CardInfo from './CardInfo';
import { PRIMARY } from '../constants/theme';
import { Input } from 'react-native-elements';
import PostingsButtonGroup from './PostingButtonsGroup';

function NewWaveCard() {
    const [text, setText] = React.useState('');
  return (
    <Card style={styles.card}>
      <Card.Content style={styles.content}>
        <UserAvatar size='small' style={styles.avatar}/>
        <Input style={styles.input} placeholder={'Write a title'} onChangeText={value => setText(value)}/>
        
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
    card: {
        height: 100,
        width: '100%',
        backgroundColor: 'transparent',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
    },
    input: {
        width: '100%', 
    }

  });

  export default NewWaveCard;