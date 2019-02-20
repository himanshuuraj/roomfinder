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
  Dimensions,
  TouchableHighlight,
  Picker
} from 'react-native';
import { getHeight, Color, getFont } from '../global/util';

export default class ProductItem extends Component {

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
        <View style = {{
            width : "100%",
            height : getHeight(18),
            marginTop: 5,
            marginBottom : 5,
            borderRadius : 5,
            backgroundColor : Color.gradientColor2,
            display : "flex",
            flexDirection : "row"
        }}>
            <View style={{
                width : "33%",
                padding : 10,
                borderRightWidth : 1,
                borderRightColor : "#eee"
            }}>
                <View style={{
                    position : "absolute",
                    height : "20%",
                    justifyContent : "center",
                    alignItems : "center",
                    backgroundColor : "#eee"
                }}>
                    <Text style={{
                        fontSize : getFont(14),
                        color : "black"
                    }}>
                        15% OFF
                    </Text>
                </View>
                <Image source={{uri : "http://pluspng.com/img-png/eggplant-hd-png-eggplant-free-download-png-png-image-346.png"}}
                    style={{
                        flex : 1
                    }}
                    resizeMode = "stretch"
                />
            </View>
            <View style={{
                width : "70%",
                padding : 10
            }}>
               <Text style={{
                   fontSize : getFont(16),
                   fontWeight : "bold"
               }}>Brinjal</Text>
               <View style={{
                   display : "flex",
                   flexDirection : "row"
               }}>
                   <Text style={{
                       color : "black",
                       fontSize : getFont(14),
                       textDecorationLine: 'line-through', 
                       textDecorationStyle: 'solid'
                   }}>Rs. 120.00</Text>
                   <Text>{"  "}</Text>
                   <Text style={{
                       color : "red",
                       fontSize : getFont(16)
                   }}>Rs. 99.00</Text>
               </View>
               <Text style= {{
                   color : "green",
                   fontSize : getFont(14)
               }}>Save {"  "} Rs. 21.00</Text>
               <View style={{
                   width : "100%",
                   flexDirection : "row",
                   height : "28%",
                   marginTop : "2%"
               }}>
               <View style={{
                   width : "50%",
                   borderColor : "black",
                   borderWidth : 1,
                   borderRadius : 5
               }}>
               <Picker
                  selectedValue={this.state.language}
                  style={{ 
                      height: "100%",
                      width: "100%"
                    }}
                  onValueChange={(itemValue, itemIndex) =>
                      this.setState({language: itemValue})
                  }>
                  <Picker.Item label="250 g" value="java" />
                  <Picker.Item label="500 g" value="js" />
               </Picker>
               </View>
               <TouchableOpacity style={{
                   display : "flex",
                   width : "50%",
                   alignItems : "flex-end",
                   justifyContent : "center",
                   paddingRight : "5%"
               }}>
                 <Text style={{
                     textDecorationLine: "underline",
                     textDecorationStyle: "solid",
                     textDecorationColor: "#000",
                     fontSize : getFont(14)
                 }}>Add to Cart</Text>
               </TouchableOpacity>
               </View>
            </View>
        </View>
    );
  }
}
