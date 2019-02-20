/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoginScreen from "./components/loginScreen/LoginScreen";
import Login from "./pages/login";
import Options from "./pages/options";
import ItemList from "./pages/ItemList";
import Cart from "./pages/cart";
import SplashScreen from "./pages/splashScreen";
import RegisterationComponent from "./pages/registeration";
import ForgotPassword from "./pages/forgotPassword";

export default class App extends Component {

  state = {
    screen : "forgotPassword"
  }

  moveToScreen = (screen) => {
       this.setState({
         screen : screen
       });
  }

  getScreen = (screen) => {
     switch(screen){
       case 'forgotPassword': return <ForgotPassword moveToScreen={this.moveToScreen}/>;
       case 'registeration': return <RegisterationComponent moveToScreen={this.moveToScreen}/>;
       case "splashScreen": return <SplashScreen moveToScreen={this.moveToScreen}/>;
       case "login" : return <Login moveToScreen={this.moveToScreen}/>;
       case "cart" : return <Cart moveToScreen={this.moveToScreen}/>;
       case "options" : return <Options moveToScreen={this.moveToScreen}/>;
       case "itemList" : return <ItemList moveToScreen={this.moveToScreen}/>;
       default : return null;
     }
  }

  render() {
    return this.getScreen(this.state.screen);
  }
}
