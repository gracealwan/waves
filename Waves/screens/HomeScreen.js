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
import PlayAudioButton from '../components/PlayAudioButton';
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
      audioURI: "",
      filePath: "",
    };
    this.audioRecorderPlayer = new AudioRecorderPlayer();
  }

  onStartRecord = async () => {
    console.log("on start got triggered")
    var date = new Date();
    const path = 'sound'+date.getTime()+'.m4a';
    const audioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
    };
    const uri = await this.audioRecorderPlayer.startRecorder(path, audioSet);
    this.audioRecorderPlayer.addRecordBackListener((e) => {
      this.setState({
        recordSecs: e.currentPosition,
        recordTime: this.audioRecorderPlayer.mmssss(
          Math.floor(e.currentPosition),
        ),
        audioURI: uri,
        filePath: path,
      });
    });
  };

  onStopRecord = async () => {
    console.log("on stop recording");
    const result = await this.audioRecorderPlayer.stopRecorder();
    this.audioRecorderPlayer.removeRecordBackListener();
    this.setState({
      recordSecs: 0
    });

    //console.log('result',result);
    console.log('audioURI', this.state.audioURI);
    this.props.navigation.navigate('Process', {
      filePath: this.state.filePath,
      playTime: this.state.playTime,
      duration: this.state.duration,
      recordTime: this.state.recordTime,
      currentPositionSec: this.state.currentPositionSec,
      currentDurationSec: this.state.currentDurationSec,
    })
  };

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <Text>{this.state.recordTime}</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPressIn={this.onStartRecord.bind(this)}
          onPressOut={this.onStopRecord.bind(this)}>
          <RecordButton />
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