import React,{Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class TestButton extends Component {

    Show1=()=> {
        alert("Welcome to Button");
    }
    Show2=(Num)=> {
        alert(Num);
    }
    Show3=(Name)=> {
        alert(Name);
    }
  render() {
    return(
      <View>
        <Button title="Button1" onPress={this.Show1}></Button>
        <Button title="Button2" onPress={this.Show2.bind(this, 10)}></Button>
        <Button title="Button3" onPress={this.Show3.bind(this, "Manoj")}></Button>
      </View>
    );
  }
}