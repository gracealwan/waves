import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, FlatList} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Divider, Card} from 'react-native-paper';
import AddFriendsButton from '../components/AddFriendsButton';
import NotificationButton from '../components/NotificationButton';
import EditProfileButton from '../components/EditProfileButton';
import UserAvatar from '../components/UserAvatar';
import ProfileInfoRow from '../components/ProfileInfoRow';
import CompactList from '../components/CompactList';

function ProfileScreen({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.topRow}>
          <AddFriendsButton navigation={navigation} />
          <EditProfileButton navigation={navigation} />
        </View>
        <UserAvatar />
        <Text style={styles.name}>First Last 1</Text>
        <Text style={styles.username}>@username</Text>
        <ProfileInfoRow />
        <Divider style={styles.div} />
        <CompactList navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  topRow: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingBottom: 50,
  },
  withinTopRow: {
    display: 'flex',
    flexDirection: 'row',
    width: '45%',
    justifyContent: 'space-between',
  },
  div: {
    width: '100%',
    borderWidth: 0.5,
    opacity: 0.2,
  },
  name: {
    fontSize: 22,
    paddingTop: 10,
  },
  username: {
    fontSize: 15,
    paddingTop: 1,
  },
});
export default ProfileScreen;
