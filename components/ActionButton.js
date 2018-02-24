'use strict';
import React, {Component} from 'react';
import {ReactNative, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import styles from '../styles.js';
const constants = styles.constants;

class ActionButton extends Component {
  render() {
    return (
      <View style={styles.action}>
        <TouchableHighlight
          underlayColor={constants.actionColor}
          onPress={this.props.onPress}>
          <Text style={styles.actionText}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ActionButton;
