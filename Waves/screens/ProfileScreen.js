import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, FlatList} from 'react-native';
import {Appbar} from 'react-native-paper';
import App from '../App';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Divider, Card} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

function ProfileDataItem({number, text}) {
  return (
    <View style={styles.box}>
      <Text>{number}</Text>
      <Text>{text}</Text>
    </View>
  );
}
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
function RecordingList() {
  const renderItem = ({item}) => {
    return (
      <Card style={styles.card}>
        <Card.Title title={item.title} />
      </Card>
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
function ProfileScreen({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.topRow}>
          <Button
            icon="account-plus-outline"
            onPress={() => navigation.push('Add')}
          />
          <Button
            icon="bell-outline"
            onPress={() => navigation.push('Notifications')}
          />
        </View>
        <Button
          style={styles.button}
          mode="outlined"
          compact
          onPress={() => navigation.push('Edit')}>
          Edit Profile
        </Button>
        <Icon name="user" color={'#FFC0CB'} size={100} />
        <Text>First Last </Text>
        <Text>@user</Text>
        <View style={styles.infoRow}>
          <ProfileDataItem number={30} text={'Friends'} />
          <ProfileDataItem number={4} text={'Recordings'} />
          <ProfileDataItem number={300} text={'Listens'} />
        </View>
        <Divider style={styles.div} />
        <RecordingList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',

    alignItems: 'center',
    padding: 10,
  },
  topRow: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  button: {
    alignSelf: 'flex-end',
  },
  infoRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 120,
    width: '100%',
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',

    width: '30%',
  },

  div: {
    width: '100%',
    borderWidth: 0.5,
  },
  list: {
    width: '100%',
  },
  card: {},
});
export default ProfileScreen;
