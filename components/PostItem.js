import React, {Component} from 'react';
import ReactNative from 'react-native';
import Icon from 'react-native-ionicons';
const styles = require('../styles.js')
const { View, TouchableHighlight, Text } = ReactNative;

export default class EventItem extends Component {
  
  render() {
    item= this.props.item;
    return (
      <TouchableHighlight >
        <View style={styles.li}>
          <Text style={styles.liText}>{this.props.item.title}</Text>
          <View style={{flexDirection: 'row', flexDirection: 'row', alignItems:'center'}}>
          {this.props.item.liked === true?  
          <Icon onPress={this.props.onLike}  name='ios-heart' color="red" style={{padding:5}}/> : 
          <Icon onPress={this.props.onLike}  name='ios-heart-outline' style={{padding:5}}/>
        }
          <Icon onPress={this.props.onPress} name='close' style={{padding:5}} />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}


//<Text onPress={this.props.onPress} style={styles.liText}>Remove</Text>