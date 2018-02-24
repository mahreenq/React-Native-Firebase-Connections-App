import React, {Component} from 'react';
import ReactNative from 'react-native';
import {Gravatar, GravatarApi} from 'react-native-gravatar';
const styles = require('../styles.js')
const { View, TouchableHighlight, Text } = ReactNative;

export default class ConnectionItem extends Component {

  
  render() {
    user= this.props.user;
    return (
      <TouchableHighlight >
        <View style={styles.connectionsli}>

        <Gravatar options={{
            email: user.email,
            parameters: { "size": "200", "d": "mm" },
            secure: true}}
            style={styles.roundedProfileImage} />

          <Text style={{fontSize:20, color:'white', paddingLeft:10}}> {user.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
