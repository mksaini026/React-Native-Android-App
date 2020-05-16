import React,{Component} from 'react';
import {View, TextInput} from 'react-native';

export default class TestTextInput extends Component {

  render() {
    return(
      <View>
        <TextInput style={{borderWidth:1, borderColor:'red', margin:40}} placeholder ="Enter the Name" placeholderTextColor='red'> </TextInput>
        <TextInput style={{borderWidth:1, borderColor:'red', margin:40, borderRadius:10}}> </TextInput>
        <TextInput style={{borderWidth:1, borderColor:'red', margin:30}} placeholder ="Enter the Number" underlineColorAndroid='transparent'> </TextInput>
      </View>
    );
  }
}