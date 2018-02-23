import React, {Component} from 'react';
import ReactNative from 'react-native';
import Icon from 'react-native-ionicons';
const styles = require('../styles.js')
const { View, TouchableHighlight, Text } = ReactNative;

export default class EventItem extends Component {
  
  render() {
    item= this.props.item;
    user= firebaseApp.auth().currentUser.displayName;
    return (
      <TouchableHighlight >
        <View style={styles.li}>          
          <View style={{flex:4}}>
            <Text style={styles.liText}>{item.title}</Text>
            <Text style={styles.eventDateTime}>{item.postedby} </Text>
          </View>

          <View style={{flexDirection: 'row', flexDirection: 'row', alignItems:'center'}}>
          {this.props.item.liked === true?  
            <Icon onPress={this.props.onLike}  name='ios-heart' color="red" style={{padding:5}}/> : 
            <Icon onPress={this.props.onLike}  name='ios-heart-outline' style={{padding:5}}/>
          }
          {user === item.postedby ?
          <Icon onPress={this.props.onPress} name='close' style={{padding:5}} /> : null }
            
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}


