import React, {Component} from 'react';
import {
  Platform,
  Text, 
  View,
  Picker,
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
} from "./../global/util";

export default class LoginFormComponent extends Component {

  state = {
    phone : "",
    password : "",
    gender : "male"
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
           height : getHeight(10),
           width : "100%",
           justifyContent : "center",
           alignItems : "flex-start"
         }}>
            <Text style={{
              fontSize : getFont(22),
              fontFamily : Font.themeFont,
              color : "white"
            }}>
              {this.props.screenType === "login" ? "LOG IN" : null}
              {this.props.screenType === "registeration" ? "REGISTER" : null}
            </Text>
         </View>
         {
             this.props.screenType === "registeration" && (
       <View style={{
           height : getHeight(10),
           marginBottom : getHeight(4),
           flexDirection : "row"
         }}>
           <View style={{
               width : "49%",
               marginRight : "1%"
           }}>
            <View style={{
                height : "40%"
            }}>
              <Text style={{
                color : "white",
                fontSize : getFont(14),
                marginBottom : 5
              }}>
                FIRST NAME
              </Text>
            </View>
            <View style={{
                height : "60%",
                borderWidth : 1,
                borderRadius : 5,
                borderColor : "white",
                paddingLeft : 10,
                flexDirection : "row"
              }}>
              <Icon name="ios-person" 
                 style={{
                   fontSize: getFont(30), 
                   color: 'white',
                   marginRight : 10
                 }}/>
              <TextInput placeholder="First Name"
              placeholderTextColor = { Color.themeFontColor }
              style={{
                color : Color.themeFontColor
              }}/>
            </View>
           </View>
           <View style={{
               width : "49%",
               marginLeft : "1%"
           }}>
            <View style={{
                height : "40%"
            }}>
              <Text style={{
                color : "white",
                fontSize : getFont(14),
                marginBottom : 5
              }}>
                LAST NAME
              </Text>
            </View>
            <View style={{
                height : "60%",
                borderWidth : 1,
                borderRadius : 5,
                borderColor : "white",
                paddingLeft : 10,
                flexDirection : "row"
              }}>
              <TextInput placeholder="Last Name"
              placeholderTextColor = { Color.themeFontColor }
              style={{
                color : Color.themeFontColor
              }}/>
            </View>
           </View>
           <View>   
           </View>
         </View>
             )
         }

{
             this.props.screenType === "registeration" && (
       <View style={{
           height : getHeight(6),
           marginBottom : getHeight(4),
           flexDirection : "row",
           borderWidth : 1,
           borderRadius : 5,
           borderColor : "white"
         }}>
         <Picker
  selectedValue={this.state.gender}
  style={{height: "100%", width: "100%", color : "white"}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({gender: itemValue})
  }>
  <Picker.Item label="Male" value="male" />
  <Picker.Item label="Female" value="female" />
</Picker>
         </View>
)}

         <View style={{
           height : getHeight(10),
           marginBottom : getHeight(4)
         }}>
            <View style={{
                height : "40%"
            }}>
              <Text style={{
                color : "white",
                fontSize : getFont(14),
                marginBottom : 5
              }}>
                EMAIL
              </Text>
            </View>
            <View style={{
                height : "60%",
                borderWidth : 1,
                borderRadius : 5,
                borderColor : "white",
                paddingLeft : 10,
                flexDirection : "row"
              }}>
              <Icon name="ios-mail" 
                 style={{
                   fontSize: getFont(30), 
                   color: 'white',
                   marginRight : 10
                 }}/>
              <TextInput placeholder="Enter Email"
              placeholderTextColor = { Color.themeFontColor }
              style={{
                color : Color.themeFontColor
              }}/>
           </View>
         </View>
         <View style={{
           height : getHeight(10),
           marginBottom : getHeight(4)
         }}>
            <View style={{
                height : "40%"
            }}>
              <Text style={{
                color : "white",
                fontSize : getFont(14),
                marginBottom : 5
              }}>
                PASSWORD
              </Text>
            </View>
            <View style={{
                height : "60%",
                borderWidth : 1,
                borderRadius : 5,
                borderColor : "white",
                paddingLeft : 10,
                flexDirection : "row"
              }}>
              <Icon name="ios-lock" 
                 style={{
                   fontSize: getFont(30), 
                   color: 'white',
                   marginRight : 10
                 }}/>
              <TextInput placeholder="Enter Password"
                placeholderTextColor = { Color.themeFontColor }
                style={{
                  color : Color.themeFontColor
                }}/>
           </View>
         </View>
         <View style={{
           width : "100%",
           flexDirection : "row",
           marginBottom : getHeight(4)
         }}>
             <View style={{
               width : "15%",
               justifyContent : "center"
             }}>
                <CheckBox color="white"/>
             </View>
             <View style={{
               width : "85%",
               flexDirection : "column"
             }}>
                <Text style={{
                  color : Color.themeFontColor
                }}>
                  By registering you are agreeing to our
                </Text>
                <Text style={{
                  color : Color.themeFontColor,
                  textDecorationLine: 'underline'
                }}>
                  Privacy Policy and terms of use
                </Text>
             </View>
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
                {this.props.screenType === "login" ? "LogIn" : null}
                {this.props.screenType === "registeration" ? "Register" : null}
                </Text>
            </TouchableOpacity>
          </View>
        </React.Fragment>
    );
  }
}
