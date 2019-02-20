import React, {Component} from 'react';
import {
  Platform,
  StyleSheet, 
  Text, 
  View,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions
} from 'react-native';
import Wallpaper from '../components/loginScreen/Wallpaper';

export default class SplashScreen extends Component {

  state = {
    phone : "",
    password : ""
  };

  constructor(props){
    super(props);
  }

  componentDidMount(){
    setTimeout(() => this.props.moveToScreen("options"), 3000);
    //this.props.moveToScreen("login");
  }

  render() {
    return (
      <ImageBackground style={{
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover',
        }}
        source={require('./../images/background_image.jpg')}>
      </ImageBackground>
    );
  }
}
