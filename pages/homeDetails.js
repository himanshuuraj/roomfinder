import React, {Component} from 'react';
import {
  Text, 
  View,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  Content,
  Icon,
  Header,
  Card
} from "native-base";
import {
  getFont,
  Color,
  getHeight
} from "../global/util";
import Location from "./../components/location";

let tableContent = [
  {
    id : "size",
    name : "Size",
    value : "1000 sq ft."
  },
  {
    id : "houseId",
    name : "House ID",
    value : "FGVB5825"
  },
  {
    id : "type",
    name : "Type",
    value : "Appartment"
  },
  {
    id : "foodpreferance",
    name : "Food Preference",
    value : "None"
  },
  {
    id : "address",
    name : "House Address",
    value : "view"
  },
  {
    id : "rules",
    name : "Rules",
    value : "view"
  },
]

export default class Login extends Component {

  state = {
    phone : "",
    password : ""
  };

  constructor(props){
    super(props);
  }

  componentDidMount(){
    //setTimeout(() => this.props.moveToScreen("registeration"), 5000);
  }

  render() {
    return (
      <Container>
        <Header style={{
          backgroundColor : Color.themeColor,
          alignItems : "center",
          justifyContent : "flex-start",
          paddingLeft : "5%"
        }}>
          <TouchableOpacity style={{
              display : "flex",
              flexDirection : "row",
              justifyContent : "center",
              alignItems : "center"
          }}>
            <Icon name="ios-arrow-back" style={{
              color : "white",
              marginRight : 20
            }}/>
            <Text style={{
              fontSize : getFont(18),
              color : Color.white
            }}>
              Bipul Belmonte
            </Text>
          </TouchableOpacity>
        </Header>
      <Content style={{
        backgroundColor : Color.white,
        paddingLeft : "5%",
        width : "100%",
        paddingRight : "5%"
      }}>
          <Card style={{
            borderRadius : 10,
            marginTop : getHeight (5)
          }}>
              <View style={{
                paddingLeft : "5%",
                height : getHeight(5),
                alignItems : "center",
                flexDirection : "row"
              }}>
                <Text style={{
                  fontWeight : "bold",
                  fontSize : getFont(12),
                  color : Color.black
                }}>
                  Details
                </Text>
              </View>
              {
                tableContent.map((item, index) => (
                  <View style={{
                    paddingLeft : "5%",
                    paddingRight : "5%",
                    height : getHeight(5),
                    alignItems : "center",
                    justifyContent : "space-between",
                    flexDirection : "row",
                    backgroundColor : index%2 === 0 ? "#eee" : Color.white
                  }}
                  key={index}
                    >
                    <Text style={{
                      fontSize : getFont(12),
                      color : Color.black
                    }}>
                      { item.name }
                    </Text>
                    {
                      item.value !== "view" ? <Text style={{
                        fontSize : getFont(12),
                        color : Color.black
                      }}>
                        { item.value }
                      </Text> : <TouchableOpacity 
                        style={{
                          backgroundColor : Color.green,
                          paddingLeft : 10,
                          paddingRight : 10,
                          borderRadius : 5
                        }}>
                        <Text style={{
                          color : Color.themeFontColor
                        }}>
                          View
                        </Text>
                      </TouchableOpacity>
                    }
                  </View>
                ))
              }
          </Card>
          <View style={{
            height : getHeight(5),
            marginTop : getHeight(4)
          }}>
            <Text style={{
              fontWeight : "bold",
              fontSize : getFont(12),
              color : Color.black
            }}>
              Location
            </Text>
            <Card style={{
              borderRadius : 10,
              backgroundColor : Color.red
            }}>
              <Location/>
            </Card>
          </View>
      </Content>
      </Container>
    );
  }
}
