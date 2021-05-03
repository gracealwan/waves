import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import UserAvatar from '../components/UserAvatar';
import {Button, Divider} from 'react-native-paper';
import { DARK_GRAY, MED_GRAY, PRIMARY, SECONDARY } from '../constants/theme';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';


function EditProfileScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.avatarWrap}>
                <UserAvatar style={styles.avatar}/>
            </View>
            <Button onPress={() => console.log('chagne photo')}>
                <Text style={styles.button}>Change Picture</Text>
            </Button>
            <View style={styles.actions}>
                <Text style={styles.titleText}>My Account</Text>
                <Divider style={styles.divider}/>
                <View style={styles.row}>
                    <Text>Name</Text>
                    <Input containerStyle={styles.editable} inputStyle={styles.input} value='name here' onChangeText={() => console.log('update name in backend')}/>
                </View>
                <View style={styles.row}>
                    <Text>Username</Text>
                    <Input containerStyle={styles.editable} inputStyle={styles.input} value='username here' onChangeText={() => console.log('update name in backend')}/>
                </View>
                <View style={styles.row}>
                    <Text>Phone Number</Text>
                    <Input containerStyle={styles.editable} inputStyle={styles.input} value='phone here' onChangeText={() => console.log('update name in backend')}/>
                </View>
                <View style={styles.row}>
                    <Text>Password</Text>
                    <Input containerStyle={styles.editable} inputStyle={styles.input} value='password here' onChangeText={() => console.log('update name in backend')}/>
                </View>
            </View>
            <View style={styles.actions}>
                <Text style={styles.titleText}>Account Actions</Text>
                <Divider style={styles.divider}/>
                <Button mode='contained' style={styles.button} onPress={() => console.log('delete account in backend')}>
                    <Text style={styles.buttonText}>Delete User Account</Text>
                </Button>
                <Button mode='contained' style={styles.button} onPress={() => console.log("log out")}>
                    <Text style={styles.buttonText}>Log out</Text>
                </Button>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarWrap: {
        display: 'flex',
        padding: 20,
        justifyContent: 'center',
        alignContent: 'center',
    },
    button: {
        color: DARK_GRAY,
    },
    actions: {
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-start',
        padding: 20,
    },
    divider: {
        borderWidth: 0.5,
    },
    titleText: {
        fontWeight: '500',
        paddingBottom: 10,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    editable: {
        padding: 0,
        width: 150,
    
    },
  
    input: {
        fontSize: 15,
        marginBottom: -10,
        textAlign: 'right'
    },
    buttonText: {
        color: DARK_GRAY,
    },
    button: {
        backgroundColor: 'transparent',
    }
});

export default EditProfileScreen;