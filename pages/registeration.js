import React, {Component} from 'react';
import {
  Platform,
  Text, 
  View,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Dimensions
} from 'react-native';
import {
  Container,
  Content,
  Badge,
  CheckBox,
  Button,
  Icon
} from "native-base";
import {
  getFont,
  Color,
  getHeight,
  Font
} from "../global/util";
import LoginFormComponent from '../components/loginFormComponent';
import RegisterationComponent from "../components/registerationComponent";

export default class Registeration extends Component {

  state = {
    phone : "",
    password : ""
  };

  constructor(props){
    super(props);
  }

  componentDidMount(){
    let {height, width} = Dimensions.get('window');
    this.setState({
      height : height, 
      width : width
    });
  }

  render() {
    return (
      <Container>
      <Content style={{
        backgroundColor : Color.themeColor,
        paddingLeft : "4%",
        width : "100%",
        paddingRight : "4%"
      }}>
        <KeyboardAvoidingView behavior={Platform.select({android: "padding", ios: 'padding'})}
         enabled>
         <View style={{
           height : getHeight(16),
           width : "100%",
           justifyContent : "center",
           alignItems : "center"
         }}>
            <Image source={require("./../images/home_icon.jpg")}
                    style={{flex : 1}}
                    resizeMode = "contain"/>
         </View>
          <LoginFormComponent screenType="registeration"/>
          <RegisterationComponent screenType="registeration"/>
        </KeyboardAvoidingView>
      </Content>
      </Container>
    );
  }
}
