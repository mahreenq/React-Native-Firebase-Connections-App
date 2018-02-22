import React, {Component} from 'react';
import ReactNative from 'react-native';
import Icon from 'react-native-ionicons';
const styles = require('../styles.js')
const { View, TouchableHighlight, Text } = ReactNative;

export default class ListItem extends Component {
  
  render() {
    item= this.props.item;
    console.log(this.props.item.rsvp);
    return (
      <TouchableHighlight >
        <View style={styles.eventsli}>
          <View style={{flex:4}}>
            <Text style={styles.eventsliText}>{item.title}</Text>
            <Text style={styles.eventDescText}>{item.desc}</Text>
              <View style={{ flex:1, flexDirection:'row',}}>
                <Text style={styles.eventDateTime}>Date: {item.date}</Text>
                <Text style={styles.eventDateTime}>Time: {item.time}</Text>
              </View>
            <Text style={styles.eventDateTime}>Location: {item.location}</Text>
          </View>



        <View style={{flexDirection: 'row', flexDirection: 'row', alignItems:'center'}}>
          {this.props.item.rsvp === true?  
          <Icon onPress={this.props.onLike}  name='checkmark' color="#00e600" style={{padding:5}}/> : 
          <Text onPress={this.props.onLike}> RSVP </Text>
        }
          <Icon onPress={this.props.onPress} name='close' style={{padding:5}} />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}


//<Text onPress={this.props.onPress} style={styles.liText}>Remove</Text>