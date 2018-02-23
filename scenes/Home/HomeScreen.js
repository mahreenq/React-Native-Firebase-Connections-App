import React, {Component} from 'react';
import {FlatList, Platform, StyleSheet, Text, View, Image, ScrollView, ActivityIndicator, AppRegistry, ListView, TouchableHighlight, AlertIOS } from 'react-native';
import { createRouter, NavigationProvider, StackNavigation, } from '@expo/ex-navigation';
import ProfileScreen from '../Profile/ProfileScreen';

import * as firebase from 'firebase';
import styles from './styles';

import StatusBar from '../../components/StatusBar';
import ActionButton from '../../components/ActionButton';
import PostItem from '../../components/PostItem';

import firebaseApp from '../../firebase/firebase';

//Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyAi5M3MW-nPAEx0NYuHNKg45GwE3G6qR8k",
//   authDomain: "connections-1887f.firebaseapp.com",
//   databaseURL: "https://connections-1887f.firebaseio.com",
//   storageBucket: "connections-1887f.appspot.com" 
// };
// const firebaseApp = firebase.initializeApp(firebaseConfig)
  
export default class HomeScreen extends Component {
    static route = {
        navigationBar: {
          title: 'Posts',
          backgroundColor: '#33cccc',
        }
      }
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.itemsRef = this.getRef().child('items');


  }

  getRef() {
    return firebaseApp.database().ref();
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title:child.val().title,
          liked: child.val().liked,
          postedby: child.val().postedby,
          likedby: child.val().likedby,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  render() {
    //console.log(firebaseApp.auth().currentUser);
    return (
      <View style={styles.container}>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          enableEmptySections={true}
          style={styles.listview}/>

        <ActionButton onPress={this._addItem.bind(this)} title="Submit a Post" />
      

      </View>
    )
  }

  _addItem() {
    AlertIOS.prompt(
      'Submit a post!',
      null,
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {
          text: 'Post',
          onPress: (text) => {
            this.itemsRef.push({ title: text, liked: false, postedby:firebaseApp.auth().currentUser.displayName })
          }
        },
      ],
      'plain-text'
    );
  }

  _renderItem(item) {

    const onPress = () => {
      AlertIOS.alert(
        'Remove?',
        null,
        [
          {text: 'Remove', onPress: (text) => this.itemsRef.child(item._key).remove()},
          {text: 'Cancel', onPress: (text) => console.log('Cancelled')}
        ]
      );
    };

    const onLike = () => {
      this.getRef().child('items').child(item._key).child('likedby').push({ 
        likedby: firebaseApp.auth().currentUser.email
      })
    };

  const onUnlike = () => {
    let ref = firebase.database().ref('items').child(item._key).child('likedby');
      ref.orderByChild('likedby').equalTo(currentUser.email).once('value', snapshot => {
        let updates = {};
        snapshot.forEach(child => updates[child.key] = null);
        ref.update(updates);
      });
    };
    

    return (
      <PostItem item={item} onPress={onPress} onUnlike={onUnlike} onLike={onLike}  />
    );
  }
    
  }

  

// <ActionButton onPress={this._addItem.bind(this)} title="Submit a Post" /> 