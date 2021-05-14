import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';
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
      filePath: props.route.params.filePath,
      playTime: props.route.params.playTime,
      duration: props.route.params.duration,
      recordTime: props.route.params.recordTime,
      currentPositionSec: props.route.params.currentPositionSec,
      currentDurationSec: props.route.params.currentDurationSec,
    };
    this.audioRecorderPlayer = new AudioRecorderPlayer();
  }

  onStartPlay = async() => {
    const filePath = this.state.filePath;
    console.log('onStartPlay');
    const msg = await this.audioRecorderPlayer.startPlayer(filePath);
    this.audioRecorderPlayer.setVolume(1.0);
    console.log("msg", msg);
    this.audioRecorderPlayer.addPlayBackListener((e) => {
      if (e.currentPosition === e.duration) {
        this.audioRecorderPlayer.stopPlayer();
      }
      console.log('finished');
      this.setState({
        currentPositionSec: e.currentPosition,
        currentDurationSec: e.duration,
        playTime: this.audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
        duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration)),
      });
    });
  };

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>{this.state.playTime} / {this.state.duration}</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={this.onStartPlay}>
          <PlayAudioButton />
        </TouchableOpacity>
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