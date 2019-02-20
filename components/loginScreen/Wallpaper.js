import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, ImageBackground, KeyboardAvoidingView, ScrollView} from 'react-native';

import bgSrc from './../../images/background_image.jpg';

export default class Wallpaper extends Component {
  render() {
    return (
        <ImageBackground style={styles.picture} source={require('./../../images/background_image.jpg')}>
          {this.props.children}
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});
