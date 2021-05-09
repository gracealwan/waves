import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import RecordButton from '../components/RecordButton';
import {LIGHT_GRAY, SECONDARY, WHITE} from '../constants/theme';
import AudioRecorderPlayer, { 
  AVEncoderAudioQualityIOSType,
  AVEncodingOption, 
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType, 
 } from 'react-native-audio-recorder-player';

 class HomeScreen extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      recordSecs: 0,
      recordTime: '00:00:00',
      currentPositionSec: 0,
      currentDurationSec: 0,
      playTime: '00:00:00',
      duration: '00:00:00',
    };
    this.audioRecorderPlayer = new AudioRecorderPlayer();
    this.audioRecorderPlayer.setSubscriptionDuration(0.1); // optional. Default is 0.1
  }

  onStartRecord = async () => {
    console.log("on start got triggered")
    const path = 'sound.m4a';
    const audioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
    };
    const uri = await this.audioRecorderPlayer.startRecorder();
    console.log(uri)
    this.audioRecorderPlayer.addRecordBackListener((e) => {
      this.setState({
        //recordSecs: e.current_position,
        recordSecs: e.currentPositionSec,
        recordTime: this.audioRecorderPlayer.mmssss(
          //Math.floor(e.current_position),
          Math.floor(e.currentPositionSec),
        ),
      });
    });
    console.log(`uri: ${uri}`);
  };

  /*
  onStartRecord = async () => {
    const result = await this.audioRecorderPlayer.startRecorder();
    this.audioRecorderPlayer.addRecordBackListener((e) => {
      this.setState({
        recordSecs: e.currentPosition,
        recordTime: this.audioRecorderPlayer.mmssss(
          Math.floor(e.currentPosition),
        ),
      });
      return;
    });
    console.log(result);
  };
  */

  onStopRecord = async () => {
    const result = await this.audioRecorderPlayer.stopRecorder();
    this.audioRecorderPlayer.removeRecordBackListener();
    this.setState({
      recordSecs: 0,
    });
    console.log(result);
  };

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <Text>record sec: {this.state.recordSecs} , {this.state.recordTime}</Text>
        <Text>Position: {this.state.currentPositionSec}</Text>
        <Text>{this.state.playTime} / {this.state.duration}</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPressIn={this.onStartRecord.bind(this)}
          onPressOut={this.onStopRecord}>
          <RecordButton/>
        </TouchableOpacity>
        <Text style={styles.text}>Hold to start recording</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: '700',
    color: SECONDARY,
  },
});

export default HomeScreen;