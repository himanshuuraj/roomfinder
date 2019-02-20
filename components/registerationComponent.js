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
import OrWithComponent from "./../components/orWithComponent";

export default class RegisterationComponent extends Component {

  state = {
    phone : "",
    password : ""
  };

  constructor(props){
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <OrWithComponent/>
        { this.props.screenType !== "forgotPassword" && (
           <View style={{
            width : "100%",
            flexDirection : "row",
            height : getHeight(6)
          }}>
              <TouchableOpacity style={{
                width : "49%",
                display : "flex",
                flexDirection : "row",
                backgroundColor : Color.themeFontColor,
                borderRadius : 5,
                justifyContent : "center",
                alignItems : "center",
                marginRight : "1%"
              }}>
                <Icon name='logo-facebook' style={{
                  marginRight : 15
                }} />
                <Text style={{
                  fontSize : getFont(16)
                }}>Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                width : "49%",
                display : "flex",
                flexDirection : "row",
                backgroundColor : Color.themeFontColor,
                borderRadius : 5,
                justifyContent : "center",
                alignItems : "center",
                marginLeft : "1%"
              }}>
                <Icon name='logo-google' style={{
                  marginRight : 15
                }} />
                <Text style={{
                  fontSize : getFont(16)
                }}>Google</Text>
              </TouchableOpacity>
          </View>
          )  
        }
          <View style={{
            width : "100%",
            flexDirection : "row",
            height : getHeight(6),
            justifyContent : "center",
            marginTop : getHeight(6)
          }}>
            <Text style={{
              color : Color.themeFontColor,
              marginRight : 10
            }}>
              Already have an account?
            </Text>
            <Text style={{
              color : Color.themeFontColor,
              textDecorationLine: 'underline'
            }}>
              LOGIN
            </Text>
          </View>
        </React.Fragment>
    );
  }
}
