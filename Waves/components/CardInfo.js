import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {TabRouter} from '@react-navigation/routers';
import UserAvatar from './UserAvatar';
import {DARK_GRAY, PRIMARY} from '../constants/theme';
import Icon from 'react-native-vector-icons/FontAwesome';

function CardInfo({item, profile}) {
  const [priv, setPrivate] = React.useState(item.private);

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text style={styles.title}>{item.title}</Text>
        {profile && (
          <Button compact onPress={() => setPrivate(!priv)}>
            <Icon
            name={priv ? 'lock' : 'unlock'}
            color={PRIMARY}
            size={20}
          />
          </Button>
          
        )}
      </View>

      <Text style={styles.poster}>{item.poster}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingLeft: 10,
    flexGrow: 1,
  },
  topRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: PRIMARY,
    paddingBottom: 10,
    paddingRight: 10,
  },
  poster: {
    fontSize: 13,
    fontWeight: '400',
    color: DARK_GRAY,
  },
});

export default CardInfo;
