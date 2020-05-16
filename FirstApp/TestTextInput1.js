import React, { Component } from 'react';

import { StyleSheet, View, TextInput } from 'react-native';
 
export default class TestTextInput1 extends Component
{
  
  render()
  {
    return(
      <View style = { styles.MainContainer }>

       <TextInput 
       placeholder = "Enter Your Name" 
       style={styles.textInput_Style}
       underlineColorAndroid='transparent'
        />

      </View>  
    )
  }
}
 
const styles = StyleSheet.create(
{
  MainContainer:
  {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },

  textInput_Style:
  {
    width: '90%',
    height: 42,
    borderColor: '#009688',
    borderWidth: 1,
    backgroundColor: '#fff',
    //textAlign:'center',
    margin:20, 
    borderRadius:10
  }

});