import React,{Component} from 'react';
import {View, Text} from 'react-native';

export default class App extends Component {
  render() {
    return(
      <View>
        <Text>Welcome to My First React Native Application</Text>
        <Text style={{backgroundColor:'red'}}>Welcome to My First React Native Application Style of backgroundColor</Text>
        <Text style={{color:'tomato'}}>Welcome to My First React Native Application Style of font Color</Text>
        <Text style={{color:'blue'}}>Welcome to My First React Native Application Style of font Color</Text>
        <Text style={{fontSize:20}}>Welcome to My First React Native Application Style of font Size</Text>
        <Text style={{fontWeight:'bold', fontSize:30}}>Welcome to My First React Native Application Style of font Bold</Text>
        <Text style={{fontStyle:'italic', fontSize:15}}>Welcome to My First React Native Application Style of font Style</Text>
        <Text style={{textAlign:"center"}}>Welcome</Text>
        <Text style={{letterSpacing:5}}>Welcome to My First React Native Application Style of letterSpacing</Text>
        <Text style={{lineHeight:100}}>Welcome to lineHeight</Text>
      </View>
    );
  }
}