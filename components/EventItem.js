import React, {Component} from 'react';
import ReactNative from 'react-native';
import Icon from 'react-native-ionicons';
const styles = require('../styles.js')
const { View, TouchableHighlight, Text } = ReactNative;

export default class ListItem extends Component {

  
  render() {
    item= this.props.item;
    user= firebaseApp.auth().currentUser.displayName;
    userEmail = firebaseApp.auth().currentUser.email;

    var rsvp = item.rsvpby ? Object.values(item.rsvpby).map((project)=>{
      return project.rsvpby;
    }) : [];

    function isInArray(rsvp, userEmail) {
      return rsvp.indexOf(userEmail.toLowerCase()) > -1;
    }
    inArray = isInArray(rsvp, userEmail);


    return (
      <TouchableHighlight >
        <View style={styles.eventsli}>
          <View style={{flex:4}}>
            <Text style={styles.eventsliText}>{item.title}</Text>
            <Text style={styles.eventDescText}>{item.desc}</Text>
              <View style={{ flex:1, flexDirection:'row', paddingTop:4}}>
                <Text style={styles.eventDateTime}>Date: {item.date}</Text>
                <Text style={styles.eventDateTime}>Time: {item.time}</Text>
              </View>
            <Text style={styles.eventDateTime}>Location: {item.location}</Text>
            <Text style={styles.eventDateTime}>Invited by:{item.invitedby} </Text>
          </View>



        <View style={{flexDirection: 'row', flexDirection: 'row', alignItems:'center'}}>
        <Text style={{color:'#1f7a7a' , fontSize:11, paddingLeft:3}}> {rsvp? rsvp.length : '0' } </Text>
        { inArray ?
          <Icon onPress={this.props.onUnRsvp}  name='checkmark' color="#00e600" style={{padding:5}}/> : 
          <Text onPress={this.props.onRsvp} style={{color:'#1f7a7a', padding:1}}> RSVP </Text>
        }
          {user === item.invitedby ?
          <Icon onPress={this.props.onPress} name='close' style={{padding:5}} /> : null }

          </View>
        </View>
      </TouchableHighlight>
    );
  }
}


//<Text onPress={this.props.onPress} style={styles.liText}>Remove</Text>