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

export default class RegisterationComponent extends Component {

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
      <React.Fragment>
         <View style={{
            width : "100%",
            flexDirection : "row",
            marginBottom : getHeight(2)
          }}>
            <View style={{
              width : "40%",
              justifyContent : "center"
            }}>
              <View style={{
                borderColor : Color.themeFontColor,
                borderWidth : 1
              }}/>
            </View>
              <Text style={{
                fontFamily: 'AvenirNext-Bold',
                fontSize: getFont(16),
                paddingHorizontal: 5,
                alignSelf: 'center',
                color: Color.themeFontColor
              }}>
                OR WITH
              </Text>
            <View style={{
              width : "40%",
              justifyContent : "center"
            }}>
              <View style={{
                borderColor : Color.themeFontColor,
                borderWidth : 1
              }}/>
            </View>
          </View>
          <View style={{
            width : "100%",
            flexDirection : "row",
            height : getHeight(6),
            marginBottom : getHeight(6)
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
          <View style={{
            width : "100%",
            flexDirection : "row",
            height : getHeight(6),
            justifyContent : "center"
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
