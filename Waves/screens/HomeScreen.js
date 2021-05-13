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
    //this.audioRecorderPlayer.setSubscriptionDuration(0.1);
  }

  onStartRecord = async () => {
    console.log("on start got triggered")
    var date = new Date();
    console.log(date);
    const path = 'sound'+date.getTime()+'.m4a';
    const audioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
    };
    const uri = await this.audioRecorderPlayer.startRecorder(path, audioSet);
    console.log(uri)
    this.audioRecorderPlayer.addRecordBackListener((e) => {
      console.log(e);
      this.setState({
        recordSecs: e.currentPosition,
        recordTime: this.audioRecorderPlayer.mmssss(
          Math.floor(e.currentPosition),
        ),
        audioURI: uri,
        filePath: path,
      });
    });
    //console.log(`uri: ${uri}`);
  };

  onStopRecord = async () => {
    console.log("on stop recording");
    const result = await this.audioRecorderPlayer.stopRecorder();
    this.audioRecorderPlayer.removeRecordBackListener();
    this.setState({
      recordSecs: 0
    });
    //console.log('result',result);
    //console.log('audioURI', this.state.audioURI);
    //this.props.navigation.push("Process");
    //console.log('audioURI', this.state.audioURI);
  };

  
  onStartPlay = async() => {
    console.log('onStartPlay');
    const msg = await this.audioRecorderPlayer.startPlayer(this.state.filePath);
    this.audioRecorderPlayer.setVolume(1.0);
    console.log(msg);
    this.audioRecorderPlayer.addPlayBackListener((e) => {
      if (e.currentPosition === e.duration) {
      //if (e.current_position === e.duration) {
        console.log('finished');
        this.audioRecorderPlayer.stopPlayer();
      }
      this.setState({
        currentPositionSec: e.currentPosition,
        currentDurationSec: e.duration,
        playTime: this.audioRecorderPlayer.mmssss(
          Math.floor(e.currentPosition),
        ),
        duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration)),
      });
    });
  };

  /*
  onStartPlay = async () => {
    console.log('onStartPlay', this.state.filePath);
    const msg = await this.audioRecorderPlayer.startPlayer(this.state.filePath);
    console.log("msg",msg);
    this.audioRecorderPlayer.addPlayBackListener((e) => {
      console.log(e);
      this.setState({
        currentPositionSec: e.currentPosition,
        currentDurationSec: e.duration,
        playTime: this.audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
        duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration))
        //duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration)),
      });
      return;
    });
    console.log(this.audioRecorderPlayer)
    setTimeout(() => console.log(this.audioRecorderPlayer), 5000)
  };*/

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
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={this.onStartPlay}>
          <PlayAudioButton />
        </TouchableOpacity>
        <Text>{this.state.playTime} / {this.state.duration}</Text>
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