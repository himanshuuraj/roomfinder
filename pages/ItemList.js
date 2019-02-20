import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import { Container, Header, Title, 
  Content, Footer, 
  FooterTab, Button, 
  Left, Right, 
  Body, Icon, 
  Text, 
  Grid,
  Row,
  Col,
  Card
} from 'native-base';
import { Color, getHeight, getFont } from "./../global/util";
import LinearGradient from 'react-native-linear-gradient';

const itemName = [
  { 
    id : "brinjal",
    displayName : "Brinjal",
    description : "",
    price : 40,
    imageUrl : ""
  },
  { 
    id : "brinjal",
    displayName : "Lady's finger",
    description : "",
    price : 40,
    imageUrl : ""
  },
  { 
    id : "brinjal",
    displayName : "Cauliflower",
    description : "",
    price : 40,
    imageUrl : ""
  },
  { 
    id : "brinjal",
    displayName : "Tomato",
    description : "",
    price : 40,
    imageUrl : ""
  },
  { 
    id : "brinjal",
    displayName : "Potato",
    description : "",
    price : 40,
    imageUrl : ""
  },
  { 
    id : "brinjal",
    displayName : "Mushroom",
    description : "",
    price : 40,
    imageUrl : ""
  },
  { 
    id : "brinjal",
    displayName : "Paneer",
    description : "",
    price : 40,
    imageUrl : ""
  }
]

export default class AnimationButton extends Component {

  state = {
    phone : ""
  };

  constructor(props){
    super(props);
  }

  componentDidMount(){}

  render() {
    return (<Container>

      <LinearGradient start={{x: 0.0, y: 1.0}} 
                           end={{x: 1.0, y: 1.0}}
                           colors={[Color.gradientColor1, Color.gradientColor2]} 
                           style={{
                             height : getHeight(10),
                            paddingLeft: 15,
                            paddingRight: 15,
                            borderRadius: 5
                           }}>
      <View style={{
          height : "100%",
          flexDirection : "row"
        }}>
              
           <View style={{
             flex : 0.15
           }}>
              <TouchableHighlight style={{
             display : "flex",
             justifyContent : "center",
             alignItems : "center",
             flex : 1
           }}
           onPress={e => {
             this.props.moveToScreen("cart");
           }}
           >
              <Icon style={{color : "white"}} name='arrow-back' />
            </TouchableHighlight>
           </View>        
           <View style={{
             flex : 0.65,
             justifyContent : "center",
             alignItems : "center"
           }}>
              <Text style={{
                color : "white",
                fontWeight : "bold",
                fontSize : getFont(18)
              }}>Vegetables</Text>
           </View>
           <TouchableHighlight style={{
             display : "flex",
             justifyContent : "center",
             alignItems : "center",
             flex : 0.125
           }} onPress={e => {
             this.setState({
               showInput : false
             })
           }}>
              <Icon style={{color : "white"}} name='ios-search' />
            </TouchableHighlight>
            <TouchableHighlight style={{
             display : "flex",
             justifyContent : "center",
             alignItems : "center",
             flex : 0.125
           }}
           onPress={e => {
             this.props.moveToScreen("cart");
           }}
           >
              <Icon style={{color : "white"}} name='ios-cart' />
            </TouchableHighlight>
           </View>
      </LinearGradient>
      <Content style={{
        margin : 10
      }}>
        {
          itemName.map((item, index) => (
         <Card style={{
           height : getHeight(15)
         }}
         key={index}
         >
            <View style={{
              display : "flex",
              flexDirection : "row",
              flex : 1,
              backgroundColor : "#f1f2f2"
            }}>
                <View style={{
                  flex : 0.2,
                  padding : 10,
                  borderRightWidth : 1,
                  borderRightColor : "#ccc"
                }}>
                  <Image source={{uri : "https://www.ndtv.com/cooks/images/Kashmiri%20Garam%20Masala.jpg"}}
                       style={{flex : 1}} resizeMode = "cover"/>
                </View>
                <View style={{
                  flex : 0.65,
                  flexDirection : "column",
                  justifyContent : "center",
                  paddingLeft : 10
                }}>
                   <Text style={{
                     fontSize : 20,
                     fontWeight : "bold"
                   }}>{item.displayName}</Text>
                    <Text style={{
                      fontSize : 18
                    }}>Rs. 40/kg</Text>
                </View>
                <View style={{
                  display : "flex",
                  flex : 0.2,
                  flexDirection : "column",
                  justifyContent : "center",
                  alignItems : "center"
                }}>
                  <TouchableHighlight 
                  style={{}}>
                     <Icon style={{color : "green"}} name="ios-add-circle" />
                  </TouchableHighlight>
                   <Text>0</Text>
                   <TouchableHighlight style={{
                  }}>
                     <Icon style={{color : "red"}} name='ios-remove-circle' />
                  </TouchableHighlight>
                </View>
            </View>
         </Card>
          ))
        }
      </Content>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
