import React,{Component} from 'react';
import {View, TextInput} from 'react-native';

export default class TestTextInput extends Component {

  render() {
    return(
      <View>
        <TextInput style={{borderWidth:1, borderColor:'red', margin:40}} placeholder ="Enter the Name" placeholderTextColor='red'> </TextInput>
        <TextInput style={{borderWidth:1, borderColor:'red', margin:40, borderRadius:10}}> </TextInput>
        <TextInput style={{borderWidth:1, borderColor:'red', margin:30}} placeholder ="Enter the Number" keybordType='number-pad'> </TextInput>
        <TextInput style={{borderWidth:1, borderColor:'red', margin:40, borderRadius:10}} defaultValue='101'> </TextInput>
        <TextInput style={{borderWidth:1, borderColor:'red', margin:10, borderRadius:10}}> </TextInput>
        <TextInput style={{borderWidth:1, borderColor:'red', margin:10, borderRadius:10}} maxLength={5}> </TextInput>
        <TextInput style={{borderWidth:1, borderColor:'red', margin:10, borderRadius:10}} defaultValue='Monika' editable={false}> </TextInput>
      </View>
    );
  }
}