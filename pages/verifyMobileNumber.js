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
import ImageLogoComponent from "./../components/imageLogoComponent";

export default class VerifyMobileNumber extends Component {

  state = {
    phone : "",
    password : ""
  };

  constructor(props){
    super(props);
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
         <ImageLogoComponent/>
         <View style={{
           height : getHeight(10)
         }}></View>
         <Text style={{
           fontSize : getFont(20),
           color : Color.themeFontColor,
           marginBottom : getHeight(4)
         }}>
           VERIFY MOBILE NUMBER
         </Text>
         <Text style={{
           fontSize : getFont(16),
           color : Color.themeFontColor
         }}>
           A 6 DIGIT CODE IS SENT TO
         </Text>
         <Text style={{
           fontSize : getFont(16),
           color : Color.themeFontColor,
           marginBottom : getHeight(4)
         }}>
           702262****
         </Text>
         <Text style={{
           fontSize : getFont(16),
           color : Color.themeFontColor,
           marginBottom : getHeight(1)
         }}>
           ENTER 6 DIGIT CODE HERE
         </Text>
         <View style={{
           flexDirection : "row",
           borderWidth : 1,
           borderColor : Color.themeFontColor,
           height : getHeight(6),
           borderRadius : 5,
           justifyContent : "center",
           alignItems : "center",
           marginBottom : getHeight(4)
         }}>
            {
              [...Array(6)].map((item, index) => <TextInput 
              underlineColorAndroid={Color.themeFontColor}
              style={{
                marginRight : 5
              }}
              key={index}/>)
            }
         </View>
         <View style={{
           height : getHeight(6),
           display : "flex",
           justifyContent : "center",
           alignItems : "center",
           marginBottom : getHeight(4)
         }}>
            <TouchableOpacity style={{
                backgroundColor : Color.themeFontColor,
                padding : 4,
                paddingLeft : 20,
                paddingRight : 20,
                borderRadius : 20
              }}>
                <Text style={{
                  fontSize : getFont(16),
                  color : Color.themeColor,
                  fontWeight : "bold"
                }}>
                {"REGISTER"}
                </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Content>
      </Container>
    );
  }
}
