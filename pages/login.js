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
} from "./../global/util";

export default class AnimationButton extends Component {

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
              {"LOG IN"}
            </Text>
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
                }}>Register</Text>
            </TouchableOpacity>
          </View>
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
        </KeyboardAvoidingView>
      </Content>
      </Container>
    );
  }
}
