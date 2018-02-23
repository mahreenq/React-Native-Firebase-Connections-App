import React, {Component} from 'react';
import ReactNative from 'react-native';
import Icon from 'react-native-ionicons';
const styles = require('../styles.js')
const { View, TouchableHighlight, Text } = ReactNative;

export default class EventItem extends Component {
  
  render() {
    item= this.props.item;
    user= firebaseApp.auth().currentUser.displayName;
    userEmail = firebaseApp.auth().currentUser.email;

    var liked = item.likedby ? Object.values(item.likedby).map((project)=>{
      return project.likedby;
    }) : [];

    function isInArray(liked, userEmail) {
      return liked.indexOf(userEmail.toLowerCase()) > -1;
  }
      inArray = isInArray(liked, userEmail);
  

//   var lala = item.likedby ? Object.values(item.likedby): null;
//   var newlikes = lala ? lala.map((project)=>{
//     return project.likedby;
//   }) : null;
//  // console.log(newlikes, 'newlieks' );

//   function isInArray(newlikes, userEmail) {
//     return newlikes.indexOf(userEmail.toLowerCase()) > -1;
// }

// inArray = isInArray(newlikes, userEmail);


    return (
      <TouchableHighlight >
        <View style={styles.li}>          
          <View style={{flex:4}}>
            <Text style={styles.liText}>{item.title}</Text>
            <Text style={styles.eventDateTime}>{item.postedby} </Text>
          </View>

          <View style={{flexDirection: 'row', flexDirection: 'row', alignItems:'center'}}>
        
          <Text style={{color:'red' , fontSize:11}}> {liked? liked.length : '0' } </Text>

          { inArray ?  
            <Icon onPress={this.props.onUnlike}   name='ios-heart' color="red" style={{padding:5}}/> : 
            <Icon onPress={this.props.onLike}  name='ios-heart-outline' color="red"  style={{padding:5}}/>
          }


          {user === item.postedby ?
          <Icon onPress={this.props.onPress} name='close' style={{padding:5}} /> : null }
            
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}


          // {this.props.item.liked === true?  
          //   <Icon onPress={this.props.onLike}  name='ios-heart' color="red" style={{padding:5}}/> : 
          //   <Icon onPress={this.props.onLike}  name='ios-heart-outline' style={{padding:5}}/>
          // }
