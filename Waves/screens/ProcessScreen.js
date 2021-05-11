import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import {Button} from 'react-native-paper';
import NewWaveCard from '../components/NewWaveCard';
import PlayAudioButton from '../components/PlayAudioButton';
import PostingButtonsGroup from '../components/PostingButtonsGroup';
import AudioRecorderPlayer, { 
    AVEncoderAudioQualityIOSType,
    AVEncodingOption, 
    AudioEncoderAndroidType,
    AudioSet,
    AudioSourceAndroidType, 
   } from 'react-native-audio-recorder-player';
import {SECONDARY } from '../constants/theme';

class ProcessScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          recordSecs: 0,
          recordTime: '00:00:00',
          currentPositionSec: 0,
          currentDurationSec: 0,
          playTime: '00:00:00',
          duration: '00:00:00',
          filePath: "",
        };
        this.audioRecorderPlayer = new AudioRecorderPlayer();
        this.audioRecorderPlayer.setSubscriptionDuration(0.1);
    }

    onStartPlay = async () => {
        console.log('onStartPlay');
        const msg = await this.audioRecorderPlayer.startPlayer(this.state.filePath);
        console.log("msg",msg);
        this.audioRecorderPlayer.addPlayBackListener((e) => {
          this.setState({
            currentPositionSec: e.currentPosition,
            currentDurationSec: e.duration,
            playTime: this.audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
            duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration)),
          });
          return;
        });
      };

    render () {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.text}>{this.state.playTime} / {this.state.duration}</Text>
                <PlayAudioButton onPress={this.onStartPlay}></PlayAudioButton>
                <NewWaveCard />
                <PostingButtonsGroup navigation={this.props.navigation}/>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 15,
        fontWeight: '700',
        color: SECONDARY,
        marginLeft: 50,
      },
});

export default ProcessScreen;